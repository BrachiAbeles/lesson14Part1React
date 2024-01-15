import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux"
import { addWatch } from "./watchApi";
import {addToArr} from "./watchSlice"

const AddWatch = () =>
{
    let dispatch = useDispatch();
    let {register, handleSubmit} = useForm();
    const save = (data) =>
    {
        dispatch(addWatch(data));
    }
    return(<>
    <form onSubmit={handleSubmit(save)}>
        <label>שם</label>
        <input {...register("name")}/>
        <label>מחיר</label>
        <input {...register("price")}/>       
        <input type="submit"/>
    </form>
    </>
    );
}
export default AddWatch; 