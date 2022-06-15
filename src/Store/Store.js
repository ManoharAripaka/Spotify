import { configureStore } from "@reduxjs/toolkit";
import dataStore from "./DataStore"
export default configureStore({
    reducer : {data : dataStore}
})