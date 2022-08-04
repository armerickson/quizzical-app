import './App.css'
import React from "react"
import StartPage from "./components/StartPage"
import SelectDifficulty from "./components/SelectDifficulty"
import QuestionsContainer from "./components/QuestionsContainer"
import SelectCategory from "./components/SelectCategory"
import ErrorPage from "./components/ErrorPage"

export default function App() {
  //page -1 = ErrorPage
  //page 0 = startPage
  //page 1 = SelectDifficulty
  //page 2 = SelectCategory
  //page 3 = QuestionsContainer
  
  const [page, setPage] = React.useState(0)
  const [difficulty, setDifficulty] = React.useState("")
  const [category, setCategory] = React.useState("")
 
  return (
    <main>
      {page === -1 && 
        <ErrorPage
          setDifficulty={setDifficulty} 
          setCategory={setCategory}
          setPage={setPage}/>}
      {page === 0 && 
        <StartPage 
          setPage={setPage}/>}
      {page === 1 && 
        <SelectDifficulty 
          difficulty={difficulty} 
          setDifficulty={setDifficulty} 
          setPage={setPage}/>}
      {page === 2 && 
        <SelectCategory 
          category={category} 
          setCategory={setCategory} 
          setDifficulty={setDifficulty}
          setPage={setPage}/>}
      {page === 3 && 
        <QuestionsContainer 
          difficulty={difficulty}
          setDifficulty={setDifficulty} 
          category={category} 
          setCategory={setCategory}
          setPage={setPage}/>}
    </main>
  );
}