create table profiles (
    id uuid not null default auth.uid (),
    email text not null,
    first_name text not null,
    last_name text not null,
    birth_date date not null,
    tax_id text not null,
    phone text null,
    email_secondary text null,
    constraint profiles_pkey primary key (id),
    constraint profiles_email_key unique (email)
);