var current_value = 0, answers = new Array(), done = false;
var correct = 0, count = 0;

$(document).keypress(function(e) {
  if(e.which == 13 ) {
      if(current_value == 6) {
        {% for pro in problems %}
          if(answers[count] == {{pro[2]}}) {
            count++;
          }
        {% endfor %}
        console.log("right number " + count);
      } else {
        answers[current_value] = $("#problem" + current_value).val();
        console.log(answers[current_value]);
        current_value++;
        $("#problem" + current_value).focus();
      }
    }
});
