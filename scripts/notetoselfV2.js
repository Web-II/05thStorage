class Sticky {
  constructor(note, color) {
    this._id = 'sticky_' + Math.random().toString(36).substr(2);
    this.note = note;
    this.color = color;
  }

  get id() { return this._id;}
  get note() {return this._note;}
  get color() {return this._color;}
  set note(value) {this._note = value;}
  set color(value) {this._color = value;}
}

class StickiesComponent {
  constructor(storage) {
    this._storage = storage;
  }

  get storage() {
    return this._storage;
  }

  toHTML() {
    const allStickies = 
        Object.entries(this._storage)
        .reduce((result, [key, value]) => 
        {
          // converteert JSON string naar object literal
          const storObj = JSON.parse(value);
          // converteert object literal naar object van class Sticky
          const sticky = new Sticky(storObj._note, storObj._color);
          return (result += '${key}:${sticky.note}-${sticky.color}\n');
        }, '');
    alert(allStickies);
  }
  clear() {
    this._storage.clear();
  }
  addSticky(note, color) {
    const sticky = new Sticky(note, color);
    this._storage.setItem(sticky.id, JSON.stringify(sticky));
  }
}

function init() {
  const stickiesComponent = new StickiesComponent(localStorage);
  const addButton = document.getElementById('add');
  const clearButton = document.getElementById('clear');
  const noteText = document.getElementById('notetext');
  const noteColor = document.getElementById('notecolor');

  if (!stickiesComponent.storage) {
    alert('browser ondersteunt geen storage');
    addButton.disabled = true;
    clearButton.disabled = true;
    return;
  }

  addButton.onclick = function () {
    stickiesComponent.addSticky(noteText.value, noteColor.value);
    noteText.value = '';
    stickiesComponent.toHTML();
  };
  clearButton.onclick = function () {
    stickiesComponent.clear();
  };

}

window.onload = init;