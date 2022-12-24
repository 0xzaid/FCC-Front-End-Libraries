$(document).ready(function () {
    // Select the quote and author elements
    var quoteText = $("#text");
    var quoteAuthor = $("#author");
    var quote = $("#quote");
    var quote2 = $("#quote2");

    // Select the tweet and tumblr buttons
    var tweetButton = $("#tweet-quote");
    var tumblrButton = $("#tumblr-quote");

    // Select the new quote button
    var newQuoteButton = $("#new-quote");


    // Array of colors to use for the background
    var colors = ["#16a085", "#27ae60", "#2c3e50", "#f39c12", "#e74c3c", "#9b59b6", "#FB6964", "#342224", "#472E32", "#BDBB99", "#77B1A9", "#73A857", "#1E90FF", "#FFA07A", "#ADD8E6", "#90EE90", "#D3D3D3", "#FFB6C1", "#20B2AA", "#87CEEB", "#778899", "#B0C4DE"];

    // Function to get a random quote from the quotes array and update the page
    function getRandomQuote() {
        // Make an AJAX request to get the quotes from a text file
        $.ajax({
            url: "quotes.txt",
            dataType: "text",
            success: function (data) {
                // Split the data by line breaks to get an array of quotes
                var quotes = data.split("\n");

                // Get a random index for the quotes array
                var randomIndex = Math.floor(Math.random() * quotes.length);

                // Split the quote by the delimiter " - " to get the quote and author
                var quoteParts = quotes[randomIndex].split(" - ");
                var randomQuote = quoteParts[0];
                var randomAuthor = quoteParts[1];
                // Update the quote and author elements with the random quote and author
                quoteText.text(randomQuote);
                quoteAuthor.text(randomAuthor);

                // Update the tweet and tumblr buttons with the current quote and author
                tweetButton.attr("href", "https://twitter.com/intent/tweet?text=" + encodeURIComponent(randomQuote + " - " + randomAuthor));
                tumblrButton.attr("href", "https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=" + encodeURIComponent(randomAuthor) + "&content=" + encodeURIComponent(randomQuote));

                // Get a random index for the colors array
                var randomColorIndex = Math.floor(Math.random() * colors.length);

                // Change the page background color to the random color
                $("body").animate({
                    backgroundColor: colors[randomColorIndex]
                }, 1500);
                // Change the color of the tweet and tumblr buttons to the random color
                tweetButton.animate({
                    "background-color": colors[randomColorIndex]
                }, 1500);
                tumblrButton.animate({
                    "background-color": colors[randomColorIndex]
                }, 1500);

                // Change the color of the new quote button to the random color
                newQuoteButton.animate({
                    "background-color": colors[randomColorIndex]
                }, 1500);

                // Change the color of the quote
                quote.animate({
                    color: colors[randomColorIndex]
                }, 1500);
                quote2.animate({
                    color: colors[randomColorIndex]
                }, 1500);

                // Change the color of the test
                quoteText.animate({
                    color: colors[randomColorIndex]
                }, 1500);

            }
        });
    }

    // Get a random quote when the page loads
    getRandomQuote();

    // Get a new random quote when the new quote button is clicked
    newQuoteButton.click(getRandomQuote);
});
