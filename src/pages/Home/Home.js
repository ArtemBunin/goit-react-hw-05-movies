import { useEffect,useState } from "react"
import { TrendList } from "components/TrendList/Trendlist"
import { getTrending } from "appi/appi"
export const Home=()=>{
    const [trends,setTrends]= useState([]);
    useEffect(()=>{
const fetchTrend=async ()=>{
    const result = await getTrending()
    setTrends(result.results);
}
fetchTrend()
    },[])

    return(<main>
<h2>Trending today</h2>
<TrendList trends={trends}/>
    </main>)
}