import React from 'react';
import PageTemplate from '../Page.template';

export default function Search (){
    return (
        <PageTemplate props={
            <div style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                color: 'white',
            }}>
                <h1>Пошук</h1>
            </div>
        }/>
    )
}