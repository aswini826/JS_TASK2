var previousBox = null;

function hideBox(box) {
  box.style.display = 'none';
}

function showBox(box) {
  box.style.display = 'inline-block';
}

function handleClick(box) {
  if (previousBox != null) {
    showBox(previousBox);
  }
  hideBox(box);
  previousBox = box;
}

var box1 = document.getElementById('box1');
var box2 = document.getElementById('box2');
var box3 = document.getElementById('box3');
var box4 = document.getElementById('box4');

box1.addEventListener('click', function() {
  handleClick(box1);
});

box2.addEventListener('click', function() {
  handleClick(box2);
});

box3.addEventListener('click', function() {
  handleClick(box3);
});

box4.addEventListener('click', function() {
  handleClick(box4);
});
