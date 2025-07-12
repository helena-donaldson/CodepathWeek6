import { useEffect, useState } from "react"

function BookInfo (props) {
   return (
        <tr key={props.index}>
            <td>{props.title}</td>
            <td>{props.year}</td>
            <td>{props.languages}</td>
        </tr>
   )
}

export default BookInfo