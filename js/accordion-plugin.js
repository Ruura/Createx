/*document.addEventListener('DOMContentLoaded', () => { //DOMContentLoaded - браузер полностью загрузил HTML, было построено DOM-дерево
  const accordions = document.querySelectorAll('.accordion'); //находим все аккордионы со страницы
  
  accordions.forEach(el => {   //пробегаем по все аккордионам
		
		el.addEventListener('click', (e) => {  //создаем клик и нам понадобится объект события
			const self = e.currentTarget;   //currentTarget - указывает на эл-т,на котором установлен обработчик события
			const control = self.querySelector('.accordion_btn'); //находим текущий эл-т на который нажали
			const content = self.querySelector('.accordion_content'); //далее находим текущий контент

			self.classList.toggle('open'); //по клику добавляй/удаляй класс open

			// если открыт аккордеон
			if (self.classList.contains('open')) { //если имеется класс open
				control.setAttribute('aria-expanded', true); //то у accordion_btn поменяй aria-expanded на true
				content.setAttribute('aria-hidden', false);  //а у accordion_content поменяй aria-hidden на false
				content.style.maxHeight = content.scrollHeight + 'px'; //меняем высоту accordion_content спец свойством scrollHeight + 'px' (высота складывается из того что внутри и их св-в)
			} else { //иначе,когда аккордион закрыт, все наоборот сделать
				control.setAttribute('aria-expanded', false);
				content.setAttribute('aria-hidden', true);
				content.style.maxHeight = null; //убирем стили высоты у accordion_content
			}
		});
	});
}); */

class GraphAccordion { //создаем класс
	constructor(selector, options) { //в нем будет конструктор и опции
		let defaultOptions = { //создали объект того что будет по умолчанию
			isOpen: () => {}, //событие isOpen
			isClose: () => {}, //событие isClose
			speed: 300 //скорость открытия аккордиона
		};
        //this - ссылка на объект
		this.options = Object.assign(defaultOptions, options); //совмещение опций по умолчанию и опций из плагина
		this.accordion = document.querySelector(selector); //ищем аккордион, переменная .accordion которая будет использоваться в файле accordion.js
		this.control = this.accordion.querySelector('.accordion_btn'); //находим текущий эл-т на который нажали
		this.content = this.accordion.querySelector('.accordion_content'); //далее находим текущий контент
		this.event(); //вызовем метод event
		this.start(); //вызовем метод start
	}

	start() { //создаем функцию start - будет запускаться сразу при загрузке страницы
		if (this.accordion) { //проверяем есть ли аккордион на странице
			if (this.accordion.classList.contains('is-open')) { //если имеется класс is-open
				this.open(); //то делаем метод open
			}
		}
	}

    event() { //создаем метод event
        console.log('event!');
		
		if (this.accordion) { //проверяем есть ли аккордион на странице
			this.accordion.addEventListener('click', (e) => { //создаем клик и нам понадобится объект события
				this.accordion.classList.toggle('is-open'); //по клику добавляем/удаляем класс open

				if (this.accordion.classList.contains('is-open')) { //если имеется класс open
					this.open(); //то делаем метод open
				} else {
					this.close(); //иначе делаем метод close
				}
			});
		}
    }

    open() { //создаем метод open
		//this.accordion.style.setProperty('transition-duration', `${this.options.speed / 1000}s`); //смена скорости открытия аккордиона на какое то значение
		this.accordion.classList.add('is-open'); //добавить класс is-open
		this.control.setAttribute('aria-expanded', true); //у accordion_btn поменяй aria-expanded на true
		this.content.setAttribute('aria-hidden', false);   //а у accordion_content поменяй aria-hidden на false
		this.content.style.maxHeight = this.content.scrollHeight + 'px'; //меняем высоту accordion_content спец свойством scrollHeight + 'px' (высота складывается из того что внутри и их св-в)
		this.options.isOpen(this); //вызываем метод isOpen
	}

	close() { //создаем метод close
		this.accordion.classList.remove('is-open'); //удалить класс is-open
		this.control.setAttribute('aria-expanded', false);
		this.content.setAttribute('aria-hidden', true);
		this.content.style.maxHeight = null; //убирем стили высоты у accordion_content
		this.options.isClose(this); //вызываем метод isClose
	}
}