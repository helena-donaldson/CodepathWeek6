import { BarChart, Bar, Tooltip, LineChart, Line, CartesianGrid, XAxis, YAxis, Legend } from 'recharts';
import { useState, useEffect } from 'react'

function Chart2(props){
// const data = [{name: 'hi', num: 1}, {name: 'by', num: 2}];
const [bookLang, setBookLang] = useState(null);

useEffect(() => {
  const hashMap = {};
  let newList = []
  for (let i=0; i<props.list.length; i++){
    if (hashMap[String(props.list[i].language.length)] == null){
      hashMap[String(props.list[i].language.length)] = 1
    } else{
      hashMap[String(props.list[i].language.length)] = hashMap[String(props.list[i].language.length)] + 1
    }
  }
  for (let [key, value] of Object.entries(hashMap)) {
    if(key == 1){
        newList.push({language_num: String(key) + "\nLanguage", num: value})
    }else{
        newList.push({language_num: String(key) + "\nLanguages", num: value})
    }
  }
  console.log(newList)
  setBookLang(newList)
}, [])

return (
  <div>
    {bookLang ?
  <div>
  <br></br>
  <h2>Number of Languages Per Book</h2>
  <BarChart width={500} height={250} data={bookLang}>
    <XAxis dataKey="language_num"  />
    <YAxis label={{ value: 'Number of Books', position: 'insideLeft', angle: -90 }}/>
    <Tooltip />
    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
    <Bar dataKey="num" fill="rgb(77, 5, 5)" barSize={30} />
  </BarChart>
  </div> :
  <div></div>
  }
  </div>
  
);
}
export default Chart2