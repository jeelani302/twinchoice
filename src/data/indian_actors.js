const indianActors = [
    {
        "id": 101,
        "name": "Shah Rukh Khan",
        "image": "https://upload.wikimedia.org/wikipedia/commons/d/d1/ShahrukhKhan.jpg",
        "tagline": "The King of Bollywood",
        "genres": ["Romance", "Drama", "Action"]
    },
    {
        "id": 102,
        "name": "Salman Khan",
        "image": "https://upload.wikimedia.org/wikipedia/commons/8/86/Salman_Khan_at_en_route_to_IFFI_2023.jpg",
        "tagline": "The Bhai of Bollywood",
        "genres": ["Action", "Comedy", "Drama"]
    },
    {
        "id": 103,
        "name": "Aamir Khan",
        "image": "https://upload.wikimedia.org/wikipedia/commons/6/6c/Aamir_Khan_2013.jpg",
        "tagline": "Mr. Perfectionist",
        "genres": ["Drama", "Comedy", "Social"]
    },
    {
        "id": 104,
        "name": "Saif Ali Khan",
        "image": "https://upload.wikimedia.org/wikipedia/commons/d/d4/Saif_Ali_Khan_at_the_launch_of_%27Vikram_Vedha%27_trailer.jpg",
        "tagline": "The Nawab of Bollywood",
        "genres": ["Drama", "Action", "Thriller"]
    },
    {
        "id": 105,
        "name": "Irrfan Khan",
        "image": "https://upload.wikimedia.org/wikipedia/commons/a/a2/Irrfan_Khan_at_the_IIFA_2017.jpg",
        "tagline": "A globally acclaimed powerhouse of acting",
        "genres": ["Drama", "Mystery", "International"]
    },
    {
        "id": 106,
        "name": "Naseeruddin Shah",
        "image": "https://upload.wikimedia.org/wikipedia/commons/e/e9/Naseeruddin_Shah_at_the_screening_of_%27Waiting%27.jpg",
        "tagline": "The legend of theatre and parallel cinema",
        "genres": ["Drama", "Arthouse", "Satire"]
    },
    {
        "id": 107,
        "name": "Akshay Kumar",
        "image": "https://upload.wikimedia.org/wikipedia/commons/2/2e/Akshay_Kumar_at_the_launch_of_%27Selfiee%27_trailer.jpg",
        "tagline": "Bollywood's Khiladi",
        "genres": ["Action", "Comedy", "Social"]
    },
    {
        "id": 108,
        "name": "Ajay Devgn",
        "image": "https://upload.wikimedia.org/wikipedia/commons/e/ed/Ajay_Devgn_at_the_special_screening_of_%27Drishyam_2%27.jpg",
        "tagline": "The intense protagonist",
        "genres": ["Action", "Drama", "Crime"]
    },
    {
        "id": 109,
        "name": "Ranbir Kapoor",
        "image": "https://upload.wikimedia.org/wikipedia/commons/7/7b/Ranbir_Kapoor_at_the_special_screening_of_%27Animal%27.jpg",
        "tagline": "The versatile modern star",
        "genres": ["Drama", "Romance", "Musical"]
    },
    {
        "id": 110,
        "name": "Ranveer Singh",
        "image": "https://upload.wikimedia.org/wikipedia/commons/6/6f/Ranveer_Singh_at_the_launch_of_%27Jayeshbhai_Jordaar%27_trailer.jpg",
        "tagline": "Powerhouse of energy",
        "genres": ["Drama", "Action", "Comedy"]
    },
    {
        "id": 111,
        "name": "Vicky Kaushal",
        "image": "https://upload.wikimedia.org/wikipedia/commons/7/77/Vicky_Kaushal_at_the_special_screening_of_%27Sam_Bahadur%27.jpg",
        "tagline": "The rising star of realistic cinema",
        "genres": ["Drama", "War", "Biopic"]
    },
    {
        "id": 120,
        "name": "Amitabh Bachchan",
        "image": "https://upload.wikimedia.org/wikipedia/commons/c/c6/Amitabh_Bachchan_at_the_launch_of_%27Aankhen_2%27.jpg",
        "tagline": "The Shahenshah of Bollywood",
        "genres": ["Drama", "Action", "Thriller"]
    },
    {
        "id": 113,
        "name": "Emraan Hashmi",
        "image": "https://upload.wikimedia.org/wikipedia/commons/2/2a/Emraan_Hashmi_at_the_launch_of_%27Dybbuk%27_trailer.jpg",
        "tagline": "The master of thrillers",
        "genres": ["Thriller", "Crime", "Romance"]
    },
    {
        "id": 114,
        "name": "Nawazuddin Siddiqui",
        "image": "https://upload.wikimedia.org/wikipedia/commons/b/b2/Nawazuddin_Siddiqui_at_the_Cannes_Film_Festival_2022.jpg",
        "tagline": "The face of Indian indie cinema",
        "genres": ["Drama", "Crime", "Arthouse"]
    },
    {
        "id": 115,
        "name": "Manoj Bajpayee",
        "image": "https://upload.wikimedia.org/wikipedia/commons/7/7c/Manoj_Bajpayee_at_the_special_screening_of_%27Sirf_Ek_Bandaa_Kaafi_Hai%27.jpg",
        "tagline": "The legend of raw performance",
        "genres": ["Drama", "Crime", "Thriller"]
    },
    {
        "id": 116,
        "name": "Jaideep Ahlawat",
        "image": "https://upload.wikimedia.org/wikipedia/commons/1/10/Jaideep_Ahlawat_at_the_launch_of_%27An_Action_Hero%27_trailer.jpg",
        "tagline": "Quiet intensity personified",
        "genres": ["Crime", "Drama", "Action"]
    },
    {
        "id": 117,
        "name": "Pankaj Kapur",
        "image": "https://upload.wikimedia.org/wikipedia/commons/a/af/Pankaj_Kapur_at_the_screening_of_%27Jersey%27.jpg",
        "tagline": "The master of craft",
        "genres": ["Drama", "Arthouse", "Comedy"]
    },
    {
        "id": 118,
        "name": "Shahid Kapoor",
        "image": "https://upload.wikimedia.org/wikipedia/commons/2/23/Shahid_Kapoor_at_the_launch_of_%27Farzi%27_trailer.jpg",
        "tagline": "From chocolate boy to intense actor",
        "genres": ["Drama", "Action", "Thriller"]
    },
    {
        "id": 119,
        "name": "Kartik Aaryan",
        "image": "https://upload.wikimedia.org/wikipedia/commons/7/77/Kartik_Aaryan_at_the_special_screening_of_%27Shehzada%27.jpg",
        "tagline": "The heartthrob of gen-z",
        "genres": ["Comedy", "Romance", "Horror"]
    },
    {
        "id": 112,
        "name": "Govinda",
        "image": "https://upload.wikimedia.org/wikipedia/commons/9/90/Govinda_at_the_launch_of_%27Kill_Dil%27.jpg",
        "tagline": "The King of Comedy and Dance",
        "genres": ["Comedy", "Dancing", "Drama"]
    }
];

export default indianActors;
