import { Component } from "react";

class User extends Component{
    constructor(props){
        super(props)
        this.state={
        firstname:"",
        lastname:"",
        age:"",
        email:"",
        password:"",
        };
    }
    hanlderFname = (event)=>{
        this.setState({firstname:event.target.value})
    }
    hanlderlname = (event)=>{
        this.setState({lastname:event.target.value})
    }
    
    hanlderFage = (event)=>{
        this.setState({age:event.target.value})
    }
    
    hanlderFemail = (event)=>{
        this.setState({email:event.target.value})
    }
    
    hanlderpassword = (event)=>{
        this.setState({password:event.target.value})
    }

    submitBnt = () =>{
      
    }

    

    render(){
        return(
            <div>
                <h1>Form 2</h1>
                <form onSubmit={submitBnt}>
             <input type="text" placeholder="First name" value={this.state.firstname} onChange={this.hanlderFname} />
             <button>Click</button>
             <br />
             <input type="text" placeholder="Last name" value={this.state.lastname} onChange={this.hanlderlname} />
             <button>Click</button>
             <br />
             <input type="age" placeholder="age" value={this.state.age} onChange={this.hanlderFage} />
             <button>Click</button>
             <br />
             <input type="email" placeholder="email" value={this.state.email} onChange={this.hanlderFemail} />
             <button>Click</button>
             <br />
             <input type="password" placeholder="password" value={this.state.password} onChange={this.hanlderpassword} />
             <button>Click</button>
             <br />
             <button>Post</button>
                </form>
            </div>
        )
    }
}

export default User;