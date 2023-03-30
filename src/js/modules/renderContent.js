import { RenderContent } from "./templateHTML.js";

export function renderPortfolio() {
	const renderContent = new RenderContent('.portfolio', {
			//! Buttons & icons
			textBtnGitHub: 'GitHub',
			iconGitHub: '<ion-icon name="logo-github"></ion-icon>',
	
			textBntVisit: 'Visit',
			iconVisit: '<ion-icon name="unlink-outline"></ion-icon>'
			
	}, [
		{
			//! Card 1
			title: 'Days Between Dates',
			imageUrl: 'img/portfolio/DaysBetweenDates.jpg',
			urlGitHub: 'https://github.com/Scarbor0/Days-Between-Dates/',
			urlVisit: 'https://scarbor0.github.io/Days-Between-Dates/'
		
		},
		{
			//! Card 2
			title: 'Farm Vest',
			imageUrl: 'img/portfolio/FarmVest.jpg',
			urlGitHub: 'https://github.com/Scarbor0/FarmVest',
			urlVisit: 'https://scarbor0.github.io/FarmVest/'
		
		},
		{
			//! Card 3
			title: 'Focus',
			imageUrl: 'img/website-1.png',
	
			urlGitHub: 'https://github.com/Scarbor0/Task-for-Ideil-Focus-.git',
			urlVisit: 'https://scarbor0.github.io/Task-for-Ideil-Focus-/'
		},
		{
			//! Card 4
			title: 'Instrumental',
			imageUrl: 'img/website-2.png',
	
			urlGitHub: 'https://github.com/Scarbor0/Instrumental-V2.0',
			urlVisit: 'https://scarbor0.github.io/Instrumental-V2.0/'
		}
	])

	renderContent.htmlRender()
	renderContent.portfolioCards()

}