//Events
$("h1").click(function(){
  $(this).text("I was changed")
  console.log('There was a click')
});
$('li').click(function(){
  console.log('any li was clicked')
});

$('input').eq(0).keypress(function(){
  if (event.which===13) {
    $('h3').toggleClass('turnBlue');


  }
})
