import React from 'react';
import {useState} from 'react/cjs/react.development';
import Counter from "./components/Counter";
import './styles/App.css';
import PostItem from "./components/PostItem";

function App() {
    const [post, setPosts] = useState([
        {id: 1, title: "JavaScript", body: "this is body"},
        {id: 2, title: "JAVA", body: "this is body"},
        {id: 3, title: "PHP", body: "this is body"}
    ])
    return (
        <div className="App">
            <h1 style={{textAlign: 'center'}}>List posts</h1>
            {post.map((post) =>
                <PostItem post={post} key={post.id}/>
            )}
        </div>
    );
}

export default App;