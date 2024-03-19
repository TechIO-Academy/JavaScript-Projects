document.getElementById('new-quote-btn').addEventListener('click', getQuote);

function getQuote() {
    fetch('https://type.fit/api/quotes')
        .then(response => response.json())
        .then(data => {
            const quote = data[Math.floor(Math.random() * data.length)];
            document.getElementById('quote-text').textContent = quote.text;
            const author = quote.author;
            const cleanedAuthor = author.replace(", type.fit", "");
            document.getElementById('quote-author').textContent = cleanedAuthor || "Unknown";
            console.log(quote.author);

        })
        .catch(error => console.error('Error:', error));
}

// Load a quote when the page loads
window.onload = () => {
    getQuote();
};
