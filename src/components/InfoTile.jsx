function InfoTile({title, value, currency, bgColor, icon}) {
    return (
        <div className={`rounded-md px-4 py-3 ${bgColor} w-48 shadow-md`}>
            <div className="text-sm">{title}</div>
            <div className="flex items-center">
                <div className="text-lg font-medium">{currency ? '$' : ''}{value}</div>
                <div className="flex-grow justify-items-end">
                    <div className="border rounded-full border-black p-1">
                        {icon}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default InfoTile;