import { Component } from "react";

export default class Table extends Component{
    constructor(props){
        super(props)
        this.state = {
            firstname: "No Name",
            lastname: "Tesfay",
            age: "25",
            email: "netaneltes66@gmail",
            password: "050505455",
        };
    }

    printName =()=>{
    console.log("netanel");
    };
    changeName =()=>{
        this.setState({ firstname: "LUFFY" });
    }

    hanlderFname=()=>{
        this.setState({firstname:"NETANEL"})
    }

    handleLname=()=>{
        this.setState({lastname:"TESFAY"})
    }

    hanldeAge=()=>{
        this.setState({age:"25"})
    }

    handleEmail=()=>{
        this.setState({email:"netaneltes66@gmail.com"})
    }

    hadlePassword=()=>{
        this.setState({password:"55555555555"})
    }
    printAllInputs =(e)=>{
    e.preventDefault()
    {document.getElementById("inputsHold").innerHTML=
    `<table>
    <thead>
      <th>first name</th>
      <th>last name</th>
      <th>age</th>
      <th>email</th>
      <th>password</th>
    </thead>
    <tbody>
      <tr>
        <td>${this.state.firstname}</td>
        <td>${this.state.lastname}</td>
        <td>${this.state.age}</td>
        <td>${this.state.email}</td>
        <td>${this.state.password}</td>
      </tr>
    </tbody>
    </table>`
    }
    }





    
    render(){
        return(
            <div>
                <h1>
                    {this.state.firstname}
                </h1>
          
                <form onSubmit={this.submitHandler}>
                    <h1>Form 1</h1>
             <label>UserName</label>
             <input type="text" placeholder="First name" value={this.state.firstname} onChange={this.hanlderFname} />
         
             <br />
             <label>UseLName</label>
             <input type="text" placeholder="Last name" value={this.state.lastname} onChange={this.handleLname} />
            
             <br />
             <label>UserAge</label>
             <input age="age" placeholder="Age" value={this.state.age} onChange={this.hanldeAge} />
         
             <br />
             <label>UserEmail</label>
             <input email="email" placeholder="Email" value={this.state.email} onChange={this.handleEmail} />
             <br />
             <label>UserPassWord</label>
             <input password="password" placeholder="password" value={this.state.password} onChange={this.hadlePassword} />
             </form>      
             <button onClick={this.printName}>Print name</button>
             <button onClick={this.changeName}>Change name</button>
             <button onClick={this.printAllInputs}>prit all inputs</button>
             <div id="inputsHold"></div>
            </div>
        )
    }
}

