$(document).ready(function () {
    var hoursInDay = [9, 10, 11, 12, 13, 14, 15, 16, 17];
    var localData = JSON.parse(localStorage.getItem('schedule'));

    var container = $('.container');

    var currentDay = $('#currentDay');
    currentDay.text("today is " + moment().format("ll"));

    $.fn.rowColor = function () {
        var currentHour = moment().hour();
        var hour = parseInt($(this)[0].id.split('-')[1]);

        if (currentHour > hour) {
            $(this).addClass('past');
        } else if (currentHour === hour) {
            $(this).addClass('present');
        } else {
            $(this).addClass('future');
        }
        return this;
    }

    function renderSchedule(hours) {
        hours.forEach(hour => {
            var div = $("<div class='row'>");

            var time = $('<div class="hour col-12 col-sm-1 text-center">');
            var timeNum = $("<span>");
            time.append(timeNum)

            var text = $(`<textarea id='row-${hour}' class='col-10 col-sm-10'>`);
            // textContent.rowColor();

            if (localData[hour] && localData[hour].length) {
                $(text).val(localData[hour]);
            } else {
                $(text).val("");
            }

            var saveBtn = $(`<button id='save-${hour}' class='saveBtn col col-sm-1'>`);
            saveBtn.append($("<i class='fa fa-save'>"));
            saveBtn.on('click', function (event) {
                event.preventDefault();
                var num = this.id.split("-")[1];
                var row = $(`#row-${num}`);
                localData[num] = row.val();
                localStorage.setItem("schedule", JSON.stringify(localData));
            })

            div.append(time, text, saveBtn);

            container.append(div);
        })
    }

    renderSchedule(hoursInDay)
})