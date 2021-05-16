import "./App.css";
import React from "react";

const langs = ["html", "css", "js", "php"];

function App() {
  return (
    <div className="App">
      <ul>
        {langs.map((lang) => {
          return <li key={lang}>{lang}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;
