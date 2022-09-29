import React from 'react';
import './Question.css'


const Question = () => {
    return (
        <div className='question-section'>
            <h1>Question Section</h1>
            <div className='question'>
                <Que question='How does React Work?'
                    answer="ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your code."></Que>
                <Que question='What is the difference between props and state?'
                    answer="Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components. The this. setState property is used to update the state values in the component.."></Que>
                <Que question='What is the purpose of useEffect hook?'
                    answer="The useEffect Hook allows you to perform side effects in your components. Some examples of side effects are: fetching data, directly updating the DOM, and timers. useEffect accepts two arguments. Data fetching, setting up a subscription, and manually changing the DOM in React components are all examples of side effects. Whether or not you’re used to calling these operations “side effects” (or just “effects”), you’ve likely performed them in your components before."></Que>
            </div>
        </div>
    );
};

function Que(props) {
    const { question, answer } = props;
    return (
        <div className='question'>
            <h3>Question: {question}</h3>
            <p><small>Answer: {answer}</small></p>
        </div>
    )
}
export default Question;