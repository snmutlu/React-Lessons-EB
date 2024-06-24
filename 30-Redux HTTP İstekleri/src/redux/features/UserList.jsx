import React, { useEffect } from 'react'
import {useDispatch , useSelector} from 'react-redux'
import { getAllUsers } from './UserSlice';
import User from './User';



function UserList() {
    const dispatch = useDispatch();

    const {users} = useSelector(store => store.user);

    console.log(users)


    useEffect(()=>{
        dispatch(getAllUsers())
    },[])
  return (
    <div>
      {
        users && users.map((user)=>(
          <User user={user} key={user.id} />
        ))
      }
    </div>
  )
}

export default UserList