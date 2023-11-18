$('h1').css({
    'padding-top': '2rem',
    'text-align': 'center'
  });

$('h4').css({
    'padding-left': '20rem',
    'padding-right': '10rem',
    'padding-top': '2rem'
  });

//Changes answer '4' to red when clicked
$('.myButton_4').on('click', function() {
    $('.myButton_4').css('background-color', 'red')
})
//When answer '4' is clicked, all other answers are disabled and cannot be clicked on.
$('.myButton_4').on('click',function(){
    $('.myButton_8, .myButton_7, .myButton_10').off('click');
});
//When this answer is clicked, a message will pop up on screen stating the answer is incorrect.
$('.myButton_4').on('click', function() {
    alert('Incorrect. Please reload this page.')
  });


//Changes answer '8' to red when clicked.
$('.myButton_8').on('click', function() {
    $('.myButton_8').css('background-color', 'red')
})
//When answer '8' is clicked, all other answers are disabled and cannot be clicked on.
$('.myButton_8').on('click',function(){
    $('.myButton_4, .myButton_7, .myButton_10').off('click');
});
//When this answer is clicked, a message will pop up on screen stating the answer is incorrect.
$('.myButton_8').on('click', function() {
    alert('Incorrect. Please reload this page.')
  });


//Changes answer '7' to green when clicked.
$('.myButton_7').on('click', function() {
    $('.myButton_7').css('background-color', 'green')
})
//When answer '7' is clicked, all other answers are disabled and cannot be clicked on.
$('.myButton_7').on('click',function(){
    $('.myButton_4, .myButton_8, .myButton_10').off('click');
});
//When this answer is chosen, a message will pop up on screen stating that answer is correct.
$('.myButton_7').on('click', function() {
    alert('Correct! Dumbledore would be proud!')
  });


//changes answer '10' to red when clicked.
$('.myButton_10').on('click', function() {
    $('.myButton_10').css('background-color', 'red')
})
//When answer '10' is clicked, all other answers are disabled and cannot be clicked on.
$('.myButton_10').on('click',function(){
    $('.myButton_4, .myButton_8, .myButton_7').off('click');
});
//When this answer is clicked, a message will pop up on screen stating the answer is incorrect.
$('.myButton_10').on('click', function() {
    alert('Incorrect. Please reload this page.')
  });