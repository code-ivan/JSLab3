task2Bt.onclick = function () {
    let DateObj = getDay();
    output2.innerText = `Номер дня: ${DateObj.dayNumber} \nДень тижня: ${DateObj.dayName}`;
};
task3Bt.onclick = function () {
    let dAgo = daysAgo.value;
    output3.innerHTML = ""+getPastDate(dAgo);
};
task4Bt.onclick = function () {
    let year = document.getElementById('year').value;
    let month = document.getElementById('month').value;
    output4.innerHTML = ""+getLastDay(year, month);
};
task5Bt.onclick = function () {
    let sec = getSec();
    output5.innerHTML = "Bід початку сьогоднішнього дня:  " + sec.afterLast + "\nДо наступного дня:  " + sec.beforeNext;
};
task6Bt.onclick = function () {
    let date = document.getElementById('pickdate').valueAsDate;
    output6.innerText = ""+formatDate(date);
};
task7Bt.onclick = function () {
    let date1 = document.getElementById('pickdate2').valueAsDate;
    let date2 = document.getElementById('pickdate3').valueAsDate;
    output7.innerText = "Різниця між датами у днях:"+getDatesDifference(date1, date2);
};
sec.onclick = function () {
    output8.innerText = ""+formatDateTwo(new Date(new Date - 1));
};
min.onclick = function () {
    output8.innerText = ""+formatDateTwo(new Date(new Date - 20000));
};
hour.onclick = function () {
    output8.innerText = ""+formatDateTwo(new Date(new Date - 30 * 60000));
};
more.onclick = function () {
    output8.innerText = ""+formatDateTwo(new Date(new Date - 1000 * 60000));
};
task9Bt.onclick = function () {
    let dateStr = document.getElementById('datestr').value;
    let date = new Date(dateStr);
    output9.innerText = "" + date.toLocaleString();
};
task10Bt.onclick = function () {
    let date = new Date();
    let locale = document.getElementById('local').value;
    let options = { weekday: 'long', era: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric'};
    output10.innerText = date.toLocaleString(locale, options);
};