import React from 'react';

function ProgressMarker({completed, total, percentage}) {
    return (
        <>
            <div className="flex">
                <div>
                    <p className="text-sm text-gray-400">Tasks Done: <span className="text-gray-600">{completed}/{total}</span></p>
                </div>
                <div className="flex flex-grow justify-end"><p className="text-sm text-gray-400">{percentage}%</p></div>
            </div>
            <div className="bg-gray-100 w-full rounded-sm h-1">
                <div className="bg-sky-500 rounded-sm h-1" style={{ width: percentage + '%'}}></div>
            </div>
        </>
    );
}

export default ProgressMarker;