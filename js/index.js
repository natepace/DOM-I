

const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

const navBar = document.querySelector('nav')
const navA = document.querySelectorAll('nav a')
navA[0].textContent = siteContent.nav["nav-item-1"]
navA[1].textContent = siteContent.nav["nav-item-2"]
navA[2].textContent = siteContent.nav["nav-item-3"]
navA[3].textContent = siteContent.nav["nav-item-4"]
navA[4].textContent = siteContent.nav["nav-item-5"]
navA[5].textContent = siteContent.nav["nav-item-6"]

const newEl = document.createElement('a');
newEl.textContent = "yermomfat";
const newElTOO = document.createElement('a');
newElTOO.textContent = "yermomSTILLFAT";
newElTOO.style.color = 'green';
navBar.prepend(newEl);
navBar.appendChild(newElTOO);

newEl.style.color = 'green';

navA.forEach(el => el.style.color = 'green')

const header = document.querySelector('h1')
header.innerHTML = siteContent.cta["h1"].split(" ").join("<br>");
const startButton = document.querySelector('button');
startButton.textContent = siteContent.cta["button"];

const headImg = document.getElementById("cta-img");
headImg.setAttribute('src', siteContent.cta["img-src"])

const textIn = document.querySelectorAll('h4');
textIn[0].textContent = siteContent["main-content"]["features-h4"];
textIn[1].textContent = siteContent["main-content"]["about-h4"];
textIn[2].textContent = siteContent["main-content"]["services-h4"];
textIn[3].textContent = siteContent["main-content"]["product-h4"];
textIn[4].textContent = siteContent["main-content"]["vision-h4"];

const lilTextIn = document.querySelectorAll('p');
lilTextIn[0].textContent = siteContent["main-content"]["features-content"];
lilTextIn[1].textContent = siteContent["main-content"]["about-content"];
lilTextIn[2].textContent = siteContent["main-content"]["services-content"];
lilTextIn[3].textContent = siteContent["main-content"]["product-content"];
lilTextIn[4].textContent = siteContent["main-content"]["vision-content"];

const textPic = document.getElementById("middle-img");
textPic.setAttribute('src', siteContent["main-content"]["middle-img-src"])

const contact = document.querySelector('.contact h4');
contact.textContent = siteContent["contact"]["contact-h4"];

const lilContactText = document.querySelectorAll('.contact p');
lilContactText[0].textContent = siteContent["contact"]["address"];
lilContactText[1].textContent = siteContent["contact"]["phone"];
lilContactText[2].textContent = siteContent["contact"]["email"];

const footie = document.querySelector('footer p');
footie.textContent = siteContent["footer"]["copyright"];



// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])
