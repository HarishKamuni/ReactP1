import axios from "axios";

export const getByActorName = async (searchString) => {
    const data = await axios.get(" https://api.tvmaze.com/search/people?q="+ searchString);
    if(data!=null){
        return data.data;
    } 
}   