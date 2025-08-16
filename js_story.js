 
  const menu = document.getElementById('menuPanel');
  const icon = document.getElementById('menuIcon');
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