import React, { useEffect, useState } from "react"

function Catfetch() {
    const [fact, setFact] = useState('');

    useEffect(() => {
        fetch('https://catfact.ninja/fact')
        .then ((response) => response.json())
        .then ((data) => setFact(data.fact))
        .catch ((error) => console.error('Error Fetching Cat Fact:', error))
    }, []);

    return (
        <div style = {{ marginTop: '20px'}}>
            <h2>Random Cat Fact:</h2>
            <p>{fact}</p>
        </div>
    );
}    

export default Catfetch