import axios from "axios";
export const getAllWatches = () => 
{
    return axios.get("http://localhost:4000/api/watch");
}
export const getWatchById = (id) =>
{
    return axios.get("http://localhost:4000/api/watch/" + id);
}
export const deletWatchFromServer = (id) =>
{
    return axios.delete("http://localhost:4000/api/watch/" + id);
}
export const addWatch = () =>
{
    return axios.post("http://localhost:4000/api/watch");
}