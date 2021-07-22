import { useState } from "react";
import { useHistory } from 'react-router-dom';

const Create = () => {

    const [title, setTitle] = useState('hello');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('yoshi');
    const [isPending, setIsPending] = useState(false)
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body, author}

        fetch('http://localhost:8000/blogs/', {
            method : 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog)
        })
        .then( () => {
            console.log('new blog added')
            setIsPending(true)
            history.push('/');
        })
    }

    return ( 
        <div className="create"> 
            <h2>Add a new blog</h2>
            <form onSubmit = {handleSubmit} >
                <label> Blog title: </label>
                <input 
                type="text"
                required
                onChange = { (e) => setTitle(e.target.value) } 
                />
                <label> Blog body: </label>
                <textarea
                required
                onChange = { (e) => setBody(e.target.value) }
                ></textarea> 
                <label> Blog Author:</label>
                <select
                    value = {author}
                    onChange = { (e) => setAuthor(e.target.value) }
                >
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>
                </select>
                { !isPending && <button disabled>Add Blog</button> }
                { isPending && <button>Adding blog...</button> }
            </form>     
        </div>
     );
}
 
export default Create;