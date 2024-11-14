import React from 'react'
import CardTitle from './CardTitle.jsx'
import ProgressMarker from './ProgressMarker.jsx'
import ProfileCollection from './ProfileCollection.jsx'
import { MdChatBubbleOutline } from 'react-icons/md'

function TaskCard({ card }) {
    return (
        <div className="flex w-64 flex-col gap-2 rounded-lg border border-gray-300 px-2 py-4 shadow-md">
            <div className="grid h-8 grid-cols-2 items-center">
                <div>
                    <CardTitle logo={card.logo} name={card.name} />
                </div>
                <div className="justify-items-end">
                    <div className="flex h-6 w-6 cursor-pointer items-center justify-center gap-0.5 rounded-full bg-gray-100">
                        <div className="h-1 w-1 rounded-xl bg-slate-500"></div>
                        <div className="h-1 w-1 rounded-xl bg-slate-500"></div>
                        <div className="h-1 w-1 rounded-xl bg-slate-500"></div>
                    </div>
                </div>
            </div>
            <div className="h-8">
                <ProgressMarker
                    completed={card.completed}
                    percentage={card.percentage}
                    total={card.total}
                />
            </div>
            <div className="h-8">
                <div className="flex items-center">
                    <ProfileCollection
                        profileCount={card.profileCount}
                        profiles={card.profiles}
                    />
                    <div className="flex flex-grow flex-row justify-end gap-1">
                        <MdChatBubbleOutline className="fill-gray-400" />
                        <p className="text-xs text-gray-400">
                            {card.messageCount}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TaskCard
