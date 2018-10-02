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
(2, 'https://images.unsplash.com/photo-1516978101789-720eacb59e79?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e5c1892964442a7914775e3b797e4681&auto=format&fit=crop&w=1500&q=80', 'Brenna','4 months old','F','Kitten','Orange', 'unknown', 'Hi everyone! My name is Brenna!  I was found as a stray and taken in by a very nice women who took care of me.  She had 5 other kitties and sadly couldn’t keep me so she brought me to RAIN. I am a little reserved at first but give me a nice belly rub and I am yours! 
If you are interested in adopting, please complete the Cat Adoption Application and, if you are selected as a prospective adopter, we will contact you to set up a meet and greet. Thank you for considering rescuing an animal in need!'),
(2, 'https://images.unsplash.com/photo-1517451330947-7809dead78d5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e63b07fb95899a6cb247964cbf80e401&auto=format&fit=crop&w=2250&q=80', 'Bunz','7 years old','F','Cat','Calico','DSH','Bunz is a sweet girl who is filled with love. Can be a little shy at first but once she chooses you it’s a forever bond. Loves to knead her paws to find a comfortable spot to lay on and snuggle. Usually on a lap and stomach before she sprawls out. Loves her tummy rubbed and both sides of her neck and face. My favorite is when she will sit on the back rest of the couch and perch her two front paws on my shoulder and rub her head against my neck. She’s a sweetheart. If you’re interested in a pair check out her brother Beanz!
Beanz: http://azrain.org/product/beanz/
If you are interested in adopting, please complete the Cat Adoption Application and, if you are selected as a prospective adopter, we will contact you to set up a meet and greet. Thank you for considering rescuing an animal in need!'),
(2, 'https://images.unsplash.com/photo-1519052537078-e6302a4968d4?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9b828fb6d481a5460e5faf85900624b6&auto=format&fit=crop&w=1500&q=80', 'Cali','1 year old','F','Cat','Orange','DMH','Cali is a gorgeous girl with a huge heart. She and her 5 beautiful babies were rescued and Cali proved to be an outstanding mother. Now her babies are all grown and she is ready for her forever home! This loving cat has been raised around dogs and other cats.
If you are interested in adopting Cali, please complete the Cat Interest form on our website (www.azrain.org) and, if you are selected as a prospective adopter, we will contact you to set up a meet and greet with Cali.  Thank you for considering rescuing an animal in need!'),
(3, 'https://images.unsplash.com/photo-1482066490729-6f26115b60dc?ixlib=rb-0.3.5&s=c65c83283b5ef5ccdda3c42c2bdce676&auto=format&fit=crop&w=1602&q=80', 'Cannoli', '3 months', 'F', 'Kitten','Silver','DSH', 'Don’t let my picture fool you— I’m a petite little gal with the cutest crooked tail you’ve ever seen! I’m a lover not a fighter. My foster mom says I can purr for days. I’m a sweet soul who loves her humans and has a taste for adventure! I love toys, naps, food, and I’ve been around cats and dogs! If you are interested in adopting, please complete the Cat Adoption Application and, if you are selected as a prospective adopter, we will contact you to set up a meet and greet. Thank you for considering rescuing an animal in need!'),
-- (2, 'https://images.unsplash.com/photo-1487300001871-12053913095d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=508d6e7b47ad1b46b0ce324b2b91b708&auto=format&fit=crop&w=2850&q=80', 'Elery','3 months','F','Kitten','Grey and White','DSH','Hello everybody! I’m Elery, and i want to go home with you today! I am quite the little lady. I was found outside but I love it inside where I’m given constant love & attention! Elery loves to play with other kitties, especially chasing their tails. she loves to cuddle with people, and stay right next to you and purr. Please adopt this little sweetheart of a girl!

-- If you are interested in adopting, please complete the Cat Adoption Application and, if you are selected as a prospective adopter, we will contact you to set up a meet and greet. Thank you for considering rescuing an animal in need!'),
-- (1, 'https://images.unsplash.com/photo-1518843025960-d60217f226f5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b4d6d1b9ef3b1a2f5a20201c4d426de9&auto=format&fit=crop&w=668&q=80','Eli','3 months','M','Kitten','Orange and White','DSH','Eli is a little shy at first but loves playing with other kittens and will gladly take a pet from you he warms up to you. He is a beautiful kitty that is ready for his forever home!'),
-- (3, 'https://images.unsplash.com/photo-1502122788889-2eded93703cc?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=59b3495664e74f6a52f5b2ea130bb241&auto=format&fit=crop&w=1650&q=80','Elie','1.5 years','F','Cat','Tabby and Calico','DSH','Ellie is very sweet, affectionate, and extra gentle. She is a shy kitty who gets nervous in new places, filled with noises and people she doesn’t know. She was a wonderful mother to her 3 babies who she had at a young age, after being dumped in the desert while very pregnant, but she found a shelter in a street drainage on Loop 202 where she delivered and cared for her babies where she was surrounded by desert full of predators, right on extremely busy street until they were rescued. She is a hardcore mama that survived the hot summer with little food and water and saved all her babies as well. Mom of the year award goes to Ellie! She is ready now for her forever home where she can live her life save and loved. Because of her past she is very timid and will need a special family that understands her needs and will give her patience to adjust at her own pace. She would do best in a home with no kids.'),
(2, 'https://images.unsplash.com/photo-1468271973570-7c4af51a082a?ixlib=rb-0.3.5&s=2ec71a0718ef6180451759c76c0c8922&auto=format&fit=crop&w=1650&q=80','Ellie Mae','3 years','F','Cat','Cat','Tabby','DSH'),
(3, 'https://images.unsplash.com/photo-1496284575094-d5b92db3890d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ec3513a546f8d130eca87a489ae230b2&auto=format&fit=crop&w=1650&q=80','Felix','1 year','M','Cat','Orange and White','DSH','Felix is a sweet boy who loves to hang out with his human. He is a chill cat and enjoys lounging around the house. His mellow demenor makes him such a great cat that he would do best in a home with other mellow animals or he would do well as an only cat where he can get all your attention. Come meet Felix today!

If you are interested in adopting, please complete the Cat Adoption Application and, if you are selected as a prospective adopter, we will contact you to set up a meet and greet. Thank you for considering rescuing an animal in need!'),
-- (2, 'https://images.unsplash.com/photo-1537734071404-c0009b3bf3c4?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=0ad5987c03b91815c8e70fd5d8f36d67&auto=format&fit=crop&w=1650&q=80','George','3 months','M','Kitten','Grey Tabby','DSH','George takes a few minutes to warm up, but them he will snuggle and purr as long as you pay attention to him.

-- He’s very curious and loves to explore.

-- This three-month-old gray tabby loves his brother James, and they can be found cuddling together.

-- ADOPT GEORGE!

-- If you are interested in adopting, please complete the Cat Adoption Application and, if you are selected as a prospective adopter, we will contact you to set up a meet and greet. Thank you for considering rescuing an animal in need!'),
-- (2, '','Glynda','3 years','F','Cat','Dilute calico','DMH','Glynda is fine with her foster and her grandkids and she sleeps on her foster’s bed every night. Glynda would really love a home where she is the only 4-legged occupant and can receive the love and attention she is so desperately craving. She is an independent woman who is gorgeous inside and out.

-- Glynda is FIV positive but that doesn’t stop her from having a happy and healthy life! Read more about FIV here: http://azrain.us/fiv-cat-info/

-- or email us at info@azrain.org to talk to our FIV Educator.

-- If you are interested in adopting Glynda, please complete the Cat Interest form and, if you are selected as a prospective adopter, we will contact you to set up a meet and greet with Glynda.  Thank you for considering rescuing an animal in need.'),
(1, 'https://images.unsplash.com/photo-1517321759936-7446b48b9643?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c63b89b0925c2c2d82b1ae6b94c72b09&auto=format&fit=crop&w=1650&q=80','Grouchy','9 month','F','Kitten','Gray','DLH','Grouchy has grown to be a beautiful kitten, she is 9 months old with a long sleek black coat and a silver touch on her fluffy tail, and white chest. She is very independent and it will take sometime to get used to a new human owner and new house.
The adopter will have to be an experienced cat person since it will take some time for her to get comfortable and accept a new owner.
Grouchy will do best in a house without kids and other pest. However she does tolerate kittens and will warm up to them after a few weeks.
 She can be seen by appointment only.
To set up an appointment please contact Abel Menchaca or Stacey Melton at 602.931.3013 or 602.690.2277'),
(3, 'https://images.unsplash.com/photo-1445499348736-29b6cdfc03b9?ixlib=rb-0.3.5&s=531fcf53bd6ae37cd97419a4d012d4e7&auto=format&fit=crop&w=2850&q=80','Isabella','2 years','F','Cat','Calico','DLH','Isabella is a real sweety. She’s a people person and loves to be around the action.

We know that Isabella had one litter of kittens, but she’s now spayed.

She is affectionate and gets along with other cats and dogs.

This girl’s a real love and likes pets. 

She’s good with children. She would also do well as an only cat. Isabella is a loving girl looking for her forever home!

If you are interested in Isabella, please complete the Cat Interest Form on our website (www.azrainrescue.org) and if you’re selected as a prospective adopter, we’ll contact you to set up a meet and greet with Isabella. Thank you for considering rescuing an animal in need!'),
(1, 'https://images.unsplash.com/photo-1487300001871-12053913095d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=508d6e7b47ad1b46b0ce324b2b91b708&auto=format&fit=crop&w=2850&q=80','Jack','5 months','M','Kitten','Tuxedo','DSH','Hello, Jack here. I am a black and white Tuxedo boy. My favorite spot in the house is a window sill. I prefer a more quite place to stay, as I am quiet and shy. I do like to be pet when I’m enjoying my soft food, but am independent when I’m not. I need time to adjust to my new surroundings, but with time and patience I will love being with you. I am very mellow and relaxed

If you are interested in adopting, please complete the Cat Adoption Application and, if you are selected as a prospective adopter, we will contact you to set up a meet and greet. Thank you for considering rescuing an animal in need!');

