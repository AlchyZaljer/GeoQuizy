const tasks = `
    [
        {
            "question": "Какая река самая длинная?",
            "answer1": { "result": true, "value": "Амазонка" },
            "answer2": { "result": false, "value": "Нил" },
            "answer3": { "result": false, "value": "Обь" },
            "answer4": { "result": false, "value": "Янцзы" }
        },
        {
            "question": "Где находится самое жаркое место на планете?",
            "answer1": { "result": true, "value": "Ливия" },
            "answer2": { "result": false, "value": "Южная Африка" },
            "answer3": { "result": false, "value": "Эфиопия" },
            "answer4": { "result": false, "value": "Тунис" }
        },
        {
            "question": "Кто совершил первое кругосветное путешествие?",
            "answer1": { "result": true, "value": "Магеллан" },
            "answer2": { "result": false, "value": "Беринг" },
            "answer3": { "result": false, "value": "Колумб" },
            "answer4": { "result": false, "value": "Кук" }            
        },
        {
            "question": "Какое государство самое маленькое?",
            "answer1": { "result": true, "value": "Ватикан" },
            "answer2": { "result": false, "value": "Лихтенштейн" },
            "answer3": { "result": false, "value": "Монако" },
            "answer4": { "result": false, "value": "Сан-Марино" }            
        },
        {
            "question": "Какой водопад самый высокий?",
            "answer1": { "result": true, "value": "Анхель" },
            "answer2": { "result": false, "value": "Ниагара" },
            "answer3": { "result": false, "value": "Виктория" },
            "answer4": { "result": false, "value": "Руакана" }            
        },
        {
            "question": "Какой океан самый маленький?",
            "answer1": { "result": true, "value": "Северный Ледовитый" },
            "answer2": { "result": false, "value": "Тихий" },
            "answer3": { "result": false, "value": "Индийский" },
            "answer4": { "result": false, "value": "Атлантический" }            
        },
        {
            "question": "Какой пролив самый широкий?",
            "answer1": { "result": true, "value": "Дрейка" },
            "answer2": { "result": false, "value": "Гибралтарский" },
            "answer3": { "result": false, "value": "Дарданеллы" },
            "answer4": { "result": false, "value": "Магелланов" }            
        },
        {
            "question": "Где находится самая удаленная от океанов точка на планете?",
            "answer1": { "result": true, "value": "Китай" },
            "answer2": { "result": false, "value": "Россия" },
            "answer3": { "result": false, "value": "Канада" },
            "answer4": { "result": false, "value": "Румыния" }            
        },
        {
            "question": "Какой вулкан самый высокий из потухших?",
            "answer1": { "result": true, "value": "Аконкагуа" },
            "answer2": { "result": false, "value": "Везувий" },
            "answer3": { "result": false, "value": "Йеллоустоун" },
            "answer4": { "result": false, "value": "Тейде" }            
        },
        {
            "question": "В какой стране юридически нет столицы?",
            "answer1": { "result": true, "value": "Швейцария" },
            "answer2": { "result": false, "value": "Ватикан" },
            "answer3": { "result": false, "value": "Монако" },
            "answer4": { "result": false, "value": "Андорра" }            
        },
        {
            "question": "Какой полуостров самый большой?",
            "answer1": { "result": true, "value": "Аравийский" },
            "answer2": { "result": false, "value": "Апеннинский" },
            "answer3": { "result": false, "value": "Камчатка" },
            "answer4": { "result": false, "value": "Апшеронский" }            
        },
        {
            "question": "Какое озеро самое старое на планете?",
            "answer1": { "result": true, "value": "Байкал" },
            "answer2": { "result": false, "value": "Чад" },
            "answer3": { "result": false, "value": "Онтарио" },
            "answer4": { "result": false, "value": "Титикака" }
        },
        {
            "question": "Где находится государство Суринам?",
            "answer1": { "result": true, "value": "Южная Америка" },
            "answer2": { "result": false, "value": "Северная Америка" },
            "answer3": { "result": false, "value": "Австралия" },
            "answer4": { "result": false, "value": "Северная Африка" }            
        },
        {
            "question": "Кто открыл Аляску?",
            "answer1": { "result": true, "value": "Дежнев" },
            "answer2": { "result": false, "value": "Ермак" },
            "answer3": { "result": false, "value": "Миклухо-Маклай" },
            "answer4": { "result": false, "value": "Чилингаров" }            
        },
        {
            "question": "Где находится самая низкая точка на планете?",
            "answer1": { "result": true, "value": "Тихий океан" },
            "answer2": { "result": false, "value": "Черное море" },
            "answer3": { "result": false, "value": "Антарктида" },
            "answer4": { "result": false, "value": "Индийский океан" }            
        },
        {
            "question": "Где находится Бермудский треугольник?",
            "answer1": { "result": true, "value": "Саргассово море" },
            "answer2": { "result": false, "value": "Тихий океан" },
            "answer3": { "result": false, "value": "Бенгальский залив" },
            "answer4": { "result": false, "value": "Карибское море" }            
        },
        {
            "question": "Какое море самое пресное?",
            "answer1": { "result": true, "value": "Балтийское" },
            "answer2": { "result": false, "value": "Азовское" },
            "answer3": { "result": false, "value": "Норвежское" },
            "answer4": { "result": false, "value": "Охотское" }            
        },
        {
            "question": "Какое море самое глубокое?",
            "answer1": { "result": true, "value": "Коралловое" },
            "answer2": { "result": false, "value": "Северное" },
            "answer3": { "result": false, "value": "Средиземное" },
            "answer4": { "result": false, "value": "Шантарское" }            
        },
        {
            "question": "Какой город самый густонаселенный?",
            "answer1": { "result": true, "value": "Шанхай" },
            "answer2": { "result": false, "value": "Пекин" },
            "answer3": { "result": false, "value": "Нью-Йорк" },
            "answer4": { "result": false, "value": "Токио" }            
        },
        {
            "question": "В какой стране больше всего часовых поясов?",
            "answer1": { "result": true, "value": "Франция" },
            "answer2": { "result": false, "value": "Россия" },
            "answer3": { "result": false, "value": "Канада" },
            "answer4": { "result": false, "value": "Китай" }            
        },
        {
            "question": "Какой город в России самый древний?",
            "answer1": { "result": true, "value": "Дербент" },
            "answer2": { "result": false, "value": "Новгород" },
            "answer3": { "result": false, "value": "Псков" },
            "answer4": { "result": false, "value": "Суздаль" }            
        },
        {
            "question": "В какой стране левосторонее движение?",
            "answer1": { "result": true, "value": "Индия" },
            "answer2": { "result": false, "value": "Швеция" },
            "answer3": { "result": false, "value": "Италия" },
            "answer4": { "result": false, "value": "Алжир" }            
        },
        {
            "question": "В каком городе самое обширное метро?",
            "answer1": { "result": true, "value": "Нью-Йорк" },
            "answer2": { "result": false, "value": "Токио" },
            "answer3": { "result": false, "value": "Лондон" },
            "answer4": { "result": false, "value": "Москва" }            
        },
        {
            "question": "Сколько морей омывает Россию?",
            "answer1": { "result": true, "value": "13" },
            "answer2": { "result": false, "value": "12" },
            "answer3": { "result": false, "value": "20" },
            "answer4": { "result": false, "value": "8" }            
        },
        {
            "question": "У какой страны наибольшее количесвто соседей?",
            "answer1": { "result": true, "value": "Россия" },
            "answer2": { "result": false, "value": "Германия" },
            "answer3": { "result": false, "value": "Австрия" },
            "answer4": { "result": false, "value": "Бельгия" }            
        },
        {
            "question": "Какая страна самая засушливая?",
            "answer1": { "result": true, "value": "Ливия" },
            "answer2": { "result": false, "value": "Ливан" },
            "answer3": { "result": false, "value": "Нигерия" },
            "answer4": { "result": false, "value": "Эфиопия" }            
        },
        {
            "question": "Где находится самое большое болото?",
            "answer1": { "result": true, "value": "Россия" },
            "answer2": { "result": false, "value": "Кения" },
            "answer3": { "result": false, "value": "Индонезия" },
            "answer4": { "result": false, "value": "Монголия" }            
        },
        {
            "question": "Кто впервые побывал на Южном полюсе?",
            "answer1": { "result": true, "value": "Амундсен" },
            "answer2": { "result": false, "value": "Вайхенмайер" },
            "answer3": { "result": false, "value": "Пири" },
            "answer4": { "result": false, "value": "Крузенштерн" }            
        },
        {
            "question": "В каком городе больше всего аэропортов?",
            "answer1": { "result": true, "value": "Дубай" },
            "answer2": { "result": false, "value": "Пекин" },
            "answer3": { "result": false, "value": "Нью-Йорк" },
            "answer4": { "result": false, "value": "Лондон" }            
        },
        {
            "question": "Где находится самый длинный тоннель в мире?",
            "answer1": { "result": true, "value": "Швейцария" },
            "answer2": { "result": false, "value": "Рим" },
            "answer3": { "result": false, "value": "Майкоп" },
            "answer4": { "result": false, "value": "Тбилиси" }
        },
        {
            "question": "Где находится Северный полюс холода?",
            "answer1": { "result": true, "value": "Оймякон" },
            "answer2": { "result": false, "value": "Мирный" },
            "answer3": { "result": false, "value": "Якутск" },
            "answer4": { "result": false, "value": "Тикси" }
        },
        {
            "question": "В какой стране установлена теократическая монархия?",
            "answer1": { "result": true, "value": "Ватикан" },
            "answer2": { "result": false, "value": "ОАЭ" },
            "answer3": { "result": false, "value": "Иран" },
            "answer4": { "result": false, "value": "Израиль" }
        },
        {
            "question": "Какое озеро самое большое?",
            "answer1": { "result": true, "value": "Каспийское море" },
            "answer2": { "result": false, "value": "Байкал" },
            "answer3": { "result": false, "value": "Виктория" },
            "answer4": { "result": false, "value": "Мертвое море" }
        },
        {
            "question": "Где расположен Бенилюкс?",
            "answer1": { "result": true, "value": "Западная Европа" },
            "answer2": { "result": false, "value": "Южная Европа" },
            "answer3": { "result": false, "value": "Восточная Азия" },
            "answer4": { "result": false, "value": "Северная Африка" }
        },
        {
            "question": "Какой залив самый большой?",
            "answer1": { "result": true, "value": "Бенгальский" },
            "answer2": { "result": false, "value": "Гудзонов" },
            "answer3": { "result": false, "value": "Мексиканский" },
            "answer4": { "result": false, "value": "Бискайский" }
        },
        {
            "question": "Какое море самое чистое?",
            "answer1": { "result": true, "value": "Море Уэддела" },
            "answer2": { "result": false, "value": "Море Сулу" },
            "answer3": { "result": false, "value": "Море Бофорта" },
            "answer4": { "result": false, "value": "Море Фиджи" }
        },
        {
            "question": "Какое озеро является высохшим?",
            "answer1": { "result": true, "value": "Аральское море" },
            "answer2": { "result": false, "value": "Мертвое море" },
            "answer3": { "result": false, "value": "Нипигон" },
            "answer4": { "result": false, "value": "Дунтинху" }
        },
        {
            "question": "Какая территория является самой загрязненной?",
            "answer1": { "result": true, "value": "Агбогблоши" },
            "answer2": { "result": false, "value": "Норильск" },
            "answer3": { "result": false, "value": "Чернобыль" },
            "answer4": { "result": false, "value": "Кабва" }
        },
        {
            "question": "В какой стране больше всего городов?",
            "answer1": { "result": true, "value": "Индия" },
            "answer2": { "result": false, "value": "США" },
            "answer3": { "result": false, "value": "Китай" },
            "answer4": { "result": false, "value": "Япония" }
        },
        {
            "question": "Где находится самый маленький город?",
            "answer1": { "result": true, "value": "Хорватия" },
            "answer2": { "result": false, "value": "Дания" },
            "answer3": { "result": false, "value": "Зимбабве" },
            "answer4": { "result": false, "value": "Монако" }
        }
    ]
`;
