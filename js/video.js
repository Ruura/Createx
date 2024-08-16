//Чтобы видео запускалось
const videoBlock = document.querySelector('.video_block');
const video = videoBlock.querySelector('video');
const videoPlay = videoBlock.querySelector('.video_play');
const videoMuted = videoBlock.querySelector('.video_muted');

videoPlay.addEventListener('click', () => { //обрабатываем клик по кнопке
    videoBlock.classList.add('video_played'); //после клика добавляем класс,по которому будем убирать затемнение в :before
    video.play();  //нажимаем play у тега video
    video.controls = true; //при запуске видео снизу появится панель управления им
    videoPlay.classList.add('played'); //и кнопке Play тоже добавляем класс,по которому будем ее убирать
    videoMuted.classList.add('played'); //и кнопке Muted тоже добавляем класс,по которому будем ее убирать
}); 

videoMuted.addEventListener('click', () => { //обрабатываем клик по кнопке
    video.muted = true;  //при клике на кнопку Muted видео без звука
});

video.onpause = function() { //когда видео на паузе
    videoBlock.classList.remove('video_played'); //удаляем класс,по которому убирали затемнение в :before и затемнение снова будет
    video.controls = false; //при паузе видео панель управления убирается
    videoPlay.classList.remove('played'); //кнопке Play удаляем класс,по которому ее убирали, она снова покажется
    videoMuted.classList.remove('played'); //и кнопке Muted удаляем класс,по которому ее убирали, она снова покажется
};