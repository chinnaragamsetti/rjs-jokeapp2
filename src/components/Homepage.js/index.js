import React, { useEffect, useState } from "react";

const Homepage = () => {
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
            <th>#</th>
            <th>Joke</th>
          </tr>
        </thead>
        <tbody>
          {jokes.map((joke, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{joke}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Homepage;
