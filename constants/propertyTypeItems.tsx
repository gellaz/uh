const features = [
    {
        title: 'Locali',
        data: [
            {
                title: 'Camera da letto',
                inputType: 'text',
                placeholder: '0',
                subdata: null

            },
            {
                title: 'Bagni',
                inputType: 'text',
                placeholder: '0',
                subdata: null

            },
            {
                title: 'Cucina',
                inputType: 'text',
                placeholder: '0',
                subdata: null

            }
        ]

    },
    {
        title: 'Superficie',
        data: [
            {
                title: 'Superficie commerciali',
                inputType: 'text',
                placeholder: undefined,
                subdata: null

            },
            {
                title: 'Piano immobile',
                inputType: 'text',
                placeholder: undefined,
                subdata: null

            },
            {
                title: 'Totale piani',
                inputType: 'text',
                placeholder: undefined,
                subdata: null

            },
        ],
    },
    {
        title: 'Riscaldamento',
        data: [
            {
                title: 'Centralizzato',
                inputType: 'checkbox',
                placeholder: undefined,
                subdata: null

            },
            {
                title: 'Autonomo',
                inputType: 'checkbox',
                placeholder: undefined,
                subdata: null

            },


        ],
    },
    {
        title: 'Certificazioni APE',
        data: [
            {
                title: 'Classe energetica',
                inputType: 'popover',
                placeholder: undefined,
                subdata: ['A (<= 30)', 'B (<= 50)', 'C (<= 70)', 'D (<= 90)', 'E (<= 120)', 'F (>= 160)', 'In attesa di rilascio'],
            },
        ],

    },
    {
        title: 'Altro',
        data: [
            {
                title: 'Tipo di proprietà',
                inputType: 'popover',
                placeholder: undefined,
                subdata: ['Nuda proprietà', 'Usufrutto',]

            },
            {
                title: 'Stato dell\'immobile',
                inputType: 'popover',
                placeholder: undefined,
                subdata: ['Nuovo', 'Ristrutturato',]

            },
            {
                title: 'Anno di costruzione',
                inputType: 'date',
                placeholder: undefined,
                subdata: []

            },
        ],

    },
];
const commercialFeatures = [
    {
        title: 'Locali',
        data: [
            {
                title: 'Stanze',
                inputType: 'text',
                placeholder: undefined,
                subdata: null

            },
            {
                title: 'Bagni',
                inputType: 'text',
                placeholder: undefined,
                subdata: null

            },
        ]

    },
    {
        title: 'Superficie',
        data: [
            {
                title: 'Superficie commerciali',
                inputType: 'text',
                placeholder: undefined,
                subdata: null

            },
            {
                title: 'Piano immobile',
                inputType: 'text',
                placeholder: undefined,
                subdata: null

            },
            {
                title: 'Totale piani',
                inputType: 'text',
                placeholder: undefined,
                subdata: null

            },
        ],
    },
    {
        title: 'Riscaldamento',
        data: [
            {
                title: 'Centralizzato',
                inputType: 'checkbox',
                placeholder: undefined,
                subdata: null

            },
            {
                title: 'Autonomo',
                inputType: 'checkbox',
                placeholder: undefined,
                subdata: null

            },


        ],
    },
    {
        title: 'Certificazioni APE',
        data: [
            {
                title: 'Classe energetica',
                inputType: 'popover',
                placeholder: undefined,
                subdata: ['A (<= 30)', 'B (<= 50)', 'C (<= 70)', 'D (<= 90)', 'E (<= 120)', 'F (>= 160)', 'In attesa di rilascio'],
            },
        ],

    },
    {
        title: 'Altro',
        data: [
            {
                title: 'Tipo di proprietà',
                inputType: 'popover',
                placeholder: undefined,
                subdata: ['Nuda proprietà', 'Usufrutto',]

            },
            {
                title: 'Stato dell\'immobile',
                inputType: 'popover',
                placeholder: undefined,
                subdata: ['Nuovo', 'Ristrutturato',]

            },
            {
                title: 'Anno di costruzione',
                inputType: 'date',
                placeholder: undefined,
                subdata: null

            },
        ],

    },
];
const prices = [
    {
        title: 'Prezzo',
        value: 0,
    },
    {
        title: 'Tot. prezzo',
        value: 0,
    },
    {
        title: 'Nascondi prezzo',
        value: false,
    },
    {
        title: 'Proprietà a reddito',
        value: false,
    },
    {
        title: 'Affitto con riscatto',
        value: false,
    },
    {
        title: 'Spese condominiali',
        value: 0,
    },
    {
        title: 'Stato dell\'immobile',
        value: ['Occupato', 'Libero'],
    },
    {
        title: 'Prezzo minimo (REA)',
        value: 0,
    },
    {
        title: 'Prezzo massimo (REA)',
        value: 0,
    },
]



