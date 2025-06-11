document.getElementById('generate').addEventListener('click', async () => {
    const keyword = document.getElementById('keyword').value;
    if (!keyword) {
        alert('Please enter a keyword.');
        return;
    }

    const response = await fetch(`/generate?keyword=${keyword}`);
    const hashtags = await response.json();

    const list = document.getElementById('hashtag-list');
    list.innerHTML = '';
    hashtags.forEach(tag => {
        const li = document.createElement('li');
        li.textContent = `#${tag}`;
        list.appendChild(li);
    });
});

document.getElementById('copy').addEventListener('click', () => {
    const hashtags = Array.from(document.querySelectorAll('#hashtag-list li'))
        .map(li => li.textContent)
        .join(' ');

    navigator.clipboard.writeText(hashtags).then(() => {
        alert('Copied to clipboard!');
    });
});
