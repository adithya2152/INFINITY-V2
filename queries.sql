create table authen(
    username text primary key ,
    password text
)

create table users (
    userid serial primary key,
    username text not null unique,
    email text 
)

create table package(
    pid serial primary key ,
    package_name text not null unique,
    destination_type text ,
    price int ,
    duration text ,
    package_desc text,
)

create table booked(
    uid int ,
    pid int ,
    time timestamp,
    primary key(uid,pid)
)

