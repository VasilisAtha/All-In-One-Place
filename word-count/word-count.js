// Get the textarea element and the counter elements
const textarea = document.getElementById('text-input');
const characterCount = document.querySelector('.character-count');
const wordCount = document.querySelector('.word-count');
const readingTime = document.querySelector('.reading-time');

// Add an event listener to the textarea to update the counters
textarea.addEventListener('input', () => {
  // Get the text content of the textarea
  const text = textarea.value;

  // Update the character count
  characterCount.textContent = `Characters: ${text.length}`;

  // Update the word count
  const words = text.split(/\s+/).filter(word => word !== '');
  wordCount.textContent = `Words: ${words.length}`;

  // Calculate the reading time
  const averageWordsPerMinute = 200; // Change this value as needed
  const minutes = Math.ceil(words.length / averageWordsPerMinute);
  const readingTimeString = minutes === 1 ? '1 minute' : `${minutes} minutes`;
  readingTime.textContent = `Reading time: ${readingTimeString}`;
});
