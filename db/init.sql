drop table if exists admins cascade;

create table admins(
id serial primary key,
auth0id text unique not null,
name text,
email text
);
select * from admins

insert into admins 
(auth0id, name, email)
values 
('itswayne321', 'Wayne Miller', 'waynemiller@email.com'),
('teststranggg123', 'Jessica Sunshine', 'jessica@email.com'),
('heythere654', 'Joanne Smith', 'joannesmith@email.com'),
('heyhiyo421', 'Emily Rhoades', 'emilyr@email.com');


drop table if exists cats;

create table cats (
id serial primary key,
added_by integer references admins(id),
img text,
name text,
age text,
gender text,
type text,
color text,
breed text,
description text
);

select * from cats

insert into cats 
--img, name, age, gender, type, color, breed, description
-- (added_by, img, name, gender, age, breed, type, color, description)

(added_by, img, name, age, gender, type, color, breed, description)
values
(2, 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2d7b1bd980752bb3ea0a259f528eae78&auto=format&fit=crop&w=1650&q=80', 'Bailey','6 years old','F', 'Cat','Grey', 'DMH','Hi! This is Bailey! She came to me Thanksgiving evening 2017, at one of my feeding stations outside at my Apt complex. She tried to eat, but was having difficulties. I was able to pick her up, carry her to me bathroom and schedule a vet appointment. 
Bailey had severe stomatitis. All her teeth have been pulled. Ten weeks later, she’s recovered, eats dry and wet food, with no teeth! I think she’s doesn’t see well out of her left eye, but is fine seeing out of her right eye. She walks fine and beginning to jump up onto my couch with no problems. 
The Vet thinks she’s about 6 yrs old, has spent most of her life fighting off other outside cats outside. One of the maintenance men, told me she was always alone, and lived under a bush, even in the heat of summer. She has tested negative for FeLV and FIV Dec 2017. 
She loves to sleep in her own kitty bed. She likes to come out of the bathroom to roam. When she hears my voice, she comes to me. 
I believe she needs a nice peaceful life now. To be adored as she should have been the first six years of her life. Its not fair to Bailey to live with all my other cats and not feel safe. This is the reason I’m hoping to find a wonderful home for Miss Bailey. 
If you are interested in adopting, please complete the Cat Adoption Application and, if you are selected as a prospective adopter, we will contact you to set up a meet and greet. Thank you for considering rescuing an animal in need!'),
(1, 'https://images.unsplash.com/photo-1517172527855-d7a4feea491b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=24a7d5f22b1661f3d15ae74b5aca1b15&auto=format&fit=crop&w=2700&q=80', 'Beamer', '4 months old','M','Kitten','Grey','DSH','Beamer is very curious and playful. Beamer is the largest of a litter of five kittens so he may grow to be a big cat. He enjoys playing with his siblings and will tolerate dogs. Beamer has a beautiful steel grey short coat. 
If you are interested in adopting, please complete the Cat Adoption Application and, if you are selected as a prospective adopter, we will contact you to set up a meet and greet. Thank you for considering rescuing an animal in need!'),
(3, 'https://images.unsplash.com/photo-1508292549404-81fd946f8c2e?ixlib=rb-0.3.5&s=2b255582246617b61b167259ec1bd3af&dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb', 'Beanz','9 years old','M','Cat','Grey','DSH','Beanz is very loyal and loves to follow you and keep you in his view at all times. Loves to snuggle next to you when ever you’re sitting down or laying in bed. Always happy to see you when you get home. Throws himself at you feet when I open the door wanting a belly rub. Very vocal in the morning until he gets fed. A very sweet boy looking for a forever home. Would love to go with his sister Bunz. Check out her profile too if you’re interested in a pair! 
Bunz: http://azrain.org/product/bunz/
If you are interested in adopting, please complete the Cat Adoption Application and, if you are selected as a prospective adopter, we will contact you to set up a meet and greet. Thank you for considering rescuing an animal in need!'),
(2, 'https://images.unsplash.com/photo-1516978101789-720eacb59e79?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e5c1892964442a7914775e3b797e4681&auto=format&fit=crop&w=1500&q=80', 'Brenna','4 months old','F','Kitten','Black', 'unknown', 'Hi everyone! My name is Brenna!  I was found as a stray and taken in by a very nice women who took care of me.  She had 5 other kitties and sadly couldn’t keep me so she brought me to RAIN. I am a little reserved at first but give me a nice belly rub and I am yours! 
If you are interested in adopting, please complete the Cat Adoption Application and, if you are selected as a prospective adopter, we will contact you to set up a meet and greet. Thank you for considering rescuing an animal in need!'),
(2, 'https://images.unsplash.com/photo-1517451330947-7809dead78d5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e63b07fb95899a6cb247964cbf80e401&auto=format&fit=crop&w=2250&q=80', 'Bunz','7 years old','F','Cat','Calico','DSH','Bunz is a sweet girl who is filled with love. Can be a little shy at first but once she chooses you it’s a forever bond. Loves to knead her paws to find a comfortable spot to lay on and snuggle. Usually on a lap and stomach before she sprawls out. Loves her tummy rubbed and both sides of her neck and face. My favorite is when she will sit on the back rest of the couch and perch her two front paws on my shoulder and rub her head against my neck. She’s a sweetheart. If you’re interested in a pair check out her brother Beanz!
Beanz: http://azrain.org/product/beanz/
If you are interested in adopting, please complete the Cat Adoption Application and, if you are selected as a prospective adopter, we will contact you to set up a meet and greet. Thank you for considering rescuing an animal in need!'),
(2, 'https://images.unsplash.com/photo-1519052537078-e6302a4968d4?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9b828fb6d481a5460e5faf85900624b6&auto=format&fit=crop&w=1500&q=80', 'Cali','1 year old','F','Cat','Calico','DMH','Cali is a gorgeous girl with a huge heart. She and her 5 beautiful babies were rescued and Cali proved to be an outstanding mother. Now her babies are all grown and she is ready for her forever home! This loving cat has been raised around dogs and other cats.
If you are interested in adopting Cali, please complete the Cat Interest form on our website (www.azrain.org) and, if you are selected as a prospective adopter, we will contact you to set up a meet and greet with Cali.  Thank you for considering rescuing an animal in need!');
