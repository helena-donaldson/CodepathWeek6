import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

function BookInfo (props) {
   return (
        <tr key={props.index}>
            <td><Link
        style={{ color: "Black" }}
        to={`/bookDetails/${props.cover_i}`}
        >{props.title}</Link></td>
            <td>{props.year}</td>
            <td>{props.languages}</td>
        </tr>
   )
}

export default BookInfo