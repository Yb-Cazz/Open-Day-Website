const main = document.querySelectorAll(".main");
let imageIndex = 0;
let intervalid = null;

document.addEventListener("DOMContentLoaded", initializeSlider);

function initializeSlider(){
  
    if(images.length > 0){
        images[imageIndex].classList.add("displayImage");
        intervalid = setInterval(nextImage, 3000);
    }
}

function showimage(index){

    if(index >= images.length){
        imageIndex = 0;
    }
    else if( index < 0){
        imageIndex = images.length - 1;
    }
    
    images.forEach(image => {
        image.classList.remove("displayImage");
    });

    images[imageIndex].classList.add("displayImage");
}

function prevImage(){
    clearInterval(intervalid);
    imageIndex--;
    showimage(imageIndex)
}

function nextImage(){
    imageIndex++;
    showimage(imageIndex);
}