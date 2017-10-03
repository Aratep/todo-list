import React, {Component} from 'react';

export class List extends Component {
    render() {
        return (
            <ul className="">
                {
                    this.props.items.map((item, index) =>
                        <li key={index} className="list">
                            <div>
                                {item}
                                <button onClick={this.props.removeItem.bind(this, index)}>X</button>
                            </div>
                        </li>
                    )
                }
            </ul>
        )
    }
}
