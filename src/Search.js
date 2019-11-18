import React from 'react'

export default class Search extends React.Component {
    state = {
        searchInput: '',
        results: []
    }

    handleSearch = () => {
        const searchTerm = this.state.searchInput;
        fetch()
            .then(res => res.json())
            .then(results => this.setState({results}));
    }

    render() {
        return (
            <input
                type="text"
                onChange={e => this.setState({searchInput: e.target.value})}/>
        );
    }
}