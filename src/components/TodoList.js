import React, {Component} from 'react';
import {List} from './List'
import {InputComponent} from './InputComponent';

export class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: '',
            items: []
        };
    }

    generateId = () => {
        return Math.floor(Math.random() * 90000) + 10000;
    }

    handleChange = (event) => {
        let term = event.target.value;
        this.setState({term});
    }

    addItem = (event) => {
        event.preventDefault();
        // let id = this.generateId();
        if (this.state.term.length > 0) {
            this.setState({
                term: '',
                items: [...this.state.items, this.state.term]
            });
        }
    }

    removeItem = (id) => {

        this.setState(prevState => ({
            items: prevState.items.filter((el, index) => {
                console.log(prevState)
                return index !== id;
            })
        }));
    }

    render() {
        return (
            <div>
                <InputComponent
                    onChange={this.handleChange}
                    value={this.state.term}
                    onClick={this.addItem}
                />
                <List
                    items={this.state.items}
                    removeItem={this.removeItem}
                />
            </div>
        );
    }
}

