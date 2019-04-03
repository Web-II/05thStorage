class StickiesComponent {
  constructor(storage) {
    this._storage = storage;
  }

  get storage() {
    return this._storage;
  }

  toHTML() {
    const allStickies = Object.entries(this.storage).reduce(
      (result, [key, value]) => result += `${key}: ${value}\n`, '');
    alert(allStickies);
  }

  addSticky(note) {
    const key = 'id-' + Math.random().toString(36).substr(2);
    this._storage.setItem(key, note);
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

  addButton.onclick = function () {
    const noteText = document.getElementById('notetext');
    stickiesComponent.addSticky(noteText.value);
    stickiesComponent.toHTML();
  };
}

window.onload = init;