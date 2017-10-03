import React, {Component} from 'react';

export class InputComponent extends Component {

    render() {
        return (
            <div className="">
                <form>
                    <input
                        className="inputStyle"
                        value={this.props.value}
                        onChange={this.props.onChange}
                    />
                    <button
                        onClick={this.props.onClick}
                        className='buttonStyle'
                    >
                        Add Item
                    </button>
                </form>
            </div>
        );
    }
}