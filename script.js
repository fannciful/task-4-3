const userYear = prompt('Введіть свій рік народження');
const userCity = prompt('Введіть місто');
const userSport = prompt('Введіть ваш улюблений вид спорту');

if (userYear === null) {
    alert('Шкода, що ви не захотіли ввести свій рік народження');
} else if (userCity === null) {
    alert('Шкода, що ви не захотіли ввести своє місто');
} else if (userSport === null) {
    alert('Шкода, що ви не захотіли ввести улюблений вид спорту');
} else if (!userYear || !userCity || !userSport) {
    alert('Якесь поле не заповнене!');
} else if (isNaN(userYear)) {
    alert('Ти ввів не число!');
} else if (userYear < 0 || userYear > 2024) {
    alert('Юзер, ти ще живий?');
} else if (!userYear.trim() || !userCity.trim() || !userSport.trim()) {
    alert('Ви нічого не ввели у якийсь рядок!');
} else {
    const currentYear = 2024;
    const userAge = currentYear - parseInt(userYear);

    let cityMessage;
    switch (userCity) {
        case 'Київ':
            cityMessage = 'Ти живеш у столиці України';
            break;
        case 'Вашингтон':
            cityMessage = 'Ти живеш у столиці США';
            break;
        case 'Лондон':
            cityMessage = 'Ти живеш у столиці Великобританії';
            break;
        default:
            cityMessage = `Ти живеш у місті ${userCity}`;
            break;
    }

    const sportsChampions = {
        'футбол': 'Криштіану Роналду',
        'теніс': 'Роджер Федерер',
        'волейбол': 'Алессандро Мікьєлетто'
    };

    let sportMessage;
    if (userSport in sportsChampions) {
        sportMessage = `Круто! Хочеш стати ${sportsChampions[userSport]}?`;
    } else {
        sportMessage = `Спорт: ${userSport}`;
    }

    alert(`Твій вік: ${userAge}\n${cityMessage}\n${sportMessage}`);
}
