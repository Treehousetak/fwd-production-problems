var doorbell = new Audio('media/doorbell.mp3');
function ringDoorbell() {
  doorbell.play();
}


document.addEventListener('DOMContentLoaded', function () {
  console.log("DOM Has loaded");
  var bell = document.querySelector('#bell');
  bell.addEventListener("click", function() {
    doorbell.play();
  });
});
