import React from "react";
import "./styles.css";
import { useState } from "react";

const bookDB = {
  Artist: [
    {
      name: "Arijit singh",
      discription:
        "Arijit Singh (born 25 April 1987) is an Indian singer and music composer. He sings predominantly in Hindi and Bengali but has also performed in various other Indian languages.",
      rating: "5/5"
    },
    {
      name: "A R Rehman",
      discription:
        "Rahman is known for his extensive body of work for film and stage, for his stylistic range as a composer, and for his integration of assorted styles of music in his compositions.",
      rating: "4/5"
    },
    {
      name: "Shreya Ghosal",
      discription:
        "Shreya Ghoshal (born 12 March 1984) is an Indian playback singer. She has received four National Film Awards, four Kerala State Film Awards and two Tamil Nadu State Film Awards.",
      rating: "3.7/5"
    },
    {
      name: "Mohammed rafi",
      discription:
        "Mohammed Rafi (24 December 1924 – 31 July 1980) was an Indian film playback singer. He is considered one of the greatest and most influential singers of the Indian subcontinent.",
      rating: "5/5"
    }
  ],

  bollywood: [
    {
      name: "Tum hi ho (Ashiqui 2)",
      discription:
        "Tum Hi Ho is an Indian Hindi-language song from the 2013 Indian movie Aashiqui 2, sung by Arijit Singh.",
      rating: "4/5"
    },
    {
      name: "Mohhabbat (Filhaal 2)",
      discription:
        "Filhaal2 Mohabbat is a 2021 Punjabi/Hindi song written by Jaani and sung by B Praak.The song is sequel to Filhall which was released in 2019. ",
      rating: "4.5/5"
    },

    {
      name: "Woh din (Chhichhore)",
      discription:
        "The song is composed by Pritam and beautifully written by Amitabh Bhattacharya, sung by Arijit Singh draws us into an immersive experience down the memory lane. ",
      rating: "4.5/5"
    }
  ],
  Hollywood: [
    {
      name: "Friends",
      discription:
        "Friends is a song by American DJ and producer Marshmello and English singer Anne-Marie. It was written by the two artists, Eden Anderson, Richard Boardman, Jasmine Thompson, Nat Dunn, Sarah Blanchard and Pablo Bowman.The song was released via Joytime Collective and Asylum Records on February 9, 2018.",
      rating: "3.5/5"
    },
    {
      name: "Let me love you",
      discription:
        "Let Me Love You is a song recorded by French DJ and electronic music producer DJ Snake featuring vocals from Canadian singer Justin Bieber. The song was released through Interscope Records on 5 August 2016 as the third single from his debut studio album, Encore (2016).",
      rating: "5/5"
    },
    {
      name: "Anyone",
      discription:
        "Anyone is a song by Canadian singer Justin Bieber. It was released as a single by Def Jam Recordings on January 1, 2021, as the third single off of Bieber's sixth studio album, Justice.",
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
                <div style={{ fontSize: "smaller", paddingTop: "0.4rem" }}>
                  {books.discription}
                </div>
                <div style={{ fontSize: "large", paddingTop: "0.4rem" }}>
                  {books.rating}
                </div>
              </li>
            ))}
          </ul>
        }
      </div>
    </div>
  );
}
