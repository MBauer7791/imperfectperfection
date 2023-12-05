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

// Get the modal
//var modal = document.getElementById('ambrosia-maple');

// Get the image and insert it inside the modal - use its "alt" text as a caption
//var img = document.getElementById('snakewood');
//var modalImg = document.getElementById("snakewood");
//var captionText = document.getElementById("caption");
//img.onclick = function(){
//  modal.style.display = "block";
//  modalImg.src = this.src;
//  captionText.innerHTML = this.alt;
//}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
//span.onclick = function() {
//  modal.style.display = "none";
//} 


//$('#exampleModal').on('show.bs.modal', function (event) {
  //var button = $(event.relatedTarget) // Button that triggered the modal
  //var recipient = button.data('whatever') // Extract info from data-* attributes
  //// If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
  //// Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
  //var modal = $(this)
  //modal.find('.modal-title').text('New message to ' + recipient)
  //modal.find('.modal-body input').val(recipient)
//})

// jquery setup
//$("#snakewood").function('showModal')
//
//$(document).ready(function(){
//  $("#snakewood").modal("show");
//});

//var modalImage=document.getElementById('modal1');
//modalImage.addEventListener('click', function(showModal) {
//  console
//})

$(document).ready(function(){
  $("#myButton").click(function(){
    $("#myModal").modal();
  });
});