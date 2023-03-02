const categoriesButton = document.querySelector('.categories-button');
const categoriesContent = document.querySelector('.categories-content');

categoriesButton.addEventListener('click', function() {
  console.log('Button clicked!'); // Add this line
  categoriesContent.classList.toggle('open');
});

categoriesContent.addEventListener('click', function(event) {
  console.log('Content clicked!'); // Add this line
  event.stopPropagation();
});
