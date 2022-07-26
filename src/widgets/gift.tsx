import h from 'vhtml';

class Gift {

  render(): string {
    const buttons = [
      "Yellow",
      "Red",
      "Purple",
      "Green",
      "Blue",
    ];

    return (
      <div class="SA_widget SA_widget__gift">
        <h1>Widget</h1>
        <div class="SA_widget__gift_container">
          { buttons.map(el => (
            <button>{ el }</button>
          )) }
        </div>
      </div>
    )
  }

}

export default Gift;