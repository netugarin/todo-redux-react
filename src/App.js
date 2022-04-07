import React from "react"
import NotesList from "./components/NotesList";

function App() {
  return (
    <main >
         <div className="app">
             <h1 className="app--title">ToDo List</h1>
             <NotesList/>
         </div>
    </main>
  );
}

export default App;
