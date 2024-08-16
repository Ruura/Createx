const portfolioTabs = document.querySelector('.portfolio_tabs'); //блок вкладок
const portfolioTab = document.querySelectorAll('.portfolio_tab'); //вкладка
const portfolioCard = document.querySelectorAll('.portfolio_card'); //карточка
const portfolioCardVisible = document.querySelectorAll('.portfolio_card-visible'); //видимые карточки
const loadMore = document.querySelector('.load_more_btn'); //кнопка Load more

//функция проверки количества карточек и загрузки кнопки Load more
const isLoadMoreNeeded = (selector) => { //selector - входной параметр
	if (selector.length <= 9) { //если длина селектора больше или равна 9, то
		loadMore.style.display = 'none'; //кнопки Load more не будет
	} else {
		loadMore.style.display = 'inline-flex'; //иначе она будет, стиль display по умолчанию который стоял
	}
};

//Функция скрытия карточек. Проверяем их кол-во, если больше 9, то будет скрывать их
const hideCards = (selector) => {
	if (selector.length > 9) { //если у селектора длина больше 9, то
		const arr = Array.from(selector); //тогда создаем массив(всех карточек),чтобы можно было из него вырезать нужные эл-ты
		const hiddenCards = arr.slice(9, selector.length); //Скрытые карточки. Из всего массива карточек начиная с 10 эл-та и до длины всех эл-тов/конца массива
	
		hiddenCards.forEach(el => { //проходим по всем скрытым карточкам и будем все их скрывать
			el.classList.remove('portfolio_card-visible'); //удаляя класс portfolio_card-visible
			el.classList.remove('portfolio_card-visible_more'); //и удаляя класс portfolio_card-visible_more
		});
	}  
};

portfolioTabs.addEventListener('click', (e) => {  //делаем событие клика на весь список вкладок
	const target = e.target;
	if (target.classList.contains('portfolio_tab')) { //если клик был по кнопке(класс portfolio_tab) то только тогда продолжаем дейтсвия
		const path = target.dataset.path;  //ищем текущий элемент

		portfolioTab.forEach(el => {  //проходим по всем кнопкам
			el.classList.remove('portfolio_tab_active') //и удаляем класс portfolio_tab_active(заливку кнопки)
		});
		target.classList.add('portfolio_tab_active'); //а потом добавляем его

		portfolioCard.forEach(el => { //проходим по всем карточкам и будем все их скрывать
			el.classList.remove('portfolio_card-visible'); //удаляя класс portfolio_card-visible
			el.classList.remove('portfolio_card-visible_more'); //и удаляя класс portfolio_card-visible_more
		}); 
	
		document.querySelectorAll(`[data-target="${path}"]`).forEach(el => { //а тем карточкам где data-target совпадает с data-path добавляем класс portfolio_card-visible(с display:block) они будут видны
			el.classList.add('portfolio_card-visible');
		});

		isLoadMoreNeeded(document.querySelectorAll(`[data-target="${path}"]`)); //если при загрузке страницы, карточек где data-target совпадает с data-path больше или равно 9, то кнопки Load more не будет, а если меньше 9, то будет(стиль display по умолчанию который стоял)
		hideCards(document.querySelectorAll('.portfolio_card-visible')); //если при загрузке страницы видимых карточек больше или равно 9, то начиная с 10 скрываем их

		if (path == 'all') { //если есть data-path="all"
			portfolioCard.forEach(el => { 
				el.classList.add('portfolio_card-visible'); //то всем эл-там добавляем класс portfolio_card-visible(все будут в этой вкладке)
			}); 

			isLoadMoreNeeded(document.querySelectorAll('.portfolio_card-visible')); //если при загрузке страницы видимых карточек больше или равно 9, то кнопки Load more не будет, а если меньше 9, то будет(стиль display по умолчанию который стоял)
			hideCards(document.querySelectorAll('.portfolio_card-visible')); //если при загрузке страницы видимых карточек больше или равно 9, то начиная с 10 скрываем их
		}
	}
});

hideCards(portfolioCard); //при загрузке страницы, проверяем карточки на скрытие,если их больше 9, то начиная с 10 скрываем их
isLoadMoreNeeded(portfolioCardVisible); //при загрузке страницы, проверяем сколько видимых эл-тов,если их больше или равно 9, то кнопки Load more не будет, если меньше - то она будет(стиль display по умолчанию который стоял)

loadMore.addEventListener('click', (e) => { //делаем событие клика на кнопке Load more
	const visibleCard = document.querySelectorAll('.portfolio_card-visible'); //находим заново текущие видимые карточки,т.к. они все время меняются. создаем новую переменную по ним

	const path = document.querySelector('.portfolio_tab_active').dataset.path; //Нужный data-path. ищем текущую нажатую вкладку и забираем у нее data-path

	if (path == 'all') { //если data-path="all"
		portfolioCard.forEach(el => { //то будем показывать все карточки(добавлять им класс portfolio_card-visible_more(с display:block !important)
			el.classList.add('portfolio_card-visible_more');
			loadMore.style.display = 'none'; //и скрываем кнопку Load more
		}); 
	} else {
		//иначе только те с data-path, которая указана
		document.querySelectorAll(`[data-target="${path}"]`).forEach(el => { //тем карточкам где data-target совпадает с data-path добавляем класс portfolio_card-visible_more(с display:block !important) они будут видны
			el.classList.add('portfolio_card-visible_more');
		});
		loadMore.style.display = 'none'; //и скрываем кнопку Load more
	}
});