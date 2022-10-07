import React from 'react';
import { Link } from 'react-router-dom';
import './Freind.css';

const Freind = ({freind}) => {
     const {id,name, email, username} = freind;
     return (
          <div className='freind'>
               <h2>{name}</h2>
               <h4>{email}</h4>
               <p><small><Link to={`/freind/${id}`}>{username}</Link></small></p>
          </div>
     );
};

export default Freind;