const btn = document.querySelector('button');

btn.addEventListener('click', function () {
  parent.postMessage('Hello', '*');
});
