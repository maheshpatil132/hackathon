const menu = document.getElementById('menu')
const navbar = document.getElementById('navbar')
const open = document.getElementById('open')
const video = document.getElementById('videoElement')

menu.addEventListener('click',()=>{
  navbar.classList.toggle('navtoggle')
})

if (navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices.getUserMedia({ video: true })
      .then(function (stream) {
        video.srcObject = stream;
      })
      .catch(function (err0r) {
        console.log("Something went wrong!");
      });
  }