import React from "react"

export default function Category(props) {

  const {setDifficulty, setCategory, setPage} = props

  function resetGame() {
    setDifficulty("")
    setCategory("")
    setPage(0)
  }

  return (
      <div className="error-page page-container">
        Error Fetching Questions
        <button className="try-again-btn control-btn" onClick={resetGame}>
          Try Again
        </button>
      </div>
  )
}
