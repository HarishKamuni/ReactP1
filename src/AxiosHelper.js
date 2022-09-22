
import axios from "axios";

export const getByMovieName = async (searchString) => {
    const data = await axios.get(" https://api.tvmaze.com/search/shows?q="+ searchString);
    if(data!=null){
        return data.data;
    }


}
