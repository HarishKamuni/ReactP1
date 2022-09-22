import { Grid } from "@mui/material";
import React from "react";
import Cards2 from "./Cards2";

function ByActorName({data}){
    console.log(data);
    return(
        <>
        <div>{data.length>0?<Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>{data.map((movie)=><Grid item xs={3}><Cards2 key={movie.score} 
        name={movie?.person?.name!=null?movie?.person?.name:"No data available"}
        
        // country={movie.person.country}
        gender = {movie?.person?.gender!=null?movie?.person?.gender:"No data available"}
        birthday={movie?.person?.birthday!=null?movie?.person?.birthda:"No data available"}
        img = {movie?.person?.image!=null && movie?.person?.image?.original!=null? movie?.person?.image?.original:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqraTPmYg8J1-88nCAQDbcqzUIsp7t62ZSAA&usqp=CAU"}
        
        /></Grid>)}
        </Grid>:"No Actor Found"}</div>
        </>
    )
}
export default ByActorName;