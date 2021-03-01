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

    render () {
        return(
            <UserCardList />
        )
    }
}
export default SearchForm;