var card = document.createElement('div');
card.style.position = 'absolute';
card.style.zIndex = '9999';
card.style.background = 'white';
card.style.border = '1px solid black';
card.style.padding = '10px';
card.style.top = '50px';
card.style.left = '50px';
card.textContent = 'Loading...';
card.style.color = 'black';

var activeElement = document.activeElement;
if (activeElement.tagName === 'INPUT') {
  fetch('http://localhost:5000/', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(response => response.json())
    .then(data => {
      card.textContent = data;
      console.log(data);
    })
    .catch(error => {
      card.textContent = 'Error';
      console.error('Error:', error);
    });
  
  activeElement.parentNode.insertBefore(card, activeElement.nextSibling);
}
