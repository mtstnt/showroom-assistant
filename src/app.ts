import Gift from './widgets/gift';
import Widget from './widgets/widget';
import Room from './widgets/room';

class Application {
  private widgets: Widget[];

  constructor() {
    this.widgets = [
      new Gift(),
      new Room(),
    ]
  }

  public run(): void {
    for (let w of this.widgets) {
      document.body.append(w.render());
      w.applyEvents();
    }
    this.applyCloseEvent();
  }

  private applyCloseEvent() {
    document.querySelectorAll('.SA_widget_close').forEach(el => {
      el.addEventListener('click', e => {
        const element = el.parentNode.parentNode.querySelector('.SA_widget_container');
        console.log(element);
        
        if (element.classList.contains("SA_hidden")) {
          element.classList.remove("SA_hidden");
        } else {
          element.classList.add("SA_hidden");
        }
      });
    });
  }

}

export default Application;