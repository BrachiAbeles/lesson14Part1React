import {deletWatchFromServer} from './watchApi'
const OneWatch = (props) => {
    let removeFromArr=props.one.removeFromArr;
    return ( <div>
        <h1>{props.one.one.name}</h1>
        <h1>{props.one.one.price}</h1>
        <h1>{props.one.one.album}</h1>
        <h1>{props.one.one.src}</h1>
       
        <input type="button" onClick={()=>
            {deletWatchFromServer(props.one.one._id).then(removeFromArr(props.one.one._id))}
             } value={"delete Me"}/>
    </div> );
}
 
export default OneWatch;