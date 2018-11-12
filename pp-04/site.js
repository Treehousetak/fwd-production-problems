function ringDoorbell() {
  var doorbell = new Audio('media/doorbell.mp3');
  doorbell.play();
}
document.querySelector("audioplay").addEventListener("click,ringDoorbell")
document.querySelector("#doorbell").innerHTML = ""
