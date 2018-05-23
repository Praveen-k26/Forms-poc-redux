import React, { Component } from 'react'
import Review from './Review';

class CreateTodo extends Component {
    
      constructor() {
        super();
        this.state = {
          name: '',
          number: '',
        };
      }

      handleSubmit(event) {
        event.preventDefault();
        this.props.store.dispatch({
          type: 'ADD_TODO',
          todo: this.state,
        });
      }
    
      handleChange(event) {
        this.setState({
          name: event.target.value
           
        });
      }
      handlenumb(event) {
          this.setState({
              number: event.target.value
          })
      }
    
      render() {
        return(
          <div>
            <form onSubmit={(event) => this.handleSubmit(event)}>
              <p>
                  <label>Name:</label>
                <input
              type="text"
              onChange={(event) => this.handleChange(event)} />
              </p>
              <p>
                  <label>Number</label>
                <input
              type="text"
              onChange={(event) => this.handlenumb(event)} />
              </p>
              <input type="submit" />
           </form>
           <div>{this.state.name}</div> 
           <div>{this.state.number}</div>
         </div>
       );
      }
    };
    
    export default CreateTodo;