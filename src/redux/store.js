import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";//userslice.js de export edilirken default olarak belirtilmiştir. o yüzden bu şekilde yapılarda başka bir dosya içinde örneğin buradaki gibi import alırken istediğimiz ismi[ör:("userReducer")] verebiliriz from belirtmek ile birlikte.



export const store = configureStore({

    reducer:{
        //slice ları koyacağımız bölüm
        
        user: userReducer

    },



})