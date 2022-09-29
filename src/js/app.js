// import { cli } from "webpack";
import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp();


// import Swiper, { Navigation, Pagination } from 'swiper';
// const swiper = new Swiper();



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


burgerButton.addEventListener('click', ()=>{
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

// !================ \/ Плавная прокрутка до якоря \/ =============
// const anchors = document.querySelectorAll('a[href*="#"]')
// for (let anchor of anchors) {
//   anchor.addEventListener("click", function(event) {
//     event.preventDefault();
//     const blockID = anchor.getAttribute('href')
//     document.querySelector('' + blockID).scrollIntoView({
//       behavior: "smooth",
//       block: "start"
//     })
//   })
// }
// !================ /\ Плавная прокрутка до якоря /\ =============

//! Nav mark list & scroll smoth to section
// const getId = (link) => link.getAttribute('href').replace('#','');

// const observer = new IntersectionObserver((entries)=> {
//   entries.forEach((entry) => {
//     if (entry.isIntersecting) {
//       document.querySelectorAll('.nav-list__item-link').forEach((link) => {
//         link.classList.toggle('nav-list__item-link--active', getId(link) === entry.target.id
//         );
//       });
//     };
//   });
// }, { 
//   threshold: 0.3,
//   // threshold: 0.1,
// });

// document.querySelectorAll('.section').forEach(
//   (section) => observer.observe(section),
// );

// document.querySelector('.nav-list').addEventListener('click', (event) => {
//   if (event.target.classList.contains('nav-list__item-link')) {
//     event.preventDefault();

//     // const id = event.target.getAttribute('href').replase('#', '');
//     // const id = getId(event,target);
//     // window.scrollTo({
//     //   top: document.getElementById(getId(event.target)).offsetTop,
//     //   behavior: 'smooth',
//     // });
//   };
// });

// !плавна прокрутка + Active Nav Anchor(робив сам)

const activeClassNav = 'nav-list__item-link--active'; //! Активний клас! 
const fixDoubleClasses = 400; //! Фікс накладання класів. Віднімає висоту тригера (де 0 - викл)

addEventListener('scroll', funcWindowHeight);
function funcWindowHeight() {
  let arrHeightSections = [];
  const anchors = document.querySelectorAll('a[href*="#"]')
  
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
    const heightSections = allSections.getBoundingClientRect().height; //* Висота секції
    const coordSections = allSections.getBoundingClientRect().top; //* координати секції
    
    arrHeightSections.push(parseInt(heightSections));
    const activeHeight = fixDoubleClasses;
    // const activeHeight = Math.min(...arrHeightSections) - fixDoubleClasses;

    // console.log(activeHeight);
    // console.log(' ');

    if (activeHeight <= coordSections + heightSections && 
        activeHeight >= coordSections) {
      allNavLinks.classList.add(activeClassNav)
    } else {
      allNavLinks.classList.remove(activeClassNav)
    }
  }
}

//! NPM active-menu-link 
// import ActiveMenuLink from "active-menu-link";
// let options = {
//   activeClass: "nav-list__item-link--active",
//   scrollOffset: -250,
//   default: 100
//   // scrollDuration: 700
// };

// new ActiveMenuLink(".navbar", options);
// // options.activeClass.setTimeout(500)


//!typewriter
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
        //console.log(document.getElementById("text").innerHTML);
    }

// typeWriter();
window.setTimeout(typeWriter, 1000);


// function deltxt() {
//      if (A <= txt.length) {
//          document.getElementById("text").innerHTML = txt.slice(0, -A);
//          A++;
//          setTimeout(deltxt, 50);
//        }
//     }
//     var backward = speed * txt.length + 1000   ;
//     // console.log(backward);
//     setTimeout( function () {
//      deltxt();
//     },backward);


//MENU mousemove
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

//MENU active class and hovered
	function activeLink() {
		list.forEach((item) =>
			item.classList.remove('active'));
			this.classList.add('active');
	}

	list.forEach((item) =>
	item.addEventListener('click', activeLink)); // mousemove or click


//! ============= Birthday calc date ===================

// function addLeadingZero (d) {
//   return (d < 10) ? '0' + d : d;
// }

function getUserTime(t) {
  let Y = t.getFullYear();
  // let M = addLeadingZero(t.getMonth() + 1);
  let M = t.getMonth() + 1;
  let d = t.getDate();

  const myBirthdayY = 1994;
  const myBirthdayM = 10;
  const myBirthdayd = 2;

  // console.log(`без розрах ${myBirthday}`);

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
  
  // console.log(Y, M, d);
  // console.log(`мені зараз ${myBirthday} років`);
  // console.log(myBirthday);
}

getUserTime (new Date());


// //!  =================================== Form ====================================

"use strict"

document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('form');
  form.addEventListener('submit', formSend);

  const formAllInputs = document.querySelectorAll('.contact-me__content');
  // console.log(formSendingAnimated);

  async function formSend(e) {
    e.preventDefault();

    let error = formValidate(form);

    let formData = new FormData(form);

    // for (let i = 0; i < formAllInputs.length; i++) { //! Анімація 2 відправки форми кожного з лейблів
    //   let listInputs = formAllInputs[i]
    //   listInputs.classList.add('_sending-mail')

    //   console.log(listInputs);
    // }

    // form.classList.add('_sending') //! вкл анімацію відправки форми


    // formData.append('image', formImage.files[0]); 

    if (error === 0) {

      form.classList.add('_sending');  //! клас для css анімації процеса відправки форми

      let response = await fetch('sendmail.php', {
        method: 'POST',
        body: formData
      });
      if (response.ok) {
        let result = await response.json(); 
        alert(result.message);
        formPreview.innerHTML = '';
        form.reset();
        form.classList.remove('_sending');
      } else {
        alert('Error');
        form.classList.remove('_sending');
      }

    } else {
      console.log('Заповніть обовязкові поля');
  //     console.log('Заповніть обовязкові поля');
    }
  }

  function formValidate(form) {
    let error = 0;
    let formReq = document.querySelectorAll('._req');

    for (let index = 0; index < formReq.length; index++) {
      const input = formReq[index];
      formRemoveError(input);

      if(input.classList.contains('_email')){
        if(emailTest(input)){
            formAddError(input);
            error++;
          }
        } else if (input.getAttribute('type') === 'checkbox' && input.checked === false){
            formAddError(input);
            error++;
        } else {
            if (input.value === ''){
                formAddError(input);
                error++;
        }
      }
    }
    return error;
  }
  function formAddError(input) {
    input.parentElement.classList.add('_error');
    input.classList.add('_error');

    // setTimeout(() => {
    //   input.parentElement.classList.remove('_error');
    // }, 5000);
    
  }
  function formRemoveError(input) {
    input.parentElement.classList.remove('_error');
    input.classList.remove('_error');
  }
  // Функція місця email
  function emailTest(input) {
    return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
  }
});