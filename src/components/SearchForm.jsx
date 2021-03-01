import React, { Component } from 'react';
import UserCardList from './UserCardList';

class SearchForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: 'john-manack',
            userArray: [],
        }
    }

    _handleClick = async () => {
        const data = await fetch(`https://api.github.com/users/${this.state.username}`).then(response => response.json());
        this.setState({
            userArray: [...this.state.userArray, data],
        });
    }

    render () {
        return(
            <>
                <form>
                    <label>
                        Search GitHub Users:
                        <input type="text" value={this.state.username} placeholder="Enter username here"></input>
                    </label>
                    <button type="button" onClick={this._handleClick}>Search</button>
                </form>
                {this.state.userArray.length ? (<UserCardList users={this.state.userArray}/>) : <p>No users to display...</p>}
            </>
        )
    }
}
export default SearchForm;