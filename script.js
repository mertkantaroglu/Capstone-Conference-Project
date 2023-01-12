// Mobile Menu //

const mobileMenu = document.querySelector('.mobile-menu');
const hamburger = document.querySelector('.hamburger-menu');
const closeIcon = document.querySelector('.close-icon');

hamburger.addEventListener('click',() => {
  mobileMenu.classList.add('active');
  mobileMenu.style.display = 'flex';
})

function closeMobileMenu() {
  mobileMenu.classList.add('hidden');
  mobileMenu.style.display = 'none';
}

const menuLinks = document.querySelector('.menu-links');

menuLinks.addEventListener('click', closeMobileMenu);
closeIcon.addEventListener('click', closeMobileMenu);


// Speakers Info //

const speakersColumn = document.querySelector('.speakers-column');

const speakers = [
  {
    name: 'Arthur Adams',
    position: 'Editor-in-Chief Marvel Comics USA',
    detail: 'Arthur Adams, a self-taught artist, became a fan favorite when, at the age of 19, he left his job making pizzas for the masses to pencil the critically-acclaimed Longshot limited series.',
    image: './Images/Arthur Adams.jpeg',
  },
  {
    name: 'Joe-Quesada',
    position: 'Comic Artist / Writer at DC Comics',
    detail: 'Joe Quesada has been writing comics professionally since the mid-1990s. He is the author of SPACEMAN, BATMAN: BROKEN CITY, SUPERMAN: FOR TOMORROW (with Jim Lee).',
    image: './Images/Joe Quesada.jpeg',
  },
  {
    name: 'Jim-Lee',
    position: 'Comic Artist / Writer / Executive Creative Director at DC Comics',
    detail: 'Jim Lee is a renowned comic book artist and the executive creative director of DC Entertainment including All Star Batman and Robin.',
    image: './Images/Jim Lee.jpeg',
  },
  {
    name: 'Fiaura The Tank Girl',
    position: 'Art Director / Illustrator at One Piece Anime',
    detail: 'Fiaura The Tank Girl analyzes fandoms and writes extensive works for Fallout: Equestria. Further, she writers and assists in publishing official songs, audiobooks, Audio Dramas.',
    image: './Images/Fiaura The Tank Girl.jpeg',
  },
  {
    name: 'Liam Sharp',
    position: 'Comic Artist / Writer / Publisher at Naruto Series',
    detail: 'Liam Sharp is a writer, artist and publisher. His comics art for Naruto has encapsulated horror (WildStorm\'s THE POSSESSED with Geoff Johns). He also illustrated the graphic novel Naruto Shippuden series.',
    image: './Images/Liam Sharp.jpeg',
  },
  {
    name: 'Ryan Colt Levy',
    position: 'Actor / Voice Actor at TOEI Animation',
    detail: 'Ryan Colt Levy is a voice actor known for voicing Denji/Chainsaw Man, and Rody Soul. With literally hundreds of V/O credits to his name, Ryan is best known as the voice of "Zoro" from One Piece.',
    image: './Images/Ryan Colt Levy.jpeg',
  },
];

speakers.forEach((speaker) => {
  const newSpeaker = document.createElement('div');
  
  newSpeaker.classList.add('featured-speaker');
  
  newSpeaker.innerHTML = `
  <div class="speaker-img">
    <img src='${speaker.image}' alt=${speaker.name}>
  </div>
  <div class="speaker-info">
    <h4 class="speaker-name">${speaker.name}</h4>
    <h5 class="speaker-position">${speaker.position}</h5>
    <hr class="hr2" />
    <p class="speaker-detail">${speaker.detail}</p>
  </div>
  `;
  
  speakersColumn.appendChild(newSpeaker);
  
});
  