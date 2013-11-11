$(document).ready(function() {
  var $methods = $('#methods .method').hide();
  $(‘button’).on(‘click’, function() {
    $methods.eq(Math.random()*$methods.length).show();​
  });
})