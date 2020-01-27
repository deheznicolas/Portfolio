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

story.style.display = 'block';
dev.style.display = 'none';
design.style.display = 'none';


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







