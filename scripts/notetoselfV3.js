class Sticky {
  constructor(note, color) {
    this._id = 'sticky_' + Math.random().toString(36).substr(2);
    this.note = note;
    this.color = color;
  }

  get id() {
    return this._id;
  }
  get note() {
    return this._note;
  }
  get color() {
    return this._color;
  }


  set note(value) {
    this._note = value;
  }
  set color(value) {
    this._color = value;
  }
}

class StickiesComponent {
  constructor(storage) {
    this._storage = storage;
    this._stickies = [];
  }

  get storage() {
    return this._storage;
  }

  get stickies() {
    return this._stickies;
  }

  addSticky(note, color) {}

  deleteSticky(key) {}

  clearStickies() {}

  toHTML() {
    document.getElementById('stickies').innerHTML = '';
    this._stickies.map(sticky => {
      let li = document.createElement('li');
      li.setAttribute('id', sticky.id);
      li.style.backgroundColor = sticky.color;
      const span = document.createElement('span');
      span.className = 'sticky';
      span.appendChild(document.createTextNode(sticky.note));
      li.appendChild(span);
      document.getElementById('stickies').appendChild(li);
      li.onclick = () => {
        this.deleteSticky(li.id);
      };
    });
  }

  getStickiesFromStorage() {}

  setStickiesInStorage() {}

  storageEventHandler(event) {
    alert('Storage has been changed on another page');
    this.getStickiesFromStorage();
    this.toHTML();
  }
}

function init() {
  const stickiesComponent = new StickiesComponent(window.localStorage);
  const addButton = document.getElementById('add');
  const clearButton = document.getElementById('clear');

  if (!stickiesComponent.storage) {
    //browser ondersteunt geen storage
    alert('no storage available. ');
    addButton.disabled = true;
    clearButton.disabled = true;
    return;
  }
  stickiesComponent.getStickiesFromStorage();
  stickiesComponent.toHTML();

  addButton.onclick = function () {
    const noteText = document.getElementById('notetext');
    const noteColor = document.getElementById('notecolor');
    stickiesComponent.addSticky(
      noteText.value,
      noteColor.value
    );
    noteText.value = '';
  };

  clearButton.onclick = function () {
    stickiesComponent.clearStickies();
  };

}

window.onload = init;