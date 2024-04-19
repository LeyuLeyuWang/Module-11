const API_KEY = 'AIzaSyDcizpfvHnxBTmyqcGHMmKwCe7IcqMCCM8';

function searchVideo() {
    var searchQuery = document.getElementById('search-input').value;
    var apiURL = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&q=${encodeURIComponent(searchQuery)}&key=${API_KEY}`;

    fetch(apiURL)
        .then(response => response.json())
        .then(data => displayResults(data))
        .catch(error => console.error('Error:', error));
}

function displayResults(data) {
    var resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = '';
    data.items.forEach(item => {
        var videoId = item.id.videoId;
        var title = item.snippet.title;
        var description = item.snippet.description;
        resultsContainer.innerHTML += `
            <div class="video-item">
                <h3>${title}</h3>
                <p>${description}</p>
                <iframe width="640" height="360" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        `;
    });
}
