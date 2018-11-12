function ringDoorbell() {
  var doorbell = new Audio('media/doorbell.mp3');
  doorbell.play();
}
document.addEventListener('DOMContentLoaded', function () {
  console.log("DOM Has loaded");
  var bell = document.querySelector('#ezbell');
  bell.addEventListener("click", function() {
    console.log("click");
    ringDoorbell();
  });
});
