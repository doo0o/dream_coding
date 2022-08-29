import React, { Component } from 'react';

class Habit extends Component {
    state = {
        count: 0,
    }
    handleIncrement = () => {
        // state 오프젝트 안에 있는 카운트 증가 후 업데이트
        this.setState({
            count : this.props.habit.count + 1,
        });
    }

    handleDecrement = () => {
        const count = this.props.habit.count - 1;
        // state 오프젝트 안에 있는 카운트 감소 후 업데이트
        this.setState({
            count: count < 0 ? 0 : count
        });
    }
    
    render() {
        console.log(this.props.habit);
        const { name, count } = this.props.habit;
        return (
            <>
            <li className='habit'>
                <span className='habit-name'>{name}</span>
                <span className='habit-count'>{count}</span>
                <button
                    className='habit-button habit-increase'
                    onClick={this.handleIncrement}
                >
                    <i className="fa-solid fa-plus"></i>
                </button>
                <button 
                    className='habit-button habit-decrease'
                    onClick={this.handleDecrement}
                >
                    <i className="fa-solid fa-minus"></i>
                </button>
                <button className='habit-button habit-delete'>
                    <i className="fa-solid fa-trash-can"></i>
                </button>
            </li>
            </>
        );
    }
}

export default Habit;