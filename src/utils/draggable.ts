// To refactor later

// Copas from https://www.w3schools.com/howto/howto_js_draggable.asp with modifications.
function dragElement(elmnt: HTMLElement) {
  let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  const htmlElmnt = elmnt.querySelector('.SA_widget_header') as HTMLElement;
  htmlElmnt.onmousedown = dragMouseDown;

  function dragMouseDown(e: MouseEvent) {
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e: MouseEvent) {
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

export default dragElement;