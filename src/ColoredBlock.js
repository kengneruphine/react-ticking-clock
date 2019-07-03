import React from 'react';
import ChangeColorButton from './ChangeColorButton';

// Parent Component to the ChangeColorButton component
class ColoredBlock extends React.Component{
    constructor(props){
        super(props)
        this.changeColor = this.changeColor.bind(this);
        this.state ={
            backgroundColor:"red"
        }
    }

    changeColor(){
        this.setState((prevState)=> {
         let newColor= prevState.backgroundColor === "red" ? "blue" : "red"
        return{
            backgroundColor : newColor
        };
    })
}
    render(){
        return(
            <div style={{width:"200px", height:"200px", backgroundColor:this.state.backgroundColor}}>
            <ChangeColorButton clickHandler ={this.changeColor} currentColor= {this.state.backgroundColor} />
            </div>
        );
    }
}

export default ColoredBlock;