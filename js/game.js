geoQuizy = {
    // инициализация игровых данных
    init(
        tasks,
        time,
        answersNumber,
        timerField,
        gameAnswersCounter,
        gameStatusField,
        textFieldQuestion,
        textFieldAnswer1,
        textFieldAnswer2,
        textFieldAnswer3,
        textFieldAnswer4
    ) {
        this.boomTimer = time;
        this.tasks = JSON.parse(tasks);
        this.timerField = timerField;
        this.gameAnswersCounter = gameAnswersCounter;
        this.gameStatusField = gameStatusField;
        this.textFieldQuestion = textFieldQuestion;
        this.textFieldAnswer1 = textFieldAnswer1;
        this.textFieldAnswer2 = textFieldAnswer2;
        this.textFieldAnswer3 = textFieldAnswer3;
        this.textFieldAnswer4 = textFieldAnswer4;
        this.needRightAnswers = answersNumber;
        this.currenTaskNumber = 1;
    },

    // начало игры
    run() {
        // открытие области задания
        if (document.querySelector('.quiz').classList.contains('unseen')) {
            document.querySelector('.quiz').classList.toggle('unseen');
        }        

        // стартовое значение поля состояния
        this.gameStatusField.innerText = 'Вперед!';
        this.state = 1; // счетчик состояния
        this.playerResults = 0; // счетчик правильных ответов
        this.turnOn(); // запуск генерации вопроса
        this.timer(); // запуск таймера
    },

    // генерация вопроса
    turnOn() {
        // задание и обновление счетчика ответов
        this.gameAnswersCounter.innerText = `${this.playerResults}/${this.needRightAnswers}`;

        // запуск распечатывающей функции со случайным вопросом
        const taskNumber = randomIntNumber(this.tasks.length - 1);
        this.printQuestion(this.tasks[taskNumber]); 

        // удаление заданного вопроса из общего массива
        this.tasks.splice(taskNumber, 1);
    },

    // обработка ответа на вопрос
    turnOff(value) {
        // снятие действий по кликам
        this.textFieldAnswer1.removeEventListener('click', answer1);
        this.textFieldAnswer2.removeEventListener('click', answer2);
        this.textFieldAnswer3.removeEventListener('click', answer3);
        this.textFieldAnswer4.removeEventListener('click', answer4);

        // вывод "Верно"\"Неверно" в поле состояния
        if (this.currentTask[value].result) {
            this.gameStatusField.innerText = 'Верно!';
            //увеличение счетчика правильных ответов 
            this.playerResults += 1;

            //увеличение времени на 5с
            this.boomTimer += 5;

        } else {
            this.gameStatusField.innerText = 'Неверно!';
        }

        // проверка на выход из игры
        if (this.playerResults < this.needRightAnswers) {
            if (this.tasks.length === 0) {
                this.finish('lose');
            } else {
                // увеличение счетчика вопросов
                this.currenTaskNumber += 1;

                this.turnOn();
            }
        } else {
            this.finish('won');
        }
    },

    // распечатка вопроса и ответов
    printQuestion(task) {
        let currentArr = []; // инициализация массива ответов
        currentArr.push(task.answer1, task.answer2, task.answer3, task.answer4);

        let resultArr = []; // инициализация сортировочного массива
        while (currentArr.length > 0) {
            const randomValue = randomIntNumber(currentArr.length - 1);
            const currentAnswer = currentArr[randomValue]; // получение случайного элемента
            resultArr.push(currentAnswer); // добавление полученного элемента в resultArr
            currentArr.splice(randomValue, 1); // удаление полученного элемента из currentArr
        }

        // перезапись ответов в случайном порядке в текущий вопрос
        task.answer1 = resultArr[0];
        task.answer2 = resultArr[1];
        task.answer3 = resultArr[2];
        task.answer4 = resultArr[3];

        this.textFieldQuestion.innerText = `№${this.currenTaskNumber}. ${task.question}`;

        this.textFieldAnswer1.innerText = `A. ${task.answer1.value}`;
        this.textFieldAnswer2.innerText = `B. ${task.answer2.value}`;
        this.textFieldAnswer3.innerText = `C. ${task.answer3.value}`;
        this.textFieldAnswer4.innerText = `D. ${task.answer4.value}`;

        this.currentTask = task;

        this.textFieldAnswer1.addEventListener('click', answer1 = () => this.turnOff(`answer1`));
        this.textFieldAnswer2.addEventListener('click', answer2 = () => this.turnOff(`answer2`));
        this.textFieldAnswer3.addEventListener('click', answer3 = () => this.turnOff(`answer3`));
        this.textFieldAnswer4.addEventListener('click', answer4 = () => this.turnOff(`answer4`));
    },

    // генерация окна с итогами игры
    finish(result = 'lose') {

        // остановка таймера
        clearTimeout(this.timerId);
        this.timerField.innerText = '00:00';

        // вывод сообщения о выигрыше/проигрыше игрока
        if (result === 'lose') {
            this.gameStatusField.innerText = `Проигрыш`;

        }
        if (result === 'won') {
            // добавление последнего верного ответа в счетчик
            this.gameAnswersCounter.innerText = `${this.playerResults}/${this.needRightAnswers}`;

            this.gameStatusField.innerText = `Победа!!`;
        }

        // скрытие области задания
        if (document.querySelector('.quiz').classList.contains('unseen')) {
        } else {
            document.querySelector('.quiz').classList.toggle('unseen');
        }

        setTimeout(gameEnd, 2000); // задержка выхода

        // обновление
        function gameEnd() {
            location.reload();
        };
    },

    // таймер
    timer() {
        if (this.state) {
            this.boomTimer -= 1;
            let sec = this.boomTimer % 60;
            let min = (this.boomTimer - sec) / 60;
            sec = (sec >= 10) ? sec : '0' + sec;
            min = (min >= 10) ? min : '0' + min;
            this.timerField.innerText = `${min}:${sec}`;

            if (this.boomTimer > 0) {
                this.timerId = setTimeout( // сохранение ID таймера для последующей остановки
                    () => {
                        this.timer()
                    },
                    1000,
                )
            } else {
                this.finish('lose');
            }
        }
    },
}