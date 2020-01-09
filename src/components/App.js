import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

class App extends React.Component {

    onSearchSubmit = async (term) => {
        const response = await axios.get(
            'https://api.unsplash.com/search/photos',
            {
                params: { query: term },
                headers: {
                    Authorization: 'Client-ID 4d882302ddfb2665f8587da98ee4f99a5ab9e79b7c791a2ce2c1411632cda30b'
                }
            }
        )
        console.log(response.data.results);
    }

    render () {
        return (
            <div className='ui container' style={{marginTop: '15px'}}>
                <SearchBar onSubmit={this.onSearchSubmit}/>
            </div>
        );
    }

};

export default App;
