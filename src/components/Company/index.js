import React, { useState } from 'react';
import ColorContainer from '../ColorContainer';

const Company = (company) => {

    return (
        <>
            <div>
                <h2>{company?.company?.title}</h2>
                <img width={'200px'} height={'200px'} objectFit={'contain'} src={company?.company?.image} alt={company?.company?.title} />
            </div>
            <ColorContainer />
        </>

    )


}

export default Company