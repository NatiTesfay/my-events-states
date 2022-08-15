import { Component } from "react";
import EditUser from "./EditUser.component";
import User from "./User";

export default class Home extends Component{
    constructor(props){
    super(props)
    this.state={isValue: true}
    }


    handleClick() {
        this.setState({
         isValue: !this.state.isValue
        });
    }


    printMessage() {
        if (this.state.isValue) {
            return (
                <div>
                <h1>1 massage</h1>
                <EditUser/>
                </div>
            )
        }
        return (<div>
                <h1>2 massage</h1>
                <User/>
               </div>
               )
    }
        handleClick() {
        this.setState({
            isValue: !this.state.isValue
        });
    }

    render(){
        return(
            <div>
                 
                  <button onClick={() => this.handleClick()}>
                    Click here to know contents!
                </button>
                <div>{this.printMessage()}</div>

            </div>
        )
    }
}

