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

// Copying works even when the visitor has no email application configured.
document.querySelectorAll('.copy-email').forEach(button=>{button.addEventListener('click',async()=>{const value=button.dataset.email;try{if(navigator.clipboard&&window.isSecureContext){await navigator.clipboard.writeText(value)}else{const field=document.createElement('textarea');field.value=value;field.style.position='fixed';field.style.opacity='0';document.body.append(field);field.select();if(!document.execCommand('copy'))throw new Error('Copy failed');field.remove()}button.textContent='Copied!';button.setAttribute('aria-label','Email address copied');setTimeout(()=>{button.textContent='Copy email';button.setAttribute('aria-label','Copy email address')},2500)}catch{button.textContent='Select email above';button.setAttribute('aria-label','Select the visible email address above')}})});

// Contact opens immediately; the footer link remains a no-script fallback.
const contactTrigger=document.querySelector('nav a[href="#contact"]');
if(contactTrigger){const dialog=document.createElement('dialog');dialog.className='contact-dialog';dialog.setAttribute('aria-label','Contact Laticia Long');dialog.innerHTML='<button type="button" class="contact-close" aria-label="Close contact dialog">×</button><p class="contact-eyebrow">CONTACT</p><h2>Let’s talk.</h2><p>Questions about my work or a project? Reach me at:</p><a class="contact-address" href="mailto:laticialong00@gmail.com">laticialong00@gmail.com ↗</a><button type="button" class="contact-copy">Copy email</button>';document.body.append(dialog);contactTrigger.addEventListener('click',event=>{event.preventDefault();dialog.showModal()});dialog.querySelector('.contact-close').addEventListener('click',()=>dialog.close());dialog.addEventListener('click',event=>{if(event.target===dialog)dialog.close()});dialog.querySelector('.contact-copy').addEventListener('click',async event=>{const button=event.currentTarget;try{await navigator.clipboard.writeText('laticialong00@gmail.com');button.textContent='Copied!';setTimeout(()=>button.textContent='Copy email',2500)}catch{button.textContent='Select the email above'}})}
