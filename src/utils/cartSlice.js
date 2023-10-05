import { createSlice } from "@reduxjs/toolkit";

// reducer object config
const cartSlice =  createSlice({
    name:"cart",
    initialState:{
        items:[]
    },
    reducers:{
        addItem:(state,action)=>{
            //mutating the state over here 
            // Redux Toolkit uses immer BTS
            state.items.push(action.payload);
        },
        removeItem:(state)=>{
            state.items.pop();
            
        },
        // original state ["pizza"]
    clearCart:(state)=>{
            // RTK - either mutate the existing state or mutate a new state 
            // state.items.length =  0;
            // or
            return {items:[]}; // this new object will be replaced with the initial state
        }
    }
});
// export of all action function 
export const {addItem,removeItem,clearCart} = cartSlice.actions;

//export reducer object
export default cartSlice.reducer;