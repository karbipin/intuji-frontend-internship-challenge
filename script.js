function toggleMenu() {
    document.querySelector('.navbar').classList.toggle('active');
  } 
 
 // Wait for the DOM to be fully loaded before adding event listeners
  document.addEventListener("DOMContentLoaded", function() {
    // Get the buttons by their IDs
    const getStartedButton = document.getElementById('getStartedButton');
    const seeHowItWorksButton = document.getElementById('seeHowItWorksButton');

    // Add event listener for the "Get Started" button
    getStartedButton.addEventListener('click', function(event) {
      event.preventDefault(); // Prevent default anchor behavior (page reload)
      alert("Hello from the Get Started button!");
    });

    // Add event listener for the "See How It Works" button
    seeHowItWorksButton.addEventListener('click', function(event) {
      event.preventDefault(); // Prevent default anchor behavior (page reload)
      alert("Hello from the See How It Works button!");
    });
  });

// show answer while clicking + sign
  // Wait for the DOM to fully load
  document.addEventListener("DOMContentLoaded", function() {
    // Get all the FAQ question elements
    const faqQuestions = document.querySelectorAll('.faq-question');

    // Add click event to each question
    faqQuestions.forEach(function(faqQuestion) {
      faqQuestion.addEventListener('click', function() {
        // Get the next element (faq-answer) related to the clicked faq-question
        const faqAnswer = this.nextElementSibling;

        // Toggle the visibility of the faq-answer
        faqAnswer.style.display = (faqAnswer.style.display === 'block') ? 'none' : 'block';

        // Toggle the icon between '+' and '-'
        const icon = this.querySelector('.icon');
        icon.textContent = (icon.textContent === '+') ? '-' : '+';
      });
    });
  });

