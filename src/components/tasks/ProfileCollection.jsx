import React from 'react'

function getAdditionalProfileBubble(profileCount, profilesLength) {
    if (profileCount - profilesLength > 0) {
        return (
            <div className="flex h-4 w-4 items-center justify-center rounded-full bg-sky-200 text-xs text-gray-500">
                +{profileCount - profilesLength}
            </div>
        )
    }
}

function ProfileCollection({ profiles, profileCount }) {
    return (
        <>
            {profiles.map((profile, index) => (
                <img
                    className="h-5 rounded-full"
                    key={index}
                    src={`/${profile}.jpg`}
                    alt="profile"
                />
            ))}
            {getAdditionalProfileBubble(profileCount, profiles.length)}
        </>
    )
}

export default ProfileCollection
