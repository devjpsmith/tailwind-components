import React from 'react'

function TimeSlot({ time, agendaItem }) {
    const { title, from, to, color, units } = agendaItem
    return (
        <div className="flex items-center">
            <p className="text-md w-16 p-2 text-gray-400">{time}</p>
            {agendaItem && (
                <div className={`grid w-full grid-cols-4`}>
                    <div
                        data-tooltip-target="title_tooltip"
                        className={`${units} ${color} group relative rounded-lg border border-gray-400 p-2`}
                    >
                        <p className="text-md truncate text-nowrap text-gray-600">
                            {title}
                        </p>
                        <div className="invisible absolute left-1/3 top-[-15px] rounded-md bg-gray-100 p-2 opacity-75 group-hover:visible">
                            {title}
                        </div>
                        <p className="text-sm text-gray-400">
                            {from}-{to}
                        </p>
                    </div>
                </div>
            )}
        </div>
    )
}

export default TimeSlot
