$(document).ready(function() {
    $(".jumbotron").append("<h1>" + dayjs().format('dddd, MMMM D, YYYY h:mm A') + "</h1>");

    var current_time = dayjs().get('hour');
    var time_counter = current_time - 3;
    var am_pm;
    var ppf = 0;
    for (var i = 0; i <= 10; i++) {
        if (time_counter === 25) {
            time_counter = 1;
        }
        if (time_counter < 12 || time_counter === 24) {
            am_pm = "am";
        } else {
            am_pm = "pm";
        }
        var div_TimeBlock = $("<div class='row time-block div_time'></div>");
        if (time_counter <= 0) {
            var hour_comp = time_counter + 12;
            if (time_counter === 0) {
                var hour = $("<div class='col-1 hour'>"+ hour_comp + " am" + "</div>")
            } else {
                var hour = $("<div class='col-1 hour'>"+ hour_comp + " pm" + "</div>")
            }
        } else if (time_counter > 12) {
            var hour_comp = time_counter - 12;
            var hour = $("<div class='col-1 hour'>"+ hour_comp + " " + am_pm + "</div>")
        } else {
            var hour_comp = time_counter;
            var hour = $("<div class='col-1 hour'>"+ hour_comp + " " + am_pm + "</div>")
        }
        if (ppf < 3) {
            var text = $("<input class='col-10 row past text_input' style='width: 100%'/>");
        } else if (ppf === 3) {
            var text = $("<input class='col-10 row present text_input' style='width: 100%'/>");
        } else {
            var text = $("<input class='col-10 row future text_input' style='width: 100%'/>");
        }
        var save = $("<i class='far fa-save fa-2x col-1 saveBtn' id='save_button'></i>")
        div_TimeBlock.append(hour, text, save);
        $('.container').append(div_TimeBlock);
        time_counter++;
        ppf++;
    }
    //id='save_button' on button click save to local storage
    //class='text_input' input to save into local storage
});