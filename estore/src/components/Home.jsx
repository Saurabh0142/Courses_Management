import React, { useEffect } from 'react'


const Home=()=>{
    useEffect(()=>{
        document.title="Home || My webpage"; 
    },[]);


    return (
    <div>
        <h1>nothing here this is home page </h1>

    </div>

    );
    
};

export default Home;