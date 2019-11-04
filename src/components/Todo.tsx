import * as React from "react";
import {TodoViewModel} from "./TodoViewModel";

interface Props {
    todo: TodoViewModel
    handleRemove: (id: string) => void
}

export class Todo extends React.Component<Props> {

    handleRemove = () => {
        this.props.handleRemove(this.props.todo.id);
    };

    render() {
       return (
           <form>
               <label>
                   <input type={"checkbox"} onChange={this.handleRemove} />
                   {this.props.todo.title}
               </label>
           </form>
       )
    }
}