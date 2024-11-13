import InfoTile from "./components/InfoTile.jsx";
import {MdOutlinePaid, MdOutlineShoppingCart, MdSupervisorAccount} from "react-icons/md";
import TaskCard from "./components/tasks/TaskCard.jsx";

export default function App() {
    const tiles = [
        {
            id: '1',
            title: 'Total Revenue',
            value: '1,234',
            currency: true,
            bgColor: 'bg-red-200',
            icon: <MdOutlinePaid />
        },
        {
            id: '2',
            title: 'Total Customers',
            value: '58,432',
            bgColor: 'bg-zinc-200',
            icon: <MdSupervisorAccount />
        },
        {
            id: '3',
            title: 'Sales',
            value: '40,852',
            bgColor: 'bg-blue-200',
            icon: <MdOutlineShoppingCart />
        }
    ];
    const cards = [
        {
            id: '1',
            logo: '/shopify.svg',
            name: 'Shopify',
            completed: 76,
            total: 118,
            percentage: 65,
            profiles: [ '30', '4', '88'],
            profileCount: 11,
            messageCount: 73
        },
        {
            id: '2',
            logo: '/treehouse.svg',
            name: 'Treehouse',
            completed: 56,
            total: 140,
            percentage: 40,
            profiles: [ '80', '69', '86'],
            profileCount: 8,
            messageCount: 53
        },
        {
            id: '3',
            logo: '/trello.svg',
            name: 'Trello',
            completed: 61,
            total: 180,
            percentage: 34,
            profiles: [ '56', '88', '85'],
            profileCount: 9,
            messageCount: 44

        }
    ];
    return (
        <div className="container">
            <div className="flex gap-3 mb-4">
                {tiles.map(tile => <InfoTile
                    key={tile.id}
                    title={tile.title}
                    value={tile.value}
                    currency={tile.currency}
                    bgColor={tile.bgColor}
                    icon={tile.icon}
                />)}
            </div>
            <div className="flex gap-6">
                {cards.map(card => <TaskCard key={card.id} card={card} />)}
            </div>
        </div>
    )
}