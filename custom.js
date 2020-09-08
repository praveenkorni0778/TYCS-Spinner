const projectName = "random-quote-machine";
localStorage.setItem('example_project', 'Randowm Quote Machine');
let quotesData;

function inIframe () { try { return window.self !== window.top; } catch (e) { return true; } }
var numbers = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','23','25','26','27','28','29','30','31','32','33','34'];
var colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"];
var currentQuote = ''; 


function getQuote() {
  let index = Math.floor(Math.random() * numbers.length);
  let randomQuote = numbers[index];
  
  numbers.splice(index,1);
    
  currentQuote = randomQuote;
  
  
  $(".quote-text").animate(
    { opacity: 0 },
    500,
    function() {
      $(this).animate({ opacity: 1}, 500);
      $('#text').text(randomQuote);
    }
  );

  

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
  

  $('#new-quote').on('click', getQuote);

});