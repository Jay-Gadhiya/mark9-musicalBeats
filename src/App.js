import React from "react";
import "./styles.css";
import { useState } from "react";

const bookDB = {
  Artist: [
    { name: "Arijit singh", rating: "5/5" },
    { name: "A R Rehman", rating: "4/5" },
    { name: "Shreya Ghosal", rating: "3.7/5" },
    { name: "Mohammed rafi", rating: "5/5" }
  ],

  bollywood: [
    {
      name: "Tum hi ho (Ashiqui 2)",
      rating: "4/5"
    },
    {
      name: "Mohhabbat (Filhaal 2)",
      rating: "4.5/5"
    },

    {
      name: "Woh din (Chhichhore)",
      rating: "4.5/5"
    }
  ],
  Hollywood: [
    {
      name: "Friends",
      rating: "3.5/5"
    },
    {
      name: "Let you love me",
      rating: "5/5"
    }
  ]
};

export default function App() {
  const [goto, setgoto] = useState("Hollywood");

  function clickHandler(book) {
    setgoto(book);
  }
  return (
    <div className="App">
      <h1> 🎶 MusicalBeats </h1>
      <p style={{ fontSize: "smaller" }}>
        Checkout my favorite songs. Select a genre to get started
      </p>

      <div>
        {Object.keys(bookDB).map((book) => (
          <button
            onClick={() => clickHandler(book)}
            style={{
              cursor: "pointer",
              background: "#E5E7EB",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem"
            }}
          >
            {book}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        {
          <ul style={{ paddingInlineStart: "0" }}>
            {bookDB[goto].map((books) => (
              <li
                key={books.name}
                style={{
                  listStyle: "none",
                  padding: "1rem",
                  border: "1px solid #D1D5DB",
                  width: "70%",
                  margin: "1rem 0rem",
                  borderRadius: "0.5rem"
                }}
              >
                <div style={{ fontSize: "larger" }}>{books.name}</div>
                <div style={{ fontSize: "smaller" }}>{books.rating}</div>
              </li>
            ))}
          </ul>
        }
      </div>
    </div>
  );
}
