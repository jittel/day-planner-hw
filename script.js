var hoursInDay = ["9", "10", "11", "12", "13", "14", "15", "16", "17"];
var localData = JSON.parse(localStorage.getItem('schedule'));

var container = $('.container');

var currentDay = $('#currentDay');
currentDay.text("today is " + moment().format("ll"));

function rowColor() {
    var currentHour = moment().hour();
    var hour = $(this)[0].id.split('-')[1];

    if (currentHour === hour) {
        $(this).addClass('present');
    } else if (currentHour > hour) {
        $(this).addClass('past');
    } else {
        $(this).addClass('future');
    }
    return this;
}

function renderSchedule(hours) {

}