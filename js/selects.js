const selects = document.querySelectorAll('.select');
selects.forEach(el => { //пробегаемся по всем .select
    new Choices(el, { //задаем Choices - сам выпадающий список
        shouldSort: false, //убираем сортировку эл-тов
        position: 'bottom', //открытие списка только вниз
        searchEnabled: false, //отключили поиск в выпадающем списке
        itemSelectText: '', //убрала надпись Press to select, которая была при наведении на эл-ты списка
    }); 
});
