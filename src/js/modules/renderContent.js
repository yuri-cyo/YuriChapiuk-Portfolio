import { RenderContent } from "./templateHTML.js";



export function renderPortfolio() {
	const renderContent = new RenderContent('.portfolio', {
			//! Buttons & icons
			textBtnGitHub: 'GitHub',
			iconGitHub: '<span class="_icon-github"></span>'
	}, [
		{
			//! Card 6
			title: 'iCalcHishoryM+',
			icon: 'img/portfolio/favicon/favicon-iCalcM+.png',
			description: {
				'en': "A modern iOS-style calculator with M+ memory and calculation history",
				'ua': "Сучасний калькулятор у стилі iOS з функцією пам’яті M+ та історією обчислень"
			},
			imageUrl: 'img/portfolio/iCalcM+Scroeen.png',
			urlGitHub: 'https://github.com/yuri-cyo/iCalcHistoryTS',
			urlVisit: 'https://yuri-cyo.github.io/iCalcHistoryTS/',
			langHtml: '5.9',
			langCss: '35.5',
			langTS: '58.6'
			// langCss: '<div class="portfolio-card__lang portfolio-card__html-lang "><span class="_icon-css"></span>40%</div>',
		},
		{
			//! Card 5
			title: 'Simple List Products',
			icon: 'img/portfolio/favicon/favicon-Simple-List-Products.svg',
			description:{
				'en': "This app automates store product management, using Electron.js and Vue 3 for the interface",
				'ua': "Десктопна програма автоматизації і управління магазином. З використанням Electron.js і Vue 3"
			},
			imageUrl: 'img/portfolio/Simple-List-Products.png',
			urlGitHub: 'https://github.com/yuri-cyo/Simple-List-Products',
			urlVisit: 'https://github.com/yuri-cyo/Simple-List-Products',
			langCss: '12.2',
			langJs: '8.1',
			langVue: '79.7',
			// langCss: '<div class="portfolio-card__lang portfolio-card__html-lang "><span class="_icon-css"></span>40%</div>',
		},
		{
			//! Card 4
			title: 'Days Between Dates',
			icon: 'img/portfolio/favicon/favicon-DaysBetweenDates.svg',
			description: {
				'en': "Date calculator for calculating the number of days between two specified dates",
				'ua': "Калькулятор дат для розрахунку кількості днів між двома вказаними датами"
			},
			imageUrl: 'img/portfolio/DaysBetweenDates2.png',
			urlGitHub: 'https://github.com/yuri-cyo/Days-Between-Dates/',
			urlVisit: 'https://yuri-cyo.github.io/Days-Between-Dates/',
			langHtml: '2.7',
			langCss: '41.9',
			langJs: '54.9'
			// langCss: '<div class="portfolio-card__lang portfolio-card__html-lang "><span class="_icon-css"></span>40%</div>',
		},
		{
			//! Card 3
			title: 'Farm Vest',
			icon: 'img/portfolio/favicon/favicon-farm-vest.svg',
			description: {
				'en': "Landing page website, with scrolling animations and animations relative to the mouse position",
				'ua': "Односторінковий сайт з анімацією прокрутки та анімацією відносно положення миші"
			},
			imageUrl: 'img/portfolio/FarmVest.jpg',
			urlGitHub: 'https://github.com/yuri-cyo/FarmVest/',
			urlVisit: 'https://yuri-cyo.github.io/FarmVest/',
			langHtml: '4.9',
			langCss: '47.8',
			langJs: '46.9'
		
		},
		{
			//! Card 2
			title: 'Focus',
			icon: 'img/portfolio/favicon/favicon-focus.svg',
			description: {
				'en': "Landing page website, using swiper.js",
				'ua': "Односторінковий сайт, з використанням swiper.js"
			},
			imageUrl: 'img/portfolio/website-1.png',
			urlGitHub: 'https://github.com/yuri-cyo/Task-for-Ideil-Focus-/tree/master',
			urlVisit: 'https://yuri-cyo.github.io/Task-for-Ideil-Focus-/',
			langHtml: '59.6',
			langCss: '34.8',
			langJs: '5.6'
		},
		{
			//! Card 1
			title: 'Instrumental',
			icon: 'img/portfolio/favicon/favicon-instrumental.svg',
			description: {
				'en': "Landing page website, using swiper.js",
				'ua': "Односторінковий сайт, з використанням swiper.js"
			},
			imageUrl: 'img/portfolio/website-2.png',
			urlGitHub: 'https://github.com/yuri-cyo/Instrumental-V2.0/tree/master',
			urlVisit: 'https://yuri-cyo.github.io/Instrumental-V2.0/',
			langHtml: '5.1',
			langCss: '45.7',
			langJs: '49.2'
		},
	])
	
	renderContent.htmlRender()
	renderContent.portfolioCards()
	
	
	function portfoliosBannerCount() {
		const $portfoliosMenu = document.querySelector('.menu-lit-portfolio')
		// renderContent.portfolioItems
		let countPortfolios = 0
		for (let key in renderContent.portfolioItems) {
			countPortfolios += 1
		}
		$portfoliosMenu.dataset.bunner = countPortfolios
		if (!countPortfolios) {
			// $portfoliosMenu.style.display = 'none'
			$portfoliosMenu.classList.remove('menu-lit-portfolio')
		}
	}
	portfoliosBannerCount()
	
	document.querySelector('.nav-lang').addEventListener('click', (e)=> {
		console.log('document.querySelector(.nav-lang).addEventListener', e);
		renderContent.portfolioCards()
	})
}
