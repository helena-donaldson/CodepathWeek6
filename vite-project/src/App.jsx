import { useState, useEffect } from 'react'
import './App.css'
import BookInfo from "./Components/BookInfo"
import Stat from "./Components/Stat"

function App() {
   const [list, setList] = useState(null)
   const [totalNumItems, setTotalNum] = useState(0)
   const [filteredResults, setFilteredResults] = useState([])
   const [searchInput, setSearchInput] = useState("")
   const [filteredYear, setFilteredYear] = useState(1900)

  const searchItems = searchValue => {
  setSearchInput(searchValue)
  if (searchValue !== "") {
    const filteredData = list.filter((book) => 
      (book.title?.toLowerCase().includes(searchValue.toLowerCase()) ||
      //  book.author_name?.join(" ").toLowerCase().includes(searchValue.toLowerCase())
      (book.first_publish_year?.toString().includes(searchValue.toLowerCase())) ||
      (book.language.length?.toString().includes(searchValue.toLowerCase())))
    )
    setFilteredResults(filteredData)
    console.log(filteredData)
  } else {
    setFilteredResults(list)
  }
}

const restrictItems = value => {
  setFilteredYear(value)
  setSearchInput(value)
  if (value !== 1900) {
    const filteredData = list.filter((book) => 
      book.first_publish_year > value 
    )
    setFilteredResults(filteredData)
    console.log(filteredData)
  } else {
    setFilteredResults(list)
  }
}

   useEffect(() => {
    const fetchAllBookData = async () => {
      const response = await fetch("https://openlibrary.org/search.json?author=stephen+king")
      const json = await response.json()
      console.log(json)
      setTotalNum(json.docs.length)
      const shuffled = json.docs.sort(() => 0.5 - Math.random());
      const randomTen = shuffled.slice(0, 10);
      setList(randomTen)
    }
    fetchAllBookData().catch(console.error)
    // setAverageYearPublished()
  }, [])

  return (
    <div id="app">
      <h1>🧛🩸 Stephen King Fan Site! 🩸🧛</h1>
      <br></br>
      <p>By using the power of the Open Library API, you can look at a selection of 
        titles written by the great author Stephen King! </p>
      <br></br>
      {list &&
              <Stat list={list} listLength={totalNumItems}/>
      }
      <br></br>
      <div class="gridItem">
      <p>Discover Your Next Read: </p>
      <input
       type="text"
        placeholder="Search..."
       onChange={(inputString) => searchItems(inputString.target.value)}
       id="filter"
      />
      <p>Limit by Minimum Year Published:</p>
      <div class="slidecontainer">
        <input onChange={(value) => restrictItems(value.target.value)} type="range" min="1900" max="2025" value={filteredYear} class="slider" id="myRange" />
        <p>Current Year: {filteredYear}</p>
      </div>
      </div>
      <br>
      </br>
      <table>
        <tbody>
          <tr>
            <th>Title</th>
            <th>Year Published</th>
            <th>Translated into ___ Languages</th>
          </tr>
          {searchInput.length > 0
            ? filteredResults &&
            filteredResults.map((bookData, index) => (
            // <li key={index}>
            //   {bookData.title}
            // </li>
            <BookInfo key={index} title={bookData.title} year={bookData.first_publish_year} languages={bookData.language.length}/>
            )
          ) :
          list &&
            list.map((bookData, index) => (
            // <li key={index}>
            //   {bookData.title}
            // </li>
            <BookInfo key={index} title={bookData.title} year={bookData.first_publish_year} languages={bookData.language.length}/>
            )
          )}
        </tbody>
      </table>
    </div>
  )
}

export default App
