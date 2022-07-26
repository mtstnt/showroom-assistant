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

    document.querySelectorAll('.SA_widget_close').forEach(el => {
      el.addEventListener('click', e => {
        const element = el.parentNode.parentNode.querySelector('.SA_widget_container');

        if (element.classList.contains("SA_hidden")) {
          element.classList.remove("SA_hidden");
        } else {
          element.classList.add("SA_hidden");
        }
      });
    })
  }

}

export default Application;