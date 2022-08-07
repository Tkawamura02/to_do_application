function addlist() {
  let uinput = document.getElementById('input').value;
  document.getElementById('input').value = '';

  if (uinput != null) {
    let list = document.querySelector('#list');

    let newLI = document.createElement('li');
    newLI.innerHTML = uinput;
    list.appendChild(newLI);
  }
}

function remove(el) {
    let list = document.querySelector('#list');
  list.addEventListener('click', function handleClick(event) {
      event.target.style.setProperty("text-decoration", "line-through");
      setTimeout(function(){event.target.remove();},1000);
  });
}