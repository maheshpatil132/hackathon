const menu = document.getElementById('menu')
const navbar = document.getElementById('navbar')
const open_btn = document.getElementById('open')
const video = document.getElementById('videoElement')
let signal = false;
var data;
menu.addEventListener('click', () => {
  navbar.classList.toggle('navtoggle')
})

open_btn.addEventListener('click', () => {
  signal = !signal
  console.log(signal);
  if (signal === true) {

    if (navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ video: true })
        .then(function (stream) {
          video.srcObject = stream;
        })
        .catch(function (err0r) {
          console.log("Something went wrong!");
        });
    }
  }




})

