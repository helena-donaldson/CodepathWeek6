import { Component, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import '../BookEntry.css'

// const { title } = useParams()

function BookEntry() {
  const { cover_i } = useParams()

  return (

    <div>
      <img src={`http://covers.openlibrary.org/b/id/${cover_i}-L.jpg`} />
      <h1 id="bookCovLbl">Check out this awesome book cover!</h1>
    </div>
  )
}

export default BookEntry