'use client'

import { useRef, useState } from "react";
import { Image, Trash2 } from 'lucide-react'
// import { MdDeleteOutline } from "react-icons/md";

interface uploadMediaDivProps {
    type: number
    index: number
}

export default function UploadMediaDiv(props: uploadMediaDivProps) {
    const [isUploaded, setIsUploaded] = useState(false);
    const [isHover, setIsHovered] = useState(false);
    const [selectedImage, setSelectedImage] = useState<string>();
    const pStyle = 'text-sm font-normal'
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleFileUpload = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    const handleFileSelected = (event: any) => {
        const selectedFile = event.target.files[0];
        // Handle the selected file here, for instance, you can upload it or perform any other actions
        console.log('Selected File:', selectedFile);
        setSelectedImage(URL.createObjectURL(selectedFile));

        if (selectedImage != null || undefined) {
            setIsUploaded(true);
        }
    };

    const handleDeleteFileSelected = () => {
        setSelectedImage('');
        console.log('deleteTapped')
    }

    return (
        <div
            onClick={
                () => {
                    handleFileUpload()
                    setIsUploaded(!isUploaded)
                    setIsHovered(false)
                }
            }
            onMouseEnter={() => { isUploaded ? setIsHovered(true) : null }}
            onMouseLeave={() => { isUploaded ? setIsHovered(false) : null }}
            className='col h-[124px] w-[160px] p-2 items-center justify-center border rounded-sm text-sm font-medium space-y-1 cursor-pointer hover:border-black'
            style={
                {
                    backgroundImage: selectedImage ? `url(${selectedImage})` : 'none',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }
            }>
            {!isUploaded && <Image size={'32'} color={'gray'} />}
            {!isUploaded && <p className={pStyle}>{handleType(props.type, props.index)}</p>}
            {

                (isUploaded && isHover)
                    ? <div className='flex h-full w-full items-center justify-center'>
                        <button
                            className='flex w-10 h-10 rounded-full items-center justify-center bg-red-100 text-red-500 text-xl'
                            onClick={() => handleDeleteFileSelected()}
                        >
                            <Trash2 size={16} />
                        </button>
                    </div>
                    : null
            }

            < input
                type="file"
                accept="image/*"
                ref={fileInputRef}
                onChange={(event) => {
                    if (event.currentTarget.oncancel) {
                        console.log('cancel tapped')
                    } else {
                        handleFileSelected(event)
                    }
                }}
                className='hidden'
                title='Carica immagine'
            />
        </div>

    )
}

function handleType(type: number, index: number) {
    switch (type) {
        case 0:
            return `Foto ${index + 1}`
        case 1:
            return `Video ${index + 1}`
        case 2:
            return `Planimentria ${index + 1}`
        default:
            return ''
    }
}
