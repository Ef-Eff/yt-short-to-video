const regex = /.+s\/(.+)\??/;

function log(string) {
  return console.log('[YouTube Short To Video]:', string);
}

function addButton(videoString) {
  const body = document.querySelector('body');

  if (body) {
    log('Adding redirect button')
    addStyle();
    const button = document.createElement('button');
    button.innerText = 'Do the thing';
    button.id = 'ytstvButton';
    button.addEventListener('click', () => {
      window.location.href = 'http://www.youtube.com/watch?v=' + videoString
    })
    body.appendChild(button);
  } else {
    log('Failed to find the body somehow :(')
  }
}

function addStyle() {
  const style = `<style>
  #ytstvButton {
    position: absolute;
    right: 5px;
    top: 30%;
    background-color: red;
  }
  </style>`;
  document.head.insertAdjacentHTML('beforeend', style);
}

addButton(window.location.href.match(regex)[1]);