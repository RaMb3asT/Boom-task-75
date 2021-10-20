import { useState } from "react";
import "./App.css";

function App() {

  const [text, setText] = useState(localStorage.getItem("note"));

  return (
    <div className="App">
      <div className="box">
        <div className="field">
          <div className="control">
            <textarea value={text} className="textarea is-large" placeholder="Notes..." onChange={(e) => { setText(e.target.value) }} />
          </div>
        </div>
        <button className="button is-large is-primary is-active" onClick={() => localStorage.setItem("note", text)}>Save</button>
        <button className="button is-large" onClick={(e) => { setText("") }}>Clear</button>
      </div>
    </div>
  );
}

export default App;
