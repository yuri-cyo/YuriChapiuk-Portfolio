// import { cli } from "webpack";
import * as flsFunctions from "./modules/functions.js";
import { DaysBetweenDates } from "./modules/functionality.js";

import $ from "jquery";

import { renderPortfolio } from "./modules/renderContent.js";
// renderPortfolio()
import { emailJSformDataServiceId, emailJSformTemplateId, emailJSformUserId } from "./modules/Tokens.js";
import { translationsArr } from "./modules/translationsСontent.js";

if (typeof process !== 'undefined' && process.release.name === 'node') {
  console.log('Node.js доступний.');
} else {
  console.log('Node.js не знайдений або не підтримується в цьому середовищі.');
}

flsFunctions.isWebp();

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

function removeMenu() {
  navMenu.classList.remove('nav__ative')
  burgerButton.classList.remove('menu-icon__ative');
  // document.body.classList.remove('_lock') //! block scroll-x on body
}
function addMenu() {
  navMenu.classList.add('nav__ative')
  burgerButton.classList.add('menu-icon__ative');
  // document.body.classList.add('_lock') //! block scroll-x on body
}

document.addEventListener('click', e => {
  
  if (e.target.closest('.nav__ative')){
    addMenu()
  }
  if (e.target.closest('.menu__icon') && !e.target.closest('.menu-icon__ative')) {
      addMenu()
    } else if(
      e.target.closest('.nav-menu ul li')
      ||
      e.target.closest('.container__avatar-name')
      ||
      e.target.closest('.nav-fone')
      ||
      e.target.closest('.menu-icon__ative')
      ) {
      removeMenu()
    }
});


// !плавна прокрутка + Active Nav Anchor

const activeClassNav = 'btn-neon'; //! Активний клас! 
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
      allNavLinks.classList.add(activeClassNav, `${activeClassNav}`)
    } else {
      allNavLinks.classList.remove(activeClassNav, `${activeClassNav}`)
    }
  }
}


// !typewriter

  let i = 0;
  // let A = 0;
      let tag = document.getElementById("typewriter");
      let html = document.getElementById("typewriter").innerHTML;
      let attr = tag.setAttribute("data", html);
      let txt = tag.getAttribute("data");
      let speed = 120;
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

var sendButton = $(".btn-sent");
var iconSend = $(".sent-icon");
var form = $(".input-textarea-parent");
var sentIcon = $(".sent-icon");
var buttonTextDefoult = sendButton.text();

var emailMessageClass = '_icon-email-message'
var emailSendingClass = '_icon-sent'
var emailErrorClass = '_icon-mail-error'
var emailSuccessClass = '_icon-done'
// .append($('<span class="">', {
//   text: 'Hello World!'
// }));

function buttonDefoult() {
  sendButton.text(buttonTextDefoult);
  sendButton.append(sentIcon)
  sentIcon.removeClass('_icon-done')
  sentIcon.removeClass(emailErrorClass)
  sentIcon.addClass(emailMessageClass)
  iconSend.fadeTo(0, 1)

  
}

function sendingForm(message){
  var sendMessage = 'Sent successfully';
  var errorMessage = 'Error 404';
  var loadMessage = 'Sending';
  form.fadeTo(200, 0.2);
  // sendButton.fadeOut(100).text(message).fadeIn(100);
  sendButton.text(message);


  if (message === errorMessage) {
    sendButton.fadeTo(0, 1);
    sendButton.removeClass('button');
    sendButton.addClass('button-error');
    sendButton.text(message);

    sentIcon.removeClass(emailSuccessClass)
    // sentIcon.removeClass('_icon-sent')

    sendButton.append(sentIcon)
    sentIcon.removeClass(emailMessageClass)
    sentIcon.removeClass(emailSendingClass)
    sentIcon.addClass(emailErrorClass)
    // sentIcon.addClass('_icon-error')
    iconSend.fadeTo(0, 1)
  };

  if (message === loadMessage) {
    sendButton.fadeTo(0, 0.5);
    sendButton.css('cursor', 'wait');
    // sentIcon.removeClass('_icon-sent')
    sendButton.append(sentIcon)
    sentIcon.removeClass(emailMessageClass)
    sentIcon.addClass(emailSendingClass)
    return
  };
  if (message === sendMessage) {
    sendButton.fadeTo(0, 1);
    sendButton.css('cursor', 'pointer');
    sendButton.removeClass(emailMessageClass);
    sendButton.append(sentIcon)
    sentIcon.removeClass('_icon-sent')
    sentIcon.addClass(emailSuccessClass)
    
  };



  setTimeout(()=> {
    if (message === errorMessage) {
      sendButton.removeClass('button-error');
      sendButton.addClass('button');
    }
    if (message === errorMessage) {
      // sendButton.removeClass('button-error');
      // sendButton.addClass('_icon-send');
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
      sendingForm('Error 404');
      console.log('Oops... ' + JSON.stringify(error));
  });
});