export const propertyCategoryTypeItems = [
    {
        category: 'Residenziale',
        types: [
            {
                title: 'Loft',
                features: features,

            },
            {
                title: 'Open space',
                features: features,


            },
            {
                title: 'Soffitta',
                features: features,

            },
            {
                title: 'Baglio',
                features: features,

            },
            {
                title: 'Baita',
                features: features,

            },
            {
                title: 'Casa colonica',
                features: features,

            },
            {
                title: 'Casale',
                features: features,

            },
            {
                title: 'Cascina',
                features: features,

            },
            {
                title: 'Chalet',
                features: features,

            },
            {
                title: 'Dammuso',
                features: features,

            },
            {
                title: 'Maso',
                features: features,

            },
            {
                title: 'Masseria',
                features: features,

            },
            {
                title: 'Nuraghe',
                features: features,

            },
            {
                title: 'Rifugio',
                features: features,

            },
            {
                title: 'Rustico',
                features: features,

            },
            {
                title: 'Sasso',
                features: features,

            },
            {
                title: 'Trullo',
                features: features,

            },
            {
                title: 'Villa unifamiliare',
                features: features,
            },
            {
                title: 'Villa bifamiliare',
                features: features,

            },
            {
                title: 'Villa plurifamiliare',
                features: features,

            },
            {
                title: 'Villa a schiera',
                features: features,

            },
            {
                title: 'Appartamento in villa',
                features: features,

            },
        ],
        price: prices,
        media: [
            {
                title: 'Picture',
                data: []
            },
            {
                title: 'Video',
                data: []
            },
            {
                title: 'Planimetria',
                data: []
            }
        ]

    },
    {
        category: 'Capannone',
        types: null,
        price: prices,


    },
    {
        category: 'Negozi',
        types: [
            {
                title: 'Laboratorio',
                features: commercialFeatures,
            },
            {
                title: 'Locale commerciale',
                features: commercialFeatures,
            },
        ],
        price: prices,

    },
    {
        category: 'Palazzi / Edifici',
        types: null,
        price: prices,
    },
    {
        category: 'Magazzino / Deposito',
        types: null,
        price: prices,

    },
    {
        category: 'Garage / Posti auto',
        types: [
            {
                title: 'Garage - box',
                features: null,
            },
            {
                title: 'Posto auto - moto',
                features: null,
            },


        ],
        price: prices,
    },
    {
        category: 'Ufficio',
        types: null,
        price: prices,
    },
    {
        category: 'Terreno',
        types: [
            {
                title: 'Agricolo',
                features: null,
            },
            {
                title: 'Edificabile',
                features: null,
            },
            {
                title: 'Non edificabile',
                features: null,
            },
        ],
        price: prices,
    },
    {
        category: 'Stanza / Camera',
        types: [
            {
                title: 'Singola',
                features: null,
            },
            {
                title: 'Doppia',
                features: null,
            },
            {
                title: 'Tripla',
                details: null,
            },
            {
                title: 'Multipla',
                details: null,
            },
        ],
        price: prices,
    },
];
