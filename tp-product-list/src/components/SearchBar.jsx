import Input from "./forms/Input.jsx";
import Checkbox from "./forms/Checkbox.jsx";
import { useState } from 'react';

export default function SearchBar() {
    const [searchValue, setSearchValue] = useState("");
    const [isChecked, setIsChecked] = useState(false);
    return <>
        <Input value={searchValue} onChange={setSearchValue} placeholder="Rechercher..." />
        <Checkbox checked={isChecked} onChange={setIsChecked} label="N'afficher que les produits en stock"/>
    </>
}