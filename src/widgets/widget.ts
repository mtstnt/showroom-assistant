abstract class Widget {
  protected baseElement: HTMLElement;

  abstract render(): HTMLElement;
  abstract applyEvents(): void;
}

export default Widget;