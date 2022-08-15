import { Component } from "react";



class User extends Component {
    constructor(props) {
        super(props)
        this.state = {
            firstname: "Netanel",
            lastname: "Tesfay",
            age: "25",
            email: "netaneltes66@gmail",
            password: "050505455",
        };
    }
    hanlderFname = (event) => {
        this.setState({ firstname: event.target.value })
    }
    hanlderlname = (event) => {
        this.setState({ lastname: event.target.value })
    }

    hanlderFage = (event) => {
        this.setState({ age: event.target.value })
    }

    hanlderFemail = (event) => {
        this.setState({ email: event.target.value })
    }

    hanlderpassword = (event) => {
        this.setState({ password: event.target.value })

    }


    printNames = () => {
        let holder = true;
        for (const key in this.state) {
            if (this.state[key] === "") {
                holder = false;
            }
        }

        if (holder) {
            alert("הצלחה")
        }

    };




    render() {
        return (
            <div>
                <h1>Form 2</h1>
                <form>
                    <input type="text" placeholder="First name" value={this.state.firstname} onChange={this.hanlderFname} />
                    <input type="text" placeholder="Last name" value={this.state.lastname} onChange={this.hanlderlname} />

                    <input type="age" placeholder="age" value={this.state.age} onChange={this.hanlderFage} />

                    <input type="email" placeholder="email" value={this.state.email} onChange={this.hanlderFemail} />

                    <input type="password" placeholder="password" value={this.state.password} onChange={this.hanlderpassword} />
                    <button onClick={this.printNames}>Print</button>
                </form>
                {/* <div isValue={this.state.isValue}></div> */}
            </div>
        )

    }

}

export default User;
