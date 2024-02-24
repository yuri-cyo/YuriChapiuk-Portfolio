import { RenderContent } from "./templateHTML.js"

const name = {
  en: "Yuriy Chapyuk",
  ua: "Юрій Чапюк"
}
const menuTitle = {
  home: {
    en: "Home",
    ua: "Головна"
  },
  about: {
    en: "About Me",
    ua: "Про мене"
  },
  portfolio: {
    en: "Portfolio",
    ua: "Портфоліо"
  },
  contactMe: {
    en: "Contact Me",
    ua: "Контакти"
  },
}

export const translationsArr = {
  "tittle": {
    "en": name.en,
    "ua": name.ua
  },
  //! ======= Menu header ======
  "menu-name": {
    "en": name.en,
    "ua": name.ua
  },
  "menu-home": {
    "en": menuTitle.home.en,
    "ua": menuTitle.home.ua
  },
  "menu-about": {
    "en": menuTitle.about.en,
    "ua": menuTitle.about.ua
  },
  "menu-portfolio": {
    "en": menuTitle.portfolio.en,
    "ua": menuTitle.portfolio.ua
  },
  "menu-contact-me": {
    "en": menuTitle.contactMe.en,
    "ua": menuTitle.contactMe.ua
  },
  //! ======= Main Section ======
  "my-name-is": {
    "en": "Hi, I'm Yuriy",
    "ua": "Привіт, я Юрій"
  },
  "i-study": {
    "en": "I am learning front-end web development:",
    "ua": "Я вивчаю front-end веб-розробку:"
  },
  "btn-download-cv": {
    "en": "View CV",
    "ua": "Переглянути CV"
  },
  "btn-hire-me": {
    "en": "Hire Me",
    "ua": "Найми мене"
  },
  //! ======= About Me Section ======

  "about-me-section": {
    "en": menuTitle.about.en,
    "ua": menuTitle.about.ua
  },
  "about-me-description": {
    "en": `
    <p>Hello, my name is <b>Yuriy Chapyuk</b>, I am <b class="birthday"></b></p>
    <p>I am <b>self-taught</b> in <b>web development</b>. In <b>July 2021</b>, I began my journey into the world of <b>web development</b> by learning the basics of <b>HTML, CSS, and JavaScript.</b>
    </p>
    <p>
      Over time, I created a <b>structured learning plan</b> and fully dedicated myself to the process, step by step. I worked diligently <b>every day</b> and remained committed to my <b>goal</b> of becoming a <b>full-stack web developer</b>.
    </p>
    <p>
      Today, I can proudly say that I have made <b>significant progress</b> and gained important skills in <b>web development</b>.
    </p>
    `,
    "ua": `
      <p>Привіт, мене звати <b>Чапюк Юрій </b>, мені <b class="birthday"></b><b> років</b></p>
      <p>Я <b>самостійно</b> навчаюсь веб-розробці. У <b>Липні 2021 року</b>, я розпочав свою подорож у світ <b>фронтенд розробки</b> з навчання основ <b>HTML, CSS, та JavaScript.</b>
      </p>
      <p>
      З часом я створив <b>структурований план навчання</b> і повністю віддав себе процесу. Я працюю наполегливо кожен день та залишаюся відданим своїй меті - стати <b>Frontend веб-розробником</b>.
      </p>
      <p>
      Сьогодні я можу з гордістю сказати, що досяг значного прогресу та здобув важливі навички у <b>веб-розробці</b>.
      </p>
    `
  },

  //! ======= Skills Section ======

  "skills-section": {
    "en": "Skills",
    "ua": "Навички"
  },

  //! ======= Education Section ======

  "education-section": {
    "en": "Education",
    "ua": "Навчання"
  },
  "specialty-in-college": {
    "en": "Electrical Engineering and Electrotechnologies.<br><br>Installation and Operation of Electrical Equipment for Enterprises and Civil Structures, Junior Specialist.",
    "ua": "Електротехніка та електротехнології.<br><br>Монтаж і експлуатація електроустаткування підприємств та цивільних споруд, молодший спеціаліст"
  },
  "college-name": {
    "en": "Novovolynsk Electromechanical College",
    "ua": "Нововолинський електромеханічний коледж"
  },
  "specialty-in-university": {
    "en": '"Electrical Engineering", obtained qualification of Bachelor in Electrical Engineering',
    "ua": '"Електротехніка та електротехнології", здобув кваліфікацію бакалавра, технічний фахівець-електрик'
  },
  "university-name": {
    "en": "Lutsk National Technical University",
    "ua": "Луцький національний університет"
  },
  "courses": {
    "en": "Marathon from GoIT - Frontend Web Developer",
    "ua": "Марафон від GoIT - Frontend Web Developer"
  },
  "place-study": {
    "en": "Remote",
    "ua": "Віддалено"
  },
  "date-self-education": {
    "en": "07.2021 - Present",
    "ua": "07.2021 - по сьогоднішній день"
  },
  "what-a-study": {
    "en": "Self-Education",
    "ua": "Самонавчання"
  },
  "where-a-study": {
    "en": "At Home",
    "ua": "Вдома"
  },

  //! ======= Work Section ======

  "work-section": {
    "en": "Work",
    "ua": "Робота"
  },
  "work-experience": {
    "en": "No work experience in web development",
    "ua": "Без досвіду роботи в <nobr>веб-розробці</nobr>"
  },
  "work-experience-description": {
    "en": "A place of work will appear in the future ;)",
    "ua": "Місце роботи з'явиться в майбутньому;)"
  },

  //! ======= My portfolio ======

  "my-portfolio-section": {
    "en": "My portfolio",
    "ua": "Моє портфоліо"
  },
  "my-portfolio-section-description": {
    "en": "My recent works",
    "ua": "Мої останні роботи"
  },

  //! ======= Card portfolio => renderContent.js ======

  //! ======= Contact Me Section ======

  "contact-me-section": {
    "en": "Contact Me",
    "ua": "Мої контакти"
  },
  "contact-me-section-description": {
    "en": "Get In Touch",
    "ua": "Будемо на зв'язку"
  },
  "btn-my-location-description": {
    "en": "My Location",
    "ua": "Моє місцезнаходження"
  },
  "location": {
    "en": "Ukraine - Novovolynsk",
    "ua": "Україна - Нововолинськ"
  },
  "form-name": {
    "en": "Name",
    "ua": "Ім'я"
  },
  "form-message": {
    "en": "Message",
    "ua": "Повідомлення"
  },
  "form-send-message": {
    "en": "Send Message",
    "ua": "Відправити"
  },
  //! ======= Footer Section ======
  "footer-my-name": {
    "en": name.en,
    "ua": name.ua
  },

} 


//  Я створив структурований план навчання та повністю віддав себе процесу, крок за кроком. Я працюю наполегливо кожен день та залишався відданим своїй меті - стати Frontend веб-розробником. Сьогодні я можу з гордістю сказати, що досяг значного прогресу та здобув важливі навички веб-розробки.