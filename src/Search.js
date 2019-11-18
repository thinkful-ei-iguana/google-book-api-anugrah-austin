import React from 'react'

export default class Search extends React.Component {
    state = {
        searchInput: '',
        results: []
    }

    handleSearch = () => {
        const API_URL = 'https://www.googleapis.com/books/v1/volumes?q='
        fetch(`${API_URL}${this.state.query}&key=AIzaSyBya77hXl5T1yFWgEkl70tjngdgPDjNK1Y`)
            .then(res => res.json())
            //.then(results => this.setState({results}));
            .then(data => {
                const books = Object.keys(data).map(key => data[key].item[0]);
                console.log(books)
            })
    }

    render() {
        return (
            <input
                type="text"
                onChange={e => this.setState({searchInput: e.target.value})}
            />
        );
    }
}