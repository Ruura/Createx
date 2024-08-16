const filters = document.querySelector('.filters'); //блок вкладок
const newsTab = document.querySelectorAll('.news_tab'); //вкладка
const newsBlock = document.querySelectorAll('.news_block'); //новостной блок
const newsBlockVisible = document.querySelectorAll('.news_block-visible'); //видимые новостные блоки

filters.addEventListener('click', (e) => {  //делаем событие клика на весь блок вкладок
	const target = e.target;
	if (target.classList.contains('news_tab')) { //если клик был по кнопке(класс news_tab) то только тогда продолжаем дейтсвия
		const path = target.dataset.path;  //ищем текущий элемент

		newsTab.forEach(el => {  //проходим по всем кнопкам
			el.classList.remove('news_tab-active') //и удаляем класс news_tab-active(заливку кнопки)
		});
		target.classList.add('news_tab-active'); //а потом добавляем его

		newsBlock.forEach(el => { //проходим по всем блокам и будем все их скрывать
			el.classList.remove('news_block-visible'); //удаляя класс news_block-visible
		}); 
	
		document.querySelectorAll(`[data-target="${path}"]`).forEach(el => { //а тем карточкам где data-target совпадает с data-path добавляем класс news_block-visible(с display:block) они будут видны
			el.classList.add('news_block-visible');
		});

		if (path == 'all') { //если есть data-path="all"
			newsBlock.forEach(el => { 
				el.classList.add('news_block-visible'); //то всем эл-там добавляем класс news_block-visible(все будут в этой вкладке)
			}); 
		}
	}
});
