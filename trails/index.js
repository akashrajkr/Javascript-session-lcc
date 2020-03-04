let btn = document.querySelector('button');
btn.onclick = function() {
    let item = document.querySelector('input').value;
    let listitem  = document.createElement('li');
    listitem.innerText = item;
    listitem.addEventListener('click', remover);
    document.querySelector('#list').appendChild(listitem);
}

function remover(e){
    let item = e.target;
    let list = document.querySelector('#list');
    list.removeChild(item);
}