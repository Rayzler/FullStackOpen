import React, { useState } from "react";
import Statistics from "./components/Statistics.jsx";
import Button from "./components/Button.jsx";

const App = () => {
    // guarda los clics de cada botón en su propio estado
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);
    
    const handleClick = (value) => () => {
        switch (value) {
            case "good":
                setGood(good + 1);
                break;
            case "neutral":
                setNeutral(neutral + 1);
                break;
            case "bad":
                setBad(bad + 1);
                break;
            default:
                break;
        }
    };
    
    return (
        <div>
            <h2>give feedback</h2>
            <Button label="good" action={handleClick("good")} />
            <Button label="neutral" action={handleClick("neutral")} />
            <Button label="bad" action={handleClick("bad")} />
            
            <h2>statistics</h2>
            <Statistics good={good} neutral={neutral} bad={bad} />
        </div>
    );
};

export default App;