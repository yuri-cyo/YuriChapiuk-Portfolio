import { RenderContent } from "./templateHTML.js";

export function renderPortfolio() {
	const renderContent = new RenderContent('.portfolio', {
			//! Buttons & icons
			textBtnGitHub: 'GitHub',
			iconGitHub: '<span class="_icon-github"></span>'
	}, [
		{
			//! Card 6
			title: 'Simple List Products',
			icon: 'img/portfolio/favicon/favicon-Simple-List-Products.svg',
			description: "This app automates store product management, using Electron.js and Vue 3 for the interface.",
			imageUrl: 'img/portfolio/Simple-List-Products.png',
			urlGitHub: 'https://github.com/yuri-cyo/Simple-List-Products',
			urlVisit: 'https://github.com/yuri-cyo/Simple-List-Products',
			langCss: '12.2',
			langJs: '8.1',
			langVue: '79.7',
			// langCss: '<div class="portfolio-card__lang portfolio-card__html-lang "><span class="_icon-css"></span>40%</div>',
		},
		{
			//! Card 5
			title: 'iCalcM+',
			icon: 'img/portfolio/favicon/favicon-iCalcM+.png',
			description: 'Calculator in iOS style with M+ function (in development)',
			imageUrl: 'img/portfolio/iCalcM+Scroeen.png',
			urlGitHub: 'https://github.com/yuri-cyo/ICalcJS',
			urlVisit: 'https://yuri-cyo.github.io/ICalcJS/',
			langHtml: '1.3',
			langCss: '41.1',
			langJs: '57.6'
			// langCss: '<div class="portfolio-card__lang portfolio-card__html-lang "><span class="_icon-css"></span>40%</div>',
		},
		{
			//! Card 4
			title: 'Days Between Dates',
			icon: 'img/portfolio/favicon/favicon-DaysBetweenDates.svg',
			description: 'Date calculator for calculating the number of days between two specified dates',
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
			description: 'Landing page website, with scrolling animations and animations relative to the mouse position',
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
			description: 'Landing page website, using swiper.js',
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
			description: 'Landing page website, using swiper.js',
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

}