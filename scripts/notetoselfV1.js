class StickiesComponent {
  constructor(storage) {
    this._storage = storage;
  }
  get storage() {
    return this._storage;
  }
  toHTML() {
    const allStickies = Object.entries(this._storage)
                              .reduce((result, [key, value]) => 
                               result += `${key}: ${value}\n`, '');
    alert(allStickies);
  }
  clear() {
    this._storage.clear();
  }
  addSticky(note) {
    const key = 'id-' + Math.random().toString(36).substr(2);
    this._storage.setItem(key, note);
  }
}

function init() {
  const stickiesComponent = new StickiesComponent(localStorage);
  const addButton = document.getElementById('add');
  const clearButton = document.getElementById('clear');
  const noteText = document.getElementById('notetext');

  if (!stickiesComponent.storage) {
    alert('browser ondersteunt geen storage');
    addButton.disabled = true;
    clearButton.disabled = true;
    return;
  }
  addButton.onclick = function () {
    stickiesComponent.addSticky(noteText.value);
    noteText.value = '';
    stickiesComponent.toHTML();
  };
  clearButton.onclick = function () {
    stickiesComponent.clear();
  };
}

window.onload = init;