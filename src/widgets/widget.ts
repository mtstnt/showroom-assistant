abstract class Widget {
  protected baseElement:  HTMLElement;
  protected startLeft:    string = "0"

  // Old top + 30px + 60px
  protected startTop:     string = "0";

  abstract render(): HTMLElement;
  abstract applyEvents(): void;
}

export default Widget;