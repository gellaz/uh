import { LayoutDashboard, Users, Search, Building2 } from 'lucide-react';

const tabIconSize = 20;
export const sibeBarTabs = [
    {
        title: 'Dashboard',
        href: '/dashboard',
        icon: <LayoutDashboard key={'dashboard'} size={tabIconSize} />,
    },
    {
        title: 'Contatti',
        href: '/contacts',
        icon: <Users key={'contacts'} size={tabIconSize} />,
    },
    {
        title: 'Esplora',
        href: '/explore',
        icon: <Search key={'searching'} size={tabIconSize} />,

    },
    {
        title: 'Proprietà',
        href: '/properties',
        icon: <Building2 key={'properties'} size={tabIconSize} />,
    },


];
