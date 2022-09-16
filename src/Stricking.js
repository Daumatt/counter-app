import {Component} from "react";



class Stricking extends Component{
    
    constructor(){
        super();
        this.state= {
            newItem: '',
            todoItems:[
                {title:'wash', done: 'false'},
                {title:'cook', done: 'false'},
            ]
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
        newArr.push({title: this.state.newItem, done:false});
        this.setState({todoItems:[...newArr],newItem:''})


    }

    taskIsDone = (title) => {
        //do something
        console.log(title)
        let todoItems2 = [...this.state.todoItems];
        todoItems2[title] = {...todoItems2[title], done:!todoItems2[title].done}
        this.setState({todoItems: todoItems2});
        
    }


    render(){

      
        return (
        <div>
            <form onSubmit={this.addItemToList}>
                <input value={this.state.newItem} onChange={(event) => this.setState({newItem: event.target.value})} type="text" placeholder="Add task"></input>
                <button type="submit">Add Task</button>
            </form>

            <ul>
                {
                    this.state.todoItems?.map((item, title)=>(
                        <li onClick={() => this.taskIsDone(title)
                        }
                        style={{textDecoration:`${item.done ?'line-through':''}`}}>{item.title}</li>
                     
                    ))
                }
            </ul>
        </div>
        )
    }
}

export default Stricking;