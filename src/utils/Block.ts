import { v4 as uuidv4 } from 'uuid';
import EventBus from './EventBus';

export default abstract class Block<Props extends Record<string, any> = {}> {
  static EVENTS = {
    INIT: 'init',
    FLOW_CDM: 'flow:component-did-mount',
    FLOW_CDU: 'flow:component-did-update',
    FLOW_RENDER: 'flow:render',
  };

  public id = uuidv4();

  private el: HTMLElement | null = null;

  protected props: Props;

  // eslint-disable-next-line no-use-before-define
  public children: Record<string, Block | Block[]>;

  private eventBus: () => any;

  constructor(propsAndChildren: Props = {} as Props) {
    const eventBus = new EventBus();
    const { props, children } = this.getPropsAndChildren(propsAndChildren);
    this.children = children;
    this.initChildren();
    this.props = this.makePropsProxy(props);
    this.eventBus = () => eventBus;
    this.registerEvents(eventBus);
    eventBus.emit(Block.EVENTS.INIT, null, null);
    this._addEvents();
    this._removeEvents();
  }

  private registerEvents(eventBus: EventBus) {
    eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDM, this.componentDidMount.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDU, this.compDidUpdate.bind(this));
    eventBus.on(Block.EVENTS.FLOW_RENDER, this.display.bind(this));
  }

  init() { this.eventBus().emit(Block.EVENTS.FLOW_RENDER); }

  private _addEvents() {
    if (this.props.events) {
      const inputElement = this.element!.querySelector('input');
      if (inputElement) {
        Object.keys(this.props.events).forEach((event) => {
          inputElement.addEventListener(event, this.props.events[event]);
        });
      }
    }
  }

  private _removeEvents() {
    if (this.props.events) {
      Object.keys(this.props.events).forEach((event) => {
        this.element!.removeEventListener(event, this.props.events[event]);
      });
    }
  }

  componentDidMount() { this.componentDidMount(); }

  dispatchComponentDidMount() { this.eventBus().emit(Block.EVENTS.FLOW_CDM); }

  private compDidUpdate(oldProps: object, newProps: object) {
    if (this.componentDidUpdate(oldProps, newProps)) {
      this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
    }
  }

  componentDidUpdate(oldProps: object, newProps: object) {
    return oldProps !== newProps;
  }

  setProps(nextProps: Props): void {
    if (!nextProps) return;
    this._removeEvents();
    Object.assign(this.props, nextProps);
    this._addEvents();
  }

  get element() { return this.el; }

  private display(): void {
    const fragment = this.render();
    const newElement = fragment.firstChild;
    if (newElement && newElement instanceof HTMLElement) {
      if (this.el) {
        this.el.replaceWith(newElement);
      }
      this.el = newElement;
    }
  }

  protected render(): DocumentFragment { return new DocumentFragment(); }

  getContent() { return this.el; }

  private makePropsProxy(props: Props): Props {
    return new Proxy(props, {
      get: (target: Props, prop: string | symbol): any => {
        const value = target[prop as keyof Props];
        return typeof value === 'function' ? value.bind(target) : value;
      },
      set: (target: Props, prop: string | symbol, value: any): boolean => {
        target[prop as keyof Props] = value;
        this.eventBus().emit(Block.EVENTS.FLOW_CDU, { ...target }, target);
        return true;
      },
      deleteProperty: () => { throw new Error('no access'); },
    }) as Props;
  }

  setTitle(title: string): void {
    document.title = title;
  }

  setMetaDescription(description: string): void {
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute('content', description);
    } else {
      const newMeta = document.createElement('meta');
      newMeta.name = 'description';
      newMeta.content = description;
      document.head.appendChild(newMeta);
    }
  }

  private createDocumentElement(tagName: string) {
    return document.createElement(tagName);
  }

  getPropsAndChildren(getPropsAndChildren: Props) {
    const children: any = {};
    const props: any = {};
    Object.entries(getPropsAndChildren).forEach(([key, value]) => {
      if (value instanceof Block) {
        children[key] = value;
      } else if (Array.isArray(value)
        && value.every((v) => v instanceof Block)) {
        children[key] = value;
      } else {
        props[key] = value;
      }
    });
    return { props, children };
  }

  protected initChildren() { }

  protected compile(template: (context: any) => string, context: {
    title?: string,
    description?: string,
    [key: string]: any
  }) {
    const contextAndStubs = { ...context };

    if (context.title) {
      this.setTitle(context.title);
    }
    if (context.description) {
      this.setMetaDescription(context.description);
    }

    Object.entries(this.children).forEach(
      ([name, component]: [string, any]) => {
        if (Array.isArray(component)
          && component.every((c: any) => c instanceof Block)) {
          const stubs = component.map(
            (comp: { id: string }) => `<div data-id="${comp.id}"></div>`,
          );
          (contextAndStubs as
            { [key: string]: string | string[] })[name] = stubs;
        } else if (!Array.isArray(component)) {
          const stub = `<div data-id="${component.id}"></div>`;
          (contextAndStubs as
            { [key: string]: string | string[] })[name] = stub;
        }
      },
    );
    const htmlString = template(contextAndStubs);
    const element = this.createDocumentElement('template');
    const fragment = element as HTMLTemplateElement;
    fragment.innerHTML = htmlString;
    const compiling = (component: Block) => {
      const selector = `[data-id="${component.id}"]`;
      const stub = fragment.content.querySelector(selector);
      if (!stub) return;
      const componentElement = component.getContent();
      if (componentElement) {
        componentElement.append(...Array.from(stub.childNodes));
        stub.replaceWith(componentElement);
      }
    };
    Object.entries(this.children).forEach(([, elem]) => {
      if (Array.isArray(elem)) {
        elem.forEach((comp) => compiling(comp));
      } else {
        compiling(elem);
      }
    });
    return fragment.content;
  }

  show() {
    const content = this.getContent();
    if (content) {
      content.style.display = 'block';
    }
  }

  hide() {
    const content = this.getContent();
    if (content) {
      content.style.display = 'none';
    }
  }
}
