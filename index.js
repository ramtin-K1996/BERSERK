function fadeIn(element, duration) {
    var op = 0.1; 
    element.style.opacity = op;
    var startTime = Date.now();
  
    var timer = setInterval(function () {
      var elapsedTime = Date.now() - startTime;
      if (elapsedTime >= duration) {
        clearInterval(timer);
      }
  
      var progress = elapsedTime / duration;
      element.style.opacity = progress;
      element.style.filter = 'alpha(opacity=' + progress * 100 + ')';
    }, 10); 
  }
  
  function showImage() {
    var imageContainer = document.getElementById("titleLogo");
    var image = document.createElement("img");
    image.src = "images/Berserk_anime_logo.png"; 
  
    fadeIn(image, 4000); 
  
    imageContainer.appendChild(image);
  }
  var delayInMilliseconds = 1;
  
  setTimeout(showImage, delayInMilliseconds);