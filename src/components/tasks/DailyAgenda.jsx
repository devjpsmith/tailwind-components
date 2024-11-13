import React from 'react';
import AgendaButton from "./AgendaButton.jsx";
import TimeSlot from "./TimeSlot.jsx";

function DailyAgenda(props) {
    const { agendaRows } = props ?? [];
    return (
        <div className="flex flex-col gap-6 rounded-xl border border-gray-200 shadow-lg p-4">
            <div className="grid grid-cols-2 items-center h12">
                <div><h3 className="text-lg text-slate-700 font-semibold">Daily Tasks</h3></div>
                <div className="flex justify-end"><AgendaButton /></div>
            </div>
            { agendaRows.map(({time, agendaItem}) => <TimeSlot
                time={time}
                agendaItem={agendaItem} />
                )
            }
        </div>
    );
}

export default DailyAgenda;