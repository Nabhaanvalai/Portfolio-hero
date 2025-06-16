const toggleDark = document.getElementById('toggleDark');
const toggleLight = document.getElementById('toggleLight');
const body = document.body;

toggleDark.addEventListener('click', () => {
  body.classList.add('dark');
  toggleDark.classList.add('hidden');
  toggleLight.classList.remove('hidden');
});

toggleLight.addEventListener('click', () => {
  body.classList.remove('dark');
  toggleDark.classList.remove('hidden');
  toggleLight.classList.add('hidden');
});

let typingeffect =new Typed("#text",{
    strings: ["developer.","Coder","Nabhaan"],
    typeSpeed: 100,
    backSpeed: 100,
    loop:true,
    Backdelay:1000
})