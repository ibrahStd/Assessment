    const input = document.getElementById("Input");
    const list = document.getElementById("List");
    fetch("https://dummyjson.com/quotes")
        .then(response => response.json())
        .then(data => {
            const quotes = data.map(item => item.quote);
            input.addEventListener("input", function() {
                const search = input.value.toLowerCase();
                const filterQ = quotes.filter(quote =>
                    quote.toLowerCase().includes(search)
                );
                displayQuotes(filterQ);
            });
        })
        .catch(error => {
            list.innerHTML = error;
        });

    function displayQuotes(quotes) {
        list.innerHTML = "";
        if (quotes != "") {
            quotes.forEach(quote => {
                const quoteItem = document.createElement("li");
                quoteItem.textContent = quote;
                list.appendChild(quoteItem);
            });
        }
    }