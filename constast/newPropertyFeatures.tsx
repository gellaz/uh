import { MdKingBed, MdOutlineBathtub } from "react-icons/md";

const imageSize = 20;
export const propertyRoomFeatures = [
    {
        image: <MdKingBed size={imageSize} />,
        title: 'Camera da letto',
        type: 'number',
        placeholder: '0',

    },
    {
        image: <MdOutlineBathtub size={imageSize} />,
        title: 'Bagni',
        type: 'number',
        placeholder: '0',
    },
    {
        image: null,
        title: 'Locali',
        type: 'number',
        placeholder: '0',
    },
]