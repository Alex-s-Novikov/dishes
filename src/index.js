import React from "react"
import reactDom from "react-dom"
import "bootstrap/dist/css/bootstrap.css"


// import api from "../api"

import Users from "./component/users"



const App =() => {
    return (
        <div>
    <Users/>
  
    </div>
    )


}
reactDom.render(<App />, document.getElementById('root'))


