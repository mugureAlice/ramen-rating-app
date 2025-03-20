document.addEventListener("DOMContentLoaded", main);

const ramens = [
    {id: 1, name: "Chinese Ramen", restaurant: "Yala", image: "images/Chinese.png", rating: 6, comment: "Magnificent!"},
    {id: 2, name: "Japanese Ramen", restaurant: "Ukulu", image: "images/Japanese.png", rating: 4, comment: "Excellent!"},
    {id: 3, name: "Kimchee Ramen", restaurant: "Kiba", image: "images/Kimchee.png", rating: 3, comment: "Wonderfull!"},
    {id: 4, name: "Noodle Ramen", restaurant: "Basir", image: "images/Noodle.png", rating: 9, comment: "Brilliant!"},
    {id: 5, name: "Prawn Ramen", restaurant: "Yoto", image: "images/Prawn.png", rating: 6, comment: "Awesome!"},
 ];
 function displayRamens() {
  const ramenMenu = document.getElementById('ramen-menu');
  ramens.forEach(ramen => {
      const img = document.createElement('img');
      img.style.height = '100px'
      img.style.width = '100px'
      img.src = ramen.image;
      img.alt = ramen.name;
      img.addEventListener('click', () => handleClick(ramen)); 
      ramenMenu.appendChild(img);

      handleClick(ramens[0])

  });
}

function handleClick(ramen) {
  document.getElementById('ramen-image').src = ramen.image;
  document.getElementById('ramen-name').textContent = ramen.name;
  document.getElementById('ramen-restaurant').textContent = ramen.restaurant;
  document.getElementById('ramen-rating').textContent = ramen.rating;
  document.getElementById('ramen-comment').textContent = ramen.comment;
}

function addSubmitListener() {
  const form = document.getElementById('ramen-form');
  form.addEventListener('submit', function(e) {
      e.preventDefault();
      
  })
}

function main() {
  displayRamens();
  addSubmitListener();
  
}

 main();