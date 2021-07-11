//действие по кнопке "Начать игру"
document.querySelector('#startBtn').addEventListener('click', (event) => {

    // получение значения времени
    let time = document.querySelector('#timeToggleField').value;
    document.querySelector('#selectedTime').selected = 'selected';

    // получение количества ответов
    let answersNumber = Number.parseInt(document.querySelector('#answersToggleField').value);
    document.querySelector('#selectedAnswer').selected = 'selected';

    // получение секунд и минут из сохраненного значения
    let sec = parseInt(time.substr(3));
    let min = parseInt(time.substr(0, 2));
    time = min * 60 + sec;

    // скрытие стартового меню 
    document.querySelector('.settings').classList.toggle('unseen');
    // открытие стартового таймера
    document.querySelector('#startTimer').classList.toggle('unseen');

    // стартовый таймер
    let startTimer = (num) => {
        document.querySelector('#startTimer').innerText = num + '..';
        num -= 1;
        if (num >= 0) {
            setTimeout(
                () => {
                    startTimer(num);
                },
                1000,
            )
        } else {
            // скрытие стартового таймера
            document.querySelector('#startTimer').classList.toggle('unseen');
            // открытие игрового  интерфейса
            document.querySelector('.game').classList.toggle('unseen');

            game(time, answersNumber); // запуск игры
        }
    };

    startTimer(3); //запуск таймера
})

// действие по кнопке "Конец игры"
document.querySelector('#endBtn').addEventListener('click', (event) => {
    geoQuizy.finish(); 
    
    setTimeout(gameEnd, 2000); // задержка выхода

    // смена интерфейса игры на стартовое меню
    function gameEnd() {
        location.reload();
    };
})

// запуск игры
let game = (time, answersNumber) => {
    geoQuizy.init(
        tasks,
        time,
        answersNumber,
        document.querySelector('#timerField'),
        document.querySelector('#gameAnswersCounter'),
        document.querySelector('#gameStatusField'),
        document.querySelector('#questionField'),
        document.querySelector('#answer1'),
        document.querySelector('#answer2'),
        document.querySelector('#answer3'),
        document.querySelector('#answer4'),
    );
    geoQuizy.run();
}