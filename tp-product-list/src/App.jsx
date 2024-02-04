import { useState } from 'react'
import {PRODUCTS} from "./Products.jsx";
import SearchBar from "./components/SearchBar.jsx";
import ProductTable from "./components/ProductTable.jsx";



function App() {

    return <>
        <div className="container">
            <h1>TP Product List</h1>
            <SearchBar/>
            <ProductTable/>
        </div>
    </>
}

export default App
