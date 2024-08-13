menu.onclick = function(event) {

  console.log(event.target.nodeName)

  if (event.target.nodeName != 'A') return;

  let href = event.target.getAttribute('href');
  alert(href);

  // return false; // prevent url change

  event.preventDefault() // this or previous line works fine for prevent url re-direct
};