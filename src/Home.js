import React from "react";

class Home extends React.Component {

    state = {
        name: "janki",
        email: "janki@gmail.com",
    }

    render() {
        return (
            <>
                <h1>hello</h1>
                <h2>{this.state.name}</h2>
                <h2>{this.state.email}</h2>
                <h2>{this.props.id}</h2>
                <h2>{this.props.color}</h2>
                <h2>{this.props.idn}</h2>
            </>
        )
    }
}

export default Home;