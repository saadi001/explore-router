import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FreindsDetails = () => {
     const freind = useLoaderData();
     // console.log(freind);
     const {name,phone, website} = freind;
     return (
          <div>
               <h2>Hello I am {name}</h2>
               <h4>Call me at: {phone}</h4>
               <p>My website name is: {website}</p>
          </div>
     );
};

export default FreindsDetails;