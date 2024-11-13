import React from 'react';
import CardTitle from "./CardTitle.jsx";
import ProgressMarker from "./ProgressMarker.jsx";
import ProfileCollection from "./ProfileCollection.jsx";
import {MdChatBubbleOutline} from "react-icons/md";

function TaskCard({card}) {
    return (
        <div className="flex flex-col gap-2 rounded-lg border border-gray-300 px-2 py-4 w-64 shadow-md">
            <div className="items-center h-8 grid grid-cols-2">
                <div>
                    <CardTitle logo={card.logo} name={card.name} />
                </div>
                <div className="justify-items-end">
                    <div className="flex justify-center items-center gap-0.5 bg-gray-100 rounded-full h-6 w-6 cursor-pointer">
                        <div className="rounded-xl bg-slate-500 h-1 w-1"></div>
                        <div className="rounded-xl bg-slate-500 h-1 w-1"></div>
                        <div className="rounded-xl bg-slate-500 h-1 w-1"></div>
                    </div>
                </div>
            </div>
            <div className="h-8">
                <ProgressMarker completed={card.completed} percentage={card.percentage} total={card.total} />
            </div>
            <div className="h-8">
                <div className="flex items-center">
                    <ProfileCollection profileCount={card.profileCount} profiles={card.profiles}/>
                    <div className="flex flex-grow flex-row justify-end gap-1">
                        <MdChatBubbleOutline className="fill-gray-400"/>
                        <p className="text-xs text-gray-400">{card.messageCount}</p>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default TaskCard;