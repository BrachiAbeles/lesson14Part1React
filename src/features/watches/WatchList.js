import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import OneWatch from './OneWatch'
import { getAllWatches } from "./watchApi";
const WatchList = () => {
let [arr, setArr] = useState([]);
useEffect(()=> 
{
    getAllWatches().then(res => {
        setArr(res.data);
    }).catch(err => {
        alert("לא יכול להביא את השעונים" + err)
    })
},[])
const removeFromArr=(_id) =>
{setArr(arr.filter((item =>item._id !=  _id)))}  
    return (<ul>
    {arr.map(item => {return <li key={item._id}>
        <OneWatch one={{one:item,removeFromArr}}/></li>})}
    </ul>  );
}
 
export default WatchList;