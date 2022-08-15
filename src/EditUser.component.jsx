import {Component} from "react";


export default class EditUser extends Component{
    constructor(){
    super()
    this.state={
        fname:"NATI",
        lname:"TESFAY",
        age:"23",
        email:"NETANELTES66@ESFV",
        password:"4444",
        confirmPassword:"4444",
    };


    }
    hanlderFname = (event) =>{
        this.setState({
            fname:event.target.value
        })
    }
    handleLname = (event) =>{
        this.setState({
            lname:event.target.value
        })
    }
    hanldeAge = (event) =>{
        this.setState({
            age:event.target.value
        })
    }

    handleEmail = (event) =>{
        this.setState({
            email:event.target.value
        })
    }
    hadlePassword = (event) =>{
        this.setState({
            password:event.target.value
        })
    }
    handlePasswordCheck = (event) =>{
         this.setState({
            confirmPassword:event.target.value
         })
    }

    submitHandler = e => {
        if (this.state.password.target.value == this.state.checkpassword.target.value) {
            alert("הצלחה")
           }
    }

 
   

    render(){
        return(
            <div>
             <h1>
                Form 1
             </h1>
             <form onSubmit={this.submitHandler}>
             <label>UserName</label>
             <input type="text" placeholder="First name" value={this.state.fname} onChange={this.hanlderFname} />
         
             <br />
             <label>UseLName</label>
             <input type="text" placeholder="Last name" value={this.state.lname} onChange={this.handleLname} />
            
             <br />
             <label>UserAge</label>
             <input age="age" placeholder="Age" value={this.state.age} onChange={this.hanldeAge} />
         
             <br />
             <label>UserEmail</label>
             <input email="email" placeholder="Email" value={this.state.email} onChange={this.handleEmail} />
           
             <br />
             <label>UserPassWord</label>
             <input password="password" placeholder="password" value={this.state.password} onChange={this.hadlePassword} />
           
             <br />
             <label>UserPassWord</label>
             <input password="password" placeholder="passwordCheck" value={this.state.confirmPassword} onChange={this.handlePasswordCheck} />
             <button onCanPlay={this.submitHandler}>Click</button>
             </form>
            </div>
        )
        
    }
    
}




