// import { cli } from "webpack";
import * as flsFunctions from "./modules/functions.js";
import { DaysBetweenDates } from "./modules/functionality.js";

import $ from "jquery";

import { renderPortfolio } from "./modules/renderContent.js";
renderPortfolio()
import { emailJSformDataServiceId, emailJSformTemplateId, emailJSformUserId } from "./modules/keysEmailJS.js";

flsFunctions.isWebp();


// console.warn(renderPortfolio());
// import Swiper, { Navigation, Pagination } from 'swiper';
// const swiper = new Swiper();


//! ========================== Language Swap ====================
let $lang = document.documentElement.lang

function fnLang(htmlLang) {
  // const $lang = document.documentElement.lang = htmlLang;
  $lang = htmlLang
  let ua = 'uk-UA';
  let en = 'en';

  if ($lang == ua) {
    document.querySelectorAll('.language-en').forEach(elem => elem.style.display = 'none')
  }
  if ($lang == en) {
    document.querySelectorAll('.language-ua').forEach(elem => elem.style.display = 'none')
  }
}
//!  htmlLang        'uk-UA'
//!  htmlLang        'en'
// fnLang('uk-UA');
fnLang('en');

function langValue() {
  if ($lang === 'uk-UA') {
    return 'uk-UA'
  }
  if ($lang === 'en') {
    return 'en'
  }
}

// console.log(langValue());
// console.log(langValue() === 'uk-UA');


//! ====================== \/ Count Between Dates \/ ==========================

const dbd = new DaysBetweenDates('.dateLearnCountJS', {
	startDate: '24.06.2021', // 24.06.2021
	endDate: false,
	includingFirstDay: true,
	includingLastDay: true
})


if (langValue() === 'uk-UA') {
  dbd.$el.innerHTML = `${dbd.countFinalAllD()}дн. (${dbd.calcYear}р. ${dbd.calcMonths}м. ${dbd.calcDays}дн.)`
} else if (langValue() === 'en') {
  dbd.$el.innerHTML = `${dbd.countFinalAllD()}d (${dbd.calcYear}yr ${dbd.calcMonths}mo ${dbd.calcDays}d)`
}

//! ====================== /\ Count Between Dates /\ ==========================


//! AOS
import AOS from 'aos';
// import 'aos/dist/aos.css'; // You can also use <link> for styles
AOS.init({
  disable: 'phone',
});


//! Menu burger

const burgerButton = document.querySelector('.menu__icon');
const navMenu = document.querySelector('.conteiner__nav');
const navLink = document.querySelectorAll('.nav-menu ul li');


burgerButton.addEventListener('click', (e)=>{
  navMenu.classList.toggle('nav__ative');
  burgerButton.classList.toggle('menu-icon__ative');
  document.body.classList.toggle('_lock')
});

// navLink.addEventListener('click', closeMenu);
navLink.forEach(n => n.addEventListener('click', closeMenu));

function closeMenu() {
  navMenu.classList.remove('nav__ative');
  burgerButton.classList.remove('menu-icon__ative');
  
}

// !плавна прокрутка + Active Nav Anchor

const activeClassNav = 'nav-list__item-link--active'; //! Активний клас! 
// console.log(windowHeight);
// const fixDoubleClasses = 0; //! Фікс накладання класів. Віднімає висоту тригера (де 0 - викл) //! розкоментувати для автоматичної ависоти активного тригер (активний тригер - це мінімальна висота секції)


addEventListener('scroll', funcWindowHeight);

function funcWindowHeight() {
  let windowHeight = window.innerHeight / 2; //! висота активного тригера (висота вікна подылена на ..)
  const anchors = document.querySelectorAll('a[href*="#"]')
  const sections = document.querySelectorAll('section[id*="section"]')
  let heightSections;
  let activeHeight;
  let arrHeightSections = [];
  
  // for (let section of sections) { //! розкоментувати цикл для автоматичної висоти активного тригера (активний тригер - це мінімальна висота секції)
  //   heightSections = section.getBoundingClientRect().height; //* Висота секції

  //   arrHeightSections.push(parseInt(heightSections));
  //   activeHeight = Math.min(...arrHeightSections) - fixDoubleClasses;
  // }

  activeHeight = windowHeight;
  
  for (let anchor of anchors) {
      anchor.addEventListener("click", function(event) {
        event.preventDefault();
        const blockID = anchor.getAttribute('href')
      document.querySelector('' + blockID).scrollIntoView({
        behavior: "smooth",
        block: "start"
      })
    })
  
    let hasSection = '' + anchor.hash.slice(1);
    const allNavLinks = document.querySelector(`a[data-scroll-active-nav=${hasSection}]`) //* Секції
    const allSections = document.querySelector(`section[id*=${hasSection}]`) //* Секції
    const heightSection = allSections.getBoundingClientRect().height; //* Висота секції
    const coordSections = allSections.getBoundingClientRect().top; //* координати 

    // console.log(activeHeight);

    if (activeHeight <= coordSections + heightSection && 
        activeHeight >= coordSections) {
      allNavLinks.classList.add(activeClassNav)
    } else {
      allNavLinks.classList.remove(activeClassNav)
    }
  }
}


// !typewriter

  var i = 0;
  // var A = 0;
      var tag = document.getElementById("typewriter");
      var html = document.getElementById("typewriter").innerHTML;
      var attr = tag.setAttribute("data", html);
      var txt = tag.getAttribute("data");
      var speed = 120;
      document.getElementById("typewriter").innerHTML = txt.slice(999);
      function typeWriter() {
        if (i <= txt.length) {
          document.getElementById("typewriter").innerHTML = txt.slice(0 , i + 1);
          i++;
          
          setTimeout(typeWriter, speed);
        }
      }
  window.setTimeout(typeWriter, 1000);



