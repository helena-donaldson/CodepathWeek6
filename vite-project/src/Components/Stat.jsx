import { useEffect, useState } from "react"
import './Stat.css'

function Stat (props) {
    const [averageYearPublished, setAverageYear] = useState(0)
    const [averageNumLanguages, setAverageLanguage] = useState(0)
    const [totalNumItems, setTotalNum] = useState(0)
    useEffect(() => {
    const setAverageYearPublished = async () =>  {
    let averageYear = 0
    let averageLang = 0
    if (props.list != null){
      for(let i=0; i<props.list.length; i++){
        averageYear = props.list[i].first_publish_year + averageYear
        averageLang = props.list[i].language.length + averageLang
      }
      averageYear = averageYear / props.list.length
      averageLang = averageLang / props.list.length
      setAverageYear(averageYear)
      setAverageLanguage(averageLang)
      setTotalNum(props.listLength)
    }
  }
  setAverageYearPublished()
}, [props.list])
   return (
        <div class="statContainer">
            <div class="individualStat" id="totalNum">
                <h2>The Total Number of Items Found By Query (top 10 shown): </h2>
                <p>{totalNumItems}</p>
            </div>
            <div class="individualStat" id="averageYr">
                <h2>The Average Year Published: </h2>
                <p>{averageYearPublished}</p>
            </div>
            <div class="individualStat" id="numLang">
                <h2>The Average Number of Languages Translated Into: </h2>
                <p>{averageNumLanguages}</p>
            </div>
        </div>
   )
}

export default Stat