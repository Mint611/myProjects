import React, { Component } from 'react';


class App extends Component {
    constructor() {
        super();
        this.state = { displayBio: true };
    }

    render() {
        return (
            <div>
                <h1>Hello!</h1>
                <p>My name is Mint. I'm a student</p>
                <p>I'm always looking forward to working on meaningful projects</p>
                {
                    this.state.displayBio ?(
                    <div>
                        <p>I live in Chongqing, and code everyday.</p>
                        <p>My favourite language is Javascipt</p>
                        <p>Besides coding, i also like music and football</p>
                    </div>
                ) : null   
                }
            </div>
        )
    }
}

export default App;