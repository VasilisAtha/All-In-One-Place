// Get the buttons and the content div
const timezonesButton = document.getElementById('timezones-button');
const publicHolidaysButton = document.getElementById('public-holidays-button');
const abbreviationsButton = document.getElementById('abbreviations-button');
const mapButton = document.getElementById('map-button');
const areasButton = document.getElementById('areas-button');
const contentDiv = document.getElementById('content');

// Add event listeners to each button to load the corresponding content
timezonesButton.addEventListener('click', () => {
  contentDiv.innerHTML = '';
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'geographical-content/timezones.html');
  xhr.onload = () => {
    contentDiv.innerHTML = xhr.response;
    const script = document.createElement('script');
    script.src = 'geographical-content/timezones.js';
    contentDiv.appendChild(script);
  };
  xhr.send();
});

publicHolidaysButton.addEventListener('click', () => {
  contentDiv.innerHTML = '';
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'geographical-content/public-holidays.html');
  xhr.onload = () => {
    contentDiv.innerHTML = xhr.response;
    const script = document.createElement('script');
    script.src = 'geographical-content/public-holidays.js';
    contentDiv.appendChild(script);
  };
  xhr.send();
});

abbreviationsButton.addEventListener('click', () => {
  contentDiv.innerHTML = '';
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'geographical-content/2-letter-abbreviations.html');
  xhr.onload = () => {
    contentDiv.innerHTML = xhr.response;
    const script = document.createElement('script');
    script.src = 'geographical-content/2-letter-abbreviations.js';
    contentDiv.appendChild(script);
  };
  xhr.send();
});

mapButton.addEventListener('click', () => {
    contentDiv.innerHTML = '';
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'geographical-content/global-map.html');
    xhr.onload = () => {
      contentDiv.innerHTML = xhr.response;
      const script = document.createElement('script');
      script.src = 'geographical-content/global-map.js';
      contentDiv.appendChild(script);
    };
    xhr.send();
  });

  areas-button.addEventListener('click', () => {
    contentDiv.innerHTML = '';
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'geographical-content/geographical-areas.html');
    xhr.onload = () => {
      contentDiv.innerHTML = xhr.response;
      const script = document.createElement('script');
      script.src = 'geographical-content/geographical-areas.js';
      contentDiv.appendChild(script);
    };
    xhr.send();
  });