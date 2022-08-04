import React from "react"
import Question from "./Question"
import { nanoid } from 'nanoid'
import Confetti from 'react-confetti'

//Page 3
export default function QuestionsContainer(props) {
  const {difficulty, setDifficulty, category, setCategory, setPage} = props;
  const questionsToFetch = 5;
  const [questions, setQuestions] = React.useState([])
  const [correctAnswers, setCorrectAnswers] = React.useState(0)
  const [answeredQuestions, setAnsweredQuestions] = React.useState(0)
  const [endGame, setEndGame] = React.useState(false)
  const [questionElements, setQuestionElements] = React.useState("")

  React.useEffect(() => {
    fetch(`https://opentdb.com/api.php?amount=${questionsToFetch}&difficulty=${difficulty}&category=${category}`)
        .then(res => res.json())
        .then(data => setQuestions(data.results))
        .catch(error => {
          console.log(error, 'error fetching questions')
          setPage(-1)
        })
  }, [])

  React.useEffect(() => {
    setQuestionElements(questions.map(q => (
      <Question 
        key={nanoid()}
        question={q.question}
        correct_answer={q.correct_answer}
        incorrect_answers={q.incorrect_answers}
        setCorrectAnswers={setCorrectAnswers}
        setAnsweredQuestions={setAnsweredQuestions}
      />
    )))
  }, [questions])

  //if user answered all the questions
  React.useEffect(() => {
    if(answeredQuestions === questionsToFetch) setEndGame(true) 
  }, [answeredQuestions])

  function resetGame() {
    setAnsweredQuestions(0)
    setCorrectAnswers(0)
    setEndGame(false)
    setDifficulty("")
    setCategory("")
    setPage(1)
  }

  //sets questions--num-correct text red if no questions correct,
  //green if >=1 correct
  function setCorrectQuestionsStyle() {
    return correctAnswers === 0 ? {color: "#cd2563"} : {color: "#37EABB"}
  }

    return (
      <div className="questions-container page-container">
        <div className="questions">
          <h1 className="title">Quizzical</h1>
          <div className="questions--elements">
            {questionElements}
          </div>

          {!endGame &&
          <button className="questions--reset-btn control-btn reset-btn" onClick={setPage(-1)}>
            <i className="fa-solid fa-rotate-left"></i>
            Reset
          </button>}
          
          {endGame &&
          <div className="questions--footer">
            <p className="questions--num-correct" style={setCorrectQuestionsStyle()}>
              Correct: {correctAnswers}/{questionsToFetch}
            </p> 
            <button className="questions--play-again-btn control-btn" onClick={resetGame}>
              Play Again
              <i className="fa-solid fa-play"></i>
            </button>
          </div>}
        </div>
        {correctAnswers === questionsToFetch && <Confetti/>}
      </div>
    )
}

//resetGame