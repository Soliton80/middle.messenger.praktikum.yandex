import Block from "./Block";

export function renderDOM(domSelector: string, component: Block) {
  const dom = document.querySelector(domSelector);

  if(!dom) {
    throw new Error("No dom selector");
  }

  dom.innerHTML = '';

  dom.append(component.getContent()!);

  console.log(component)
}

