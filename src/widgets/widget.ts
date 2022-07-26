abstract class Widget {
  protected baseNode: Node;

  abstract render(): Node;
  abstract applyEvents(): void;
}

export default Widget;