//Smooth scrolling while clicking the custom button

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'slow'
    });
  });
});

//Vertical menu section 1 | show and hide content.

let story = document.getElementById("story");
let dev = document.getElementById("dev");
let design = document.getElementById("design");
let backgroundBtn = '#FFFFFF';
let color = '#000000';

story.style.display = 'block';
dev.style.display = 'none';
design.style.display = 'none';


//CHANGE BACKGROUND AND COLOR WHEN ON THE CONTENT
// if (story.style.display == 'block') {
//   document.getElementById("story-btn").style.backgroundColor = backgroundBtn;
//   document.getElementById("story-btn").style.color = color;
// }
// else {
//   if (dev.style.display == 'block') {
//     document.getElementById("dev-btn").style.backgroundColor = backgroundBtn;
//     document.getElementById("dev-btn").style.color = color;
//   } else {
//     if (design.style.display == 'block') {
//       document.getElementById("design-btn").style.backgroundColor = backgroundBtn;
//       document.getElementById("design-btn").style.color = color;
//     }
//   }
// }




//CHANGE CONTENT ON CLICK
document.getElementById("story-btn").addEventListener('click', () => {
  if (dev.style.display == 'block' || design.style.display == 'block') {
    dev.style.display = 'none';
    design.style.display = 'none';
    story.style.display = 'block';
  }
})
document.getElementById("dev-btn").addEventListener('click', () => {
  if (story.style.display == 'block' || design.style.display == 'block') {
    story.style.display = 'none';
    design.style.display = 'none';
    dev.style.display = 'block';
  }
})

document.getElementById("design-btn").addEventListener('click', () => {
  if (dev.style.display == 'block' || story.style.display == 'block') {
    dev.style.display = 'none';
    story.style.display = 'none';
    design.style.display = 'block';

  }
})


var i = 0;
var txt = 'Lorem ipsum typing effect!'; /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementsByClassName("text-animated").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}







