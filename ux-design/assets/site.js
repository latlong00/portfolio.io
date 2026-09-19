const menu = document.querySelector('.menu');
const nav = document.querySelector('#nav-links');
if (menu && nav) {
  menu.addEventListener('click', () => {
    const open = menu.getAttribute('aria-expanded') === 'true';
    menu.setAttribute('aria-expanded', String(!open));
    nav.classList.toggle('open', !open);
  });
}

// The Work link navigates; the adjacent chevron toggles its case studies on touch.
document.querySelectorAll('.work-menu').forEach(group=>{const toggle=group.querySelector('.work-toggle');toggle.addEventListener('click',()=>{const open=group.classList.toggle('is-open');toggle.setAttribute('aria-expanded',String(open))});document.addEventListener('click',event=>{if(!group.contains(event.target)){group.classList.remove('is-open');toggle.setAttribute('aria-expanded','false')}});group.addEventListener('keydown',event=>{if(event.key==='Escape'){group.classList.remove('is-open');toggle.setAttribute('aria-expanded','false');toggle.focus()}})});
