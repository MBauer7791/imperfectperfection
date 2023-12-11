// index pic carousel
var slider_img=document.querySelector('.slider_img');
var images=['20220114_214003.jpg', '20220804_185620.jpg', '20220912_004333.jpg', '20220912_004352.jpg', '20220912_004400.jpg', '20230122_170110.jpg', '20230131_152838.jpg', '20230612_233749.jpg', 'IMG_1132.jpg', 'IMG_6256.jpg'];
var i=0;
var timer;

function startCarousel() {
  timer=setInterval(next, 2500);
}

function setImg() {
    return slider_img.setAttribute('src', 'images/carousel/' + images[i]);
}

function next() {
  if(i >= images.length-1)i=-1;
  i++;
  return setImg();
}

//var modal = document.getElementById("brazilian");
//var openBtn = document.getElementById("openModal");
//var closeBtn = document.getElementsByClassName("close")[0];
//
//openBtn.onclick = function() {
//  modal.style.display = "block";
//}
//
//closeBtn.onclick = function() {
//  modal.style.display = "none";
//}
//
//window.onclick = function(event) {
//  if (event.target == modal) {
//    modal.style.display = "none";
//  }
//}

const modalNumber=getElementById();
switch (modalNumber) {
  case openModal1:
    

}