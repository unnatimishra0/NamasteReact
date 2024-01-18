import { createSlice } from "@reduxjs/toolkit";


const cartSlice=createSlice({
    name:"cart",
    initialState:{
        items:[]
    },
    reducers:{
        addItem:(state,action)=>{
            //Vanilla(older ) Redux =>DON'T MUTATE STATE
            //const newState=[...state];
            //newState.items.push(acion.payload);
            //return newState;

            //Redux Toolkit
            //we have to mutate the state like below ..redux is using immer lib to do this
            state.items.push(action.payload)
        },
        removeItem:(state,action)=>{
            state.items.pop()
        },
        clearCart:(state,action)=>{
            state.items.length=0;
        }

    }
})

export const{addItem,removeItem,clearCart}= cartSlice.actions;

export  default cartSlice.reducer;
