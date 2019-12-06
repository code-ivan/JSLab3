let monthArr = ['січня', 'лютого', 'березня', 'квітня', 'травня', 'червня', 'липня', 'серпня', 'вересня', 'жовтня', 'листопада', 'грудня'];
let dayArr = ['неділя', 'понеділок', 'вівторок', 'середа', 'четвер', 'п\'ятниця', 'субота'];

function displayDate() {
    let date = new Date();
    output1.innerText = `Дата: ${date.getDate()} ${monthArr[date.getMonth()]}  ${date.getFullYear()}  року \nДень: ${dayArr[date.getDay()]} \nЧас: ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}

function getDay() {
    let date = new Date();
    const DateObj = {
        dayNumber: date.getDay(),
        dayName: dayArr[date.getDay()],
    };
    if(date.getDay() === 0){
        date.dayNumber = 7;
    }
    return DateObj;
}

function getPastDate(daysAgo) {
    let date = new Date();
    let date2 = new Date(date);
    date2.setDate(date.getDate() - daysAgo);
    return `Дата: ${date2.getDate()} ${monthArr[date2.getMonth()]}  ${date2.getFullYear()}  року`;
}

function getLastDay(year, month) {
    let date = new Date(year, month, 0);
    return `Останній день місяця: ${date.getDate()}`;
}

const getSec = function getSecondsOfThisAndBeforeNextDay() {
    let date = new Date();
    let afterSeconds = date.getSeconds() + date.getMinutes()*60 + date.getHours()*3600;
    let beforeSeconds = 86400 - afterSeconds;
    return {
        afterLast: afterSeconds,
        beforeNext: beforeSeconds,
    };
};

function formatDate(date){
    let day = date.getDate();
    let month = date.getMonth() + 1;
    if(day < 10){
        day = '0'+day;
    }
    if(month < 10){
        month = '0'+month;
    }
    return `${day}.${month}.${date.getFullYear()}`;
}

function getDatesDifference(date1, date2) {
    let timeDifference = Math.abs(date2.getTime() - date1.getTime());
    return  Math.ceil(timeDifference / (1000 * 3600 * 24));
}

function formatDateTwo(date) {

    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let hour = date.getHours();
    let minutes = date.getMinutes();

    if(day < 10){
        day = '0'+day;
    }
    if(month < 10){
        month = '0'+month;
    }
    if(hour < 10){
        hour = '0'+hour;
    }
    if(minutes < 10){
        minutes = '0'+minutes;
    }

    let dMs = new Date() - date;
    let dSec = Math.round(dMs / 1000);
    let dMin = dSec / 60;
    let dHour = dMin / 60;

    if (dSec < 1) {
        return 'тільки що';
    } else if (dMin < 1) {
        return `${dSec} сек. тому`
    } else if (dHour < 1) {
        return `${dMin} хв. тому`
    } else {
        return `${day}.${month}.${year} ${hour}:${minutes}`
    }
}

