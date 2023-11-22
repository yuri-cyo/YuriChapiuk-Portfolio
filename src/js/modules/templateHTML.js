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

	langsPercent(item, className) {
		if (item) {
			return `<div class="portfolio-card__lang portfolio-card__html-lang "><span class=${className}></span>${item}%</div>`
		} else {
			return ''
		}
	}
	descriptionText(text) {
		if (text) {
			return text
		} else {
			return ''
		}
	}
	
	portfolioCards() {
		this.$portfolioCards = document.querySelector('.portfolio-card')
		const portfolioCardsHtml = this.portfolioItems.map(item => `
		
		<div class="portfolio-card__container">
			<a target="_blank" class="" 
			href=${item.urlVisit}>
					<div class="portfolio-card__img-container">
						<img src=${item.imageUrl} alt=${item.title}>
					</div>
					<div class="portfolio-card__info-container">
						<div class="portfolio-card__tittle-parent">
							<img class="portfolio-card__icon" src=${item.icon} alt="favicon">
							<div class="portfolio-card__text-wrapper">
								<h3 class="portfolio-card__title">${item.title}</h3>
								<p class="portfolio-card__description">${this.descriptionText(item.description)}</p>
							</div>
						</div>
						<div class="portfolio-card__buttons-container">
							<div class="portfolio-card__languages">
								${this.langsPercent(item.langVue, "_icon-vue")}
								${this.langsPercent(item.langTS, "_icon-ts")}
								${this.langsPercent(item.langJs, "_icon-js")}
								${this.langsPercent(item.langCss, "_icon-css")}
								${this.langsPercent(item.langHtml, "_icon-html")}
							</div>
							<a target="_blank" class="portfolio-card__button portfolio-card__button-git" 
								href=${item.urlGitHub}>${this.btnicon.iconGitHub}${this.btnicon.textBtnGitHub}
							</a>
						</div>
					</div>
			</a>
		</div>

	`).join('');
		this.$portfolioCards.insertAdjacentHTML('beforeend', portfolioCardsHtml)
	}

	htmlRender() {
		this.$el.insertAdjacentHTML('beforeend', this.portfolioHtml()) 
	}
}