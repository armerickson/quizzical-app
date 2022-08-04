import React from "react"
import Category from "./Category"

//Page 2
export default function SelectCategory(props) {
  const {category, setCategory, setDifficulty, setPage} = props;

  function handleNextPage() {
    if (category !== "") setPage(prevPage => prevPage + 1)
  }

  function backPage() {
    setCategory("")
    setDifficulty("")
    setPage(prevPage => prevPage - 1)
}

  const categories = [
    {
      icon: "category-icon fa-solid fa-question",
      onClick: () => setCategory(0),
      key: 0,
      text: "Any Category",
    },
    {
      icon: "category-icon fa-solid fa-graduation-cap",
      onClick: () => setCategory(9),
      key: 9,
      text: "General Knowledge",
    },
    {
      icon: "category-icon fa-solid fa-music",
      onClick: () => setCategory(12),
      key: 12,
      text: "Music",
    },
    {
      icon: "category-icon fa-solid fa-film",
      onClick: () => setCategory(11),
      key: 11,
      text: "Film",
    },
    {
      icon: "category-icon fa-solid fa-tv",
      onClick: () => setCategory(14),
      key: 14,
      text: "Television",
    },
    {
      icon: "category-icon fa-solid fa-book",
      onClick: () => setCategory(10),
      key: 10,
      text: "Books",
    },
    {
      icon: "category-icon fa-solid fa-book-atlas",
      onClick: () => setCategory(23),
      key: 23,
      text: "History",
    },
    {
      icon: "category-icon fa-solid fa-flask",
      onClick: () => setCategory(17),
      key: 17,
      text: "Science and Nature",
    },
    {
      icon: "category-icon fa-solid fa-gamepad",
      onClick: () => setCategory(15),
      key: 15,
      text: "Video Games",
    },
    {
      icon: "category-icon fa-solid fa-basketball",
      onClick: () => setCategory(21),
      key: 21,
      text: "Sports",
    },
    {
      icon: "category-icon fa-solid fa-paw",
      onClick: () => setCategory(27),
      key: 27,
      text: "Animals",
    },
    {
      icon: "category-icon fa-solid fa-earth-americas",
      onClick: () => setCategory(22),
      key: 22,
      text: "Geography",
    },
    {
      icon: "category-icon fa-solid fa-face-laugh-beam",
      onClick: () => setCategory(32),
      key: 32,
      text: "Cartoon and Animation",
    },
    {
      icon: "category-icon fa-solid fa-car",
      onClick: () => setCategory(28),
      key: 28,
      text: "Vehicles",
    },
    {
      icon: "category-icon fa-solid fa-chess",
      onClick: () => setCategory(16),
      key: 16,
      text: "Board Games",
    },
    {
      icon: "category-icon fa-solid fa-user-ninja",
      onClick: () => setCategory(31),
      key: 31,
      text: "Anime and Manga",
    },
    {
      icon: "category-icon fa-solid fa-face-grin-stars",
      onClick: () => setCategory(26),
      key: 26,
      text: "Celebrities",
    },
    {
      icon: "category-icon fa-solid fa-masks-theater",
      onClick: () => setCategory(13),
      key: 13,
      text: "Musicals and Theater",
    },
    {
      icon: "category-icon fa-solid fa-paintbrush",
      onClick: () => setCategory(25),
      key: 25,
      text: "Art",
    },
    {
      icon: "category-icon fa-solid fa-book-open-reader",
      onClick: () => setCategory(29),
      key: 29,
      text: "Comics",
    },
    {
      icon: "category-icon fa-solid fa-computer",
      onClick: () => setCategory(18),
      key: 18,
      text: "Computers",
    },
    {
      icon: "category-icon fa-solid fa-calculator",
      onClick: () => setCategory(19),
      key: 19,
      text: "Mathematics",
    },
    {
      icon: "category-icon fa-solid fa-dragon",
      onClick: () => setCategory(20),
      key: 20,
      text: "Mythology",
    },
    {
      icon: "category-icon fa-solid fa-landmark",
      onClick: () => setCategory(24),
      key: 24,
      text: "Politics",
    },
  ]

  const renderCategories = categories.map(category => {
    return (
      <Category
        key={category.key}
        icon={category.icon}
        action={category.onClick}
        text={category.text}
        category={category}
      />
    );
  });

  return (
      <div className="select-category-container page-container">
        <h1 className="title">Quizzical</h1>
        <p className="select-category--text">Select Category:</p>
        <div className="select-category">
          {renderCategories}
        </div>
        <div className="select-category--footer-btns footer-control-btns">
          <button className="select-difficulty-control-btn control-btn back-btn"
                  onClick={backPage}>
                  <i className="fa-solid fa-arrow-left"></i>
                  Back
          </button>
          <button className="select-difficulty-control-btn control-btn next-btn" 
                  onClick={handleNextPage}>
                  Start!
                  <i className="fa-solid fa-play"></i>
          </button>
        </div>
      </div>
  )
}