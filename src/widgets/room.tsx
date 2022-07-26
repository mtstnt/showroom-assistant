import toNode from "../utils/to_node";
import Widget from "./widget";

import h from 'vhtml';
import dragElement from "../utils/draggable";

class Room extends Widget {
  protected startTop: string = "140px";

  public render(): HTMLElement {
    return this.baseElement = toNode(
      <div class="SA_widget SA_widget__room" style={`left:${this.startLeft};top:${this.startTop}`}>
        <div class="SA_widget_header">
          <h3 class="SA_widget_title">Video</h3>
          <button class="SA_widget_close">&#10006;</button>
        </div>
        <div class="SA_widget_container SA_hidden">
          <button class="SA_fullscreen">Fullscreen</button>
          <button class="SA_pip">Picture in Picture</button>
          <button class="SA_avatar">Toggle Avatar Display</button>
          {/* Not operable yet. */}
          {/* <div class="SA_resize">
            <h5>Resize Video</h5>
            <input type="number" name="SA_resize_width" id="SA_resize_width" placeholder="width" />
            <input type="number" name="SA_resize_height" id="SA_resize_height" placeholder="height" />
          </div> */}
        </div>
      </div>
    );
  }

  public applyEvents(): void {
    const video = document.querySelector('video');

    this.baseElement.querySelector('.SA_fullscreen').addEventListener('click', e => video.requestFullscreen());
    this.baseElement.querySelector('.SA_pip').addEventListener('click', e => video.requestPictureInPicture());
    this.baseElement.querySelector('.SA_avatar').addEventListener('click', e => {
      const avatarCanvas = document.querySelector('#avatarContainer canvas') as HTMLCanvasElement;
      avatarCanvas.hidden = ! avatarCanvas.hidden;
    });

    // Not really operable currently
    // this.baseElement.querySelector('#SA_resize_width').addEventListener('change', e => {
    //   video.style.width = (e.target as HTMLInputElement).value + "px";
    // });

    // this.baseElement.querySelector('#SA_resize_height').addEventListener('change', e => {
    //   video.style.height = (e.target as HTMLInputElement).value + "px";
    // });

    dragElement(this.baseElement);
  }
}

export default Room;