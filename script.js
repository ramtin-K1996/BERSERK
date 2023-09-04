function showImage() {
    var image = document.querySelector(".titleLogo img");
    image.style.opacity = 1;
  }
  
  var delayInMilliseconds = 1;
  setTimeout(showImage, delayInMilliseconds);

const button = document.querySelector('.button1');


const middleP = document.querySelector(".middlepanel")

const buttonElement = document.querySelector(".b1");
const buttonElement2 = document.querySelector(".b2");
const buttonElement3 = document.querySelector(".b3");
const box1= document.querySelector('.box1')
const box2= document.querySelector('.box2')

const image1 = 'url("images/background4.png")'
const image2 = 'url("images/guts4k.jpeg")';
const image3 = 'url("images/zodd2.jpeg")';
let currentimage=image1;
const originalBox1Display = window.getComputedStyle(box1).display;

buttonElement.addEventListener("mouseover", () => {
  middleP.style.backgroundImage = image1;
  box1.style.display = originalBox1Display;
  box2.style.color = 'rgb(247, 230, 244)';
  button.classList.add('hidden2');
  button.classList.remove('hidden');

});


buttonElement2.addEventListener("mouseover", () => {
  middleP.style.backgroundImage = image2;
  box1.style.display='none';
  box2.style.color= 'rgb(247, 230, 244)'; 
  button.classList.add('hidden');
  button.classList.remove('hidden2');
});


buttonElement3.addEventListener("mouseover", () => {
  middleP.style.backgroundImage = image3;
  box1.style.display='none';
  box2.style.color= 'rgba(137, 43, 226, 0)'
  button.classList.add('hidden');
  button.classList.remove('hidden2');

});



buttonElement.addEventListener("mouseout", () => {
  middleP.style.backgroundImage = currentimage;
  if(currentimage!=image1){ box1.style.display = 'none';
  button.classList.add('hidden');
  button.classList.remove('hidden2');
} 

});

buttonElement2.addEventListener("mouseout", () => {
  middleP.style.backgroundImage = currentimage;
  if(currentimage==image1){ box1.style.display = originalBox1Display;
    button.classList.add('hidden2');
  button.classList.remove('hidden');
  } 
});

buttonElement3.addEventListener("mouseout", () => {
  middleP.style.backgroundImage = currentimage;
  if(currentimage==image1){ box1.style.display = originalBox1Display; box2.style.color= 'rgb(247, 230, 244)';
  button.classList.add('hidden2');
  button.classList.remove('hidden');} 
});


buttonElement.addEventListener("click", () => { 
  currentimage=image1;
  buttonElement.style.backgroundColor = 'rgb(44, 44, 44)';
  buttonElement2.style.backgroundColor = 'rgb(255, 255, 255)';
  buttonElement3.style.backgroundColor = 'rgb(255, 255, 255)';
});


buttonElement2.addEventListener("click", () => { 
  currentimage=image2;
  buttonElement2.style.backgroundColor = 'rgb(44, 44, 44)';
  middleP.style.backgroundImage = image2;

  buttonElement.style.backgroundColor = 'rgb(255, 255, 255)';
  buttonElement3.style.backgroundColor = 'rgb(255, 255, 255)';

});


buttonElement3.addEventListener("click", () => { 
  currentimage=image3;
  buttonElement3.style.backgroundColor = 'rgb(44, 44, 44)';
  middleP.style.backgroundImage = image3;
  buttonElement2.style.backgroundColor = 'rgb(255, 255, 255)';
  buttonElement.style.backgroundColor = 'rgb(255, 255, 255)';

});



let imageIndex = 0;
const images = [image1, image2, image3];

function changeImageAutomatically() {
  imageIndex = (imageIndex + 1) % images.length;
  currentimage = images[imageIndex];
  middleP.style.backgroundImage = currentimage

if (currentimage==image1){
  box1.style.display = originalBox1Display; 
  box2.style.color = 'rgb(247, 230, 244)';
  buttonElement.style.backgroundColor = 'rgb(44, 44, 44)';
  buttonElement2.style.backgroundColor = 'rgb(255, 255, 255)';
  buttonElement3.style.backgroundColor = 'rgb(255, 255, 255)';
  box2.style.color= 'rgb(247, 230, 244)';
  button.classList.add('hidden2');
}

if (currentimage==image2){
  box1.style.display = 'none'; 
  box2.style.color = 'rgb(247, 230, 244)';
  buttonElement2.style.backgroundColor = 'rgb(44, 44, 44)';
  buttonElement.style.backgroundColor = 'rgb(255, 255, 255)';
  buttonElement3.style.backgroundColor = 'rgb(255, 255, 255)';
  box2.style.color= 'rgb(247, 230, 244)' ;button.classList.add('hidden');button.classList.remove('hidden2');

}

if (currentimage==image3){
  box1.style.display = 'none'; 
  box2.style.color = 'rgb(247, 230, 244)';
  buttonElement3.style.backgroundColor = 'rgb(44, 44, 44)';
  buttonElement.style.backgroundColor = 'rgb(255, 255, 255)';
  buttonElement2.style.backgroundColor = 'rgb(255, 255, 255)';
  box2.style.color= 'rgba(137, 43, 226, 0)'

}

}

  setInterval(changeImageAutomatically, 5000);








  function setTheme() {
    const root = document.documentElement;
    const newTheme = root.className === 'dark' ? 'light' : 'dark';
    root.className = newTheme;
    
  }
  
  document.querySelector('.b4').addEventListener('click', setTheme)





const phoneM= document.querySelector('.bloc-icon')
const display= document.querySelector('.phoneMenu')



phoneM.addEventListener("click", () => { 
  display.style.visibility='visible';
});

const exit= document.querySelector('.exit')
exit.addEventListener("click", () => { 
  display.style.visibility='hidden';
});
