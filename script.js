var text = document.getElementById('input');
var button = document.getElementById('button');

button.addEventListener("click", function() {
  var str = text.value;
  text.value = '';

  let list = document.querySelector('#list');
  let newLI = document.createElement('li');
  newLI.innerHTML = str;
  list.appendChild(newLI);
});

//FIXME: when user clicks enter in textbox trigger button clicked function
text.addEventListener("keyup", function (event) {
  if (event.key === 'Enter' || event.keyCode === 13) {
    var str = text.value;
    text.value = '';

    let list = document.querySelector('#list');
    let newLI = document.createElement('li');
    newLI.innerHTML = str;
    list.appendChild(newLI);
  }
});

function remove(el) {
    let list = document.querySelector('#list');
  list.addEventListener('click', function handleClick(event) {
      event.target.style.setProperty("text-decoration", "line-through");
      setTimeout(function(){event.target.remove();},1000);
  });
}