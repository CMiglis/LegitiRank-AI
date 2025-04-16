console.log("LegitiRank-AI Scanning search results...");

const results = document.querySelectorAll('div.g');

results.forEach((result, index) => {
  const link = result.querySelector('a')?.href;
  const container = result.querySelector('h3')?.parentElement;

  if (!container || !link) return;

  // Create a trust badge element
  const badge = document.createElement('span');
  badge.innerText = "🔍 Trust Score: --";
  badge.style.fontSize = '0.75rem';
  badge.style.marginLeft = '8px';
  badge.style.color = '#888';
  badge.style.fontStyle = 'italic';

  // Later: replace "--" with a real score
  container.appendChild(badge);
});
