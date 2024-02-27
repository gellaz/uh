CREATE TYPE profile_sex_enum AS enum(
    'Male',
    'Female',
    'Other'
);

CREATE TABLE public.profiles(
    id uuid NOT NULL,
    email text NOT NULL,
    first_name text NOT NULL,
    last_name text NOT NULL,
    birth_date date NOT NULL,
    sex profile_sex_enum NULL,
    tax_id text NOT NULL,
    phone text NULL,
    email_secondary text NULL,
    CONSTRAINT profiles_pkey PRIMARY KEY (id),
    CONSTRAINT profiles_id_fkey FOREIGN KEY (id) REFERENCES auth.users(id) ON DELETE CASCADE,
    CONSTRAINT profiles_email_key UNIQUE (email)
);

ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Profiles are viewable by users who created them." ON profiles
    FOR SELECT
        USING (auth.uid() = id);

CREATE POLICY "Users can insert their own profile." ON profiles
    FOR INSERT
        WITH CHECK (auth.uid() = id);

CREATE POLICY "Users can update their own profile." ON profiles
    FOR UPDATE
        USING (auth.uid() = id);

