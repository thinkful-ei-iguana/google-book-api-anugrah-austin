import React from 'react';
import Search from './Search'
import './App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      items: []
    };
  }

  search() {
    const API_URL = 'https://www.googleapis.com/books/v1/volumes?q='
    fetch(`${API_URL}${this.state.query}&key=AIzaSyBya77hXl5T1yFWgEkl70tjngdgPDjNK1Y`)
    .then(res => res.json())
    .then(json => {
      let {items} = json;
      this.setState({items})
    });
  }

  render() {
    return (
      <div className="App">
        <header className="app-header">
          <h1 className="app-title">Google Book Search</h1>
        </header>
        <form className="main-container">
          <input type="text" placeholder="Search for a book"/>
          <button type="submit">Search</button>
        </form>
      </div>
    )
  }
}

