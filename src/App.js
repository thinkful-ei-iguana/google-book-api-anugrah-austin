import React from 'react';
import './App.css';

function App(responseObj) {
  let bookArr = responseObj.items;

  bookArr.map(obj => {
    return (
      `<section className="book">
        <h1>${obj.volumeInfo.title}</h1>
        <img src="${obj.imageLinks.small}" />
        <p>Author:${obj.volumeInfo.authors}</p>

      </section>`
    )
  })

  return (
<>
</>
  );
}

export default App;
