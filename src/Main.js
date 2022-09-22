import React, { useEffect, useState } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { getByMovieName } from "./AxiosHelper";
import ByMovieName from "./ByMovieName";
import { getByActorName } from "./AxiosHelper2";
import ByActorName from "./ByActorName";

const parameters = [
    {
        value: '0',
        label: 'Search by actor name',
    },
    {
        value: '1',
        label: 'Search by movie name',
    },

];
function Main() {
    const [searchParameter, setSearchParameter] = useState('0');
    const [searchString, setSearchString] = useState("");
    const [data, setData] = useState([]);
    const handleChange = (event) => {
        setSearchParameter(event.target.value);
       
    };
    useEffect(()=>{
        if(searchParameter==='1'){
            async function fechData(){
                var response = await getByMovieName(searchString)
                setData(response);
            }
            fechData();
        }else{
            async function fechData(){
                var response = await getByActorName(searchString)
                setData(response);
            }
            fechData();
        }

    },[searchParameter,searchString]);
    return (
        <>
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
                height="100vh"
            >
                <div>
                    <TextField
                        id="outlined-select-choice"
                        select
                        label="Select"
                        value={searchParameter}
                        onChange={handleChange}
                        helperText="Please select your choice"
                    >
                        {parameters.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                    <TextField onChange={(e)=>setSearchString(e.target.value)} label={searchParameter==='1'?"Search Movie Name":"Search Actor Name"}/>
                    {searchParameter==='1'? <ByMovieName data={data}/>:<ByActorName data={data}/>}
                </div>
            </Box>
        </>
    )
}
export default Main;