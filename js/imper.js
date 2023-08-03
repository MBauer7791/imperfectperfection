// index pic carousel
import { readdirSync } from "fs";
import { resolve } from "path";

function showImg1() {
  var popup = document.getElementById("myPopup1");
  popup.classList.toggle("show");
}

function showImg2() {
  var popup = document.getElementById("myPopup2");
  popup.classList.toggle("show");
}

function showImg3() {
  var popup = document.getElementById("myPopup3");
  popup.classList.toggle("show");
}

function showImg4() {
  var popup = document.getElementById("myPopup4");
  popup.classList.toggle("show");
}

function showImg5() {
  var popup = document.getElementById("myPopup5");
  popup.classList.toggle("show");
}

function showImg6() {
  var popup = document.getElementById("myPopup6");
  popup.classList.toggle("show");
}

function showImg7() {
  var popup = document.getElementById("myPopup7");
  popup.classList.toggle("show");
}

function showImg8() {
  var popup = document.getElementById("myPopup8");
  popup.classList.toggle("show");
}

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