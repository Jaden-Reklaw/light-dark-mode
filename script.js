//Select DOM elements
const toggleSwitch = document.querySelector('input[type="checkbox"]');
//Other elements we want to change to dark mode manually
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textBox = document.getElementById('text-box');

//Change images
function imageMode(color) {
    image1.src = `img/undraw_proud_coder_${color}.svg`;
    image2.src = `img/undraw_feeling_proud_${color}.svg`;
    image3.src = `img/undraw_conceptual_idea_${color}.svg`;
}

//Dark Mode Styles
function darkMode() {
    document.documentElement.setAttribute('data-theme', 'dark');

    nav.style.backgroundColor = 'rgb(0 0 0 / 50%)';
    textBox.style.backgroundColor = 'rgb(255 255 255 / 50%)';

    //How to select child elements
    toggleIcon.children[0].textContent = 'Dark Mode';
    toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon');

    //Change images
    imageMode('dark');

    // Set value to local storage
    localStorage.setItem('theme', 'dark');
}

//Light Mode Styles
function lightMode() {
    document.documentElement.setAttribute('data-theme', 'light');
    
    nav.style.backgroundColor = 'rgb(255 255 255 / 50%)';
    textBox.style.backgroundColor = 'rgb(0 0 0 / 50%)';

    //How to select child elements
    toggleIcon.children[0].textContent = 'Light Mode';
    toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');
    
    //Change images
   imageMode('light');

   // Set value to local storage
   localStorage.setItem('theme', 'light');
}

//Switch Them Dynamically
function switchTheme(event) {
    if(event.target.checked) {
        darkMode();
    } else {
        lightMode();
    }
}

//Event Listener
toggleSwitch.addEventListener('change', switchTheme);

// Checked Local Storage For Theme
const currentTheme = localStorage.getItem('theme');
if(currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if(currentTheme === 'dark') {
        toggleSwitch.checked = true;
        darkMode();
    }
}