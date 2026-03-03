const actors = [
  {
    "id": 1,
    "name": "Marlon Brando",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Marlon_Brando_publicity_for_One-Eyed_Jacks.png/500px-Marlon_Brando_publicity_for_One-Eyed_Jacks.png",
    "tagline": "The pioneer of method acting",
    "genres": [
      "Drama",
      "Crime",
      "Classic"
    ]
  },
  {
    "id": 2,
    "name": "Al Pacino",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Al_Pacino_2016_%2830401544240%29.jpg/500px-Al_Pacino_2016_%2830401544240%29.jpg",
    "tagline": "Intense energy and iconic crime boss roles",
    "genres": [
      "Crime",
      "Drama",
      "Thriller"
    ]
  },
  {
    "id": 3,
    "name": "Robert De Niro",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Robert_de_Niro_Cannes_Film_Festival_%283x4_cropped%29.jpg/500px-Robert_de_Niro_Cannes_Film_Festival_%283x4_cropped%29.jpg",
    "tagline": "Chameleon-like devotion to complex characters",
    "genres": [
      "Crime",
      "Drama",
      "Thriller"
    ]
  },
  {
    "id": 4,
    "name": "Clint Eastwood",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Clint_Eastwood_visits_MCB_Camp_Pendleton_%281%29_%28cropped%29.jpg/500px-Clint_Eastwood_visits_MCB_Camp_Pendleton_%281%29_%28cropped%29.jpg",
    "tagline": "The ultimate western anti-hero and tough guy",
    "genres": [
      "Western",
      "Action",
      "Drama"
    ]
  },
  {
    "id": 5,
    "name": "Harrison Ford",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Harrison_Ford_-_Televerse_2025_%28cropped%29.jpg/500px-Harrison_Ford_-_Televerse_2025_%28cropped%29.jpg",
    "tagline": "The quintessential charming rogue of adventure",
    "genres": [
      "Action",
      "Sci-Fi",
      "Adventure"
    ]
  },
  {
    "id": 6,
    "name": "Denzel Washington",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Denzel_Washington_at_the_2025_Cannes_Film_Festival.jpg/500px-Denzel_Washington_at_the_2025_Cannes_Film_Festival.jpg",
    "tagline": "Commanding screen presence and gravitas",
    "genres": [
      "Drama",
      "Action",
      "Thriller"
    ]
  },
  {
    "id": 7,
    "name": "Tom Hanks",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/TomHanksPrincEdw031223_%2811_of_41%29_%28cropped%29.jpg/500px-TomHanksPrincEdw031223_%2811_of_41%29_%28cropped%29.jpg",
    "tagline": "America's most beloved everyman",
    "genres": [
      "Drama",
      "Comedy",
      "War"
    ]
  },
  {
    "id": 8,
    "name": "Morgan Freeman",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Morgan_Freeman_at_The_Pentagon_on_2_August_2023_-_230802-D-PM193-3363_%28cropped%29.jpg/500px-Morgan_Freeman_at_The_Pentagon_on_2_August_2023_-_230802-D-PM193-3363_%28cropped%29.jpg",
    "tagline": "The voice of wisdom and gravitas",
    "genres": [
      "Drama",
      "Mystery",
      "Crime"
    ]
  },
  {
    "id": 9,
    "name": "Anthony Hopkins",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Anthony_Hopkins_Red_Sea_Festival_2025_Portrait.jpg/500px-Anthony_Hopkins_Red_Sea_Festival_2025_Portrait.jpg",
    "tagline": "Chilling precision and theatrical grandeur",
    "genres": [
      "Thriller",
      "Drama",
      "Horror"
    ]
  },
  {
    "id": 10,
    "name": "Jack Nicholson",
    "image": "https://upload.wikimedia.org/wikipedia/commons/e/ec/Jack_Nicholson_2001.jpg",
    "tagline": "Manic energy and rebellious charm",
    "genres": [
      "Drama",
      "Thriller",
      "Horror"
    ]
  },
  {
    "id": 11,
    "name": "Leonardo DiCaprio",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/LeoPTABFI191125-28_%28cropped%29.jpg/500px-LeoPTABFI191125-28_%28cropped%29.jpg",
    "tagline": "Intense method actor known for dramatic roles",
    "genres": [
      "Drama",
      "Thriller",
      "Biopic"
    ]
  },
  {
    "id": 12,
    "name": "Brad Pitt",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Brad_Pitt-69858.jpg/500px-Brad_Pitt-69858.jpg",
    "tagline": "Cool charisma meets artistic ambition",
    "genres": [
      "Drama",
      "Action",
      "Comedy"
    ]
  },
  {
    "id": 13,
    "name": "Christian Bale",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Christian_Bale-7837.jpg/500px-Christian_Bale-7837.jpg",
    "tagline": "Extreme dedication and physical transformation",
    "genres": [
      "Action",
      "Drama",
      "Thriller"
    ]
  },
  {
    "id": 14,
    "name": "Joaquin Phoenix",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Joaquin_Phoenix-64908_%28cropped%29.jpg/500px-Joaquin_Phoenix-64908_%28cropped%29.jpg",
    "tagline": "Raw vulnerability and unpredictable intensity",
    "genres": [
      "Drama",
      "Thriller",
      "Biopic"
    ]
  },
  {
    "id": 15,
    "name": "Samuel L. Jackson",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/SamuelLJackson.jpg/500px-SamuelLJackson.jpg",
    "tagline": "Electrifying energy on every screen",
    "genres": [
      "Action",
      "Thriller",
      "Crime"
    ]
  },
  {
    "id": 16,
    "name": "Keanu Reeves",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Keanu_Reeves_at_TIFF_2025_02_%28Cropped%29.jpg/500px-Keanu_Reeves_at_TIFF_2025_02_%28Cropped%29.jpg",
    "tagline": "Action legend with a heart of gold",
    "genres": [
      "Action",
      "Sci-Fi",
      "Thriller"
    ]
  }
];

export default actors;
