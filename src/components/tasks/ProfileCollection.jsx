import React from 'react';

function getAdditionalProfileBubble(profileCount, profilesLength) {
    if (profileCount - profilesLength > 0) {
        return (
            <div className="flex justify-center items-center bg-sky-200 rounded-full h-4 w-4 text-xs text-gray-500">
                +{profileCount - profilesLength}
            </div>
        );
    }
}

function ProfileCollection({ profiles, profileCount}) {
    return (
        <>
            {profiles.map((profile, index) => (
                <img className="rounded-full h-5" key={index} src={`/${profile}.jpg`} alt="profile" />
            ))}
            {getAdditionalProfileBubble(profileCount, profiles.length)}
        </>
    );
}

export default ProfileCollection;