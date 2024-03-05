class EventBus {
  protected listeners: Record<string, (() => void)[]> = {}
  
  on(event: string, callback: ()=>void) {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }

    this.listeners[event].push(callback);
  }

  off(event: string, callback: () => void) {
    if (!this.listeners[event]) {
      return;
    }

    this.listeners[event] = this.listeners[event].filter(listener => {
      return listener !== callback
    })
  }

  emit(event: string): void {
    if (!this.listeners[event].length) {
      return;
    }

    this.listeners[event].forEach(listener => {
      listener()
    });
  }
}

export { EventBus };