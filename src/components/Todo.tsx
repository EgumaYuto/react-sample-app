import * as React from "react";

export class Todo extends React.Component {

    render() {
       return (
           <form>
               <label>
                   <input type={"checkbox"} />
                   Todo
               </label>
           </form>
       )
    }
}