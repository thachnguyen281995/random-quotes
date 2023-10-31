import React, { useEffect, useState } from "react";
import QuotesText from "../Components/QuotesText";
import QuoteAuthor from "../Components/QuoteAuthor";
import Button from "../Components/Button";
import axios from "axios";

const Quotes = () => {
    const [state, setState] = useState({
        quote: "The Best Richness , is the Richness of Soul",
        author: "Prophet Muhmmad(Peace be upon him)",
        quotesData: [],
        color: "rgb(243,156,18)",
    });
    // random color
    const randomColor = () => {
        let colorPatterns = "1234567890ABCDEF";
        let color = "#";
        for (let i = 0; i < 6; i++) {
            color += colorPatterns[Math.floor(Math.random() * 16)];
        }
        return color;
    };

    const fetchQuotes = async () => {
        axios
            .get(
                "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
            )
            .then((res) => {
                const quotesData = [...res.data.quotes];
                const color = randomColor();
                setState((prev) => {
                    return {
                        ...prev,
                        quotesData: quotesData,
                        color: color,
                    };
                });
            })
            .catch((err) => console.log(err));
    };
    useEffect(() => {
        fetchQuotes();
    }, []);
    const handleClick = () => {
        let randomNumber = Math.floor(Math.random() * 16);
        let color = randomColor(randomNumber);
        let {quote,author} = state.quotesData[randomNumber]
        document.body.style.color = color;
        document.body.style.backgroundColor = color;
        setState((prev) => {
            return {
                ...prev,
                color,
                quote,
                author
            };
        });
    };

    return (
        <div className="bg-white text-center w-[520px] rounded-[3px] p-8">
            <QuotesText quote={state.quote} color={state.color} />
            <QuoteAuthor author={state.author} color={state.color} />
            <button onClick={handleClick} className="p-4 btn btn-blue btn-blue:hover">Click me</button>
        </div>
    );
};

export default Quotes;
