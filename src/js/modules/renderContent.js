import { RenderContent } from "./templateHTML.js";

export function renderPortfolio() {
	const renderContent = new RenderContent('.portfolio', {
			//! Buttons & icons
			textBtnGitHub: 'GitHub',
			iconGitHub: '<span class="_icon-github"></span>'
	}, [
		{
			//! Card 1
			title: 'Days Between Dates',
			icon: 'img/portfolio/favicon/favicon-DaysBetweenDates.svg',
			description: 'Date calculator for calculating the number of days between two specified dates',
			imageUrl: 'img/portfolio/DaysBetweenDates2.png',
			urlGitHub: 'https://github.com/Scarbor0/Days-Between-Dates/',
			urlVisit: 'https://scarbor0.github.io/Days-Between-Dates/',
			langHtml: '2.7',
			langCss: '41.9',
			langJs: '54.9'
			// langCss: '<div class="portfolio-card__lang portfolio-card__html-lang "><span class="_icon-css"></span>40%</div>',
		},
		{
			//! Card 2
			title: 'Farm Vest',
			icon: 'img/portfolio/favicon/favicon-farm-vest.svg',
			description: 'Landing page website, with scrolling animations and animations relative to the mouse position',
			imageUrl: 'img/portfolio/FarmVest.jpg',
			urlGitHub: 'https://github.com/Scarbor0/FarmVest',
			urlVisit: 'https://scarbor0.github.io/FarmVest/',
			langHtml: '4.9',
			langCss: '47.8',
			langJs: '46.9'
		
		},
		{
			//! Card 3
			title: 'Focus',
			icon: 'img/portfolio/favicon/favicon-focus.svg',
			description: 'Landing page website, using swiper.js',
			imageUrl: 'img/portfolio/website-1.png',
			urlGitHub: 'https://github.com/Scarbor0/Task-for-Ideil-Focus-.git',
			urlVisit: 'https://scarbor0.github.io/Task-for-Ideil-Focus-/',
			langHtml: '59.6',
			langCss: '34.8',
			langJs: '5.6'
		},
		{
			//! Card 4
			title: 'Instrumental',
			icon: 'img/portfolio/favicon/favicon-instrumental.svg',
			description: 'Landing page website, using swiper.js',
			imageUrl: 'img/portfolio/website-2.png',
			urlGitHub: 'https://github.com/Scarbor0/Instrumental-V2.0',
			urlVisit: 'https://scarbor0.github.io/Instrumental-V2.0/',
			langHtml: '5.1',
			langCss: '45.7',
			langJs: '49.2'
		}
	])

	renderContent.htmlRender()
	renderContent.portfolioCards()

}