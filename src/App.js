import axios from "axios";
import React, { useState, useEffect } from "react";
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
  //   console.log(author);
  console.log(quotes);
  return (
    <main>
      <div className="content">
        <div className="quotes">
          {quotes ? (
            <>
              <p>{quotes.text}</p>
              <h2>{quotes ? quotes.author : "Unkown"}</h2>
              <br />
            </>
          ) : (
            <></>
          )}
        </div>
        <button onClick={FetchData}>Get Quote</button>
      </div>
    </main>
  );
}

export default App;
