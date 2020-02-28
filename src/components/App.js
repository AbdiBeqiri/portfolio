import React, { Component } from 'react';
import Projects from './Projects';
import SocialProfiles from './SocialProfiles';
import Title from './Title';
import profile from '../assets/profile.png';

class App extends Component {
    state = { displayBio: false}

    
    toggleDisplayBio = () => {
        this.setState({displayBio: !this.state.displayBio});
    }

    render () {
        
        return (
            <div>
                <img src={profile} alt='profile' className="profile"/>
                <h1>Hello!</h1>
                <p>My name is Abdi.</p>
                <Title />
                <p>I am interested in learning more about react and Web development!</p>
            { 
            this.state.displayBio ?  (
                <div>
                    <p>I live in Tetovo, and I like to code.</p>
                    <p>My favorite language is JavaScript, and I think React.js is awesome.</p>
                    <p>Besides coding, I also love Dota 2 and lasagna!</p>
                    <button onClick = {this.toggleDisplayBio}>Show less</button>
                </div>
                ) : (
                    <div>
                        <button onClick={this.toggleDisplayBio}>Read more</button>
                    </div>
                ) 
            }
            <hr />
            <Projects />
            <hr />
            <SocialProfiles />
            </div>
        )
    }
}

export default App;