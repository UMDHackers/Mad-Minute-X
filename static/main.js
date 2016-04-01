$(document).ready(function() {
  $("#add_level").hide();
  $("#mul_level").hide();
  $("#div_level").hide();
  $("#sub_level").hide();


  $(".addBtn").click(function() {
    $("#add_level").slideToggle("slow");
  });
  $(".subBtn").click(function() {
    $("#sub_level").slideToggle("slow");
  });
  $(".divBtn").click(function() {
    $("#div_level").slideToggle("slow");
  });
  $(".mulBtn").click(function() {
    $("#mul_level").slideToggle("slow");
  });


});
