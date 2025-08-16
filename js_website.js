  const menu = document.getElementById('menuPanel');
  const icon = document.getElementById('menuIcon');
  const storyLink = document.getElementById('storylink');
  const poemLink = document.getElementById('poemLink');
  const lifestoryLink = document.getElementById('lifestoryLink');
  const storySection = document.getElementById('storySection');
  const poemSection = document.getElementById('poemsection');
  const lifestorySection = document.getElementById('lifestorySection');
  const contactLink = document.getElementById('contactLink');
  const contactModal = document.getElementById('contactModal');
  const overlay = document.getElementById('overlay');

 
  function toggleMenu() {
    menu.classList.toggle('show');
    icon.classList.toggle('hide');
  }

  
  window.addEventListener('click', function(e) {
    const modalOpen = !contactModal.classList.contains('hide');
    if (modalOpen) return;

    if (!menu.contains(e.target) && !icon.contains(e.target)) {
      menu.classList.remove('show');
      icon.classList.remove('hide');
    }
  });

  
  storyLink.addEventListener('click', function(e) {
    e.preventDefault();
    storySection.classList.toggle('hide');
    if (!storySection.classList.contains('hide')) {
      storySection.scrollIntoView({ behavior: 'smooth' });
    }
  });


  poemLink.addEventListener('click', function(e) {
    e.preventDefault();
    poemSection.classList.toggle('hide');
    if (!poemSection.classList.contains('hide')) {
      poemSection.scrollIntoView({ behavior: 'smooth' });
    }
  });


  lifestoryLink.addEventListener('click', function(e) {
    e.preventDefault();
    lifestorySection.classList.toggle('hide');
    if (!lifestorySection.classList.contains('hide')) {
      lifestorySection.scrollIntoView({ behavior: 'smooth' });
    }
  });

 
  contactLink.addEventListener('click', function(e) {
    e.preventDefault();
    contactModal.classList.remove('hide');
    overlay.classList.remove('hide');
    menu.classList.remove('show');
  });

  
  function closeModal() {
    contactModal.classList.add('hide');
    overlay.classList.add('hide');
  }

 
  overlay.addEventListener('click', closeModal);


