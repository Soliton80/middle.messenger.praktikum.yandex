import { EventBus } from "./EventBus";
import { v4 as uuidv4 } from 'uuid';

export default class Block {
  static EVENTS = {
    INIT: "init",
    FLOW_CDM: "flow:component-did-mount",
    FLOW_CDU: "flow:component-did-update",
    FLOW_RENDER: "flow:render"
  };

  public id = uuidv4();
  private _element: HTMLElement | null = null;
  // private _meta = null;
  protected props: any;
  public children: Record<string, Block | Block[]>;
  private eventBus: () => any;

  constructor(propsAndChildren: any = {}) {
    const eventBus = new EventBus();
    const { props, children } = this.getPropsAndChildren(propsAndChildren);
    this.children = children;
    this.initChildren();
    // this._meta = { props };
    this.props = this._makePropsProxy(props);
    this.eventBus = () => eventBus;
    this._registerEvents(eventBus);
    eventBus.emit(Block.EVENTS.INIT, null, null);
  }
  private _addEvents() {
    const { events = {} } = this.props as { events: Record<string, () => void> };

    Object.keys(events).forEach(eventName => {
      this._element!.addEventListener(eventName, events[eventName])
    })
  }

  private _registerEvents(eventBus: EventBus) {
    eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
    eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
  }

  init() { this.eventBus().emit(Block.EVENTS.FLOW_RENDER); }

  private _componentDidMount() { this._componentDidMount(); }

  // componentDidMount(oldProps) { }

  dispatchComponentDidMount() { this.eventBus().emit(Block.EVENTS.FLOW_CDM); }

  private _componentDidUpdate(oldProps: object, newProps: object) {
    if (this.componentDidUpdate(oldProps, newProps)) {
      this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
    }
  }

  componentDidUpdate(oldProps: object, newProps: object) {
    return oldProps !== newProps;
  }

  setProps = (nextProps: object) => {
    if (!nextProps) return;
    Object.assign(this.props, nextProps);
  };

  get element() { return this._element; }

private _render(): void {
  const fragment = this.render();
  const newElement = fragment.firstChild;
  if (newElement && newElement instanceof HTMLElement) {
    if (this._element) {
      this._element.replaceWith(newElement);
    }
    this._element = newElement;
    this._addEvents();
  }
}

  protected render(): DocumentFragment { return new DocumentFragment(); }

  getContent() { return this._element; }

  private _makePropsProxy(props: { [key: string]: any }) {
    const self = this;
    return new Proxy(props, {
      get(target: { [key: string]: any }, prop: string | symbol) {
        const value = target[prop as string];
        return typeof value === "function" ? value.bind(target) : value;
      },
      set(target: { [key: string]: any }, prop: string | symbol, value: any) {
        target[prop as string] = value;
        self.eventBus().emit(Block.EVENTS.FLOW_CDU, { ...target }, target);
        return true;
      },
      deleteProperty() { throw new Error("no access"); }
    });
  }

private _createDocumentElement(tagName: string) {
  return document.createElement(tagName);
}

  getPropsAndChildren(getPropsAndChildren: any) {
    const children: any = {};
    const props: any = {}
    Object.entries(getPropsAndChildren).map(([key, value]) => {
      if (value instanceof Block) {
        children[key] = value
      } else if (Array.isArray(value) && value.every(v => v instanceof Block)) {
        children[key] = value
      } else {
        props[key] = value
      }
    });
    return { props, children }
  }

  protected initChildren() { }

  protected compile(template: (context: any) => string, context: object) {
    const contextAndStubs = { ...context };
    Object.entries(this.children).forEach(([name, component]: [string, any]) => {
  if (Array.isArray(component) && component.every((c: any) => c instanceof Block)) {
    (contextAndStubs as { [key: string]: string | string[] })[name] = component.map((comp: { id: string }) => `<div data-id="${comp.id}"></div>`);
  } else if (!Array.isArray(component)) {
    (contextAndStubs as { [key: string]: string | string[] })[name] = `<div data-id="${component.id}"></div>`;
  }
});
    const htmlString = template(contextAndStubs);
    const fragment = this._createDocumentElement('template') as HTMLTemplateElement
    fragment.innerHTML = htmlString;
    const compiling = (component: Block) => {
      const stub = fragment.content.querySelector(`[data-id="${component.id}"]`);
      if (!stub) return;
      const element = component.getContent();
      if (element) {
        element.append(...Array.from(stub.childNodes));
        stub.replaceWith(element);
      }
    };
    Object.entries(this.children).forEach(([_, elem]) => {
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
    content.style.display = "block";
  }
}

hide() {
  const content = this.getContent();
  if (content) {
    content.style.display = "none";
  }
}
}

