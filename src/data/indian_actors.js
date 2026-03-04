const indianActors = [
    {
        "id": 101,
        "name": "Shah Rukh Khan",
        "image": "https://image.tmdb.org/t/p/w500/tCEppfUu0g2Luu0rS5VKMoL4eSw.jpg",
        "tagline": "The King of Bollywood",
        "genres": ["Romance", "Drama", "Action"]
    },
    {
        "id": 102,
        "name": "Salman Khan",
        "image": "https://image.tmdb.org/t/p/w500/n7pKtccmf2jVOz8Qn90q2ThqLge.jpg",
        "tagline": "The Bhai of Bollywood",
        "genres": ["Action", "Comedy", "Drama"]
    },
    {
        "id": 103,
        "name": "Aamir Khan",
        "image": "https://image.tmdb.org/t/p/w500/ayE2Ot15rqWU3YhPI3Yg8xBzVx7.jpg",
        "tagline": "Mr. Perfectionist",
        "genres": ["Drama", "Comedy", "Social"]
    },
    {
        "id": 104,
        "name": "Saif Ali Khan",
        "image": "https://image.tmdb.org/t/p/w500/85uKiFDEcIqzLh0GwqYvecXw4uA.jpg",
        "tagline": "The Nawab of Bollywood",
        "genres": ["Drama", "Action", "Thriller"]
    },
    {
        "id": 105,
        "name": "Irrfan Khan",
        "image": "https://image.tmdb.org/t/p/w500/qkA9PpWJRw3rNjVkWfNZdwLvRZx.jpg",
        "tagline": "A globally acclaimed powerhouse of acting",
        "genres": ["Drama", "Mystery", "International"]
    },
    {
        "id": 106,
        "name": "Naseeruddin Shah",
        "image": "https://image.tmdb.org/t/p/w500/aVCigTGfijAnnm7I7TZbceXzPMl.jpg",
        "tagline": "The legend of theatre and parallel cinema",
        "genres": ["Drama", "Arthouse", "Satire"]
    },
    {
        "id": 107,
        "name": "Akshay Kumar",
        "image": "https://image.tmdb.org/t/p/w500/1d77rFiN8h2JXE6vS8VCuc2k20J.jpg",
        "tagline": "Bollywood's Khiladi",
        "genres": ["Action", "Comedy", "Social"]
    },
    {
        "id": 108,
        "name": "Ajay Devgn",
        "image": "https://image.tmdb.org/t/p/w500/vnHQQFzTjJ0sv14DGMIoKa3qTxN.jpg",
        "tagline": "The intense protagonist",
        "genres": ["Action", "Drama", "Crime"]
    },
    {
        "id": 109,
        "name": "Ranbir Kapoor",
        "image": "https://image.tmdb.org/t/p/w500/a5xWgKh7f4XofIl7ZwisxOi616K.jpg",
        "tagline": "The versatile modern star",
        "genres": ["Drama", "Romance", "Musical"]
    },
    {
        "id": 110,
        "name": "Ranveer Singh",
        "image": "https://image.tmdb.org/t/p/w500/sRiwLmhduFghJo8U2coUafnDD4C.jpg",
        "tagline": "Powerhouse of energy",
        "genres": ["Drama", "Action", "Comedy"]
    },
    {
        "id": 111,
        "name": "Vicky Kaushal",
        "image": "https://image.tmdb.org/t/p/w500/hKSa4DWEAD7DYhABYGwjPmxdpAY.jpg",
        "tagline": "The rising star of realistic cinema",
        "genres": ["Drama", "War", "Biopic"]
    },
    {
        "id": 120,
        "name": "Amitabh Bachchan",
        "image": "https://image.tmdb.org/t/p/w500/u69PvpWqGkywSm0YjFiw77j9eqS.jpg",
        "tagline": "The Shahenshah of Bollywood",
        "genres": ["Drama", "Action", "Thriller"]
    },
    {
        "id": 113,
        "name": "Emraan Hashmi",
        "image": "https://image.tmdb.org/t/p/w500/kflgvFCFZnpTRbKmJWn5T0G5EKI.jpg",
        "tagline": "The master of thrillers",
        "genres": ["Thriller", "Crime", "Romance"]
    },
    {
        "id": 114,
        "name": "Nawazuddin Siddiqui",
        "image": "https://image.tmdb.org/t/p/w500/w1eXF7T60QlEC2gNfr99J3n8CgX.jpg",
        "tagline": "The face of Indian indie cinema",
        "genres": ["Drama", "Crime", "Arthouse"]
    },
    {
        "id": 115,
        "name": "Manoj Bajpayee",
        "image": "https://image.tmdb.org/t/p/w500/hBiAldG2BGMVoZUPbvK3FNDSw22.jpg",
        "tagline": "The legend of raw performance",
        "genres": ["Drama", "Crime", "Thriller"]
    },
    {
        "id": 116,
        "name": "Jaideep Ahlawat",
        "image": "https://image.tmdb.org/t/p/w500/uILn4y8EWbMdeu71laMsh8zHY0M.jpg",
        "tagline": "Quiet intensity personified",
        "genres": ["Crime", "Drama", "Action"]
    },
    {
        "id": 117,
        "name": "Pankaj Kapur",
        "image": "https://image.tmdb.org/t/p/w500/q1ILNa9c4bVT7sr6yE6TUzGYaPu.jpg",
        "tagline": "The master of craft",
        "genres": ["Drama", "Arthouse", "Comedy"]
    },
    {
        "id": 118,
        "name": "Shahid Kapoor",
        "image": "https://image.tmdb.org/t/p/w500/q5jqLRioZgIVjXpKS8XHx27ScDQ.jpg",
        "tagline": "From chocolate boy to intense actor",
        "genres": ["Drama", "Action", "Thriller"]
    },
    {
        "id": 119,
        "name": "Kartik Aaryan",
        "image": "https://image.tmdb.org/t/p/w500/nHdQlBvORSKmH1F1kbyTFs0HLjU.jpg",
        "tagline": "The heartthrob of gen-z",
        "genres": ["Comedy", "Romance", "Horror"]
    },
    {
        "id": 112,
        "name": "Govinda",
        "image": "https://image.tmdb.org/t/p/w500/jIY8akWgvhgbIgZDd20yIPFDSv8.jpg",
        "tagline": "The King of Comedy and Dance",
        "genres": ["Comedy", "Dancing", "Drama"]
    }
];

export default indianActors;
