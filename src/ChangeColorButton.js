import React from 'react';

// child component to the ColoredBlock component
class ChangeColorButton extends React.Component{
    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(){
        this.props.clickHandler();
    }
    render(){
        return(
            <button onClick={this.handleClick}>
             I don't like {this.props.currentColor}
             </button>
        );
    }
}

export default ChangeColorButton