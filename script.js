function navigate(page) {
    let content = document.getElementById('content');
    if (page === 'game') {
        content.innerHTML = '<h2>Game</h2><p>The game will be embedded here.</p>';
    } else if (page === 'about') {
        content.innerHTML = '<h2>About</h2><p>Information about the game goes here.</p>';
    } else {
        content.innerHTML = '<h2>Other</h2><p>Additional content can be placed here.</p>';
    }
}
