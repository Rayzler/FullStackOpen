import React from "react";
import StatisticLine from "./StatisticLine.jsx";

const Statistics = ({good, neutral, bad}) => {
    const all = good + neutral + bad;
    const average = (good - bad) / all;
    const positive = good / all * 100;
    
    if (all === 0) {
        return (
            <>
                <h2>statistics</h2>
                <p>No feedback given</p>
            </>
        );
    }
    
    return (
        <table>
            <tbody>
                <StatisticLine text="good" value={good} />
                <StatisticLine text="neutral" value={neutral} />
                <StatisticLine text="bad" value={bad} />
                <StatisticLine text="all" value={all} />
                <StatisticLine text="average" value={average.toFixed(1)} />
                <StatisticLine text="positive" value={positive.toFixed(1) + "%"} />
            </tbody>
        </table>
    );
};

export default Statistics;