const projectName = "random-quote-machine";
localStorage.setItem('example_project', 'Randowm Quote Machine');
let quotesData;

function inIframe () { try { return window.self !== window.top; } catch (e) { return true; } }
var numbers = [{"name":"ANTONITTA LORDUSWAMY","number":"1"},{"name":"ATULKUMAR MISHRA","number":"2"},{"name":"BHALERAO ROHAN","number":"3"},{"name":"BIRMOLE SAGAR","number":"4"},{"name":"CHANDAK HARSHAD","number":"5"},{"name":"CHAUDHARY AIJAZ","number":"6"},{"name":"DEEPAK AVUDIAPPAN","number":"7"},{"name":"GUPTA DHARMESH","number":"8"},{"name":"JADHAV VEDANGI","number":"9"},{"name":"JAISWAR BRIJESH","number":"10"},{"name":"KONAR NITESH","number":"11"},{"name":"MISHRA JAYENDRA","number":"13"},{"name":"NADAR PRIYA","number":"14"},{"name":"NASVEEDA DAVID","number":"15"},{"name":"PAL SONU","number":"16"},{"name":"PANDEY RISHABH","number":"17"},{"name":"PARAB SAHIL","number":"18"},{"name":"PEDNEKAR SIDDHESH","number":"19"},{"name":"RAHATE OMKAR","number":"20"},{"name":"SAURABH PANDEY","number":"21"},{"name":"SAWANT PREET","number":"22"},{"name":"SHETTIGAR JAGANNATH","number":"23"},{"name":"SHETTY NILESH","number":"24"},{"name":"SINGH SIMRAN","number":"25"},{"name":"NADAR SWEETY","number":"26"},{"name":"TAMBE SAHIL","number":"27"},{"name":"TIWARI RIDDHI","number":"28"},{"name":"VIPIN YADAV","number":"29"},{"name":"VISHWAKARMA VISHESHKUMAR","number":"30"},{"name":"WASHIMKAR AKASH","number":"31"},{"name":"YADAV AJAY","number":"32"},{"name":"YADAV PRADEEP","number":"33"},{"name":"YADAV SURAJ","number":"34"}];
var colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"];
var currentQuote = ''; 

function onSpin(){
  $("#text").hide();
  $("#author").hide();
  $(".heart").show();
  $('audio#pop')[0].play();
  setTimeout(function(){
    getQuote();
  },10000);
}

function getQuote() {
  $(".heart").hide();
  $("#text").show();
  $("#author").show();
  let index = Math.floor(Math.random() * numbers.length);
  let randomQuote = numbers[index];
  
  numbers.splice(index,1);
    
  currentQuote = randomQuote.name;
  currentAuthor = randomQuote.number;
  
  $(".quote-text").animate(
    { opacity: 0 },
    500,
    function() {
      $(this).animate({ opacity: 1}, 500);
      $('#text').text(randomQuote.name);
    }
  );

  $(".quote-author").animate(
    { opacity: 0 },
    500,
    function() {
      $(this).animate({ opacity: 1}, 500);
      $('#author').html("Roll no : "+randomQuote.number);
    }
  );
  $('audio#cheering')[0].play();
  
  var color = Math.floor(Math.random() * colors.length);
  $("html body").css(
    {
      backgroundColor: colors[color],
      color: colors[color]
    },
    1000
  );
  $(".button").css(
    {
      backgroundColor: colors[color]
    },
    1000
  );
}

$(document).ready(function() {
  

  $('#new-quote').on('click', onSpin);

});