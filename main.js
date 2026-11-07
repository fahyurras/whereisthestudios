// 1. Menu Button Function
const header = document.querySelector('.main-header');
const menuBtn = document.getElementById('menu-btn');
const navBtnContainer = document.querySelector('.nav-btn-container');
const contentCardWrapper = document.querySelector('.content-card-wrapper');

if (menuBtn) {
  menuBtn.addEventListener('click', function() {
    navBtnContainer.classList.toggle('show');
    if (navBtnContainer.classList.contains('show')) {
      menuBtn.innerHTML = "&#10005";
      menuBtn.style.transform = "rotate(360deg)";
    } else {
      menuBtn.innerHTML = "&#9776";
      menuBtn.style.transform = "rotate(0deg)";
    }
  });
}

// 2. Navigation Button Function
const navBtn = document.querySelectorAll('.nav-btn');
const contentCard = document.querySelectorAll('.content-card');
navBtn.forEach((item, index) => {
  item.addEventListener('click', function() {
    navBtn.forEach(b => b.classList.remove('active'));
    contentCard.forEach(c => c.classList.remove('show'));
    this.classList.add('active');
    
    if (index === 0) {
      contentCard.forEach(c => c.classList.add('show'));
    } else if (index === 1) {
      contentCard[0].classList.add('show');
    } else if (index === 2) {
      contentCard[1].classList.add('show');
    } else if (index === 3) {
      contentCard[2].classList.add('show');
    } else if (index === 4) {
      contentCard[3].classList.add('show');
    }
  });
});

// 3. Typing Text Function
const text = "Hi, we are Where Is The Studio! We are small independent studio based in Lampung, Indonesia. Where Is The Studio founded since November 2026 by Fahreza Yurian Rastafara. We love making apps and games.";
let index = 0;
const typingTextElement = document.getElementById('typing-text');
const cursorElement = document.getElementById('cursor');
function typingEffect() {
  if (typingTextElement && index <= text.length) {
    typingTextElement.innerText = text.substring(0, index);
    index++;
    setTimeout(typingEffect, 75);
  } else { cursorElement.style.display = 'none'; }
}

const projectCardWrapperNavBtn = document.querySelectorAll('.project-card-wrapper-nav-btn');
const projectCardWrapperNavBtnIndicator = document.querySelector('.project-card-wrapper-nav-btn-indicator');
const projectCard = document.querySelectorAll('.project-card');
projectCardWrapperNavBtn.forEach((item, index) => {
  item.addEventListener('click', function() {
    projectCardWrapperNavBtn.forEach(b => b.classList.remove('active'));
    projectCard.forEach(c => c.classList.remove('show'));
    this.classList.add('active');
    
    if (projectCardWrapperNavBtnIndicator) {
      projectCardWrapperNavBtnIndicator.style.left = `${this.offsetLeft}px`;
      projectCardWrapperNavBtnIndicator.style.width = `${this.offsetWidth}px`;
    }
    
    if (index === 0) {
      projectCard.forEach(c => c.classList.add('show'));
    } else if (index === 1) {
      projectCard[0].classList.add('show');
    } else if (index === 2) {
      projectCard[1].classList.add('show');
    }
  });
});

// 4. Load Function
window.addEventListener('DOMContentLoaded', function() {
  typingEffect();
  
  const activeProjectWrappedNavBtnActive = document.querySelector('.project-card-wrapper-nav-btn.active');
  if (activeProjectWrappedNavBtnActive && projectCardWrapperNavBtnIndicator) {
    projectCardWrapperNavBtnIndicator.style.left = `${activeProjectWrappedNavBtnActive.offsetLeft}px`;
    projectCardWrapperNavBtnIndicator.style.width = `${activeProjectWrappedNavBtnActive.offsetWidth}px`;
  }
  
  const yearElement = document.getElementById('year');
  if (yearElement) yearElement.innerText = new Date().getFullYear();
});