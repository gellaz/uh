import { MdChatBubble, MdDashboard, MdHomeWork, MdPeople } from "react-icons/md"

const tabIconSize = 20;
export const sibeBarTabs = [
    {
        title: 'Dashboard',
        href: '/dashboard',
        icon: <MdDashboard key={'dashboard'} size={tabIconSize} />,
    },
    {
        title: 'Contacts',
        href: '/contacts',
        icon: <MdPeople key={'contacts'} size={tabIconSize} />,
    },
    {
        title: 'Chats',
        href: '/chats',
        icon: <MdChatBubble key={'chats'} size={tabIconSize} />,

    },
    {
        title: 'Properties',
        href: '/properties',
        icon: <MdHomeWork key={'properties'} size={tabIconSize} />,
    },


];
