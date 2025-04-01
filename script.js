// Arrays for quotes and words
const quotes = [
    "The only limit to our realization of tomorrow is our doubts of today.",
    "Education is the most powerful weapon which you can use to change the world.",
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "Believe you can and you're halfway there.",
    "The future belongs to those who believe in the beauty of their dreams."
  ];
  
  const words = [
    { word: "Eloquent", definition: "Fluent or persuasive in speaking or writing.", example: "She gave an eloquent speech at the conference." },
    { word: "Pragmatic", definition: "Dealing with things sensibly and realistically.", example: "His pragmatic approach solved the problem quickly." },
    { word: "Resilient", definition: "Able to withstand or recover quickly from difficult conditions.", example: "The community was resilient after the natural disaster." },
    { word: "Innovative", definition: "Featuring new methods; advanced and original.", example: "The company is known for its innovative products." },
    { word: "Diligent", definition: "Having or showing care and conscientiousness in one's work or duties.", example: "She is a diligent student who always completes her assignments on time." }
  ];
  
  // Function to generate a random quote
  function getDailyQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
  }
  
  // Function to generate a random word, definition, and example
  function getDailyWord() {
    const randomIndex = Math.floor(Math.random() * words.length);
    const { word, definition, example } = words[randomIndex];
    return `Word: ${word} - Definition: ${definition} - Example: "${example}"`;
  }
  
  // Update the DOM
  document.getElementById("daily-quote").textContent = getDailyQuote();
  document.getElementById("daily-word").textContent = getDailyWord();
  