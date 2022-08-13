import {Component} from "react";

class Home extends Component{
    constructor(){
    super()
    this.state={
        fname:"",
        lname:"",
        age:"",
        email:"",
        password:"",
        checkpassword:"",
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
            checkpassword:event.target.value
         })
    }

    submitHandler = e => {

        alert(`${this.state.fname} ${this.state.lname} ${this.state.age} ${this.state.email} ${this.state.password} ${this.state.checkpassword} `)
        
    }

    passwordValueCheck(){
       if (this.state.password.value == this.state.checkpassword.value) {
        alert("הצלחה")
        
       }
    }
   

    render(){
        return(
            <div>
             <h1>
                Form
             </h1>
             <form onSubmit={this.submitHandler}>
             <label>UserName</label>
             <input type="text" placeholder="First name" value={this.state.fname} onChange={this.hanlderFname} />
             <button>Click</button>
             <br />
             <label>UseLName</label>
             <input type="text" placeholder="Last name" value={this.state.lname} onChange={this.handleLname} />
             <button>Click</button>
             <br />
             <label>UserAge</label>
             <input age="age" placeholder="Age" value={this.state.age} onChange={this.hanldeAge} />
             <button>Click</button>
             <br />
             <label>UserEmail</label>
             <input email="email" placeholder="Email" value={this.state.email} onChange={this.handleEmail} />
             <button>Click</button>
             <br />
             <label>UserPassWord</label>
             <input password="password" placeholder="password" value={this.state.password} onChange={this.hadlePassword} />
             <button>Click</button>
             <br />
             <label>UserPassWord</label>
             <input password="password" placeholder="passwordCheck" value={this.state.checkpassword} onChange={this.handlePasswordCheck} />
             <button>Click</button>
             </form>
            </div>
        )
    }
    
}
export default Home;
