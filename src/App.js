import axios from "axios";
import React, { useState, useEffect, useRef } from "react";
import "./App.css";
function App() {
  const [quotes, setQuotes] = useState([]);
  async function FetchData() {
    const response = await axios.get("https://type.fit/api/quotes/");
    let lvl = Math.floor(Math.random() * response.data.length);
    setQuotes(response.data[lvl]);
  }

  useEffect(() => {
    FetchData();
  }, []);

  const textRef = useRef();
  let colors = ["#ffff00", "#b2ff22", "#90ee90", "#ff68ff", "#a9a9e7"];
  useEffect(() => {
    textRef.current.style.color =
      colors[Math.floor(Math.random() * colors.length)];
  }, [quotes]);
  //   console.log(author);
  console.log(quotes);
  return (
    <main>
      <div className="content">
        <div className="quotes">
          {quotes ? (
            <>
              <p ref={textRef}>{quotes.text}</p>
              <h2>{quotes.author ? quotes.author : "Unkown"}</h2>
              <br />
            </>
          ) : (
            <>...</>
          )}
        </div>
        <button onClick={FetchData}>Get Quote</button>
      </div>
    </main>
  );
}

export default App;
