import React from 'react';
import ReactDOM from 'react-dom/client';
import Head from 'next/head';
import Card from './components/Card';


function HomePage(){
    return (
    <div>
        <Head>
            <meta charSet='utf-8'/>
            <meta name='robots' content='index, follow'/>
            <meta name='description' content='Página FAQ Nota Edu'/>
            <meta name='viewport' content='initial-scale=1.0, width=device-width'/>
            <title>Nota Edu | FAQ</title>
        </Head>
        <Card />
        
        
        
        </div>
    
    )
}

export default HomePage;