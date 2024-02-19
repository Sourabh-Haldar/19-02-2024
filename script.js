const quotes = [
    "Hey {name}, keep smiling!",
    "Hello {name}, have a great day!",
    "Hi {name}, you're awesome!"
];

function generateQuote() {
    const name = document.getElementById("name").value;
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const formattedQuote = quotes[randomIndex].replace('{name}', name);
    document.getElementById("quoteResult").innerHTML = formattedQuote;
}
