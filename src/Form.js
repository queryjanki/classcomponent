import React from "react";

class Form extends React.Component{

    constructor(props){
        super(props);
        this.state = {
          name: '',
          email:'',
          password:'',
          gender:[]
        }
        this.input=this.input.bind(this);
        this.update=this.update.bind(this);
        this.submit=this.submit.bind(this);
        this.password=this.password.bind(this);
        this.onvaluechage=this.onvaluechage.bind(this);
      }


      input(event){
        this.setState({name : event.target.value});
      }
      update(event){
        this.setState({email : event.target.value});
      }
      password(event){
        this.setState({password : event.target.value});
      }
      submit(){
        console.log("name = "+this.state.name);
        console.log("email = "+this.state.email);
        console.log("password = "+this.state.password);
        console.log(this.state.selectesOption);

        const s = this.state.password;
        document.getElementById('pass').innerHTML=s;

        const n = this.state.password;
        document.getElementById('name').innerHTML=n;

        const e = this.state.password;
        document.getElementById('email').innerHTML=e;
      }

      onvaluechage(event){
        this.setState({
            selectesOption: event.target.value
        });
      }


    render(){
        return(
            <>
                {/* <form action="" onSubmit={this.handleSubmit}> */}
                    <table align="center"  className="form">
                        <tr>
                            <th><h1>CONTACT FORM</h1></th>
                        </tr>
                        <tr><th>NAME : </th>
                            <td><input type="text"  onChange={this.input}></input></td>
                        </tr><hr></hr>
                        <tr>
                            <th>EMAIL : </th>
                            <td><input type="email" onChange={this.update}></input></td>
                        </tr><hr></hr>
                        <tr>
                            <th>password : </th>
                            <td><input type="password"  onChange={this.password}></input></td>
                        </tr><hr></hr>
                        <tr>
                            <th>GENDER : </th>
                            <td>
                            MALE : <input type="radio" name="name" onChange={this.onvaluechage} value="male"></input><br></br>
                            FEMALE : <input type="radio" name="name" onChange={this.onvaluechage} value="female"></input></td>
                        </tr><hr></hr>
                        {/* <tr>
                            <th>HOBBY : </th>
                            <td>
                                Dance : <input type="checkbox" name="dance"></input><br></br>
                                Singing : <input type="checkbox" name="singing"></input><br></br>
                                Foodie : <input type="checkbox" name="foodie"></input>
                            </td>
                        </tr><hr></hr> */}
                        <tr>
                            <input type="submit" value="submit" name="submit" onClick={this.submit}></input>
                        </tr>
                    </table>
                {/* </form> */}
                <div>
                    select option is : {this.state.selectesOption}
                </div>
                <table align="center">
                    name : <h2 id='name'></h2>
                    email : <h2 id='email'></h2>
                    password : <h2 id='pass'></h2>
                </table>
            </>
        )
    }

}

export default Form;