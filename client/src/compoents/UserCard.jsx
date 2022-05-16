import React from 'react'
import {useDispatch} from  'react-redux'
import {deleteUser, getUsers} from '../redux/actions'



const UserCard = ({user}) => {
  const dispatch=useDispatch();
  return (
    <div>
      <h1>{user.FullName }</h1>
      <h3>{user.email}</h3>
      <h4> {user.phone}</h4>
      <button  onClick={()=>{dispatch(deleteUser(user._id));dispatch(getUsers)}}>Delete</button>

      <hr /></div>
  )
}

export default UserCard 