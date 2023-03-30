export class RenderContent {
	constructor(selector, btnicon ,portfolioItems) {
		this.$el = document.querySelector(selector)
		this.portfolioItems = portfolioItems
		this.btnicon = btnicon
	}

	portfolioHtml(){
		return `
		<div class="portfolio__container card-glass">
			<div class="portfolio__title-subtitle-container">
				<div class="portfolio__title-container">
					<h2 class="portfolio__title"
						data-aos="fade-up"
						data-aos-delay="50">
						My portfolio</h2>
				</div>
				<div class="portfolio__subtitle-container">
					<h3 class="portfolio__subtitle"
						data-aos="fade-right"
						data-aos-delay="150">
						My recent works</h3>
				</div>
			</div>

			<div class="portfolio-card"
				data-aos="fade-up"
				data-aos-delay="250">
			
			</div>
		</div>
		`
	}

	portfolioCards() {
		this.$portfolioCards = document.querySelector('.portfolio-card')
		const portfolioCardsHtml = this.portfolioItems.map(item => `

		<div class="portfolio-card__container">
				<div class="portfolio-card__img-container">
					<img src=${item.imageUrl} alt=${item.title}>
				</div>
					<div class="portfolio-card__description-container">
					<h3 class="portfolio-card__title">${item.title}</h3>
					<div class="portfolio-card__buttons-container">
						<a target="_blank" class="button portfolio-card__button portfolio-card__button-left" href=${item.urlGitHub}>${this.btnicon.iconGitHub}${this.btnicon.textBtnGitHub}</a>
						<a target="_blank" class="button portfolio-card__button portfolio-card__button-right" href=${item.urlVisit}>${this.btnicon.iconVisit}${this.btnicon.textBntVisit}</a>
					</div>
				</div>
		</div>

	`).join('');
		this.$portfolioCards.insertAdjacentHTML('beforeend', portfolioCardsHtml)
	}

	htmlRender() {
		this.$el.insertAdjacentHTML('beforeend', this.portfolioHtml()) 
	}
}