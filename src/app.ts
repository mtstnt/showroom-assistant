import toNode from './utils/to_node';
import Gift from './widgets/gift';
import Widget from './widgets/widget';

class Application {

  private video: HTMLVideoElement;

  private widgets: Widget[];

  constructor(
    protected baseDocument: Document
  ) {
    this.video = baseDocument.querySelector('video');
  }

  public run(): void {
    const gift = new Gift();
    this.baseDocument.body.append(gift.render());
    gift.applyEvents();
  }

}

export default Application;