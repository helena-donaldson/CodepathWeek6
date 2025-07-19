import { LineChart, Line, CartesianGrid, XAxis, YAxis, Legend } from 'recharts';
import { useState, useEffect } from 'react'

function Chart(props){
// const data = [{name: 'hi', num: 1}, {name: 'by', num: 2}];
const [bookYear, setBookYear] = useState(null);

useEffect(() => {
  const hashMap = {};
  let newList = []
  for (let i=0; i<props.list.length; i++){
    if (hashMap[String(props.list[i].first_publish_year)] == null){
      hashMap[String(props.list[i].first_publish_year)] = 1
    } else{
      hashMap[String(props.list[i].first_publish_year)] = hashMap[String(props.list[i].first_publish_year)] + 1
    }
  }
  for (let [key, value] of Object.entries(hashMap)) {
    newList.push({year: key, num: value})
  }
  console.log(newList)
  setBookYear(newList)
}, [])

return (
  <div>
    {bookYear ?
  <div>
  <br></br>
  <h2>Number of Books Published Each Year</h2>
  <LineChart width={500} height={250} data={bookYear} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
    <CartesianGrid stroke="#aaa" strokeDasharray="5 5" />
    <Line type="monotone" dataKey="num" stroke="rgb(77, 5, 5)" strokeWidth={2} name="Book(s) published during that year" />
    <XAxis dataKey="year" />
    <YAxis width="auto" label={{ value: 'Number of Books', position: 'insideLeft', angle: -90 }} />
    <Legend align="right" />
  </LineChart>
  </div> :
  <div></div>
  }
  </div>
  
);
}
export default Chart