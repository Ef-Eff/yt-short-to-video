/** @type {string|undefined} */
let lastShortCode;
/** @type {HTMLButtonElement|undefined} */
let button;

let styleAdded = false;

setInterval(() => {
  const shortCode = getShortCode();
  if (lastShortCode === shortCode) {
    return;
  } else if (shortCode === undefined) {
    clear();
    return;
  }
  lastShortCode = shortCode;
  addButton();
}, 133)

function getShortCode() {
  const match = window.location.href.match(/.+shorts\/(.+)\??/)
  return match ? match[1] : undefined;
}

function addButton() {
  const body = document.querySelector('body');

  if (body) {
    log('Adding redirect button')
    addStyle();
    body.appendChild(getButton());
  } else {
    log('Failed to find the body somehow :(')
  }
}

function getButton() {
  if (button === undefined) {
    button = document.createElement('button');
    button.innerText = 'Do the thing';
    button.id = 'stvButton';
    button.addEventListener('click', () => {
      window.location.href = 'https://youtube.com/watch?v=' + lastShortCode;
    })
  }
  return button;
}

function addStyle() {
  if (styleAdded) {
    return;
  }
  const style = `<style>
  #stvButton {
    position: absolute;
    right: 5px;
    top: 30%;
    background-color: red;
  }
  </style>`;
  document.head.insertAdjacentHTML('beforeend', style);
  styleAdded = true;
}

function clear() {
  if (button) {
    button.remove();
    button = undefined;
  }
}

function log(string) {
  return console.log('[YouTube Short To Video]:', string);
}