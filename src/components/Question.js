import React from "react"
import { nanoid } from 'nanoid'

export default function Question(props) {
  const{question, setCorrectAnswers, correct_answer, incorrect_answers, setAnsweredQuestions} = props

  const [isDisabled, setIsDisabled] = React.useState(false)
  const [clickedAnswer, setClickedAnswer] = React.useState("")
  const [answersHtml, setAnswersHtml] = React.useState("")

  //must set question and correct answers so that react development double fetch doesn't mismatch question and answers
  const [q] = React.useState(question)
  const [correctAnswer] = React.useState(correct_answer)
  const [answers] = React.useState(shufffleAnswers)

  const clickedStyle = {
    color: "#1f1147",
    border: "2px solid #1f1147"
  }

  const correctStyle = {
    backgroundImage: "linear-gradient(to right, #37EABB, #31dbc3, #1facda, #1ca5dd)",
    color: "#1f1147",
    fontWeight: "bold"
  }

  const incorrectStyle = {
    backgroundColor: "#cd2563"
  }

  function handleClick(answer) {
    if(answer === correctAnswer) setCorrectAnswers(prevCorrect => prevCorrect + 1)
    setAnsweredQuestions(prev => prev + 1)
    setClickedAnswer(answer)
    setIsDisabled(true)
  }

  // shuffles correct and incorrect answers together
  function shufffleAnswers() {
    const answers = [correctAnswer]
    incorrect_answers.map(answer => answers.push(answer))

    return answers.sort(() => Math.random() - 0.5)
  }

  //HTML entities to text
  function htmlDecode(input) {
    let doc = new DOMParser().parseFromString(input, "text/html")
    return doc.documentElement.textContent
  }

  //if clicked -> black border
  //if correct -> correctStyle
  //if incorrect and clicked -> incorrectStyle
  function answerStyle(answer) {
    let style = {}

    if(clickedAnswer) {
      if(answer === clickedAnswer) style = {...style, ...clickedStyle}

      if(answer === correctAnswer) { //always show correct answer even if not clicked
        style = {...style, ...correctStyle}
      } else if (answer === clickedAnswer) { //if answer was clicked but wrong
        style = {...style, ...incorrectStyle}
      }
    }
    return style
  }

  // When an answer is clicked, set answers html
  React.useEffect(() => {
    setAnswersHtml(() => answers.map(answer => {    
      return (
        <button className="question--answer"
          disabled={isDisabled}
          onClick={() => handleClick(answer)}
          style={answerStyle(answer)}
          key={nanoid()}>
          {htmlDecode(answer)}
        </button>
      )
    }))
  }, [clickedAnswer])

  return (
    <div className="question">
      <p className="question--text">{htmlDecode(q)}</p>
      <div className="question--answers">
        {answersHtml}
      </div>
      <hr></hr>
    </div>
  )
}