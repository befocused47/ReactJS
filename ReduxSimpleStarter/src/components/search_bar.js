import React, { Component } from 'react';
//{Component} same as const Component = {Component}
//Class Component
class SearchBar extends Component {

    //when using a class based component , it should return JSX by using render method
    /*Defn Check video --> Sectoin 1 17
        State - a js object that is used to record and react to user events.Each class based 
        component that we define has its own state object, Whenever a component state is changed,
        the component immediately renders and also forces all of its children to render as well
    */

    constructor(props) {
        super(props);
        //State
        this.state = { term: 'type something...' };
    }


    render() {
        return (
            <div>
                {/**whenever setState is called the, component re-render and update this.state.term in the DOM.
        Controlled component has its value set by state <input value={this.state.term}/>
    **/}
                <input
                    value={this.state.term}
                    onChange={event => this.setState({ term: event.target.value })} />
      {/**JS variable should be written inside {} whenever used in JSX 
                Value of the input: {this.state.term}
                */}
            </div>
        )
    }
}

export default SearchBar;