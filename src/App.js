import React from 'react';
import {useState} from 'react/cjs/react.development';
import Counter from "./components/Counter";


function App() {
    const [likes, setLikes] = useState(0)
    const [value, setValue] = useState('Value')


    return (
        <div className="App">
            <Counter/>
        </div>
    );
}

export default App;