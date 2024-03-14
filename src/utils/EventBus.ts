export default class EventBus {
  protected listeners: Record<string,
   ((oldProps: any, newProps: any) => void)[]> = {};

  on(event: string, callback: (oldProps: any, newProps: any) => void) {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }

    this.listeners[event].push(callback);
  }

  off(event: string, callback: (oldProps: any, newProps: any) => void) {
    if (!this.listeners[event]) {
      return;
    }

    this.listeners[event] = this.listeners[event]
      .filter((listener) => listener !== callback);
  }

  emit(event: string, oldProps: any, newProps: any): void {
    if (!this.listeners[event].length) {
      return;
    }

    this.listeners[event].forEach((listener) => {
      listener(oldProps, newProps);
    });
  }
}
