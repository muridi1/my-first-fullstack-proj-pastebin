import React, {Fragment, useEffect, useState} from "react";

const ListId = () => {

  const [list, setList] = useState([])
  
  const getList = async () => {
    const response = await fetch("http://localhost:4000/")
    const jsonData = await response.json()

    setList(jsonData)

    console.log(jsonData)
  }
  
  useEffect(()=> {
      getList()
    }, [])
    
    return (
        <Fragment>
          {" "}
            <table class="table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Title</th>
                  <th>Text</th>
                </tr>
              </thead>
              <tbody>
              {/* <tr>
                <td>John</td>
                <td>Doe</td>
                <td>john@example.com</td>
              </tr> */}
              {list.map(list=>(
                <tr>
                  <td>{list.id}</td>
                  <td>{list.text}</td>
                  <td>{list.title}</td>
                </tr>

              ))
              }
              </tbody>
            </table>
        </Fragment>
    )
} 

export default ListId