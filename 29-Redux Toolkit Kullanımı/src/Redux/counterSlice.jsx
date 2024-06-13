// import { createSlice } from '@reduxjs/toolkit'

import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    value : 76,
}


export const counterSlice = createSlice({
    name : "counter",
    initialState,
    reducers : {
        //* Burada reducers içerisinde kullanabileceğimiz fonksiyonlarımızı oluşturduk ve aşağıda
        //* export ettik.
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) =>{
            state.value -= 1 
        }
    },
})

export const {increment,decrement} = counterSlice.actions

export default counterSlice.reducer