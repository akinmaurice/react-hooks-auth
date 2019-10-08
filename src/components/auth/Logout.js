import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../../actions/login';



function Logout() {

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(logoutUser());
  })

    return (
      <div className="text-center">
        Signed Out
        <br />
        <a href="/">Click here to continue</a>
      </div>
    );
  }

export default Logout;