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

  search = (event) => {
    event.preventDefault();
    const API_URL = 'https://www.googleapis.com/books/v1/volumes?q='
    fetch(`${API_URL}${this.state.query}&key=AIzaSyBya77hXl5T1yFWgEkl70tjngdgPDjNK1Y`)
    .then(res => res.json())
    .then(data => {
      console.log(data);
      const books = [...data.items];
      console.log(books);
      this.setState({
        items: books,
      })
    })
  }

  render() {
    return (
      <div className="App">
        <header className="app-header">
          <h1 className="app-title">Google Book Search</h1>
        </header>
        <form className="main-container" onSubmit={this.search} >
          <input type="text" placeholder="Search for a book"
          onChange={e => this.setState({query: e.target.value})}/>
          <button type="submit">Search</button>
        </form>
      </div>
    )
  }
}

