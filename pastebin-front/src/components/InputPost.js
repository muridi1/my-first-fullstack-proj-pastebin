import React, {Fragment, useState} from "react";

const InputPost = () => {
    const [text, setText] = useState("")
    const [title, setTitle]= useState("")

    const onSubmitForm = async e => {
        e.preventDefault();
        const body = { text, title }
        const response = await fetch("http://localhost:4000/newpost", {
            method: "POST",
            headers:{"Content-Type": "application/json"},
            body: JSON.stringify(body)
        })
        //console.log(response)
        window.location="/";
    }

    return (
    <Fragment>
        <h1 className="text-center mt-5">Input Post</h1>
        <form className="d-flex mt-5" onSubmit= {onSubmitForm}>
            <input 
            type="text" 
            className="form-control" 
            value={text} 
            placeholder="Paste text here"
            size="50"
            onChange={e => setText (e.target.value)}
            />
            <input 
            type="text" 
            className="form-control" 
            value={title} 
            placeholder="Title"
            onChange={e => setTitle (e.target.value)}
            />
            <button className="btn btn-success">Submit</button>
        </form>
    </Fragment>
    )
} 

export default InputPost