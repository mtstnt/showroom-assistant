import Widget from './widget';
import h from 'vhtml';
import toNode from '../utils/to_node';
import dragElement from '../utils/draggable';

class Gift extends Widget {
  private stars = [
    { name: "Yellow", image: "https://image.showroom-cdn.com/showroom-prod/assets/img/gift/1_s.png?1657696588", text: "x10" },
    { name: "Red", image: "https://image.showroom-cdn.com/showroom-prod/assets/img/gift/1001_s.png?1657696588", text: "x10" },
    { name: "Purple", image: "https://image.showroom-cdn.com/showroom-prod/assets/img/gift/1002_s.png?1657696588", text: "x10" },
    { name: "Green", image: "https://image.showroom-cdn.com/showroom-prod/assets/img/gift/1003_s.png?1657696588", text: "x10" },
    { name: "Blue", image: "https://image.showroom-cdn.com/showroom-prod/assets/img/gift/2_s.png?1657696588", text: "x10" },
  ];

  public render(): Node {
    return this.baseNode = toNode(
      <div class="SA_widget SA_widget__gift">
        <div class="SA_widget_header">
          <h3 class="SA_widget_title">Gifts</h3>
          <button class="SA_widget_close">&#10006;</button>
        </div>
        <div class="SA_widget_container">
          {this.stars.map(el => (
            <button style="text-align: center">
              <img src={el.image} alt={el.name} /> <br />
              x10
            </button>
          ))}
        </div>
      </div>
    );
  }

  public applyEvents(): void {
    this.baseNode.addEventListener('click', () => console.log("Hello"));
    dragElement(this.baseNode as HTMLElement);
  }

}

export default Gift;