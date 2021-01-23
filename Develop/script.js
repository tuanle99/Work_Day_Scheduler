$(document).ready(function () {
  $(".jumbotron").append(
    "<h1>" + dayjs().format("dddd, MMMM D, YYYY h:mm A") + "</h1>"
  );

  var current_time = dayjs().get("hour");
  var time_counter = current_time - 3;
  var am_pm;
  var ppf = 0;

  var text;
  var save;
  var new_id;
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
      new_id = hour_comp + "-" + am_pm;
      if (time_counter === 0) {
        var hour = $("<div class='col-1 hour'>" + new_id + "</div>");
      } else {
        var hour = $("<div class='col-1 hour'>" + new_id + "</div>");
      }
    } else if (time_counter > 12) {
      var hour_comp = time_counter - 12;
      new_id = hour_comp + " " + am_pm;
      var hour = $("<div class='col-1 hour'>" + new_id + "</div>");
    } else {
      var hour_comp = time_counter;
      new_id = hour_comp + " " + am_pm;
      var hour = $("<div class='col-1 hour'>" + new_id + "</div>");
    }

    new_id = hour_comp + "-" + am_pm;

    if (ppf < 3) {
      text = $("<input class='col-10 row past' style='width: 100%'/>");
    } else if (ppf === 3) {
      text = $("<input class='col-10 row present' style='width: 100%'/>");
    } else {
      text = $("<input class='col-10 row future' style='width: 100%'/>");
    }
    save = $("<i class='far fa-save fa-2x col-1 saveBtn save_button'></i>");

    text.attr("id", new_id);
    save.attr("data-id", new_id);

    text.val(localStorage.getItem(new_id));

    div_TimeBlock.append(hour, text, save);
    $(".container").append(div_TimeBlock);
    time_counter++;
    ppf++;
  }

  $(".save_button").on("click", function () {
    var id = $(this).attr("data-id");
    var save = $("#" + id).val();
    localStorage.setItem(id, save);
  });
});
