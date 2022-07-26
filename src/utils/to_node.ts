function toNode(html: string): HTMLElement {
  var div = document.createElement('div');
  div.innerHTML = html.trim();

  // Change this to div.childNodes to support multiple top-level nodes.
  return div.firstChild as HTMLElement;
}

export default toNode;