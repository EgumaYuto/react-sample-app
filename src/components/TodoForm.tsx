import * as React from "react";

export class TodoForm extends React.Component {

    handleSubmit() {
        console.log('The link was clicked.');
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type={"text"} />
                <button type={"submit"}>Button</button>
            </form>
        )
    }
}