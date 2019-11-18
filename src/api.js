import React from 'react';


function getAPI(searchTerm) {

    const url = `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&key=AIzaSyBya77hXl5T1yFWgEkl70tjngdgPDjNK1Y`
    const options = {
        method: 'GET'
        headers: {
            "Content-Type": "application/json"
        }
    };

    fetch(url, options)
        .then(res => {
            if(!res.ok) {
                throw new Error(`something went wront ${res.statusText}`);
            }
            return res;
        })
        .then(res => res.json())
        .then(resJson => {})
}

