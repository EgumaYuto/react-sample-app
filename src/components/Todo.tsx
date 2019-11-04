import * as React from "react";

interface Props {
    title: string
}

export class Todo extends React.Component<Props> {

    render() {
       return (
           <form>
               <label>
                   <input type={"checkbox"} />
                   { this.props.title }
               </label>
           </form>
       )
    }
}