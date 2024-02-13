CREATE TYPE energy_class_enum AS enum(
    'Pending',
    'Exempt',
    'Unclassifiable',
    -- DL 192 DEL 19/08/2005
    '2005_A+',
    '2005_A',
    '2005_B',
    '2005_C',
    '2005_D',
    '2005_E',
    '2005_F',
    '2005_G',
    -- Legge 90/2013
    '2013_A4',
    '2013_A3',
    '2013_A2',
    '2013_A1',
    '2013_B',
    '2013_C',
    '2013_D',
    '2013_E',
    '2013_F',
    '2013_G'
);

