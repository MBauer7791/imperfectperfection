// index pic carousel
import { readdirSync } from "fs";
import { resolve } from "path";

function picArray() {
    const results = readdirSync(resolve(_dirname,"images"))
    console.log(results)
}

var slider_img=document.querySelector('.slider_img');
var images=['/images/carousel/20220114_214003.jpg', '/images/carousel/20220804_185620.jpg', '/images/carousel/20220912_004333.jpg', '/images/carousel/20220912_004352.jpg', '/images/carousel/20220912_004400.jpg', '/images/carousel/IMG_1132.jpg', '/images/carousel/IMG_6256.jpg'];
var i=0;

function prev() {
    if (i <= 0) i = images.length;
    i--;
    return setImg();
}

function next() {
    if(i >= images.length-1) i=-1;
    i++;
    return setImg();
}

function setImg() {
    return slider_img.setAttribute('src', 'images/' + images[i]);
}

// Ring page popup gallery
function showImg() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}
