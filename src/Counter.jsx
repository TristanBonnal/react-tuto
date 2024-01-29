import {useState} from "react";

export default function Counter() {
    const [count, setCounter] = useState(0);
    const [user, setUser] = useState(
        {
            name: 'John',
            age: 25
        });

    function handleClick() {
        setCounter(count + 1);
    }

    function handleClickAge() {
        setUser({...user, age: user.age + 1});
        // Cette syntaxe est équivalente à:
        // setUser({
        //     name: user.name,
        //     age: user.age + 1
        // });
        // Elle permet de ne pas écraser les autres propriétés de l'objet user.
        // On ne doit pas faire de mutation sur les objets ou les tableaux, on doit toujours créer une nouvelle référence.
    }

    return <>
        <h1>Compteur: {count}</h1>
        <button onClick={handleClick}>+1</button>
        <p>{user.name} a</p>
        <p>{user.age} ans</p>
        <button onClick={handleClickAge}>+1 an pour {user.name}</button>
    </>
}