//! MENU mousemove
let marker = document.querySelector('#marker');
let list = document.querySelectorAll('.nav li');

// function moveIndicator(e){
// 	marker.style.top = e.offsetTop + 'px';
// 	// marker.style.bottom = e.offsetBot + 'px';
// }

list.forEach(link => {
	link.addEventListener('click', (e) => { // mousemove or click
		moveIndicator(e.target);
	})
})

//! MENU active class and hovered
	function activeLink() {
		list.forEach((item) =>
			item.classList.remove('active'));
			this.classList.add('active');
	}

	list.forEach((item) =>
	item.addEventListener('click', activeLink)); // mousemove or click


//! ============= Birthday calc date ===================

export function birthdayDate(myBirthdayd, myBirthdayM, myBirthdayY) {
  //! import {birthdayDate} from './libs/birthdayDate.js';
  //! birthdayDate(2, 10, 1994);

  function getUserTime(t) {
    let Y = t.getFullYear();
    // let M = addLeadingZero(t.getMonth() + 1);
    let M = t.getMonth() + 1;
    let d = t.getDate();

    // const myBirthdayd = 2;
    // const myBirthdayM = 10;
    // const myBirthdayY = 1994;

    let myBirthday = (Y - myBirthdayY);
    
    if (M < myBirthdayM){
      myBirthday -= 1;
    }
    
    if (myBirthday === (Y - myBirthdayY)) {
      if (d < myBirthdayd){
        myBirthday -= 1;
      }
    }
    document.querySelector('.birthday').innerHTML = myBirthday;
  }

  getUserTime (new Date());
}

birthdayDate(2, 10, 1994);

//!=================skills-percent=================
const skills = document.querySelectorAll('[data-skills-percent]');
const skillsBars = document.querySelectorAll('.about__progress');
let countSkill = 0;

for (let skill of skills) {
  const percent = skill.dataset.skillsPercent;
  // console.log(percent);
    countSkill++;
  skill.textContent = `${percent}%`;
  skill.nextElementSibling.children[0].classList.add(`skill-${countSkill}`);
  let skillScale = document.querySelector(`.skill-${countSkill}`);
  skillScale.style.width = percent + '%';
}

//!  =================================== EmailJS ====================================

function sendMail() {
  let params =  {
    from_name : document.getElementById("fullName").value,
    email_id : document.getElementById("email_id").value,
    message : document.getElementById("message").value
  }
  emailjs.send(emailJSformDataServiceId, emailJSformTemplateId, params, emailJSformUserId).then(function (res) {
    alert("Seccess! " + res.status);
  })
}

$('#myForm').on('submit', function(event) {
  event.preventDefault(); // prevent reload
  var formData = new FormData(this);
  formData.append('service_id', emailJSformDataServiceId);
  formData.append('template_id', emailJSformTemplateId);
  formData.append('user_id', emailJSformUserId);
  // emailJSformDataServiceId();
  // emailJSformTemplateId();
  // emailJSformUserId();

  // formData.append('service_id', 'service');
  // formData.append('template_id', 'template');
  // formData.append('user_id', 'DJj8PbJ96');

function clearForm(){
  $('#myForm').trigger('reset');
}

var sendButton = $(".button-send-mail");
var form = $(".input-textarea-parent");
var buttonTextDefoult = sendButton.text();

function buttonDefoult() {
  sendButton.text(buttonTextDefoult);
  sendButton.addClass('_icon-send ');
  sendButton.fadeTo(0, 1)
  
}

function sendingForm(message){
  var sendMessage = 'Sent successfully';
  var errorMessage = 'Error  ';
  var loadMessage = 'Sending';
  form.fadeTo(200, 0.2);
  // sendButton.fadeOut(100).text(message).fadeIn(100);
  sendButton.text(message);


  if (message === errorMessage) {
    sendButton.fadeTo(0, 1);
    sendButton.removeClass('button');
    sendButton.addClass('button-error');
    sendButton.text(message).removeClass('_icon-send').html(message +'<ion-icon name="bug"></ion-icon>');
    // sendButton.text(message + '<ion-icon name="bug-outline"></ion-icon>');
  };

  if (message === loadMessage) {
    sendButton.removeClass('_icon-send').fadeTo(0, 0.5).html(message +'<ion-icon name="reload-sharp"></ion-icon>');
    return
  };
  if (message === sendMessage) {
    sendButton.fadeTo(0, 1);
    sendButton.removeClass('_icon-send').html(message +'<ion-icon name="checkmark-done-sharp"></ion-icon>');
  };



  setTimeout(()=> {
    if (message === errorMessage) {
      sendButton.removeClass('button-error');
      sendButton.addClass('button');
    }
    if (message === errorMessage) {
      // sendButton.removeClass('button-error');
      sendButton.addClass('_icon-send');
    }
    
    
    // sendButton.fadeOut(100).fadeIn(100).text(buttonTextDefoult);
    // sendButton.text(buttonTextDefoult);
    buttonDefoult();
    form.fadeTo(200, 1);
    sendButton.fadeTo(0, 1)

  }, 4000)
  // console.log(message);
  // sendButton.show(2000).text(buttonTextDefoult);
  // sendButton[0].text();
}

sendingForm('Sending');

  $.ajax('https://api.emailjs.com/api/v1.0/email/send-form', {
      type: 'POST',
      data: formData,
      contentType: false, // auto-detection
      processData: false // no need to parse formData to string
  }).done(function() {
      clearForm();
      sendingForm('Sent successfully');
      // alert('Your mail is sent!');
  }).fail(function(error) {
    // alert('Oops...');
      clearForm();
      sendingForm('Error  ');
      console.log('Oops... ' + JSON.stringify(error));
  });
});

