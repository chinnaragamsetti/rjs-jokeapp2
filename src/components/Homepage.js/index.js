import React, { useState, useEffect } from "react";

function Homepage() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    fetch(
      "https://v2.jokeapi.dev/joke/any?format=json&blacklistFlags=nsfw,sexist&type=single&lang=EN&amount=10"
    )
      .then((response) => response.json())
      .then((data) => {
        setJokes(data.jokes);
      });
  }, []);

  return (
    <div>
      <h2>Jokes</h2>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Joke</th>
          </tr>
        </thead>
        <tbody>
          {jokes.map((joke) => (
            <tr key={joke.id}>
              <td>{joke.id}</td>
              <td>{joke.joke}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Homepage;
