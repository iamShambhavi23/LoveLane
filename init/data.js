const sampleListings = 
[
    {
      title: "Sunset Serenade",
      description:
        "Enjoy a candlelit dinner with live music as the sun sets over the sea.",
      image: {
        filename: "listingimage",
        url: "https://images.pexels.com/photos/8995669/pexels-photo-8995669.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      price: 4500,
      location: "Sea FreshView Restaurant, Goa",
      country: "India",
    },
    {
      title: "Rooftop Romance",
      description:
        "Dine under the stars with breathtaking city views.",
      image: {
        filename: "listingimage",
        url: "https://img.freepik.com/free-photo/boy-girl-hug-each-other-tender-standing-rooftop-rays-evening-lights_8353-7134.jpg?t=st=1719735431~exp=1719739031~hmac=26b4214ce5ecac0f2c74a541b40ea0006d0989b5dbe134431e1311c82868a4f6&w=900",
      },
      price: 3800,
      location: "Skyline Cafe, Mumbai",
      country: "India",
    },
    {
      title: "Lakeside Love",
      description:
        "Private dinner by a tranquil lake with personalized service.",
      image: {
        filename: "listingimage",
        url: "https://img.freepik.com/premium-photo/generative-ai-beautiful-table-setting-romantic-date-near-river_934909-15813.jpg?w=900",
      },
      price: 6200,
      location: "Lake View Retreat, Udaipur",
      country: "India",
    },
    {
      title: "Garden Gala",
      description:
        "A secluded garden setting with gourmet cuisine and floral ambiance.",
      image: {
        filename: "listingimage",
        url: "https://img.freepik.com/free-photo/ramadan-celebration-with-delicious-food_23-2151404302.jpg?t=st=1719736002~exp=1719739602~hmac=6bf704093acd55914165c18c930391f6f870a4e87ecc1f1a1384697e17d9d5d6&w=900",
      },
      price: 5000,
      location: "Green Oasis Restaurant, Jaipur",
      country: "India",
    },
    {
      title: "Historic Hideaway",
      description:
        "Dine amidst ancient architecture and royal heritage.",
      image: {
        filename: "listingimage",
        url: "https://img.freepik.com/free-photo/digital-art-ramadan-celebration_23-2151358166.jpg?t=st=1719736098~exp=1719739698~hmac=fb1639d30b48acbdf90a12036ac74e1cbe6c8feadc4f5c74fbdd9211580601bb&w=360",
      },
      price: 7500,
      location: "Heritage Palace Restaurant, Jodhpur",
      country: "India",
    },
    {
      title: "Mountain Retreat",
      description:
        "Cozy dinner with panoramic mountain views and local delicacies.",
      image: {
        filename: "listingimage",
        url: "https://img.freepik.com/premium-photo/luxury-eatery-near-beautiful-lake-dinner-concept-generative-ai_3535-5841.jpg?w=900",
      },
      price: 5800,
      location: " Himalayan Heights Cafe, Manali",
      country: "India",
    },
    {
      title: "Beachside Bliss",
      description:
        "Romantic beachfront dinner with fresh seafood and ocean breeze.",
      image: {
        filename: "listingimage",
        url: "https://img.freepik.com/free-photo/photorealistic-wedding-venue-with-intricate-decor-ornaments_23-2151481508.jpg?t=st=1719736249~exp=1719739849~hmac=3059846cae52bfd7e7fa5d87778d85e444c9b45eef9d280e7353395c8497b2d1&w=900",
      },
      price: 4200,
      location: " Waves Bistro, Pondicherry",
      country: "India",
    },
    {
      title: "Urban Elegance",
      description:
        "Sophisticated dinner in a chic urban setting with modern cuisine.",
      image: {
        filename: "listingimage",
        url: "https://img.freepik.com/free-photo/luxury-restaurant-grill-bar-interior-with-chandeliers-furniture_114579-2341.jpg?t=st=1719736131~exp=1719739731~hmac=0dc14c7a88b7083f91ef869776d521199cb1966d46ba53f21ff6a90b252c28c0&w=900",
      },
      price: 3600,
      location: "City Lights Restaurant, Delhi",
      country: "India",
    },
    {
      title: "Vineyard Vows",
      description:
        "Romantic dinner amidst lush vineyards with wine pairing.",
      image: {
        filename: "listingimage",
        url: "https://img.freepik.com/free-photo/couple-summer-having-relaxing-picnic-day-together_23-2151426022.jpg?t=st=1719736707~exp=1719740307~hmac=c501f99180c22fb3c22a3a5b87012e88f23ffa01087b44d54e993abe879f1466&w=360",
      },
      price: 6500,
      location: "Vineyard Bistro, Nashik",
      country: "India",
    },
    {
      title: "Desert Dream",
      description:
        "Exclusive dinner under starlit skies amidst sand dunes.",
      image: {
        filename: "listingimage",
        url: "https://img.freepik.com/free-photo/friends-night-beach-with-beer-food_23-2149450799.jpg?t=st=1719736900~exp=1719740500~hmac=610fb8bf410130fb3d1b5b236adffad0e4a46a1b5a78160be4148f2e3efeefff&w=360",
      },
      price: 8000,
      location: "Dune Dining Oasis, Jaisalmer",
      country: "India",
    },
    {
      title: "River Romance",
      description:
        "Riverside dining experience with gourmet regional cuisine.",
      image: {
        filename: "listingimage",
        url: "https://img.freepik.com/free-photo/loving-couple-takes-beautiful-evening-with-flashlights-near-lake_8353-9403.jpg?t=st=1719737218~exp=1719740818~hmac=fd910275fa3c0ba4011450dfec1582ca59e7823b48a7d06d6768d357f586ec78&w=900",
      },
      price: 4800,
      location: "Riverbank Retreat, Varanasi",
      country: "India",
    },
    {
      title: "Cultural Courtyard",
      description:
        "Cultural evening with traditional dance and dinner in a courtyard.",
      image: {
        filename: "listingimage",
        url: "https://img.freepik.com/free-photo/high-angle-friends-partying-with-music_23-2149655647.jpg?t=st=1719737532~exp=1719741132~hmac=9c5b22295d7aa558e1ed8642061bbaae40c28e9419378e17715c7a3b429e0f96&w=900",
      },
      price: 5300,
      location: "Cultural Heritage Cafe, Kolkata",
      country: "India",
    },
    {
      title: "Artistic Affair",
      description:
        "Dinner surrounded by art and sculptures in a contemporary gallery.",
      image: {
        filename: "listingimage",
        url: "https://img.freepik.com/free-photo/arab-restaurant_23-2147794221.jpg?t=st=1719737659~exp=1719741259~hmac=8606b87cf726dca15eccdf6309b92728fe890125c25e3ff20bc244d995cc0a74&w=360",
      },
      price: 4700,
      location: "Artistic Flavors Gallery Cafe, Bengaluru",
      country: "India",
    },
    {
      title: "Seaside Splendor",
      description:
        "Elegant dinner by the seaside with a private chef and personalized service.",
      image: {
        filename: "listingimage",
        url: "https://img.freepik.com/free-photo/romance-luxury-setting-restaurant-romantic_1203-4858.jpg?t=st=1719737820~exp=1719741420~hmac=033efcae2008fb0a441ad02f16e9addf34c6239a4fe650f742594965d1e85315&w=900",
      },
      price: 7000,
      location: "Oceanic Delights Restaurant, Chennai",
      country: "India",
    },
    {
      title: " Forest Fantasy",
      description:
        "Intimate dinner in a forest clearing with organic farm-to-table cuisine.",
      image: {
        filename: "listingimage",
        url: "https://img.freepik.com/free-photo/guy-brought-order-friends-have-meeting-evening-nice-outside-restaurant_146671-14492.jpg?t=st=1719738019~exp=1719741619~hmac=9c1c193d75197152bae8b111427236d0e3a0589aba540e4762e50345180662e6&w=900",
      },
      price: 6300,
      location: "Forest Retreat Cafe, Coorg",
      country: "India",
    },
    {
        title: "Sunset Beach Picnic",
        description: "Enjoy a private beach picnic as the sun sets over the horizon, with a gourmet spread of local delicacies.",
        image: {
            filename: "listingimage",
            url: "https://img.freepik.com/free-photo/friends-admiring-sunset-while-having-beer_23-2148733714.jpg?t=st=1719742134~exp=1719745734~hmac=2fe4265feecb7daf91d564e0524dab9a499b415c6a175aa94c8a4ab8b68fe75c&w=900",
        },
        price: 8500,
        location: "Zeebop by the Sea, Utorda Beach, Goa",
        country: "India",
      },
    {
        title: "Rooftop Stargazing Dinner",
        description: "Dine under the stars on a rooftop with a telescope for stargazing, accompanied by a multi-course meal.",
        image: {
            filename: "listingimage",
            url: "https://img.freepik.com/free-photo/lovely-family-enjoying-new-year-party_23-2149173248.jpg?t=st=1719742243~exp=1719745843~hmac=8675c9c0faba4c87137d48c28103b801aca345e4be915c7a6fbe2811fead8076&w=900",
        },
        price: 12000,
        location: "Aer, Four Seasons Hotel Mumbai, Mumbai",
        country: "India",
    },
    {
        title: "Royal Palace Dinner",
        description: "Experience a regal dinner inside a historic palace courtyard, with traditional Indian music and royal cuisine.",
        image: {
            filename: "listingimage",
        url: "https://img.freepik.com/free-photo/full-shot-people-sitting-table-indoors_52683-93405.jpg?t=st=1719742298~exp=1719745898~hmac=b63659f261f4257b0e89012c1857fdd286fc9c34ae7be55027892721e500cb4e&w=900",
        },
        price: 20000,
        location: "City Palace, Jaipur, Rajasthan",
        country: "India",
    },
    {
        title: "Candlelit Lake View Dinner",
        description: "Enjoy a candlelit dinner by a serene lake, with panoramic views and a specially curated menu.",
        
        image: {
            filename: "listingimage",
        url: "https://www.andamanlove.com/wp-content/uploads/2024/03/candle-light-dinner-1.jpg",
        },
        price: 7500,
        location: "The Tamara Coorg, Coorg, Karnataka",
        country: "India",
    },
    {
        title: "Art Gallery Dining",
        description: "Dine surrounded by art in a private gallery setting, with a chef's special menu and wine pairing.",
        
        image: {
            filename: "listingimage",
            url: "https://img.freepik.com/free-photo/restaurant-table-with-classic-white-chairs-turquoise-fabric_140725-2570.jpg?t=st=1719742735~exp=1719746335~hmac=015501b3c857410e5c15365d8903874ed515c5dafc6bb1bfea6521068906971c&w=900",
        },
        price: 15000,
        location: "National Gallery of Modern Art, New Delhi",
        country: "India",
    },
    {
        title: "Romantic River Cruise Dinner",
        description: "Cruise down a tranquil river while enjoying a candlelit dinner onboard with live music.",
        
        image: {
            filename: "listingimage",
        url: "https://img.freepik.com/free-photo/friends-night-beach-with-beer-food_23-2149450800.jpg?t=st=1719742857~exp=1719746457~hmac=6ff059f0f4f5a5e91a63f0838d9e83fd5b416f98129b2af8e0f9d6f1ad82776f&w=900",
        },
        price: 10500,
        location: "Ganges River, Varanasi, Uttar Pradesh",
        country: "India",
    },
    {
        title: "Heritage Fort Dinner",
        description: "Dine in the courtyard of a majestic fort with traditional Rajasthani cuisine and folk performances.",
        
        image: {
            filename: "listingimage",
            url: "https://img.freepik.com/free-photo/breakfast-set-table_140725-3715.jpg?t=st=1719742968~exp=1719746568~hmac=a3960b7d74ad1638e50df422c8839905b2b6feb30d08d84a7ebe86e05decabd8&w=360",
        },
        price: 18000,
        location: "Neemrana Fort Palace, Neemrana, Rajasthan",
        country: "India",
    },
    {
        title: "Forest Canopy Dinner",
        description: "Enjoy a dinner amidst the forest canopy in a treehouse, surrounded by nature and starlit skies.",
        
        image: {
            filename: "listingimage",
            url: "https://img.freepik.com/free-photo/waiter-hand-gloves-worker-is-engaged-serving-table_146671-14407.jpg?t=st=1719743155~exp=1719746755~hmac=1d6bc11f63682fae67eeb3678b00ad23339c31202185a1970fd046e693fce680&w=900",
        },
        price: 9500,
        location: "The Machan, Lonavala, Maharashtra",
        country: "India",
    },
    {
        title: "Private Yacht Dinner",
        description: "Sail on a private yacht with a gourmet dinner, accompanied by stunning views of the Arabian Sea.",
        
        image: {
            filename: "listingimage",
            url: "https://img.freepik.com/free-photo/portrait-stylish-good-looking-european-people-having-lunch-board-yacht-drinking-vine-enjoying-summertime-three-friends-live-different-countries-finally-met-vacation_176420-15420.jpg?t=st=1719743260~exp=1719746860~hmac=9f0bdbe335a4f34a67b4d4f997cd52553d15dfb54f0f9b7f8a8176f3e720d073&w=900",
        },
        price: 25000,
        location: "Gateway of India, Mumbai",
        country: "India",
    },
    {
        title: "Desert Oasis Dinner",
        description: "Experience an enchanting dinner in a luxury tent amidst the desert dunes, with traditional music and cuisine.",
        
        image: {
            filename: "listingimage",
        url: "https://img.freepik.com/free-photo/full-length-couple-toasting-wine-tent_107420-9698.jpg?t=st=1719743376~exp=1719746976~hmac=811f3bf04137d63b528718163e17fcba04011156ef3bfdc4f14dda1bea2c6216&w=900",
        },
        price: 14000,
        location: "Jaisalmer Desert Camp, Jaisalmer, Rajasthan",
        country: "India",
    },
    {
        title: "Historic Haveli Dinner",
        description: "Dine in the courtyard of a restored haveli (mansion) with authentic Rajput cuisine and cultural performances.",
        
        image: {
            filename: "listingimage",
        url: "https://img.freepik.com/premium-photo/minsk-belarus-december-2017-interior-equipped-huge-banquet-colored-hall-oriental-style_97694-7503.jpg?w=900",
        },
        price: 9500,
        location: "Samode Haveli, Jaipur, Rajasthan",
        country: "India",
    },
    {
        title: "Garden Pavilion Dinner",
        description: "Enjoy an intimate dinner in a private garden pavilion with personalized service and a chef's tasting menu.",
        
        image: {
            filename: "listingimage",
            url: "https://img.freepik.com/free-photo/floral-garland-eucalyptus-pink-flowers-lies-table_8353-8958.jpg?t=st=1719743814~exp=1719747414~hmac=042a55558e6a88aece01ed413fc0df6797c96a583f3c66584d86a2f5759f84a2&w=900",
        },
        price: 11000,
        location: "ITC Windsor, Bengaluru, Karnataka",
        country: "India",
    },
    {
        title: "Cave Dining Experience",
        description: "Dine inside a natural cave with candlelight, offering a unique ambiance and a gourmet meal.",
        
        image: {
            filename: "listingimage",
            url: "https://img.freepik.com/free-photo/stone-walled-restaurant-top-lighting_140725-9731.jpg?t=st=1719937786~exp=1719941386~hmac=547dcc5f2e0ce73233510f93b8dfe64c9cbc4236b8095fbfa8c4e04cae8f7d0d&w=360",
        },
        price: 13000,
        location: "Golkonda Resorts & Spa, Hyderabad, Telangana",
        country: "India",
    },
    {
        title: "Floating Restaurant Dinner",
        description: "Enjoy dinner on a floating restaurant on a tranquil lake, surrounded by picturesque scenery and serene ambiance.",
        
        image: {
            filename: "listingimage",
            url: "https://img.freepik.com/free-photo/portrait-beautiful-young-asian-woman-happy-smile-relax-with-breakfast-floating-around-swimming-pool_74190-10124.jpg?t=st=1719744139~exp=1719747739~hmac=3ab8edcc1134af8f426adad9fa0927c98f09d1d172a5f2e24ee9632001d5d5fd&w=360",
        },
        price: 8000,
        location: "The Lake Palace, Udaipur, Rajasthan",
        country: "India",
    },

    {
      title: "Surprise Proposal",
      description: "Plan an unforgettable surprise proposal with a personalized setup, romantic decor, and a breathtaking view.",
      
      image: {
          filename: "listingimage",
          url: "https://img.freepik.com/free-photo/heart-shape-made-flowers_23-2150397249.jpg?t=st=1719939561~exp=1719943161~hmac=4ffabec12805d7b778db18b83943819230e6991a216d9b1107a406d92320a6ea&w=900",
      },
      price: 9000,
      location: "Sky Lounge, Bengaluru",
      country: "India",
  },
];
  
module.exports = { data: sampleListings };