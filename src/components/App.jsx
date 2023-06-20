import React from "react";

import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Note from "./Note.jsx";
import notes from "../notes.js";

// function createEntry(item) {
//   return(
//     <Note 
//     key = {item.key}
//     title = {item.title}
//     content = {item.content}
//     />
//   );
// }

function App() {
  return (
    <div>
      <Header />

      {/* {notes.map(createEntry)} */}
      {notes.map(item => (<Note 
            key = {item.key}
            title = {item.title}
            content = {item.content}
            />
        ))}
  
      <Footer />
    </div>
  );
}

export default App;