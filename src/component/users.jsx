import React from "react"
import { useState } from "react/cjs/react.development"
import { fetchAll } from "../api/fake.api/user.api"
import api from "../api"



const Users = () => {


const [users, setUsers] = useState(api.users.fetchAll());

const handleDelete = (userId) =>{
  setUsers(prevState => prevState.filter(el => el !== userId))
}

const renderPhrase = (id) => {
   return id.map(user =>      <tr>
    <th scope="row">{user.name}</th>
    <td><span>{user.qualities.map(quality => <span key={quality._id} className={`badge m-1 bg-${quality.color}`}>{quality.name}</span>)}</span></td>
    <td>{user.profession.name}</td>
  <td>{user.completedMeetings}</td>
 <td>{user.rate}/5</td>
 <td><button type="button" className="btn position-relative bg-danger" onClick={()=>handleDelete(user)}>Delete</button></td>
</tr>)
    }


    const renderAmountPeople = (length) => {
      let table = document.querySelector('table')
      let string = ''
      let classes = "badge bg-primary";
      const n = length % 10
      if (length === 0) {
          string = 'Никто с тобой не тусанет'
          classes = "badge bg-danger"
          table.innerHTML = ''
      } else if (length >= 11 && length <= 20) {
          string = `${length} человек тусанет с тобой сегодня`
      } else if (n >= 2 && n <= 4) {
          string = `${length} человекa тусанут с тобой сегодня`
      } else if ((n >= 5 && n <= 9 || n === 1) || n === 0) {
          string = `${length} человек тусанет с тобой сегодня`
      }
      return <span class={classes}>{string}</span>
  }   

return (

<>
<h1>{renderAmountPeople(users.length)}</h1>
<table class="table">
  <thead>
    <tr>
      <th scope="col">Имя</th>
      <th scope="col">Качество</th>
      <th scope="col">Профессия</th>
      <th scope="col">Встретился раз</th>
      <th scope="col">Оценка</th>
      <th scope="col"></th>

   
    </tr>
  </thead>
  <tbody>
  {renderPhrase(users)}
  </tbody>
</table>

</>


)


}


export default Users