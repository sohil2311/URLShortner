const urlForm = document.getElementById('urlForm');
const urlInput = document.getElementById('urlInput');
const resultContainer = document.getElementById('resultContainer');
const originalUrl = document.getElementById('originalUrl');
const shortenedUrl = document.getElementById('shortenedUrl');

urlForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const longUrl = urlInput.value;
  const response = await shortenUrl(longUrl);

  if (response.ok) {
    const data = await response.json();
    showResult(data.longUrl, data.shortUrl);
  } else {
    showResult(longUrl, 'Error: Unable to shorten URL.');
  }
});

async function shortenUrl(url) {
  const response = await fetch('https://api.example.com/shorten	', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ longUrl: url })
  });

  return response;
}

function showResult(longUrl, shortUrl) {
  originalUrl.textContent = `Original URL: ${longUrl}`;
  shortenedUrl.textContent = `Shortened URL: ${shortUrl}`;

  resultContainer.classList.remove('hidden');
}
