import toNode from "../utils/to_node";
import Widget from "./widget";

import h from 'vhtml';
import dragElement from "../utils/draggable";

class Window extends Widget {
  public render(): HTMLElement {
    return this.baseElement = toNode(
      <div class="SA_widget SA_widget__window">
        <div class="SA_widget_header">
          <h3 class="SA_widget_title">Video</h3>
          <button class="SA_widget_close">&#10006;</button>
        </div>
        <div class="SA_widget_container">
          <button class="SA_fullscreen">Fullscreen</button>
          <button class="SA_pip">Picture in Picture</button>
          <div class="SA_resize">
            Resize Video
            <input type="number" name="SA_resize_width" id="SA_resize_width" placeholder="width" />
            <input type="number" name="SA_resize_height" id="SA_resize_height" placeholder="height" />
          </div>
        </div>
      </div>
    );
  }

  public applyEvents(): void {
    const video = document.querySelector('video');
    this.baseElement.querySelector('.SA_fullscreen').addEventListener('click', e => video.requestFullscreen());
    this.baseElement.querySelector('.SA_pip').addEventListener('click', e => video.requestPictureInPicture());
    this.baseElement.querySelector('#SA_resize_width').addEventListener('change', e => {
      video.style.width = (e.target as HTMLInputElement).value;
    });
    this.baseElement.querySelector('#SA_resize_height').addEventListener('change', e => {
      video.style.height = (e.target as HTMLInputElement).value;
    });
    dragElement(this.baseElement);
  }
}

export default Window;