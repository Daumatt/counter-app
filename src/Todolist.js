import {Component} from "react";



class Todolist extends Component{
    
    constructor(){
        super();
        this.state= {
            newItem: '',
            todoItems:['wash', 'cook']
        }
    }

    addItemToList = (event) =>{
        // do something
        event.preventDefault();
        if(this.state.newItem.length < 1){
            alert("Please add a task!");
            return;
        }
        const newArr = [...this.state.todoItems]
        newArr.push(this.state.newItem);
        this.setState({todoItems:[...newArr],newItem:''})


}


    render(){

        console.log(this.state)
        return (
        <div>
            <form onSubmit={this.addItemToList}>
                <input onChange={(event) => this.setState({newItem: event.target.value})} type="text" placeholder="Add task"></input>
                <button type="submit">Add Task</button>
            </form>

            <ul>
                {
                    this.state.todoItems?.map((item)=>(
                        <li>{item}</li>
                    ))
                }
            </ul>
        </div>
        )
    }
}

export default Todolist
