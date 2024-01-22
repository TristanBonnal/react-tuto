import { useState } from 'react'

function App() {
    const style = {
        color: 'green',
        fontSize: '20px'
    };

    const firstName = 'John';
    const name = 'Perez';
    const age = 25;

    let counter = 0;

    const hobbies = ['music', 'sport', 'cinema'];
    function handleClick(e) {
        counter++;
        console.log('clicked', counter, e);
    }

    return <>
        <h1 id="title" style={style} onClick={handleClick}>
            Hello, {firstName + ' ' + name}
        </h1>

        {age &&    // si age existe (true) alors on affiche le paragraphe
            <p>Age: {age}</p>
        }

        <ul>
            {hobbies.map((hobby, index) => {
                return <li id={index} key={index}>{hobby}</li>
            })}
        </ul>

        <footer>
            <Footer />
        </footer>
    </>
}

function Footer() {
    return ('Je suis le footer')
}

export default App
