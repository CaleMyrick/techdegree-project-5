const searchBar = document.getElementById("filterInput");
const list = document.querySelector("image");


searchBar.addEventListener('keyup', function(e){
  const term = e.target.value.toLowerCase();
  const images = document.getElementsByTagName('a');
  Array.from(images).forEach(function(image){
    const caption = image.firstElementChild.textContent;
    if(caption.toLowerCase().indexOf(term) != -1){
      image.style.display = "block";
    } else {
      image.style.display = "none";
    }

  })

})
