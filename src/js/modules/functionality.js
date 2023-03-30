export class DaysBetweenDates {
	constructor(selector, option) {
		this.$el = document.querySelector(selector)
		this.startDate = option.startDate
		this.endtDate = option.endDate
		this.includingFirstDay = option.includingFirstDay
		this.includingLastDay = option.includingLastDay
		
		this.liveY = new Date().getFullYear(); //? Сьогоднішній рік!
		this.liveM = new Date().getMonth() + 1; //? Сьогоднішній місяць!
		this.liveD = new Date().getDate(); //? Сьогоднішній день!
		// console.log('Сьогоднішня дата', this.liveD, this.liveM, this.liveY);

		this.arrMonths = []
		this.clearArrM = []
		this.arrMinusZeroM = []

		this.lastD = 0
		this.firstD = 0

		this.calcDays = 0
		this.calcMonths = 0
		this.calcYear = 0

		this.daysAllCount()
		this.editMStartEnd()
		this.editDStartEnd()
		this.countDMY()
		
	}

	startDateEnter(mod) {
		switch (mod) {
			case 'D':
				return this.startDate.split('.').map(Number)[0]
				break;
			case 'M':
				return this.startDate.split('.').map(Number)[1]
				break;
			case 'Y':
				return this.startDate.split('.').map(Number)[2]
				break;
		}
	}
	
	calendarGen(year) {
		const daysArray = [];

		for (let i = 0; i < 12; i++) {
			const daysInMonth = new Date(year, i + 1, 0).getDate();
			daysArray.push(daysInMonth);
		}
		return daysArray;
}

// calendarGen(year) { //! OLD my fUnction Сума днів в одному році
	// 	this.sumDaysInYear = 0 
	
// 	this.monthsInYear = [];
// 	for (let iM = 1; 12 >= iM; iM++) {
// 		if (iM <= 7) {
// 			if (iM % 2 === 0) {
// 				this.monthsInYear.push(30);
// 			} else {
// 				this.monthsInYear.push(31)
// 			}
// 		}
// 		if (iM >= 8) {
// 			if (iM % 2 === 0) {
// 				this.monthsInYear.push(31);
// 			} else {
// 				this.monthsInYear.push(30)
// 			}
// 		}
// 	}

// 	if (year % 4 === 0){
// 		this.monthsInYear[1] = 29;
// 		console.log(`${year} р. - високосний, Лютий 29`);
// 	} else {
// 		this.monthsInYear[1] = 28;
// 		console.log(`${year} р. - не високосний, Лютий 28`);
// 	}
	
// 	//* ====================================================================================================
// 	this.monthsInYear.forEach(i => {
// 		this.sumDaysInYear += i
// 	})
// 	console.log(`${this.sumDaysInYear} - днів в ${year} році`); //? Кількість днів в році
// 	//* ====================================================================================================
// 	return this.monthsInYear
// }
	
	daysAllCount() {
		for (let iYears = this.startDateEnter('Y'); iYears <= this.liveY; iYears++) {
			// console.log(iYears) //! виводить список рокід від і до заданого
			this.arrMonths = this.arrMonths.concat(this.calendarGen(iYears)) //! складає всі масиви календаря років в один масив (всі дні місяців в один масив)
		}
	}
	
	editMStartEnd() {
		let count = null
		this.arrMonths = this.arrMonths.map((e)=> {
			count += 1
			if (count < this.startDateEnter('M')) {
			return e = 0
			}
			if (count > this.arrMonths.length - 12 + this.liveM) {
			return e = 0
			}
			if (e !== 0) {
			this.clearArrM.push(e)
			this.arrMinusZeroM.push(e)
			}
			return e
		})
		// console.log('this.clearArrM', this.clearArrM)
		this.firstOriginM = this.clearArrM[0]
		this.lastOriginM = this.clearArrM[this.clearArrM.length - 1]
		// console.log('this.firstOriginM', this.firstOriginM);
		// console.log('this.lastOriginM', this.lastOriginM);
	}
		
	editDStartEnd() {
	if (this.includingLastDay === true) {
		this.clearArrM[this.clearArrM.length - 1] = this.liveD
	} else {
		this.clearArrM[this.clearArrM.length - 1] = this.liveD - 1
	}
	
	if (this.includingFirstDay === true) {
		this.clearArrM[0] = this.clearArrM[0] - this.startDateEnter('D') + 1
	} else {
		this.clearArrM[0] = this.clearArrM[0] - this.startDateEnter('D')
	}
	
		// console.log('this.clearArrM', this.clearArrM)
		this.lastD = this.clearArrM[this.clearArrM.length - 1]
		this.firstD = this.clearArrM[0]
		// console.error('this.firstD', this.firstD);
		// console.error('this.lastD', this.lastD);
	}

	countFinalAllD() {
	let days = null
		this.clearArrM.forEach((e)=> {
			days += e
		})
		return days
	}

	countDMY() {
		for (let i = 0; i <= this.clearArrM.length - 1; i++) {
			if (this.clearArrM[i] === this.arrMinusZeroM[i]) {
				this.calcMonths += 1
			} else if (this.clearArrM[i] !== this.arrMinusZeroM[i]){
				this.calcDays += this.clearArrM[i]
			}
		}

		if (this.calcDays >= this.firstOriginM) {
			this.calcDays -= this.firstOriginM
			this.calcMonths += 1
		}
		if (this.calcMonths >= 12) {
			this.calcYear = Math.floor(this.calcMonths / 12)
			this.calcMonths -= 12 * this.calcYear
		}

	}

}


