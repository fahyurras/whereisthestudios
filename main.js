if (document.getElementById('menu-btn')) {
  document.getElementById('menu-btn').addEventListener('click', function() {
    if (document.querySelector('.nav-btn-container').style.display === 'flex') {
      document.querySelector('.nav-btn-container').style.display = 'none';
      document.getElementById('menu-btn').innerHTML = "&#9776";
      document.querySelector('.content-container-wrapper').style.marginTop = `${document.querySelector('.main-header').offsetHeight + 10}px`;
    } else {
      document.querySelector('.nav-btn-container').style.display = 'flex';
      document.getElementById('menu-btn').innerHTML = "&#10005";
      document.querySelector('.content-container-wrapper').style.marginTop = `${document.querySelector('.main-header').offsetHeight + 10}px`;
    }
  });
}

document.querySelectorAll('.nav-btn').forEach((item) => {
  item.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
    this.classList.add('active');
  });
});

const text = "Hi, we are Where Is The Studio! We are independent studio based in Lampung, Indonesia. Where Is The Studio founded since November 2026 by Fahreza Yurian Rastafara. We love making apps and games.";
let index = 0;

function typingText() {
  if (document.getElementById('typing-text') && index <= text.length) {
    document.getElementById('typing-text').innerText = text.substring(0, index);
    index++;
    setTimeout(typingText, 75);
  } else { document.getElementById('cursor').style.display = 'none'; }
}

document.querySelectorAll('.project-wrapper-nav-btn').forEach((btn, index) => {
  btn.addEventListener('click', function(e) {
    e.preventDefault();
    
    document.querySelectorAll('.project-wrapper-nav-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.project-wrapper-addition').forEach(c => c.classList.remove('active'));
    
    this.classList.add('active');
    
    if (document.querySelector('.project-wrapper-nav-btn-indicator')) { document.querySelector('.project-wrapper-nav-btn-indicator').style.left = `${this.offsetLeft}px`; document.querySelector('.project-wrapper-nav-btn-indicator').style.width = `${this.offsetWidth}px`; }
    
    if (index === 0) {
      document.querySelectorAll('.project-wrapper-addition').forEach(c => c.classList.add('active'));
    } else if (index === 1) {
      document.querySelectorAll('.project-wrapper-addition')[0].classList.add('active');
    } else if (index === 2) {
      document.querySelectorAll('.project-wrapper-addition')[1].classList.add('active');
    }
  });
});

window.addEventListener('DOMContentLoaded', function() {
  if (document.getElementById('year')) document.getElementById('year').innerText = new Date().getFullYear();
  typingText();
  
  if (document.querySelector('.project-wrapper-nav-btn.active') && document.querySelector('.project-wrapper-nav-btn-indicator')) {
    document.querySelector('.project-wrapper-nav-btn-indicator').style.left = `${document.querySelector('.project-wrapper-nav-btn.active').offsetLeft}px`;
    document.querySelector('.project-wrapper-nav-btn-indicator').style.width = `${document.querySelector('.project-wrapper-nav-btn.active').offsetWidth}px`;
  }
});