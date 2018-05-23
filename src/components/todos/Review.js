import React, {Component} from 'react';
import CreateTodo from './CreateTodo';
import {connect} from 'react-redux';
import { render } from '../../index';
import data from './../../createStore';




class Review extends Component {
    render(props){
        return(
            <div>
                
                <h4>Name: {this.props.name}</h4>
                <h4>Number: {this.props.number}</h4>

            </div>
        );
    }
}

export default Review;