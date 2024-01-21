import { useState } from 'react'

function App() {
    const style = {
        color: 'green',
        fontSize: '20px'
    };

    const firstName = 'John';
    const name = 'Perez';
    let counter = 0;
    function handleClick(e) {
        counter++;
        console.log('clicked', counter, e);
    }

    return <h1
        id="title"
        style={style}
        onClick={handleClick}
    >
        Hello, {firstName + ' ' + name}
    </h1>;
}

export default App
