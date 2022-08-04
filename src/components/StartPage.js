import React from "react"

//Page 0
export default function StartPage(props) {
    const {setPage} = props;

    return (
        <div className="start-page page-container">
            <div className="start-page--content">
                <i className="fa-solid fa-lightbulb"/>
                <h2 className="title">Quizzical</h2>
                <p className="description">Test your trivia knowledge!</p>
                <button className="start-button" onClick={() => setPage(1)}>Start Quiz</button>
            </div>
        </div>
    )
}