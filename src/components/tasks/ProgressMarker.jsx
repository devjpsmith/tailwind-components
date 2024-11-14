import React from 'react'

function ProgressMarker({ completed, total, percentage }) {
    return (
        <>
            <div className="flex">
                <div>
                    <p className="text-sm text-gray-400">
                        Tasks Done:{' '}
                        <span className="text-gray-600">
                            {completed}/{total}
                        </span>
                    </p>
                </div>
                <div className="flex flex-grow justify-end">
                    <p className="text-sm text-gray-400">{percentage}%</p>
                </div>
            </div>
            <div className="h-1 w-full rounded-sm bg-gray-100">
                <div
                    className="h-1 rounded-sm bg-sky-500"
                    style={{ width: percentage + '%' }}
                ></div>
            </div>
        </>
    )
}

export default ProgressMarker
