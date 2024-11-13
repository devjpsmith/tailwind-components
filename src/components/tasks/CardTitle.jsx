import React from 'react';

function CardTitle({logo, name}) {
    return (
        <div className="flex items-center gap-2">
            <img src={logo} alt="logo" className="h-auto w-6"/>
            <h5 className="text-md font-medium">{name}</h5>
        </div>
    );
}

export default CardTitle;