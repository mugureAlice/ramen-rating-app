document.addEventListener("DOMContentLoaded", main);

const ramens = [
    {id: 1, name: "Shoyu Ramen", restaurant: "Ichiran", image: "images/shoyu.jpg", rating: 5, comment: "Delicious!" },
    {id: 2,  name: "Naruto Ramen", restaurant: "Menya", image: "images/naruto.jpg", rating: 4, comment: "Very flavorful!" },
    {id: 3, name: "Gyukotsu Ramen", restaurant: "Ramen-ya",image: "images/gyukotsu.jpg",rating: 7, comment: "Sweet Aroma!"},
    {id: 4,   name: "Kojiro Ramen", restaurant: "Iyo", image: "images/kojiro.jpg", rating: 8, comment: "Tasty!"},
    {id: 5,  name: "Nirvana Ramen", restaurant: "Resta", image: "images/nirvana.jpg", rating: 9, comment: "Wow!"},
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