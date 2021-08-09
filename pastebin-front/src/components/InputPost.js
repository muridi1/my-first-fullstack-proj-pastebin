import React, {Fragment, useState} from "react";

const InputPost = () => {
    const [text, setText] = useState("")

    const onSubmitForm = async e => {
        e.preventDefault();
        const body = { text }
        const response = await fetch("http://localhost:4000/newpost", {
            method: "POST",
            headers:{"Content-Type": "application/json"},
            body: JSON.stringify(body)
        })
        console.log(response)
    }

    return (
    <Fragment>
        <h1 className="text-center mt-5">Input Post</h1>
        <form className="d-flex mt-5" onSubmit= {onSubmitForm}>
            <input 
            type="text" 
            className="form-control" 
            value={text} 
            onChange={e => setText (e.target.value)}
            />
            <button className="btn btn-success">Submit</button>
        </form>
    </Fragment>
    )
} 

export default InputPost