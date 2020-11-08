const projectName = 'random-quote-machine';
localStorage.setItem('example_project', 'Randowm Quote Machine');
let quotesData;

function inIframe() {
  try {
    return window.self !== window.top;
  } catch (e) {
    return true;
  }
}
var numbers = [
  { name: 'ATULKUMAR MISHRA', number: '2' },
  { name: 'BIRMOLE SAGAR', number: '4' },
  { name: 'CHAUDHARY AIJAZ', number: '6' },
  //{ name: 'GUPTA DHARMESH', number: '8' },
  { name: 'JAISWAR BRIJESH', number: '10' },
  //{ name: 'KONAR NITESH', number: '11' },
  //{ name: 'MISHRA JAYENDRA', number: '13' },
  { name: 'NADAR PRIYA', number: '14' },
  { name: 'PAL SONU', number: '16' },
  { name: 'PARAB SAHIL', number: '18' },
  { name: 'PEDNEKAR SIDDHESH', number: '19' },
  { name: 'SAURABH PANDEY', number: '21' },
  //{ name: 'SHETTY NILESH', number: '24' },
  { name: 'TAMBE SAHIL', number: '27' },
  { name: 'VIPIN YADAV', number: '29' },
  { name: 'VISHWAKARMA VISHESHKUMAR', number: '30' },
  //{ name: 'WASHIMKAR AKASH', number: '31' },
  { name: 'YADAV AJAY', number: '32' },
  //{ name: 'YADAV PRADEEP', number: '33' },
];
var colors = [
  '#16a085',
  '#27ae60',
  '#2c3e50',
  '#f39c12',
  '#e74c3c',
  '#9b59b6',
  '#FB6964',
  '#342224',
  '#472E32',
  '#BDBB99',
  '#77B1A9',
  '#73A857',
];
var currentQuote = '';
var flag = 1;
function onSpin() {
  $('#text').hide();
  $('#text').text(' ');
  $('#author').hide();
  $('#author').text(' ');
  $('.contain').show();
  $('audio#pop')[0].play();
  setTimeout(function () {
    getQuote();
  }, 10000);
}

function getQuote() {
  $('.contain').hide();
  $('#text').show();
  $('#author').show();

  
  if(flag === 1){
    var index = 2;
    flag = 0;
  }
  else{
    index = Math.floor(Math.random() * numbers.length);
  }
  
  let randomQuote = numbers[index];

  numbers.splice(index, 1);

  currentQuote = randomQuote.name;
  currentAuthor = randomQuote.number;

  $('.quote-text').animate({ opacity: 0 }, 500, function () {
    $(this).animate({ opacity: 1 }, 500);
    $('#text').text(randomQuote.name);
  });

  $('.quote-author').animate({ opacity: 0 }, 500, function () {
    $(this).animate({ opacity: 1 }, 500);
    $('#author').html('Roll no : ' + randomQuote.number);
  });
  $('audio#cheering')[0].play();

  var color = Math.floor(Math.random() * colors.length);
  //
  $('html body').css(
    {
      backgroundColor: colors[color],
      color: colors[color],
    },
    1000
  );
  //
  $('.button').css(
    {
      backgroundColor: colors[color],
    },
    1000
  );
}

$(document).ready(function () {
  $('#new-quote').on('click', onSpin);
});
