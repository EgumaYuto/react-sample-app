import * as React from "react";
import * as ShortId from "shortid";
import {TodoViewModel} from "./TodoViewModel";
import {Button, Input} from "semantic-ui-react";


interface Props {
    onTodoSubmit: (todo: TodoViewModel) => void
}

interface State {
    title: string
}

export class TodoForm extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = {title: ''};
    }

    handleSubmit = (): void => {
        const title = this.state.title.trim();
        if (!title) {
            return;
        }
        this.props.onTodoSubmit({
            id: ShortId.generate(),
            title: this.state.title
        });
        this.setState({title: ''});
    };

    handleInput = (event: React.ChangeEvent<HTMLInputElement>): void => {
        this.setState({title: event.target.value});
    };

    render() {
        return (
            <form action={"#"} onSubmit={this.handleSubmit}>
                <Input type={"text"} value={this.state.title} onChange={this.handleInput} />
                <Button type={"submit"}>Button</Button>
            </form>
        )
    }
}