const tvDiv = document.querySelector('.tv'); let imageIndex = 3;

function changeImage() { tvDiv.style.backgroundImage = url('${imageIndex}.jpg'); tvDiv.style.backgroundSize = 'cover'; tvDiv.style.backgroundPosition = 'center';

imageIndex++;
if (imageIndex > 15) {
    imageIndex = 3;
}

}

// Initial call
changeImage();
//Change image every 5 seconds
setInterval(changeImage, 3000);

