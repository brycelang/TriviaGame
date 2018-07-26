$(document).ready(function() { 
var question = document.getElementById('question');
var answers = document.getElementById('answers');
var submitButton = document.getElementById('submit');

function init(){}

function conclude(){}

//init the game when the webpage is loaded
init();

// on submit, show results
submitButton.addEventListener('click', showResults);

//https://trivia.fyi/
var questions = [
    {
      question: "The southernmost part of the US is located in which state?",
      answers: {
        a: "Florida",
        b: "New York",
        c: "Hawaii"
      },
      correctAnswer: "c"
    },
    {
      question: "What was the first console video game that allowed the game to be saved?",
      answers: {
        a: "Mario",
        b: "Pac-Man",
        c: "The Legend of Zelda"
      },
      correctAnswer: "c"
    },
    {
      question: "Created in 2009, what was the first decentralized cryptocurrency?",
      answers: {
        a: "Bitcoin",
        b: "Dogecoin",
        c: "Litecoin"
      },
      correctAnswer: "a"
    }
  ];

});