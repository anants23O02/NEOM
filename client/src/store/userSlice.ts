import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    login:false,
    user:null,
}

const userLoginSlice = createSlice({
    name: "LoginSlice",
    initialState,
    reducers:{
        login:(state,)
    }
})