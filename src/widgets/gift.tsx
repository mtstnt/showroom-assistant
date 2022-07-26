import h from 'vhtml';

import Widget from './widget';
import toNode from '../utils/to_node';
import dragElement from '../utils/draggable';

class Gift extends Widget {
  private starButtonIdentifier = 'data-v-5bfe3b66';

  private stars = [
    { name: "Yellow", image: "https://image.showroom-cdn.com/showroom-prod/assets/img/gift/1_s.png?1657696588", index: 0 },
    { name: "Red", image: "https://image.showroom-cdn.com/showroom-prod/assets/img/gift/1001_s.png?1657696588", index: 1 },
    { name: "Purple", image: "https://image.showroom-cdn.com/showroom-prod/assets/img/gift/1002_s.png?1657696588", index: 2 },
    { name: "Green", image: "https://image.showroom-cdn.com/showroom-prod/assets/img/gift/1003_s.png?1657696588", index: 3 },
    { name: "Blue", image: "https://image.showroom-cdn.com/showroom-prod/assets/img/gift/2_s.png?1657696588", index: 4 },
  ];

  private getStarButton(index: number): HTMLElement {
    return document.querySelectorAll(`button[${this.starButtonIdentifier}]`)[index] as HTMLElement;
  }

  public render(): HTMLElement {
    return this.baseElement = toNode(
      <div class="SA_widget SA_widget__gift">
        <div class="SA_widget_header">
          <h3 class="SA_widget_title">Gifts</h3>
          <button class="SA_widget_close">&#10006;</button>
        </div>
        <div class="SA_widget_container">
          {this.stars.map(el => (
            <button style="text-align: center" data-index={el.index}>
              <img src={el.image} alt={el.name} /> <br />
              x10
            </button>
          ))}
        </div>
      </div>
    );
  }

  public applyEvents(): void {
    const buttons = this.baseElement.querySelectorAll(".SA_widget_container button") as NodeListOf<HTMLElement>;

    buttons.forEach(el => {
      el.addEventListener('click', e => {
        const starButton = this.getStarButton(Number(el.dataset.index));
        let counter = 1;
        const interval = setInterval(() => {
          starButton.dispatchEvent(new Event("mousedown"));
          counter += 1;
          if (counter > 10) {
            clearInterval(interval);
          }
        }, 150);
      });
    }); 

    dragElement(this.baseElement);
  }

}

export default Gift;