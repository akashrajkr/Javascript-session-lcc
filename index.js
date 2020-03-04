const btn = document.querySelector('button');
// Reference to the button is stored in btn

function random(number) {
  return Math.floor(Math.random() * (number+1));
}

btn.onclick = function() {
  const rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
  document.body.style.backgroundColor = rndCol;
}
//The onclick property is the event handler property being used here

// You could also set the handler property to be equal to a named function name


// function bgChange() {
//     const rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
//     document.body.style.backgroundColor = rndCol;
//   }  
//   btn.onclick = bgChange;



// Examples of other similar events
// btn.onfocus
// btn.ondblclick
// btn.onmouseover
// btn.onmouseout

// btn.addEventListener('click', bgChange);

//btn.addEventListener('click', function() {
//     var rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
//     document.body.style.backgroundColor = rndCol;
//   });

// btn.removeEventListener('click', bgChange);
