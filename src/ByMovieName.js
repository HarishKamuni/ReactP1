import { Grid } from "@mui/material";
import React from "react";
import Cards from "./Cards";

function ByMovieName({data}){
    console.log(data);
    return(
        <>
        <div>{data.length>0?<Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>{data.map((movie)=><Grid item xs={3}><Cards key={movie.score} 
        name={movie?.show?.name}
        type={movie?.show?.type}
        language={movie?.show?.language}
        img = {movie?.show?.image!=null && movie?.show?.image?.original!=null? movie?.show?.image?.original:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqraTPmYg8J1-88nCAQDbcqzUIsp7t62ZSAA&usqp=CAU"}
        disp = {movie?.show?.summary}
        /></Grid>)}
        </Grid>:"No Movie Found"}</div>
        </>
    )
}
export default ByMovieName;