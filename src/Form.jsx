import React, {useState} from 'react';
export default function Form() {
    // Exemple de formulaire contrôlé (par React), on utilise le useState pour stocker la valeur de l'input.
    const [email, setEmail] = useState('');

    function handleChange(e) {
        setEmail(e.target.value);
    }

    return <form style={{marginTop: "100px"}}>
        <label htmlFor="email">Email: </label>
        <input type="email" value={email} onChange={handleChange}/>
        <p>{email}</p>
    </form>

    // Le désavantage est que le composant est moins performant car il est re-rendu à chaque changement de valeur.
    // On peut utiliser un composant non contrôlé pour éviter cela. Dans ce cas, on utilise uniquement les évènements natifs de JavaScript.

    function handleSubmit(e) {
        e.preventDefault();
        console.log(new FormData(e.target));
    }

    const form = <form onSubmit={handleSubmit} style={{marginTop: "100px"}}>
        <label htmlFor="email">Email: </label>
        <input type="email" name="email" defaultValue="email"/>
        <button type="submit">Envoyer</button>
    </form>;


}