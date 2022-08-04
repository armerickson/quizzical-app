import React from "react"

//Page 1
export default function SelectDifficulty(props) {
  const {difficulty, setDifficulty, setPage} = props;

  function handleNextPage() {
        if (difficulty !== "") setPage(prevPage => prevPage + 1)
  }

  function backPage() {
        setDifficulty("")
        setPage(prevPage => prevPage - 1)
  }

  return (
    <div className="select-difficulty-container page-container">
      <div className="select-difficulty">
        <h1 className="title">Quizzical</h1>
        <p className="select-difficulty--text">Select Difficulty:</p>
        <button className="select-difficulty--btn easy-btn" 
                onClick={() => setDifficulty("easy")}>
                Easy
        </button>
        <button className="select-difficulty--btn medium-btn" 
                onClick={() => setDifficulty("medium")}>
                Medium
        </button>
        <button className="select-difficulty--btn hard-btn" 
                onClick={() => setDifficulty("hard")}>
                Hard
        </button>
        </div>
        <div className="select-difficulty--footer-btns footer-control-btns">
                <button className="select-difficulty-control-btn control-btn back-btn"
                        onClick={backPage}>
                        <i className="fa-solid fa-arrow-left"></i>
                        Back
                </button>
                <button className="select-difficulty-control-btn control-btn next-btn" 
                        onClick={handleNextPage}>
                        Next
                        <i className="fa-solid fa-arrow-right"></i>
                </button>
      </div>
    </div>
  )
}