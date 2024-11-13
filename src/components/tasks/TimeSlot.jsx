import React from 'react';

function TimeSlot({time, agendaItem}) {
    const { title, from, to, color, units } = agendaItem;
    return (
        <div className="flex items-center">
            <p className="text-md text-gray-400 p-2 w-16">{time}</p>
            {agendaItem && (
                <div className={`grid grid-cols-4 w-full`}>
                    <div data-tooltip-target="title_tooltip" className={`${units} ${color} group relative p-2 rounded-lg border border-gray-400`}>
                        <p className="text-md text-gray-600 text-nowrap truncate">{title}</p>
                        <div className="absolute top-[-15px] left-1/3 bg-gray-100 rounded-md invisible p-2 opacity-75 group-hover:visible">{title}</div>
                        <p className="text-sm text-gray-400">{from}-{to}</p>
                    </div>
                </div>
            )}
        </div>
    );
}

export default TimeSlot;