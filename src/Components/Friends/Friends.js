import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Freind from '../Freind/Freind';

const Friends = () => {
     const freinds = useLoaderData();
     return (
          <div>
               <h2>This is friends page: {freinds.length}</h2>
               {
                    freinds.map(freind => <Freind
                         key={freind.id}
                         freind = {freind}
                    ></Freind>)
               }
          </div>
     );
};

export default Friends;