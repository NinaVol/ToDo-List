import { Component } from "react";
import check from './check.png'

export class ToDoList extends Component {
   state = {
    userInput: '',
    itemList:[]
   }

   onChangeEvent(e){
    this.setState({userInput:e});
   }

   addItem(input) {
    if (input === '') {
        alert('Please enter an item!')
    }
    else {
        let listArray = this.state.itemList;
        listArray.push(input);
        this.setState({itemList: listArray, userInput: ''})
    }
   }
   crossedWord(event) {
    const Li = event.target;
    Li.classList.toggle('crossed');
   }

   deleteItem() {
    let listArray = this.state.itemList;
    listArray = [];
    this.setState({itemList: listArray})
   }

   onFormSubmit(e){
    e.preventDefault();
   }
   
   
    render(){
    return(
        <div>
            <form onSubmit={this.onFormSubmit}>
        <div className='container'>
        <input type="text"
        placeholder="What are you planning to do?"
        onChange={(e) => {this.onChangeEvent(e.target.value)}}
        value={this.state.userInput}
        />
        </div>
        <div className='container'>
            <button className="btn add" onClick={() => this.addItem(this.state.userInput)}>Add</button>

        </div>
        <ul>
            {this.state.itemList.map((item, index) => {return <li onClick={this.crossedWord} key={index}>
                 <img src={check} width='20px' alt="check"/>
                {item}</li>})}
        </ul>
        <div className='container'>
            <button className="btn delete" onClick={() => this.deleteItem()}>Delete</button>
        </div>
        </form>
        </div>
    )
   }
}