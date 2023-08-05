// When the user clicks on <div>, open the popup
function picArray() {
    const results = fs.readdirSync(path.resolve(_dirname,"images"))
    console.log(results)
}
var slider_img=document.querySelector('.slider_img');
var images=['597.jpg','20220114_214003.jpg', '20220114_214018.jpg', '20220419_161442.jpg', '20220419_161448.jpg', '20220421_125051.jpg', '20220507_141111.jpg', '20220507_233425.jpg', '20220507_234439.jpg', '20220514_142832.jpg', '20220602_154951.jpg', '20220602_155017.jpg', '20220602_155033.jpg', '20220602_155042.jpg', '20220602_155141.jpg', '20220602_155154.jpg', '20220602_155247.jpg', '20220602_155334.jpg', '20220602_155347.jpg', '20220602_155356.jpg', '20220602_155518.jpg', '20220602_155547.jpg', '20220602_155558.jpg', '20220602_155605.jpg', '20220602_155613.jpg', '20220602_155625.jpg', '20220602_155633.jpg', '20220602_155647.jpg', '20220602_155654.jpg', '20220602_155720.jpg', '20220602_155749.jpg', '20220602_155755.jpg', '20220602_155802.jpg', '20220602_155809.jpg', '20220602_155819.jpg', '20220602_155852.jpg', '20220602_155909.jpg', '20220602_160035.jpg', '20220602_160050.jpg', '20220602_160107.jpg', '20220602_160126.jpg', '20220602_235842.jpg', '20220602_235906.jpg', '20220602_235915.jpg', '20220602_235924.jpg', '20220602_235937.jpg', '20220603_000001.jpg', '20220603_182239.jpg', '20220726_155337.jpg', '20220729_200429.jpg', '20220729_200501.jpg', '20220731_203923.jpg', '20220804_185610.jpg', '20220804_185620.jpg', '20220807_192504.jpg', '20220807_192520.jpg', '20220816_112955.jpg', '20220816_113006.jpg', '20220816_130610.jpg', '20220912_004333.jpg', '20220912_004352.jpg', '20220912_004400.jpg', '20220930_173608.jpg', '20221103_122022.jpg', '20221110_124822.jpg', 'cuff.jpg', 'IMG_1132.jpg', 'IMG_6256.jpg'];
var i=0;

function prev() {
    if(i <= 0) i = images.length;
    i--;
    return setImg();
}

function next() {
    if(i >= images.length-1)i=-1;
    i++;
    return setImg();
}

function setImg() {
    return slider_img.setAttribute('src', 'images/' + images[i]);
}

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