import {API} from "./api";

export default class RandomUsers {
    constructor(count) {
        for (let i = 0; i < count; i++) {
            const sex = RandomUsers.getRandomInt(2);
            const user = {
                name: RandomUsers.name[sex][RandomUsers.getRandomInt(RandomUsers.name[sex].length)],
                surname: RandomUsers.surname[RandomUsers.getRandomInt(RandomUsers.surname.length)] + (sex ? 'a' : ''),
                secondName: RandomUsers.secondName[RandomUsers.getRandomInt(RandomUsers.secondName.length)] + (sex ? 'на' : 'ич'),
                createDate: RandomUsers.randomDate('01-01-1900', '01-01-2004'),
                changeDate: RandomUsers.randomDate('01-01-2004'),
                contacts: null,
            };
            setTimeout(() => API.add(user), 100 * (i + 1));
        }
    }

    static surname = [
        'Смирнов', 'Иванов', 'Кузнецов', 'Соколов', 'Попов', 'Лебедев', 'Козлов', 'Новиков', 'Морозов', 'Петров', 'Волков',
        'Соловьёв', 'Васильев', 'Зайцев', 'Павлов', 'Семёнов', 'Голубев', 'Виноградов', 'Богданов', 'Воробьёв', 'Фёдоров',
        'Михайлов', 'Беляев', 'Тарасов', 'Белов',
    ];

    static name = [
        ['Александр', 'Матвей', 'Артем', 'Михаил', 'Иван', 'Тимофей', 'Кирилл', 'Дмитрий','Даниил'],
        ['Мария', 'Варвара', 'Виктория', 'Алиса', 'Ксения', 'Василиса', 'Милана', 'Ева', 'Александра'],
    ];

    static secondName = [
        'Александров', 'Алексеев', 'Богданов', 'Борисов', 'Всеволодов', 'Вячеславов', 'Глебов', 'Григорьев', 'Ефимов',
        'Иль', 'Иосифов', 'Константинов', 'Леонидов', 'Олегов', 'Степанов']
    ;

    static randomDate = (date1 = '01-01-1900', date2 = new Date().toISOString()) => {
        function getRandomArbitrary(min, max) {
            return Math.random() * (max - min) + min;
        }
        date1 = new Date(date1).getTime();
        date2 = new Date(date2).getTime();
        if(date1 > date2) {
            return new Date(getRandomArbitrary(date2,date1));
        } else {
            return new Date(getRandomArbitrary(date1, date2));
        }
    }

    static getRandomInt = (max) => {
        return Math.floor(Math.random() * max);
    }
}
