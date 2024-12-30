import { gitHubToken } from "./Tokens.js";

export class RenderContent {
	constructor(selector, btnicon ,portfolioItems) {
		this.$el = document.querySelector(selector)
		this.portfolioItems = portfolioItems
		this.btnicon = btnicon
		// console.error(this.portfolioItems);
	}

	// async function getLangsRepo() {
	// 	const nickName = fetch('')
	// }
	

	portfolioHtml(){
		return `
		<div class="portfolio__container card-glass">
			<div class="portfolio__title-subtitle-container">
				<div class="portfolio__title-container">
					<h2 class="portfolio__title lng-my-portfolio-section">
						My portfolio</h2>
				</div>
				<div class="portfolio__subtitle-container">
					<h3 class="portfolio__subtitle lng-my-portfolio-section-description"
						My recent works</h3>
				</div>
			</div>
			
			<div class="portfolio-card"
			</div>
		</div>
		`
	}

	// langsPercent(item, className) {
	// 	if (item) {
	// 		return `<div class="portfolio-card__lang portfolio-card__html-lang "><span class=${className}></span>${item}%</div>`
	// 	} else {
	// 		return ''
	// 	}
	// }
	async langsPercent(urlRepo) {
		try {
				const pattern = /github\.com\/([^\/]+\/[^\/]+)/;
				const res = urlRepo.match(pattern);
				const repository = res[1];

				let rs = ``

				function langsPercentRender(icon, percent) {
					if (urlRepo) {
						const res = `<div class="portfolio-card__lang portfolio-card__html-lang "><span class=_icon-${icon}></span>${percent}%</div>`
						// console.error(res);
						return res
					} else {
						return ''
					}
				}

				const myHeaders = new Headers();
				myHeaders.append("Authorization", gitHubToken);

				const requestOptions = {
					method: 'GET',
					headers: myHeaders,
					redirect: 'follow'
				};

				const urlApi = await fetch(`https://api.github.com/repos/${repository}/languages`, requestOptions)
				const result = await urlApi.json()

				const keysResult = Object.keys(result)
				let sumAllCode = keysResult.reduce((sum, elem) => {
					return sum + result[elem]
				},0)

				// if (keysResult) return // ! ==========

				keysResult.forEach(elem => {
					if (typeof result[elem] === 'number') {
						const percentCode = Math.round(result[elem] / sumAllCode * 100 * 10) / 10
						rs += langsPercentRender(elem, percentCode)
					}
				})
			return rs
		} catch (error) {
			console.error('Помилка у функції langsPercent:', error);
			return '';
		}
	}

	descriptionText(arr) {
		let selectHashLang = window.location.hash.substring(1)
		if (selectHashLang) {
			if (arr[selectHashLang]) {
				return arr[selectHashLang]
			} else {
				return ''
			}
		} 
	}
	

	async portfolioCards() {
    const elementToRemove = document.querySelector('.portfolio-card');
    elementToRemove.querySelectorAll('.portfolio-card__container').forEach(element => {
			element.remove();
    });
		
		
    if (['ua', 'en'].includes(window.location.hash.substring(1))) {
			this.$portfolioCards = document.querySelector('.portfolio-card');
			
			const portfolioCardsHtml = await Promise.all(this.portfolioItems.map(async (item) => {
				// const lngBtnName = await this.langsPercent(item.btnName);
				
				let lng = '<span class="freelance-mark"><span class="_icon-hire"></span>Freelance Project</span>'
				let classProject = ''
				let gitBtn = `${this.btnicon.iconGitHub}${this.btnicon.textBtnGitHub}`
				let urlGitHub = item.urlGitHub
				
				if (item.class) {
					classProject = item.class
				}
				if (item.btnName) {
					gitBtn = `<span class="_icon-link"></span>${item.btnName[window.location.hash.substring(1)]}`
				}
				if (!item.urlGitHub) {
					urlGitHub = item.urlVisit
				}
				if (item.urlGitHub) {
					lng = await this.langsPercent(item.urlGitHub)
				}

            return `
                <div class="portfolio-card__container ${classProject}">
				<a target="_blank"" 
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
									${lng}
								</div>
								<a target="_blank" class="portfolio-card__button portfolio-card__button-git" 
									href=${urlGitHub}>${gitBtn}
								</a>
							</div>
						</div>
				</a>
			</div>
            `;
        }));

        this.$portfolioCards.innerHTML = portfolioCardsHtml.join('');
    }
}


	htmlRender() {
		this.$el.insertAdjacentHTML('beforeend', this.portfolioHtml()) 
		}

	delPortfolio() {
		const elementToRemove = document.querySelector('.portfolio-card');
		if (elementToRemove) {
			elementToRemove.querySelectorAll('.portfolio-card__container').forEach(element => {
				element.remove()
				if (element) {
				}
			});
		}
	}
}

// ${this.langsPercent(item.langVue, "_icon-vue")}
// ${this.langsPercent(item.langTS, "_icon-ts")}
// ${this.langsPercent(item.langJs, "_icon-js")}
// ${this.langsPercent(item.langCss, "_icon-css")}
// ${this.langsPercent(item.langHtml, "_icon-html")}