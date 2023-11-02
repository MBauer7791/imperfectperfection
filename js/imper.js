// index pic carousel
var slider_img=document.querySelector('.slider_img');
var images=['20220114_214003.jpg', '20220804_185620.jpg', '20220912_004333.jpg', '20220912_004352.jpg', '20220912_004400.jpg', '20230122_170110.jpg', '20230131_152838.jpg', '20230610_201125.jog', '20230612_233749.jpg', '2023067_203739.jpg', 'IMG_1132.jpg', 'IMG_6256.jpg'];
var i=0;
var timer;

function startCarousel() {
  timer=setInterval(next, 2500);
}

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
    return slider_img.setAttribute('src', 'images/carousel/' + images[i]);
}

// When the user clicks on <div>, open the popup
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

function showCuff1() {
  var popup = document.getElementById("myPopupCuff1");
  popup.classList.toggle("show");
}

$('#exampleModal').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget) // Button that triggered the modal
  var recipient = button.data('whatever') // Extract info from data-* attributes
  // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
  // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
  var modal = $(this)
  modal.find('.modal-title').text('New message to ' + recipient)
  modal.find('.modal-body input').val(recipient)
})