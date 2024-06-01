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
    bid serial primary key,
    uid int  not null,
    pid int  not null,
    time time,
    date date,
    start_date date ,
    quantity int ,
    total_price int 
)

INSERT INTO package (package_name, destination_type, price, duration, package_desc)
VALUES ('BEST OF ITALY', 'International', 100000, 30, 'Explore the history, art, and cuisine of Italy in depth. Visit Rome, Florence, Venice, the Tuscan countryside, and venture further south to Naples, Pompeii, and Sicily.');

INSERT INTO package (package_name, destination_type, price, duration, package_desc)
VALUES ('BEST OF SINGAPORE', 'International', 100000, 30, 'Go beyond the bustling city of Singapore on this extended adventure. Explore neighboring Malaysia and Indonesia, experiencing the rich cultures and diverse landscapes of Southeast Asia.');

INSERT INTO package (package_name, destination_type, price, duration, package_desc)
VALUES ('BEST OF GREECE', 'International', 100000, 30, 'Immerse yourself in the rich history and beauty of Greece. Sail the Aegean Sea, discover ancient ruins, explore charming villages, and experience the Greek islands in depth.');

INSERT INTO package (package_name, destination_type, price, duration, package_desc)
VALUES ('BEST OF SPAIN', 'International', 100000, 30, 'Delve deeper into the culture, history, and landscapes of Spain. Explore Barcelona, Madrid, Seville, and venture further north to Basque Country and Galicia, or south to Andalusia and beyond.');

INSERT INTO package (package_name, destination_type, price, duration, package_desc)
VALUES ('BEST OF THAILAND', 'International', 100000, 30, 'Uncover the hidden gems of Thailand beyond the popular tourist destinations. Explore the north with its stunning mountains and hill tribes, venture into the northeast with its ancient ruins, and discover the southern islands at a leisurely pace.');

INSERT INTO package (package_name, destination_type, price, duration, package_desc)
VALUES ('BEST OF AUSTRALIA', 'International', 100000, 30, 'Experience Australia\'s diverse landscapes and wildlife on an extended journey. Explore the iconic landmarks like Sydney, the Great Barrier Reef, and Uluru, and venture further outback to discover the unique natural wonders and Aboriginal culture.');