// ! ===================== Btn-Lang =======================
const langBtn = document.querySelector('[data-lang]')
const activeLang = langBtn.querySelector('.active-lang')

const langTitleEn = langBtn.querySelector('.lang-title-en')
const langTitleUa = langBtn.querySelector('.lang-title-ua')

const colorDefaultEn = langTitleEn.style.color
const colorDefaultUa = langTitleUa.style.color

const colorInactive = 'rgb(218, 218, 218)'

const allLang = ['en', 'ua']

styleDefaultLang()

langBtn.addEventListener('click', styleSwitchLang)

function changeURLLang() {
  let lang = langBtn.dataset.lang
  location.href = window.location.pathname + '#' + lang;
  let selectHashLang = window.location.hash.substring(1)

  document.querySelector('title').innerHTML = translationsArr['tittle'][selectHashLang]
  // document.querySelector('.lng-menu-name').innerHTML = translationsArr['menu-name'][selectHashLang]
  for (let key in translationsArr) {
    if (document.querySelector(`.lng-${key}`)) {
      document.querySelector(`.lng-${key}`).innerHTML = translationsArr[key][selectHashLang]
    } else {
      continue
    }
  }
  birthdayDate(2, 10, 1994)
  
  console.log('selectHashLang', selectHashLang);
  
  // location.reload();
}
changeURLLang()

function styleSwitchLang() {

  if (langBtn.dataset.lang === 'en') {
    langBtn.dataset.lang = 'ua'
    activeLang.style.transform = 'translateX(100%)'

    langTitleEn.style.color = colorInactive
    langTitleUa.style.color = colorDefaultUa
    countBetweenDates('дн.', 'міс.', 'р.')
    changeURLLang()

  } else if (langBtn.dataset.lang === 'ua') {
    langBtn.dataset.lang = 'en'
    activeLang.style.transform = 'translateX(0%)'

    langTitleUa.style.color = colorInactive
    langTitleEn.style.color = colorDefaultEn
    countBetweenDates('d', 'mo', 'yr')
    changeURLLang()
  }
}
function styleDefaultLang() {
  let selectHashLang = window.location.hash.substring(1)

  if (!allLang.includes(selectHashLang)) {
    location.href = window.location.pathname + '#eng';
  } else {
    langBtn.dataset.lang = selectHashLang
  }
  if (langBtn.dataset.lang === 'ua') {
    // langBtn.dataset.lang = 'ua'
    activeLang.style.transform = 'translateX(100%)'
    

    langTitleEn.style.color = colorInactive
    langTitleUa.style.color = colorDefaultUa
    countBetweenDates('дн.', 'міс.', 'р.')

  } 
  else if (langBtn.dataset.lang === 'en') {
    // langBtn.dataset.lang = 'en'
    activeLang.style.transform = 'translateX(0%)'

    langTitleUa.style.color = colorInactive
    langTitleEn.style.color = colorDefaultEn
    countBetweenDates('d', 'mo', 'yr')
  }
}
renderPortfolio()
//! ====================== \/ Count Between Dates \/ ==========================

function countBetweenDates(day, month, year) {
  const dbd = new DaysBetweenDates('.dateLearnCountJS', {
    startDate: '24.06.2021', // 24.06.2021
    endDate: false,
    includingFirstDay: true,
    includingLastDay: true
  })
  
  dbd.$el.innerHTML = `${dbd.countFinalAllD()}${day} (${dbd.calcYear}${year} ${dbd.calcMonths}${month} ${dbd.calcDays}${day})`
}

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
    if (document.querySelector('.birthday')) {
      document.querySelector('.birthday').innerHTML = myBirthday;

    }
  }

  getUserTime (new Date());
}

birthdayDate(2, 10, 1994);

