var slider_img = document.querySelector('.slider_img');
var images = ['images/20220114_214003.jpg', 'images/20220419_161442.jpg', 'images/20220602_155518.jpg'];
var i = 1;

function prev(){
    if (i <= 0 ) i = images.length;
    i--;
    return setImg();
}

function next(){
    if ( i >= images.length-1 ) i = -1;
    i++;
    return setImg();   
}

function setImg(){
    return slider_img.setAttribute('src', `images/${images[i]}`);
}
return slider_img.setAttribute('src', 'images/' + images[i]);