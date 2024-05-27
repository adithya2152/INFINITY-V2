create table authen(
    username text not null unique,
    password text
)

create table users (
    userid serial primary key,
    username text not null unique,
    email text 
)