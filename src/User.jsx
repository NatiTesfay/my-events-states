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
        fullValue:false,
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
     
 

    render(){
        return(
            <div>
                <h1>Form 2</h1>
                <form action="">
             <input type="text" placeholder="First name" value={this.state.firstname} onChange={this.hanlderFname} />
             <button>Click</button>
             <input type="text" placeholder="Last name" value={this.state.lastname} onChange={this.hanlderlname} />
             <button>Click</button>
             <input type="age" placeholder="age" value={this.state.age} onChange={this.hanlderFage} />
             <button>Click</button>
             <input type="email" placeholder="email" value={this.state.email} onChange={this.hanlderFemail} />
             <button>Click</button>
             <input type="password" placeholder="password" value={this.state.password} onChange={this.hanlderpassword} />
             <button>Click</button>
                </form>
              
            </div>
        )
        
    }
    
}

export default User;
inputValue = (e)=>{
    switch (e,key) {
     case firstname:
         this.setState({ firstname: e.target.value })
         break;
    
     case lastname:
         this.setState({ lastname: e.target.value })
         break;
    
     case age:
         this.setState({ age: e.target.value })
         break;
    
     case email:
         this.setState({ email: e.target.value })
         break;
    
     case password:
         this.setState({ password: e.target.value })
         break;
    
     default:
         break;
    }
    alert("yes")
   }

