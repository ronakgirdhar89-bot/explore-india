export type DestinationRegion =
  | "North India"
  | "West India"
  | "South India"
  | "East India"
  | "Islands";

export type DestinationCategory =
  | "Hill Stations"
  | "Heritage"
  | "Beaches"
  | "Spiritual"
  | "Adventure"
  | "Nature";

export type BudgetTier = "Budget" | "Mid-Range" | "Flexible";

export interface Destination {
  slug: string;
  name: string;
  state: string;
  region: DestinationRegion;
  category: DestinationCategory;
  budgetTier: BudgetTier;
  seoTitle: string;
  metaDescription: string;
  targetKeyword: string;
  updatedAt: string;
  idealDuration: string;
  nearestAirport: string;
  nearestRailhead: string;
  geo: { lat: number; lng: number };
  image: string;
  imageAlt: string;
  tagline: string;
  quickAnswer: string;
  overview: string[];
  bestTimeToVisit: {
    months: string;
    summary: string;
    seasons: { label: string; period: string; note: string }[];
  };
  topAttractions: { name: string; description: string; type: string }[];
  thingsToDo: string[];
  suggestedItinerary: { day: string; title: string; plan: string }[];
  localFood: { dish: string; description: string }[];
  accommodationGuidance: {
    budget: string;
    midRange: string;
    tip: string;
  };
  estimatedBudget: {
    rangeInr: string;
    duration: string;
    note: string;
    breakdown: { item: string; estimate: string }[];
  };
  howToReach: {
    byAir: string;
    byTrain: string;
    byRoad: string;
  };
  travelTips: string[];
  faqs: { question: string; answer: string }[];
  relatedDestinationSlugs: string[];
  relatedBlogSlugs: string[];
  officialSource: { label: string; url: string };
  isPopular?: boolean;
  isTrending?: boolean;
  isBudgetFriendly?: boolean;
}

export const DESTINATIONS: Destination[] = [
  {
    slug: "manali",
    name: "Manali",
    state: "Himachal Pradesh",
    region: "North India",
    category: "Hill Stations",
    budgetTier: "Budget",
    seoTitle: "Manali Travel Guide: Attractions & Budget | Explore India",
    metaDescription:
      "Plan your Manali trip with top attractions, Solang Valley, Atal Tunnel, 3-day itinerary, local Himachali food, budget breakdown, and best season.",
    targetKeyword: "Manali travel guide",
    updatedAt: "2026-11-24",
    idealDuration: "3 to 4 days",
    nearestAirport: "Bhuntar (KUU, 50 km)",
    nearestRailhead: "Chandigarh (CDG, 250 km)",
    geo: { lat: 32.2432, lng: 77.1892 },
    image: "/images/manali-himalayas-himachal-pradesh.webp",
    imageAlt: "Snow-capped Himalayan peaks and pine valley in Manali, Himachal Pradesh",
    tagline:
      "High-altitude Himalayan valley of pine forests, river trails, and mountain passes.",
    quickAnswer:
      "Manali in Himachal Pradesh is best visited from March to June for pleasant summer escapes or December to February for snow. A 3-to-4-day budget trip from Delhi costs roughly ₹6,500–₹14,000 per person using overnight Volvo buses, Old Manali hostels, and local HRTC buses.",
    overview: [
      "Tucked in the upper Kullu Valley along the Beas River at 2,050 metres, Manali is one of North India's most versatile mountain towns. It draws backpackers to Old Manali's cedar-shaded cafes, families to Solang Valley's open meadows, and road-trippers heading through Atal Tunnel toward Lahaul.",
      "Beyond the busy Mall Road, Manali rewards travellers who slow down: hiking through pine groves to Jogini Waterfall, soaking in Vashisht's natural geothermal springs, or exploring traditional wooden Kath-Kuni architecture in Naggar and Hadimba. For exact student bus and hostel math, read our [3-day Manali budget guide from Delhi](/blog/3-day-manali-trip-budget-from-delhi-by-volvo) or compare it with [Shimla vs Manali for families](/blog/shimla-vs-manali-for-family-trip-in-summer).",
    ],
    bestTimeToVisit: {
      months: "March to June & October to February",
      summary:
        "Pleasant summer weather from March to June; crisp winter snow between December and February.",
      seasons: [
        {
          label: "Summer",
          period: "March – June",
          note: "12°C to 25°C days ideal for Solang Valley, trekking, and Atal Tunnel day trips.",
        },
        {
          label: "Monsoon",
          period: "July – September",
          note: "Lush green slopes and quiet stays, though verify highway landslide advisories.",
        },
        {
          label: "Winter",
          period: "October – February",
          note: "Crisp air (-2°C to 12°C) with snowfall common from late December to February.",
        },
      ],
    },
    topAttractions: [
      {
        name: "Hadimba Devi Temple",
        description:
          "16th-century pagoda-style wooden temple surrounded by tall deodar cedars in Dhungri Forest.",
        type: "Heritage",
      },
      {
        name: "Solang Valley",
        description:
          "Scenic alpine meadow famous for gondola cable car rides, paragliding, and winter snow.",
        type: "Adventure",
      },
      {
        name: "Old Manali",
        description:
          "Quiet riverside neighbourhood known for wooden guesthouses, bakeries, and Manu Temple.",
        type: "Culture",
      },
      {
        name: "Atal Tunnel & Sissu",
        description:
          "9.02-km high-altitude highway tunnel linking Kullu Valley to Sissu Waterfall in Lahaul.",
        type: "Scenic Drive",
      },
      {
        name: "Vashisht Hot Springs",
        description:
          "Traditional stone temple baths fed by natural geothermal sulphur springs above the Beas.",
        type: "Wellness",
      },
    ],
    thingsToDo: [
      "Hike the forested trail from Vashisht village to Jogini Waterfall early in the morning.",
      "Take a day trip through Atal Tunnel to Sissu Waterfall and Chandra River in Lahaul.",
      "Try tandem paragliding or ride the Solang ropeway (weather permitting).",
      "Walk across the Manalsu River bridge to explore Manu Temple and Old Manali lanes.",
      "Visit Naggar Castle and the Nicholas Roerich Art Gallery on a quiet afternoon detour.",
    ],
    suggestedItinerary: [
      {
        day: "Day 1",
        title: "Old Manali, Hadimba Temple & Mall Road",
        plan: "Check in at Old Manali or Vashisht, visit Hadimba Devi Temple and Van Vihar cedar park, then walk Mall Road and Manu Temple by sunset.",
      },
      {
        day: "Day 2",
        title: "Solang Valley, Atal Tunnel & Sissu",
        plan: "Leave by 7:30 AM to beat Solang traffic, explore Solang meadows or snow point, cross Atal Tunnel to Sissu Waterfall in Lahaul, and return by dusk.",
      },
      {
        day: "Day 3",
        title: "Vashisht Hot Springs, Jogini Waterfall & Naggar",
        plan: "Morning hike from Vashisht to Jogini Waterfall, afternoon excursion to Naggar Castle, and board the evening Volvo bus back.",
      },
    ],
    localFood: [
      {
        dish: "Siddu",
        description:
          "Steamed fermented wheat bread stuffed with spiced walnuts or lentils, served warm with ghee.",
      },
      {
        dish: "Himachali Dham",
        description:
          "Traditional festive platter featuring rajma madra, chana, rice, and sweet mittha.",
      },
      {
        dish: "Kullu Trout Fish",
        description:
          "Fresh cold-water river trout pan-fried lightly with garlic, lemon, and mountain herbs.",
      },
    ],
    accommodationGuidance: {
      budget:
        "Backpacker hostels and wooden homestays in Old Manali and Vashisht offer economical dorms and river-view rooms.",
      midRange:
        "Boutique cottages along Naggar Road, Prini, and Log Huts area provide quiet parking and family rooms.",
      tip: "Book stays 3–4 weeks ahead for May–June and late December peak weekends.",
    },
    estimatedBudget: {
      rangeInr: "₹6,500 – ₹14,000 per person",
      duration: "3 to 4 days (approximate estimate)",
      note: "Estimates vary by season, bus class (HRTC ordinary vs Volvo), and stay category.",
      breakdown: [
        {
          item: "Overnight Volvo bus from Delhi (round trip)",
          estimate: "₹1,800 – ₹3,200",
        },
        {
          item: "Budget hostel / guesthouse (3 nights)",
          estimate: "₹2,000 – ₹4,500",
        },
        { item: "Local food & cafes", estimate: "₹1,500 – ₹2,800" },
        {
          item: "Local HRTC buses, autos & Solang sightseeing",
          estimate: "₹1,200 – ₹3,500",
        },
      ],
    },
    howToReach: {
      byAir:
        "Kullu-Manali Airport at Bhuntar (50 km) handles regional flights; Chandigarh Airport (250 km) offers wider national connectivity.",
      byTrain:
        "Chandigarh Junction (CDG) and Ambala Cantt are the main broad-gauge railheads, followed by a 6–8 hour highway drive.",
      byRoad:
        "Connected via NH3 with overnight HRTC Himsuta and private Volvo buses from Delhi ISBT Kashmere Gate and Chandigarh.",
    },
    travelTips: [
      "Carry layered woollens even in May and June, especially when crossing Atal Tunnel into Lahaul.",
      "Check Himachal Pradesh Traffic Police advisories before driving toward Rohtang Pass or Sissu.",
      "Rohtang Pass requires an online permit and remains closed on Tuesdays for maintenance.",
      "Take local HRTC buses or shared sumos for Solang and Naggar to keep trip costs low.",
    ],
    faqs: [
      {
        question: "Is Manali good for budget student trips?",
        answer:
          "Yes. Overnight HRTC buses from Delhi, affordable hostels in Old Manali and Vashisht, and local dhabas make Manali one of India's easiest budget mountain trips.",
      },
      {
        question: "When can you see snow in Manali?",
        answer:
          "Snowfall in Manali town is most likely between late December and February, while Solang Valley, Sissu, and Rohtang Pass hold snow well into March–May.",
      },
      {
        question: "Do I need a permit to visit Atal Tunnel and Sissu?",
        answer:
          "No special tourist permit is needed to drive through Atal Tunnel to Sissu; permits are required only when ascending to Rohtang Pass.",
      },
    ],
    relatedDestinationSlugs: ["shimla", "leh-ladakh", "rishikesh"],
    relatedBlogSlugs: [
      "3-day-manali-trip-budget-from-delhi-by-volvo",
      "shimla-vs-manali-for-family-trip-in-summer",
      "top-10-places-to-visit-in-himachal-pradesh",
    ],
    officialSource: {
      label: "Himachal Pradesh Tourism",
      url: "https://himachaltourism.gov.in/",
    },
    isPopular: true,
    isTrending: true,
    isBudgetFriendly: true,
  },
  {
    slug: "shimla",
    name: "Shimla",
    state: "Himachal Pradesh",
    region: "North India",
    category: "Hill Stations",
    budgetTier: "Budget",
    seoTitle: "Shimla Travel Guide: Toy Train & Top Places | Explore India",
    metaDescription:
      "Explore Shimla with Kalka-Shimla Toy Train booking tips, The Ridge, Kufri, 3-day family itinerary, local Himachali food, and budget estimates.",
    targetKeyword: "Shimla travel guide",
    updatedAt: "2026-11-24",
    idealDuration: "2 to 3 days",
    nearestAirport: "Jubbarhatti (SLV, 22 km) / Chandigarh (115 km)",
    nearestRailhead: "Kalka (KLK) to Shimla (SML) Narrow Gauge",
    geo: { lat: 31.1048, lng: 77.1734 },
    image: "/images/shimla-hill-station-himachal-pradesh.webp",
    imageAlt: "Misty green hills and heritage ridge architecture in Shimla, Himachal Pradesh",
    tagline:
      "Historic Himalayan hill station famed for its UNESCO Toy Train and pedestrian Mall Road.",
    quickAnswer:
      "Shimla is ideal for a 2-to-3-day family trip between March and June or December and January, costing approximately ₹6,000–₹13,000 per person. Its pedestrian-only Ridge and UNESCO Kalka–Shimla Toy Train make it more accessible for elders and young children than steep mountain towns.",
    overview: [
      "Perched along a crescent-shaped ridge above 2,200 metres, Shimla blends colonial-era timber architecture with sweeping Shivalik valley vistas. Its vehicle-free Mall Road and spacious Ridge promenade make it one of India's most comfortable hill stations for families and senior citizens.",
      "Short drives east lead to cedar-covered Mashobra, Naldehra golf glades, and Kufri's snow ridges. Still deciding between Himachal's top two hill stations? Read our detailed [Shimla vs Manali summer family comparison](/blog/shimla-vs-manali-for-family-trip-in-summer) or our [Top 10 Himachal places guide](/blog/top-10-places-to-visit-in-himachal-pradesh).",
    ],
    bestTimeToVisit: {
      months: "March to June & December to January",
      summary:
        "Cool, sunny spring and summer days; festive winter charm with occasional snowfall.",
      seasons: [
        {
          label: "Spring & Summer",
          period: "March – June",
          note: "15°C to 27°C daytime weather ideal for Heritage walks and Mashobra trails.",
        },
        {
          label: "Monsoon",
          period: "July – September",
          note: "Misty cedar valleys and lower hotel rates, though check Kalka–Shimla road updates.",
        },
        {
          label: "Winter",
          period: "December – February",
          note: "Crisp cold (0°C to 11°C) with snow chances around Kufri, Narkanda, and Jakhoo.",
        },
      ],
    },
    topAttractions: [
      {
        name: "The Ridge & Christ Church",
        description:
          "Wide pedestrian promenade at the heart of Shimla framed by neo-Gothic architecture.",
        type: "Landmark",
      },
      {
        name: "Kalka–Shimla Toy Train",
        description:
          "UNESCO World Heritage narrow-gauge railway crossing 100+ tunnels and stone viaducts.",
        type: "Heritage Rail",
      },
      {
        name: "Jakhoo Temple",
        description:
          "Hilltop Hanuman temple accessible by ropeway or steep forested walk with panoramic views.",
        type: "Spiritual",
      },
      {
        name: "Viceregal Lodge (IIAS)",
        description:
          "Historic 1888 stone mansion surrounded by manicured botanical lawns on Observatory Hill.",
        type: "Heritage",
      },
      {
        name: "Kufri & Mashobra",
        description:
          "Quiet pine-forested retreats 15–20 km away known for apple orchards and winter snow.",
        type: "Nature",
      },
    ],
    thingsToDo: [
      "Ride the morning Himalayan Queen or Shivalik Deluxe Express from Kalka to Shimla.",
      "Stroll along pedestrian Mall Road and visit the Gaiety Heritage Cultural Complex.",
      "Take the Jakhoo Ropeway instead of climbing steep stairs with elderly family members.",
      "Walk the quiet cedar trails of Chadwick Falls, Glen Forest, or Craignano in Mashobra.",
    ],
    suggestedItinerary: [
      {
        day: "Day 1",
        title: "Toy Train Arrival, Mall Road & The Ridge",
        plan: "Arrive at Shimla station via the Kalka–Shimla Toy Train, check in, and enjoy an unhurried evening walk past Scandal Point, The Ridge, Christ Church, and Lakkar Bazaar.",
      },
      {
        day: "Day 2",
        title: "Kufri, Mashobra & Jakhoo Ropeway",
        plan: "Morning excursion to Kufri and Craignano Nature Park in Mashobra; return afternoon for the Jakhoo Temple ropeway and sunset tea on Mall Road.",
      },
      {
        day: "Day 3",
        title: "Viceregal Lodge & State Museum",
        plan: "Guided tour of the Indian Institute of Advanced Study (Viceregal Lodge), browse the Himachal State Museum, and descend via Kalka Shatabdi or highway bus.",
      },
    ],
    localFood: [
      {
        dish: "Chana Madra",
        description:
          "Slow-cooked chickpeas in a spiced yogurt gravy served with steamed mountain rice.",
      },
      {
        dish: "Babru",
        description:
          "Crispy stuffed black-gram flatbread paired with tangy tamarind chutney.",
      },
      {
        dish: "Heritage Bakery Treats",
        description:
          "Warm patties, jam tarts, and softy ice cream from century-old bakeries along Mall Road.",
      },
    ],
    accommodationGuidance: {
      budget:
        "Guesthouses near Lakkar Bazaar, Victory Tunnel, and Sanjauli provide economical stays.",
      midRange:
        "Heritage hotels and quiet hillside resorts in Chhota Shimla and Mashobra suit family trips.",
      tip: "Ask whether the property has lift access or level parking from Cart Road if travelling with elders.",
    },
    estimatedBudget: {
      rangeInr: "₹6,000 – ₹13,000 per person",
      duration: "3 days (approximate estimate)",
      note: "Approximate costs for train/bus travel from Delhi or Chandigarh.",
      breakdown: [
        {
          item: "Train/Bus + Kalka–Shimla Toy Train",
          estimate: "₹1,200 – ₹2,500",
        },
        { item: "Hotel / Homestay (2 nights)", estimate: "₹2,400 – ₹5,500" },
        { item: "Meals & snacks", estimate: "₹1,400 – ₹2,500" },
        { item: "Local taxis & entry fees", estimate: "₹1,000 – ₹2,500" },
      ],
    },
    howToReach: {
      byAir:
        "Jubbarhatti Airport (22 km) operates select regional flights; Chandigarh Airport (115 km) has frequent pan-India routes.",
      byTrain:
        "Take Shatabdi or Kalka Mail to Kalka (KLK), then board the narrow-gauge Kalka–Shimla Toy Train.",
      byRoad:
        "NH5 links Chandigarh to Shimla in 3.5 to 4.5 hours via Parwanoo and Solan.",
    },
    travelTips: [
      "Reserve Kalka–Shimla Toy Train seats (Vistadome or Shivalik Deluxe) 30–60 days ahead on IRCTC.",
      "Private cars cannot drive onto Mall Road; use the Cart Road municipal lift to reach The Ridge.",
      "Wear grip-sole walking shoes for sloped cobblestone lanes.",
    ],
    faqs: [
      {
        question: "How many days are enough for Shimla?",
        answer:
          "Two to three full days comfortably cover Shimla Mall Road, The Ridge, Jakhoo Temple, Viceregal Lodge, and an excursion to Kufri or Mashobra.",
      },
      {
        question: "Is the Kalka–Shimla Toy Train worth it?",
        answer:
          "Yes. The 5-hour scenic climb across 102 tunnels and pine valleys is a UNESCO World Heritage rail experience loved by families.",
      },
      {
        question: "Which is better for senior citizens: Shimla or Manali?",
        answer:
          "Shimla is generally easier for senior citizens thanks to shorter highway drives from Chandigarh, lower altitude (2,200 m), and flat pedestrian Mall Road walks.",
      },
    ],
    relatedDestinationSlugs: ["manali", "darjeeling", "rishikesh"],
    relatedBlogSlugs: [
      "shimla-vs-manali-for-family-trip-in-summer",
      "top-10-places-to-visit-in-himachal-pradesh",
      "7-best-hill-stations-to-visit-in-summer",
    ],
    officialSource: {
      label: "Himachal Pradesh Tourism",
      url: "https://himachaltourism.gov.in/",
    },
    isPopular: true,
  },
  {
    slug: "jaipur",
    name: "Jaipur",
    state: "Rajasthan",
    region: "West India",
    category: "Heritage",
    budgetTier: "Budget",
    seoTitle: "Jaipur Travel Guide: Forts, Palaces & Food | Explore India",
    metaDescription:
      "Explore Jaipur's Amber Fort, Hawa Mahal, Jantar Mantar, 3-day itinerary, Rajasthani cuisine, composite ticket savings, and approximate trip budget.",
    targetKeyword: "Jaipur travel guide",
    updatedAt: "2026-11-24",
    idealDuration: "3 days",
    nearestAirport: "Jaipur International (JAI, 12 km)",
    nearestRailhead: "Jaipur Junction (JP)",
    geo: { lat: 26.9124, lng: 75.7873 },
    image: "/images/jaipur-pink-city-rajasthan.webp",
    imageAlt: "Terracotta pink sandstone facade of Hawa Mahal in Jaipur, Rajasthan",
    tagline:
      "The Pink City of sandstone forts, astronomical observatories, and vibrant craft bazaars.",
    quickAnswer:
      "Jaipur is best visited from October to March for cool fort climbs and heritage walks. A 3-day budget trip from Delhi costs roughly ₹5,500–₹12,500 per person via Vande Bharat or express trains, Jaipur Metro, and Rajasthan Tourism's discounted composite monument ticket.",
    overview: [
      "Founded in 1727 by Maharaja Sawai Jai Singh II, Jaipur is a UNESCO World Heritage walled city celebrated for its grid-planned streets, terracotta-pink facades, and monumental Aravalli hill forts.",
      "As a key pillar of India's Golden Triangle alongside [Agra](/destinations/agra) and Delhi, Jaipur pairs effortless highway and rail access with deep artisan culture—from block-printing workshops in Sanganer to sunset panoramas atop Nahargarh Fort. Combine it with [Udaipur](/destinations/udaipur) using our [Rajasthan family itinerary guide](/blog/best-places-to-visit-in-rajasthan).",
    ],
    bestTimeToVisit: {
      months: "October to March",
      summary:
        "Cool, dry winter days make fort climbs and Old City walking tours effortless.",
      seasons: [
        {
          label: "Winter",
          period: "October – March",
          note: "20°C–27°C sunny afternoons; ideal for Amber Fort, bazaars, and winter festivals.",
        },
        {
          label: "Summer",
          period: "April – June",
          note: "Hot midday weather (38°C+); start fort visits at 8:00 AM and explore indoor museums midday.",
        },
        {
          label: "Monsoon",
          period: "July – September",
          note: "Dramatic clouds over Maota Lake and Nahargarh ridge with lower hotel tariffs.",
        },
      ],
    },
    topAttractions: [
      {
        name: "Amber Fort (Amer)",
        description:
          "Hilltop Rajput fortress featuring the mirrored Sheesh Mahal and views over Maota Lake.",
        type: "UNESCO / Fort",
      },
      {
        name: "Hawa Mahal",
        description:
          "Iconic five-storey pink sandstone facade pierced by 953 jharokha lattice windows.",
        type: "Monument",
      },
      {
        name: "Jantar Mantar",
        description:
          "18th-century astronomical observatory housing the world's largest stone sundial.",
        type: "UNESCO",
      },
      {
        name: "City Palace & Albert Hall",
        description:
          "Royal courtyards, textile galleries, and Indo-Saracenic architecture in central Jaipur.",
        type: "Museum",
      },
      {
        name: "Nahargarh & Jaigarh Forts",
        description:
          "Ridge-top Aravalli forts offering sweeping sunset views across the Pink City skyline.",
        type: "Viewpoint",
      },
    ],
    thingsToDo: [
      "Take a sunrise heritage walk through the Old City's flower, bangle, and spice markets.",
      "Browse Johari Bazaar and Bapu Bazaar for block-printed textiles, lac bangles, and blue pottery.",
      "Visit Patrika Gate early morning and explore traditional hand-block printing in Sanganer.",
      "Watch the evening Sound & Light Show at Amber Fort or sunset from Nahargarh Fort.",
    ],
    suggestedItinerary: [
      {
        day: "Day 1",
        title: "Old City Core: Hawa Mahal, Jantar Mantar & City Palace",
        plan: "Morning photo stop and interior tour of Hawa Mahal, followed by Jantar Mantar, City Palace museum, and afternoon shopping in Johari and Tripolia Bazaars.",
      },
      {
        day: "Day 2",
        title: "Amber Fort, Panna Meena Ka Kund & Nahargarh Sunset",
        plan: "Enter Amber Fort at 8:00 AM opening, visit Panna Meena stepwell and Jal Mahal viewpoint, then climb to Jaigarh and Nahargarh Fort for sunset.",
      },
      {
        day: "Day 3",
        title: "Albert Hall Museum, Patrika Gate & Bapu Bazaar",
        plan: "Morning visit to Albert Hall Museum and Birla Mandir, explore local crafts or Sanganer workshops, and catch an evening train or expressway bus.",
      },
    ],
    localFood: [
      {
        dish: "Dal Baati Churma",
        description:
          "Baked wheat spheres dipped in ghee, served with spiced panchmel dal and sweet crumbled churma.",
      },
      {
        dish: "Pyaaz Kachori",
        description:
          "Flaky, crisp pastry filled with spiced caramelized onions—a classic Jaipur breakfast.",
      },
      {
        dish: "Ghevar & Lassi",
        description:
          "Honeycomb-textured festival sweet and thick earthen-kulhad lassi near MI Road.",
      },
    ],
    accommodationGuidance: {
      budget:
        "Clean hostels and heritage haveli guesthouses in Bani Park, Hathroi, and MI Road.",
      midRange:
        "Restored boutique havelis and family hotels near C-Scheme, Civil Lines, and Amer Road.",
      tip: "Purchase the 2-day Composite Ticket to save significantly across Amber, Nahargarh, Hawa Mahal, Jantar Mantar, and Albert Hall.",
    },
    estimatedBudget: {
      rangeInr: "₹5,500 – ₹12,500 per person",
      duration: "3 days (approximate estimate)",
      note: "Approximate costs excluding luxury heritage palace hotels.",
      breakdown: [
        {
          item: "Train/Bus from Delhi (round trip)",
          estimate: "₹800 – ₹2,000",
        },
        {
          item: "Hostel or 3-star hotel (2 nights)",
          estimate: "₹2,000 – ₹5,000",
        },
        { item: "Food & street snacks", estimate: "₹1,200 – ₹2,500" },
        {
          item: "Composite monument ticket & metro/autos",
          estimate: "₹1,500 – ₹3,000",
        },
      ],
    },
    howToReach: {
      byAir:
        "Jaipur International Airport (JAI) in Sanganer connects directly to major Indian hubs.",
      byTrain:
        "Jaipur Junction is served by Vande Bharat, Double Decker, Shatabdi, and express trains from Delhi, Mumbai, and Agra.",
      byRoad:
        "Roughly 4.5–5 hours from Delhi via the Delhi–Mumbai Expressway (NE4) / NH48.",
    },
    travelTips: [
      "Use Jaipur Metro (Pink Line) to bypass Old City traffic around Badi Chaupar and Chandpole.",
      "Carry a reusable water bottle, hat, and sunscreen when climbing Amber and Jaigarh forts.",
      "Buy tickets strictly from official Rajasthan Tourism counters or online portals to avoid touts.",
    ],
    faqs: [
      {
        question: "How many days do you need in Jaipur?",
        answer:
          "Three full days allow you to cover Amber Fort, Jaigarh, Nahargarh, City Palace, Hawa Mahal, Jantar Mantar, and Old City bazaars without rushing.",
      },
      {
        question: "Is the Jaipur Composite Ticket worth buying?",
        answer:
          "Yes. One composite pass covers Amber Fort, Nahargarh Fort, Hawa Mahal, Jantar Mantar, Albert Hall Museum, Sisodia Rani Bagh, and Vidyadhar Bagh over two days.",
      },
      {
        question: "Is Jaipur safe for solo and family travellers?",
        answer:
          "Yes, Jaipur is well-policed and accustomed to tourists; use app-based cabs or Jaipur Metro at night and avoid unverified street guides.",
      },
    ],
    relatedDestinationSlugs: ["udaipur", "agra", "varanasi"],
    relatedBlogSlugs: [
      "best-places-to-visit-in-rajasthan",
      "top-weekend-getaways-from-delhi",
      "best-budget-friendly-trips-in-india",
    ],
    officialSource: {
      label: "Rajasthan Tourism",
      url: "https://www.tourism.rajasthan.gov.in/",
    },
    isPopular: true,
    isBudgetFriendly: true,
  },
  {
    slug: "udaipur",
    name: "Udaipur",
    state: "Rajasthan",
    region: "West India",
    category: "Heritage",
    budgetTier: "Mid-Range",
    seoTitle: "Udaipur Travel Guide: Lakes, Palaces & Food | Explore India",
    metaDescription:
      "Plan your Udaipur trip with City Palace, Lake Pichola boat rides, Monsoon Palace, 3-day itinerary, Mewari cuisine, and budget estimates.",
    targetKeyword: "Udaipur travel guide",
    updatedAt: "2026-11-24",
    idealDuration: "3 days",
    nearestAirport: "Maharana Pratap Airport (UDR, 22 km)",
    nearestRailhead: "Udaipur City (UDZ)",
    geo: { lat: 24.5854, lng: 73.7125 },
    image: "/images/udaipur-lake-pichola-rajasthan.webp",
    imageAlt:
      "Lake Pichola and white marble palace glowing at dusk in Udaipur, Rajasthan",
    tagline:
      "The City of Lakes, framed by the Aravalli hills and Mewar's lakeside palaces.",
    quickAnswer:
      "Udaipur is best visited from September to March when post-monsoon lakes are brimming and winter days stay mild. A 3-day mid-range trip costs approximately ₹7,000–₹16,000 per person covering City Palace, Lake Pichola boat rides, Ambrai Ghat, and Bagore Ki Haveli.",
    overview: [
      "Founded by Maharana Udai Singh II in 1559, Udaipur stands apart from Rajasthan's desert cities with its interconnected lakes, green Aravalli hills, and quiet lakeside ghats.",
      "Whether watching sunset reflections from Ambrai Ghat, touring the sprawling City Palace museum complex, or cycling beside Fateh Sagar Lake, Udaipur offers a relaxed heritage rhythm. Pair it seamlessly with [Jaipur](/destinations/jaipur) in our [Rajasthan multi-city travel guide](/blog/best-places-to-visit-in-rajasthan).",
    ],
    bestTimeToVisit: {
      months: "September to March",
      summary:
        "Post-monsoon lakes are full and winter days are sunny and pleasant for walking.",
      seasons: [
        {
          label: "Post-Monsoon & Winter",
          period: "September – March",
          note: "Full lakes, mild 18°C–28°C days, and comfortable rooftop dining.",
        },
        {
          label: "Summer",
          period: "April – June",
          note: "Warm afternoons; lakeside mornings and evening boat rides remain enjoyable.",
        },
        {
          label: "Monsoon",
          period: "July – August",
          note: "Emerald Aravalli ridges and dramatic clouds over Sajjangarh Monsoon Palace.",
        },
      ],
    },
    topAttractions: [
      {
        name: "City Palace",
        description:
          "Grand lakeside palace complex housing Mewar museums, crystal galleries, and mor chowk mosaics.",
        type: "Heritage",
      },
      {
        name: "Lake Pichola & Jag Mandir",
        description:
          "Historic 14th-century lake offering scenic boat rides past Lake Palace and Jag Mandir island.",
        type: "Lake",
      },
      {
        name: "Sajjangarh (Monsoon Palace)",
        description:
          "Hilltop Aravalli palace delivering panoramic sunset views across Udaipur's lakes.",
        type: "Viewpoint",
      },
      {
        name: "Bagore Ki Haveli",
        description:
          "18th-century waterfront mansion hosting nightly Dharohar folk music and dance shows.",
        type: "Culture",
      },
      {
        name: "Fateh Sagar Lake & Saheliyon Ki Bari",
        description:
          "Scenic lakeside promenade and 18th-century royal garden of marble fountains.",
        type: "Nature",
      },
    ],
    thingsToDo: [
      "Take a late-afternoon boat ride on Lake Pichola from Rameshwar Ghat.",
      "Walk across the footbridge from Gangaur Ghat to Ambrai Ghat for twilight views.",
      "Attend the evening Dharohar folk dance performance at Bagore Ki Haveli.",
      "Cycle or take the Karni Mata ropeway for a bird's-eye view of the Old City.",
    ],
    suggestedItinerary: [
      {
        day: "Day 1",
        title: "City Palace, Jagdish Temple & Bagore Ki Haveli",
        plan: "Morning tour of City Palace and Jagdish Temple, afternoon boat ride on Lake Pichola, and evening Dharohar folk show at Bagore Ki Haveli.",
      },
      {
        day: "Day 2",
        title: "Saheliyon Ki Bari, Fateh Sagar & Monsoon Palace",
        plan: "Visit Saheliyon Ki Bari gardens, stroll or cycle around Fateh Sagar Lake, and climb up to Sajjangarh (Monsoon Palace) before sunset.",
      },
      {
        day: "Day 3",
        title: "Bahubali Hills / Badi Lake & Old City Cafes",
        plan: "Sunrise viewpoint hike at Bahubali Hills overlooking Badi Lake, browse miniature art in Hathi Pol, and relax at Ambrai Ghat before departure.",
      },
    ],
    localFood: [
      {
        dish: "Dal Baati & Gatte ki Sabzi",
        description:
          "Classic Mewari comfort dishes served alongside ker sangri in traditional thalis.",
      },
      {
        dish: "Mirchi Bada & Kadhi Kachori",
        description:
          "Popular crisp street snacks found near Fateh Sagar promenade and Old City corners.",
      },
      {
        dish: "Mawa Kachori",
        description:
          "Rich, syrup-soaked sweet pastry filled with caramelized khoya and dry fruits.",
      },
    ],
    accommodationGuidance: {
      budget:
        "Backpacker hostels and lakeside guesthouses around Lal Ghat and Gangaur Ghat.",
      midRange:
        "Boutique heritage havelis overlooking Lake Pichola or quiet hotels near Fateh Sagar.",
      tip: "Old City streets have vehicle restrictions—confirm car drop-off access or use auto-rickshaws.",
    },
    estimatedBudget: {
      rangeInr: "₹7,000 – ₹16,000 per person",
      duration: "3 days (approximate estimate)",
      note: "Approximate costs for mid-range travellers; luxury lake palaces cost extra.",
      breakdown: [
        {
          item: "Overnight train/bus from Jaipur or Delhi",
          estimate: "₹1,200 – ₹2,800",
        },
        {
          item: "Haveli guesthouse / hotel (2 nights)",
          estimate: "₹2,800 – ₹7,000",
        },
        { item: "Meals & lakeside cafes", estimate: "₹1,500 – ₹3,200" },
        { item: "Boat ride, entries & autos", estimate: "₹1,500 – ₹3,000" },
      ],
    },
    howToReach: {
      byAir:
        "Maharana Pratap Airport (UDR) in Dabok lies 22 km east with flights to Delhi, Mumbai, and Bengaluru.",
      byTrain:
        "Udaipur City Railway Station connects via overnight trains and Vande Bharat to Jaipur, Delhi, and Ahmedabad.",
      byRoad:
        "Accessible via NH48 and NH27; roughly 6–7 hours by road from Jaipur or Jodhpur.",
    },
    travelTips: [
      "Arrive 30 minutes early for Bagore Ki Haveli's evening cultural show to secure front seating.",
      "Explore Lal Ghat and Chandpole on foot or e-rickshaw to avoid narrow-lane traffic jams.",
      "Add Kumbhalgarh Fort (2 hours away) if you have an extra half-day.",
    ],
    faqs: [
      {
        question: "Which is better to visit first: Jaipur or Udaipur?",
        answer:
          "Jaipur offers grand hill forts and bustling markets, while Udaipur delivers scenic lakes and slower heritage charm; many travellers combine both over 6 days.",
      },
      {
        question: "How many days are enough for Udaipur?",
        answer:
          "Two to three days cover City Palace, Lake Pichola, Bagore Ki Haveli, Fateh Sagar, and Monsoon Palace comfortably.",
      },
      {
        question: "What is the best area to stay in Udaipur?",
        answer:
          "Lal Ghat and Chandpole put you within walking distance of the ghats and City Palace, while Fateh Sagar suits travellers preferring quieter, modern streets.",
      },
    ],
    relatedDestinationSlugs: ["jaipur", "agra", "goa"],
    relatedBlogSlugs: [
      "best-places-to-visit-in-rajasthan",
      "best-budget-friendly-trips-in-india",
    ],
    officialSource: {
      label: "Rajasthan Tourism",
      url: "https://www.tourism.rajasthan.gov.in/",
    },
    isPopular: true,
    isTrending: true,
  },
  {
    slug: "goa",
    name: "Goa",
    state: "Goa",
    region: "West India",
    category: "Beaches",
    budgetTier: "Budget",
    seoTitle: "Goa Travel Guide: Beaches, Forts & Budget | Explore India",
    metaDescription:
      "Complete Goa travel guide with North vs South Goa beaches, Old Goa heritage, 4-day itinerary, train routes, Goan food, and trip budget estimates.",
    targetKeyword: "Goa travel guide",
    updatedAt: "2026-11-24",
    idealDuration: "4 to 5 days",
    nearestAirport: "Dabolim (GOI) & Manohar Int'l Mopa (GOX)",
    nearestRailhead: "Madgaon (MAO) & Thivim (THVM)",
    geo: { lat: 15.2993, lng: 74.124 },
    image: "/images/goa-beaches-coastline-india.webp",
    imageAlt: "Golden sand beach and coconut palms along the Goa coastline at sunset",
    tagline:
      "Sun-drenched Konkan coastline blending calm southern coves, lively northern beaches, and Indo-Portuguese heritage.",
    quickAnswer:
      "Goa is best visited from November to February for calm seas and beach weather, or October and March for lower hotel rates. A 4-day budget trip costs around ₹8,000–₹18,000 per person when travelling by train to Madgaon or Thivim and staying in hostels.",
    overview: [
      "India's smallest coastal state packs extraordinary variety into a 100-kilometre Arabian Sea shoreline. North Goa buzzes with sunset fort viewpoints, flea markets, and hostels around Anjuna, Vagator, and Assagao, while South Goa offers tranquil palm-fringed crescents at Palolem, Agonda, and Benaulim.",
      "Beyond the beaches, Old Goa's UNESCO-listed baroque churches, Panaji's pastel Fontainhas quarter, and spice plantations in Ponda reveal Goa's rich heritage. Compare both coasts in our [North vs South Goa first-timer guide](/blog/goa-travel-guide-for-first-time-visitors) and [student budget travel guide](/blog/best-budget-friendly-trips-in-india).",
    ],
    bestTimeToVisit: {
      months: "November to February",
      summary:
        "Dry, breezy coastal weather with calm seas and active beach shacks.",
      seasons: [
        {
          label: "Peak Winter",
          period: "November – February",
          note: "Ideal 24°C–32°C beach weather; book early for late-December holiday weeks.",
        },
        {
          label: "Shoulder",
          period: "March – May & October",
          note: "Warm afternoons with quieter sands and 30–40% lower accommodation prices.",
        },
        {
          label: "Monsoon",
          period: "June – September",
          note: "Emerald spice hills and Dudhsagar Falls; sea swimming is closed due to surf.",
        },
      ],
    },
    topAttractions: [
      {
        name: "Palolem & Agonda Beaches",
        description:
          "Crescent-shaped South Goa bays prized for clean sands, kayaking, and peaceful evenings.",
        type: "Beach",
      },
      {
        name: "Basilica of Bom Jesus (Old Goa)",
        description:
          "UNESCO World Heritage baroque church built in 1605 alongside Se Cathedral.",
        type: "UNESCO / Heritage",
      },
      {
        name: "Fort Aguada & Chapora Fort",
        description:
          "17th-century laterite coastal forts overlooking the Mandovi mouth and Vagator.",
        type: "Fort",
      },
      {
        name: "Fontainhas, Panaji",
        description:
          "Goa's historic Latin Quarter of ochre-and-indigo colonial homes and heritage bakeries.",
        type: "Culture",
      },
      {
        name: "Divar Island & Ponda Spice Farms",
        description:
          "Quiet ferry-linked river island and lush spice estates away from beach crowds.",
        type: "Nature",
      },
    ],
    thingsToDo: [
      "Take an early morning heritage walk through Fontainhas and Old Goa's churches.",
      "Kayak at sunrise in Palolem or through calm mangrove backwaters along the Sal River.",
      "Watch sunset from Chapora Fort or Cabo de Rama in South Goa.",
      "Catch the Mandovi ferry across to Divar Island for slow village cycling.",
    ],
    suggestedItinerary: [
      {
        day: "Day 1",
        title: "North Goa Forts & Sunset Beaches",
        plan: "Arrive at Thivim or Mopa, settle around Anjuna/Assagao, visit Fort Aguada lighthouse, and catch sunset at Vagator or Chapora Fort.",
      },
      {
        day: "Day 2",
        title: "Old Goa UNESCO Churches & Fontainhas",
        plan: "Morning visit to Basilica of Bom Jesus and Se Cathedral, lunch in Panaji, afternoon walk through Fontainhas, and evening river ferry to Divar Island.",
      },
      {
        day: "Day 3",
        title: "South Goa: Cabo de Rama & Agonda",
        plan: "Head south to quieter beaches; explore clifftop Cabo de Rama Fort and relax at Agonda Beach.",
      },
      {
        day: "Day 4",
        title: "Palolem Kayaking & Departure",
        plan: "Early morning sea kayaking at Palolem Bay, local fish-curry lunch, and board an evening train from Madgaon or flight from Dabolim.",
      },
    ],
    localFood: [
      {
        dish: "Goan Fish Curry & Rice",
        description:
          "Tangy coconut, kokum, and Kashmiri chilli curry served over red parboiled rice.",
      },
      {
        dish: "Prawn Balchao & Xacuti",
        description:
          "Aromatic coastal dishes balancing roasted spices, coconut, and toddy vinegar.",
      },
      {
        dish: "Bebinca & Poi",
        description:
          "Traditional layered coconut-milk pudding alongside warm local Goan poi bread.",
      },
    ],
    accommodationGuidance: {
      budget:
        "Social hostels and guesthouses in Anjuna, Vagator, and Palolem offer strong student value.",
      midRange:
        "Boutique villas and family cottages in Assagao, Candolim, Benaulim, and Colva.",
      tip: "Avoid last-minute bookings between 20 December and 5 January when coastal tariffs triple.",
    },
    estimatedBudget: {
      rangeInr: "₹8,000 – ₹18,000 per person",
      duration: "4 days (approximate estimate)",
      note: "Estimated excluding peak New Year week; Konkan Railway trains lower costs significantly.",
      breakdown: [
        {
          item: "Train (Sleeper/3AC) or early-bird flight",
          estimate: "₹2,000 – ₹7,500",
        },
        { item: "Hostel / guesthouse (3 nights)", estimate: "₹2,400 – ₹5,500" },
        { item: "Meals & local bakeries", estimate: "₹2,000 – ₹3,500" },
        {
          item: "Two-wheeler rental / Kadamba buses & fuel",
          estimate: "₹1,600 – ₹2,500",
        },
      ],
    },
    howToReach: {
      byAir:
        "Dabolim Airport (GOI) serves central/South Goa; Manohar International Airport (GOX, Mopa) serves North Goa.",
      byTrain:
        "Madgaon (MAO) for South Goa and Thivim (THVM) for North Goa along the scenic Konkan Railway.",
      byRoad:
        "Overnight sleeper buses connect Mumbai, Pune, and Bengaluru via NH66 and NH48.",
    },
    travelTips: [
      "Always wear a helmet and carry an original driving licence when renting a two-wheeler.",
      "Swim strictly within lifeguarded zones and respect red warning flags during swells.",
      "Use the official GoaMiles app or Kadamba AC shuttle buses from airports to control transfer fares.",
    ],
    faqs: [
      {
        question: "Should I choose North Goa or South Goa?",
        answer:
          "Pick North Goa for forts, cafes, flea markets, and hostels; choose South Goa for cleaner, quieter crescent beaches and family relaxation.",
      },
      {
        question: "How can I do a budget trip to Goa from Delhi?",
        answer:
          "Book 3AC trains like Goa Sampark Kranti to Madgaon or Thivim, travel in October or February–March, and base yourself in Anjuna or Palolem hostels.",
      },
      {
        question: "Which Goa airport is closer to North Goa beaches?",
        answer:
          "Manohar International Airport (GOX) at Mopa is closer to Vagator, Anjuna, and Calangute, while Dabolim (GOI) is closer to Panaji and South Goa.",
      },
    ],
    relatedDestinationSlugs: ["kerala", "andaman-and-nicobar-islands", "udaipur"],
    relatedBlogSlugs: [
      "goa-travel-guide-for-first-time-visitors",
      "best-budget-friendly-trips-in-india",
    ],
    officialSource: { label: "Goa Tourism", url: "https://goatourism.gov.in/" },
    isPopular: true,
    isTrending: true,
    isBudgetFriendly: true,
  },
  {
    slug: "kerala",
    name: "Kerala",
    state: "Kerala",
    region: "South India",
    category: "Nature",
    budgetTier: "Mid-Range",
    seoTitle: "Kerala Travel Guide: Backwaters & Munnar | Explore India",
    metaDescription:
      "Plan a Kerala trip covering Alleppey backwaters, Munnar tea estates, Fort Kochi, 5-day itinerary, Sadya food, best months, and budget breakdown.",
    targetKeyword: "Kerala travel guide",
    updatedAt: "2026-11-24",
    idealDuration: "5 to 6 days",
    nearestAirport: "Cochin Int'l (COK) / Trivandrum (TRV)",
    nearestRailhead: "Ernakulam (ERS) & Alappuzha (ALLP)",
    geo: { lat: 9.4981, lng: 76.3388 },
    image: "/images/kerala-backwaters-alleppey-india.webp",
    imageAlt:
      "Traditional wooden houseboat gliding on palm-fringed Kerala backwaters in Alleppey",
    tagline:
      "Emerald backwaters, misty Western Ghats tea estates, and spice-scented coastal towns.",
    quickAnswer:
      "Kerala is best visited between October and March, with December offering crisp hills in Munnar and sunny backwaters in Alleppey. A classic 5-day Kochi–Munnar–Alleppey circuit costs roughly ₹10,000–₹22,000 per person using KSRTC buses, homestays, and morning shikara rides.",
    overview: [
      "Known as God's Own Country, Kerala compresses three distinct ecosystems into a lush southern belt: cloud-kissed tea hills in Munnar and Wayanad, tranquil palm-lined canals in Alleppey and Kumarakom, and spice-trading ports in Fort Kochi.",
      "Dense KSRTC bus and coastal rail links let families and backpackers connect hills, wildlife reserves, and lagoons in a single week. Explore a month-by-month breakdown in our [December Kerala places guide](/blog/best-places-to-visit-in-kerala) or compare Munnar with [India's top summer hill stations](/blog/7-best-hill-stations-to-visit-in-summer).",
    ],
    bestTimeToVisit: {
      months: "October to March",
      summary:
        "Dry tropical weather ideal for backwater cruising, tea hill walks, and wildlife sightings.",
      seasons: [
        {
          label: "Winter",
          period: "December – February",
          note: "Peak dry season with clear coastal evenings and cool 10°C–20°C mornings in Munnar.",
        },
        {
          label: "Monsoon",
          period: "June – September",
          note: "Lush greenery, waterfalls, and Ayurveda wellness season with lower tariffs.",
        },
        {
          label: "Summer",
          period: "March – May",
          note: "Humid along beaches, yet refreshing in high-altitude Munnar and Wayanad.",
        },
      ],
    },
    topAttractions: [
      {
        name: "Alleppey (Alappuzha) Backwaters",
        description:
          "Interconnected lagoons and paddy canals best explored via sunrise shikara boats or houseboats.",
        type: "Backwaters",
      },
      {
        name: "Munnar Tea Estates",
        description:
          "Rolling Western Ghats plantations, Eravikulam National Park, and Tata Tea Museum.",
        type: "Hill Station",
      },
      {
        name: "Fort Kochi",
        description:
          "Historic maritime neighbourhood famous for Chinese fishing nets, spice lanes, and art cafes.",
        type: "Heritage",
      },
      {
        name: "Thekkady & Periyar",
        description:
          "Protected elephant and bird reserve nestled amidst Cardamom Hills spice estates.",
        type: "Wildlife",
      },
      {
        name: "Varkala Cliff",
        description:
          "Dramatic red laterite sea cliffs overlooking clean Arabian Sea surf north of Trivandrum.",
        type: "Beach",
      },
    ],
    thingsToDo: [
      "Take a 3-hour sunrise shikara canoe ride through narrow village canals in Kuttanad.",
      "Walk Fort Kochi's Jew Town and watch an evening Kathakali dance recital.",
      "Spot endangered Nilgiri tahr at Eravikulam National Park near Munnar.",
      "Tour an organic cardamom and pepper garden in Thekkady.",
    ],
    suggestedItinerary: [
      {
        day: "Day 1",
        title: "Fort Kochi Heritage & Kathakali",
        plan: "Arrive at Kochi, explore Chinese fishing nets, Mattancherry Palace, Jew Town spice market, and an evening Kathakali performance.",
      },
      {
        day: "Day 2",
        title: "Drive to Munnar & Tea Museum",
        plan: "Scenic 4-hour climb past Cheeyappara Waterfalls to Munnar; visit the Tea Museum and Pothamedu Viewpoint.",
      },
      {
        day: "Day 3",
        title: "Eravikulam National Park & Mattupetty",
        plan: "Early morning slot at Eravikulam National Park, Echo Point, and sunset walk through Lockhart or Kolukkumalai tea slopes.",
      },
      {
        day: "Day 4",
        title: "Alleppey Backwaters & Village Canals",
        plan: "Descend to Alappuzha for a sunset backwater cruise or lakeside homestay along Punnamada Lake.",
      },
      {
        day: "Day 5",
        title: "Sunrise Shikara Ride & Return",
        plan: "Quiet dawn shikara canoe through narrow Kuttanad canals, traditional Kerala breakfast, and depart via Alappuzha/Ernakulam station or COK airport.",
      },
    ],
    localFood: [
      {
        dish: "Kerala Sadya",
        description:
          "Festive vegetarian meal served on a banana leaf with sambar, avial, thoran, and payasam.",
      },
      {
        dish: "Appam & Stew",
        description:
          "Lacy fermented rice hoppers paired with fragrant coconut-milk vegetable or chicken stew.",
      },
      {
        dish: "Karimeen Pollichathu",
        description:
          "Backwater pearl-spot fish marinated in shallots and spices, slow-roasted in banana leaf.",
      },
    ],
    accommodationGuidance: {
      budget:
        "Family-run homestays in Fort Kochi and Alleppey offer warm hospitality and home breakfasts.",
      midRange:
        "Tea-estate bungalows in Munnar and lakeside resorts in Kumarakom or Marari.",
      tip: "State-run KTDC hotels and KSRTC super-fast buses provide reliable value across the circuit.",
    },
    estimatedBudget: {
      rangeInr: "₹10,000 – ₹22,000 per person",
      duration: "5 days (approximate estimate)",
      note: "Approximate costs for Kochi–Munnar–Alleppey excluding flights.",
      breakdown: [
        {
          item: "Intercity KSRTC buses / coastal trains",
          estimate: "₹1,500 – ₹3,500",
        },
        {
          item: "Homestays / mid-range hotels (4 nights)",
          estimate: "₹4,500 – ₹10,000",
        },
        {
          item: "Shikara boat / shared houseboat",
          estimate: "₹1,500 – ₹4,500",
        },
        {
          item: "Meals & national park entries",
          estimate: "₹2,500 – ₹4,000",
        },
      ],
    },
    howToReach: {
      byAir:
        "Cochin International (COK) sits centrally for Kochi–Munnar–Alleppey; Trivandrum (TRV) serves Varkala and Kovalam.",
      byTrain:
        "Ernakulam Junction (ERS) and Alappuzha (ALLP) connect along India's west coast and southern corridors.",
      byRoad:
        "Well-surfaced highways and frequent KSRTC buses link Kochi, Munnar, Thekkady, and Alleppey.",
    },
    travelTips: [
      "Solo and budget travellers get richer village scenery on a 3-hour morning shikara than a big motor houseboat.",
      "Pack light cottons for Fort Kochi/Alleppey and a warm fleece for chilly Munnar nights.",
      "Pre-book Eravikulam National Park entry slots online during December weekends.",
    ],
    faqs: [
      {
        question: "How many days are ideal for a first Kerala trip?",
        answer:
          "Five to seven days comfortably cover Fort Kochi, Munnar tea hills, Thekkady wildlife, and Alleppey backwaters.",
      },
      {
        question: "Is a shikara ride better than an overnight houseboat in Alleppey?",
        answer:
          "Overnight houseboats suit families seeking private relaxation on wide lagoons, while smaller shikara boats enter narrow palm-lined village canals at a fraction of the cost.",
      },
      {
        question: "What is the best airport for Munnar and Alleppey?",
        answer:
          "Cochin International Airport (COK) is the closest major hub, roughly 110 km from Munnar and 85 km from Alleppey.",
      },
    ],
    relatedDestinationSlugs: ["andaman-and-nicobar-islands", "goa", "darjeeling"],
    relatedBlogSlugs: [
      "best-places-to-visit-in-kerala",
      "7-best-hill-stations-to-visit-in-summer",
      "best-budget-friendly-trips-in-india",
    ],
    officialSource: {
      label: "Kerala Tourism",
      url: "https://www.keralatourism.org/",
    },
    isPopular: true,
    isTrending: true,
  },
  {
    slug: "rishikesh",
    name: "Rishikesh",
    state: "Uttarakhand",
    region: "North India",
    category: "Adventure",
    budgetTier: "Budget",
    seoTitle: "Rishikesh Travel Guide: Rafting & Ashrams | Explore India",
    metaDescription:
      "Plan a Rishikesh trip with Ganga white-water rafting seasons, Triveni Ghat Ganga Aarti, 2-day itinerary, Tapovan hostels, and budget tips.",
    targetKeyword: "Rishikesh travel guide",
    updatedAt: "2026-11-24",
    idealDuration: "2 to 3 days",
    nearestAirport: "Jolly Grant, Dehradun (DED, 20 km)",
    nearestRailhead: "Haridwar (HW, 25 km) & Yog Nagari Rishikesh",
    geo: { lat: 30.0869, lng: 78.2676 },
    image: "/images/rishikesh-ganga-uttarakhand.webp",
    imageAlt:
      "Emerald Ganga river flowing through forested Himalayan foothills in Rishikesh",
    tagline:
      "Where Himalayan white-water rafting meets peaceful riverside ashrams and evening Ganga Aarti.",
    quickAnswer:
      "Rishikesh is best visited from September to November and February to May when Ganga rafting stretches are open. Just 5–6 hours from Delhi, a 2-to-3-day weekend trip costs approximately ₹4,000–₹9,000 per person including hostels, Shivpuri rafting, and Ganga Aarti.",
    overview: [
      "Positioned where the emerald Ganga leaves the Garhwal Shivalik foothills, Rishikesh balances two personalities effortlessly: energetic mornings rafting rapids from Shivpuri and tranquil evenings at Triveni Ghat or Parmarth Niketan.",
      "Roughly 240 km from Delhi, it ranks among India's top student and weekend escapes. Dive deeper into safety rules and rapid grades in our [Rishikesh rafting and spiritual guide](/blog/rishikesh-travel-guide-adventure-spiritual-tourism) or browse our [Delhi weekend getaways guide](/blog/top-weekend-getaways-from-delhi).",
    ],
    bestTimeToVisit: {
      months: "September to November & February to May",
      summary:
        "Clear turquoise river flow for rafting and mild weather for forest treks and yoga.",
      seasons: [
        {
          label: "Post-Monsoon & Spring",
          period: "Sep – Nov & Feb – May",
          note: "Prime months for Grade II–III white-water rafting, camping, and cafe hopping.",
        },
        {
          label: "Winter",
          period: "December – January",
          note: "Crisp 6°C–18°C days; calm mist along ghats ideal for yoga retreats (cold river water).",
        },
        {
          label: "Monsoon",
          period: "July – August",
          note: "River rafting closes officially for safety due to swollen Himalayan currents.",
        },
      ],
    },
    topAttractions: [
      {
        name: "Triveni Ghat & Parmarth Niketan",
        description:
          "Sacred riverfront ghats hosting serene sunset Ganga Aarti with lamps and bhajans.",
        type: "Spiritual",
      },
      {
        name: "Ram Jhula & Janki Setu",
        description:
          "Iconic pedestrian suspension bridges linking busy markets with quiet Swarg Ashram.",
        type: "Landmark",
      },
      {
        name: "Beatles Ashram (Chaurasi Kutia)",
        description:
          "Forested meditation domes and mural art nestled inside Rajaji Tiger Reserve.",
        type: "Heritage",
      },
      {
        name: "Neer Garh & Patna Waterfalls",
        description:
          "Clear multi-tiered forest cascades reached via short uphill trails above Tapovan.",
        type: "Nature",
      },
    ],
    thingsToDo: [
      "Experience guided white-water rafting from Brahmapuri (9 km) or Shivpuri (16 km).",
      "Attend the sunset Ganga Aarti at Parmarth Niketan or Triveni Ghat.",
      "Drive or hike to Kunjapuri Devi Temple for sunrise over snow-capped Garhwal peaks.",
      "Walk across Janki Setu to Swarg Ashram bookshops and riverside stone beaches.",
    ],
    suggestedItinerary: [
      {
        day: "Day 1",
        title: "Tapovan Cafes, Beatles Ashram & Parmarth Aarti",
        plan: "Arrive via Haridwar, check into Tapovan or Swarg Ashram, explore Beatles Ashram in the afternoon, and attend sunset Ganga Aarti at Parmarth Niketan.",
      },
      {
        day: "Day 2",
        title: "Shivpuri White-Water Rafting & Neer Garh Waterfall",
        plan: "Morning 16 km rafting run from Shivpuri to NIM Beach, afternoon hike to Neer Garh Waterfall, and evening café walk along the Ganga.",
      },
      {
        day: "Day 3",
        title: "Kunjapuri Sunrise & Triveni Ghat",
        plan: "Optional 5:00 AM Kunjapuri Temple sunrise trip, lakeside breakfast, visit Triveni Ghat market, and take the afternoon train or bus back.",
      },
    ],
    localFood: [
      {
        dish: "Aloo Puri & Chotiwala Thali",
        description:
          "Wholesome, pure-vegetarian northern meals served near Ram Jhula and Triveni Ghat.",
      },
      {
        dish: "Garhwali Thali",
        description:
          "Regional mountain meal featuring black-soybean bhatt ki churkani, kafuli, and mandua roti.",
      },
      {
        dish: "Tapovan Cafe Bowls",
        description:
          "Fresh smoothie bowls, wood-fired flatbreads, and herbal teas overlooking the river.",
      },
    ],
    accommodationGuidance: {
      budget:
        "Social hostels and yoga guesthouses in Tapovan and Upper Tapovan suit students and solo visitors.",
      midRange:
        "Quiet eco-lodges near Shivpuri and clean river-facing stays in Swarg Ashram.",
      tip: "Rishikesh is a strictly vegetarian and alcohol-free municipal town; respect local ashram norms.",
    },
    estimatedBudget: {
      rangeInr: "₹4,000 – ₹9,000 per person",
      duration: "2 to 3 days (approximate estimate)",
      note: "One of India's highest-value weekend trips from Delhi-NCR.",
      breakdown: [
        {
          item: "Train to Haridwar / Bus to Rishikesh",
          estimate: "₹600 – ₹1,500",
        },
        {
          item: "Hostel / guesthouse (2 nights)",
          estimate: "₹1,200 – ₹3,500",
        },
        { item: "Meals & riverside cafes", estimate: "₹1,000 – ₹2,000" },
        { item: "Rafting & shared Vikram autos", estimate: "₹1,200 – ₹2,000" },
      ],
    },
    howToReach: {
      byAir:
        "Jolly Grant Airport, Dehradun (DED) is only 20 km away (~35 minutes by taxi).",
      byTrain:
        "Haridwar Junction (25 km) has frequent Shatabdi, Vande Bharat, and Jan Shatabdi trains from Delhi; Yog Nagari Rishikesh also handles direct trains.",
      byRoad:
        "Around 5–6 hours from Delhi via NH334 through Meerut, Roorkee, and Haridwar.",
    },
    travelTips: [
      "Book rafting only with Uttarakhand Tourism-registered operators providing fitted helmets and lifejackets.",
      "Use Janki Setu or Ram Jhula to cross the river while Bajrang Setu/Laxman Jhula works continue.",
      "Avoid weekend highway bottlenecks by taking early morning trains to Haridwar.",
    ],
    faqs: [
      {
        question: "When is river rafting closed in Rishikesh?",
        answer:
          "River rafting typically closes during July and August (monsoon) due to high river currents and reopens around mid-September.",
      },
      {
        question: "Is Rishikesh suitable for a 2-day weekend trip from Delhi?",
        answer:
          "Yes. Overnight buses from ISBT or morning trains to Haridwar let you comfortably fit rafting, Ganga Aarti, and Tapovan into two days.",
      },
      {
        question: "Which rafting stretch is best for first-timers?",
        answer:
          "The 9 km Brahmapuri to NIM Beach stretch has gentle Grade I–II rapids ideal for beginners, while Shivpuri (16 km) adds thrilling Grade III rapids.",
      },
    ],
    relatedDestinationSlugs: ["varanasi", "manali", "shimla"],
    relatedBlogSlugs: [
      "rishikesh-travel-guide-adventure-spiritual-tourism",
      "top-weekend-getaways-from-delhi",
      "best-budget-friendly-trips-in-india",
    ],
    officialSource: {
      label: "Uttarakhand Tourism",
      url: "https://uttarakhandtourism.gov.in/",
    },
    isPopular: true,
    isTrending: true,
    isBudgetFriendly: true,
  },
  {
    slug: "varanasi",
    name: "Varanasi",
    state: "Uttar Pradesh",
    region: "North India",
    category: "Spiritual",
    budgetTier: "Budget",
    seoTitle: "Varanasi Travel Guide: Ghats & Sarnath Tips | Explore India",
    metaDescription:
      "Discover Varanasi's river ghats, sunrise boat rides, Dashashwamedh Ganga Aarti, Sarnath Buddhist heritage, street food, and 3-day budget tips.",
    targetKeyword: "Varanasi travel guide",
    updatedAt: "2026-11-24",
    idealDuration: "2 to 3 days",
    nearestAirport: "Lal Bahadur Shastri Int'l (VNS, 26 km)",
    nearestRailhead: "Varanasi Jn (BSB) & Banaras (BSBS)",
    geo: { lat: 25.3176, lng: 82.9739 },
    image: "/images/varanasi-ghats-ganga-india.webp",
    imageAlt:
      "Golden sunrise and glowing lamps along the ancient riverfront ghats of Varanasi",
    tagline:
      "One of the world's oldest living cities curved along the sacred crescent of the Ganga.",
    quickAnswer:
      "Varanasi is best visited between October and March for cool sunrise boat rides and ghat walks. A 3-day trip costs around ₹5,000–₹11,500 per person including train travel, Assi Ghat guesthouses, Sarnath, and iconic Banarasi street food.",
    overview: [
      "Varanasi (Kashi) is a living heritage city of 84 stone riverfront ghats, classical Hindustani music, Banarasi silk looms, and ancient temples. Every morning begins on the water as wooden rowboats glide from peaceful Assi Ghat past bustling Dashashwamedh Ghat.",
      "Only 10 km northeast lies Sarnath, where Gautama Buddha delivered his first sermon, making Varanasi rewarding for both spiritual and cultural travellers. Get train numbers and hour-by-hour planning in our [3-day Varanasi itinerary and budget from Delhi](/blog/varanasi-3-day-itinerary-and-budget-from-delhi).",
    ],
    bestTimeToVisit: {
      months: "October to March",
      summary:
        "Cool winter mornings and clear river levels ideal for dawn boats and walking tours.",
      seasons: [
        {
          label: "Winter",
          period: "October – March",
          note: "Pleasant 12°C–26°C daytime weather; Dev Deepawali in November illuminates every ghat.",
        },
        {
          label: "Summer",
          period: "April – June",
          note: "Hot midday sun; schedule outdoor ghats between 5:30–9:00 AM and after 5:30 PM.",
        },
        {
          label: "Monsoon",
          period: "July – September",
          note: "High river levels flood lower ghats and frequently suspend private rowboats.",
        },
      ],
    },
    topAttractions: [
      {
        name: "Dashashwamedh & Assi Ghats",
        description:
          "Vibrant riverfront steps hosting morning Subah-e-Banaras and evening Ganga Aarti.",
        type: "Spiritual",
      },
      {
        name: "Kashi Vishwanath Corridor",
        description:
          "Revered temple complex seamlessly linking the inner sanctum to Lalita Ghat.",
        type: "Temple",
      },
      {
        name: "Sarnath Buddhist Site",
        description:
          "Peaceful heritage park featuring Dhamek Stupa and the Ashoka Lion Capital museum.",
        type: "Heritage",
      },
      {
        name: "Ramnagar Fort",
        description:
          "18th-century Chunar sandstone riverfront fort and vintage museum across the Ganga.",
        type: "Monument",
      },
    ],
    thingsToDo: [
      "Take a sunrise wooden rowboat ride from Assi Ghat up to Scindia and Manikarnika Ghats.",
      "Attend Subah-e-Banaras classical music and yoga at Assi Ghat at dawn.",
      "Visit a traditional Banarasi silk handloom workshop in Madanpura or Sarai Mohana.",
      "Walk the ancient southern ghat stretch between Assi, Tulsi, and Chet Singh Ghats.",
    ],
    suggestedItinerary: [
      {
        day: "Day 1",
        title: "Southern Ghats, Kashi Vishwanath & Evening Aarti",
        plan: "Check in near Assi Ghat, walk the southern ghats toward Dashashwamedh, visit Kashi Vishwanath Corridor, and witness the 6:30 PM Ganga Aarti.",
      },
      {
        day: "Day 2",
        title: "Sunrise Boat Ride & Sarnath Excursion",
        plan: "5:45 AM Subah-e-Banaras and dawn boat ride; post-breakfast auto/cab to Sarnath's Dhamek Stupa and Archaeological Museum; evening lassi & chaat trail.",
      },
      {
        day: "Day 3",
        title: "Banaras Hindu University, Ramnagar Fort & Departure",
        plan: "Morning visit to BHU's New Vishwanath Temple and Bharat Kala Bhavan museum, cross to Ramnagar Fort, and board your evening train.",
      },
    ],
    localFood: [
      {
        dish: "Kachori Sabzi & Jalebi",
        description:
          "Crispy spiced kachori paired with hot potato gravy and sweet jalebi at dawn.",
      },
      {
        dish: "Tamatar Chaat",
        description:
          "Signature Varanasi warm tangy tomato, boiled potato, and namak-para street chaat.",
      },
      {
        dish: "Malaiyyo (Winter only)",
        description:
          "Cloud-light saffron and cardamom milk froth served in earthen cups on winter mornings.",
      },
    ],
    accommodationGuidance: {
      budget:
        "Hostels and guesthouses around Assi Ghat and Shivala offer cleaner, calmer bases than busy Godowlia.",
      midRange:
        "Heritage havelis near Chet Singh Ghat or modern hotels in Cantonment.",
      tip: "Fix boat ride fares and duration clearly upfront, or board shared morning boat tours from Assi.",
    },
    estimatedBudget: {
      rangeInr: "₹5,000 – ₹11,500 per person",
      duration: "3 days (approximate estimate)",
      note: "Approximate costs for train travel and Assi Ghat guesthouses.",
      breakdown: [
        {
          item: "Train (Vande Bharat / Shiv Ganga Express)",
          estimate: "₹1,200 – ₹3,000",
        },
        {
          item: "Guesthouse / hostel (2 nights)",
          estimate: "₹1,800 – ₹4,500",
        },
        { item: "Street food & thalis", estimate: "₹1,000 – ₹2,000" },
        {
          item: "Boat rides, Sarnath & e-rickshaws",
          estimate: "₹1,000 – ₹2,000",
        },
      ],
    },
    howToReach: {
      byAir:
        "Lal Bahadur Shastri International Airport (VNS) sits 26 km northwest with direct flights across India.",
      byTrain:
        "Varanasi Junction (BSB), Banaras (BSBS), and Pt. Deen Dayal Upadhyaya Jn (DDU) offer direct Vande Bharat and overnight trains from Delhi and Kolkata.",
      byRoad:
        "Connected to Prayagraj (2.5 hrs), Ayodhya (4 hrs), and Lucknow via four-lane national highways.",
    },
    travelTips: [
      "Wear slip-on shoes for temple corridors and carry a small bag for locker rules at Kashi Vishwanath.",
      "Do not take photos at cremation ghats (Manikarnika and Harishchandra) out of respect.",
      "Base yourself near Assi Ghat for wider streets, cafes, and easy sunrise walks.",
    ],
    faqs: [
      {
        question: "What is the best area to stay in Varanasi?",
        answer:
          "Assi Ghat is widely preferred for its cleaner, quieter lanes, cafes, and direct walking path along the entire riverfront.",
      },
      {
        question: "How far is Sarnath from Varanasi ghats?",
        answer:
          "Sarnath lies roughly 10 km northeast of central Varanasi and takes 30–40 minutes by auto-rickshaw or cab.",
      },
      {
        question: "Note: What day is Sarnath Archaeological Museum closed?",
        answer:
          "The Sarnath Archaeological Museum is closed every Friday, though the Dhamek Stupa archaeological park remains open daily.",
      },
    ],
    relatedDestinationSlugs: ["rishikesh", "agra", "jaipur"],
    relatedBlogSlugs: [
      "varanasi-3-day-itinerary-and-budget-from-delhi",
      "best-budget-friendly-trips-in-india",
    ],
    officialSource: { label: "UP Tourism", url: "https://uptourism.gov.in/" },
    isPopular: true,
    isBudgetFriendly: true,
  },
  {
    slug: "leh-ladakh",
    name: "Leh-Ladakh",
    state: "Ladakh",
    region: "North India",
    category: "Adventure",
    budgetTier: "Flexible",
    seoTitle: "Leh-Ladakh Travel Guide: Routes & Permits | Explore India",
    metaDescription:
      "Plan a Leh-Ladakh trip safely with best months, 48-hour acclimatization rules, Pangong Lake, Nubra Valley, Inner Line Permits, and budget breakdown.",
    targetKeyword: "Leh Ladakh travel guide",
    updatedAt: "2026-11-24",
    idealDuration: "6 to 7 days",
    nearestAirport: "Kushok Bakula Rimpochee, Leh (IXL)",
    nearestRailhead: "Jammu Tawi (JAT) / Chandigarh (CDG)",
    geo: { lat: 34.1526, lng: 77.5771 },
    image: "/images/leh-ladakh-pangong-lake-india.webp",
    imageAlt:
      "Deep blue Pangong Tso high-altitude lake surrounded by barren Ladakh mountains",
    tagline:
      "High-altitude trans-Himalayan desert of turquoise lakes, ancient monasteries, and epic passes.",
    quickAnswer:
      "The best time to visit Leh-Ladakh is May to September when the Manali–Leh and Srinagar–Leh highways, Khardung La, and Pangong Lake are open. Allow 48 hours in Leh to acclimatize, carry a postpaid SIM card, and budget ₹16,000–₹32,000 per person for a 6-to-7-day circuit.",
    overview: [
      "Resting above 3,500 metres in India's trans-Himalayan rain shadow, Leh-Ladakh is an unforgettable landscape of ochre canyons, sapphire glacial lakes like Pangong Tso and Tso Moriri, and centuries-old Tibetan Buddhist gompas.",
      "Safe Ladakh travel depends on respecting high altitude: spend your first 36–48 hours resting in Leh before ascending Khardung La or Chang La. Check route seasons and AMS tips in our [complete Leh-Ladakh trip planning guide](/blog/complete-guide-to-planning-a-leh-ladakh-trip) or explore the [Manali approach guide](/destinations/manali).",
    ],
    bestTimeToVisit: {
      months: "May to September",
      summary:
        "Srinagar–Leh and Manali–Leh mountain highways are open with mild daytime sun.",
      seasons: [
        {
          label: "Summer",
          period: "May – September",
          note: "Prime road-trip window; June and September offer crisp, rain-free mountain skies.",
        },
        {
          label: "Autumn",
          period: "October – November",
          note: "Golden poplar trees and fewer crowds, though sub-zero temperatures begin at passes.",
        },
        {
          label: "Winter",
          period: "December – April",
          note: "Extreme sub-zero winter; reachable only by air with highways snowbound.",
        },
      ],
    },
    topAttractions: [
      {
        name: "Pangong Tso",
        description:
          "High-altitude brackish lake at 4,225 m famous for shifting shades of cobalt and turquoise.",
        type: "Lake",
      },
      {
        name: "Nubra Valley & Hunder",
        description:
          "Cold-desert valley beyond Khardung La featuring Diskit Monastery and white sand dunes.",
        type: "Valley",
      },
      {
        name: "Thiksey & Hemis Monasteries",
        description:
          "Grand hilltop Buddhist gompas famed for morning prayers, murals, and valley vistas.",
        type: "Culture",
      },
      {
        name: "Shanti Stupa & Leh Palace",
        description:
          "White-domed peace pagoda and 17th-century royal palace overlooking Leh town.",
        type: "Landmark",
      },
      {
        name: "Turtuk & Sangam",
        description:
          "Balti heritage village in northern Nubra and the confluence of the Indus and Zanskar rivers.",
        type: "Scenic",
      },
    ],
    thingsToDo: [
      "Rest for 48 hours in Leh while gently visiting Shanti Stupa, Leh Market, and Leh Palace.",
      "Cross Khardung La to stay in a traditional Ladakhi homestay in Hunder or Turtuk.",
      "Drive via the scenic Shyok river route from Nubra straight to Pangong Tso.",
      "Attend early morning prayers at Thiksey Monastery.",
    ],
    suggestedItinerary: [
      {
        day: "Day 1–2",
        title: "Leh Arrival & Strict Acclimatization",
        plan: "Arrive at Leh (3,500 m), rest completely on Day 1, and do light Day 2 local sightseeing (Shanti Stupa, Hall of Fame, Sangam, Magnetic Hill) while hydrating.",
      },
      {
        day: "Day 3–4",
        title: "Khardung La, Nubra Valley & Turtuk",
        plan: "Cross Khardung La into Nubra Valley, visit Diskit Maitreya Buddha and Hunder dunes, and spend Day 4 exploring historic Turtuk village near the Shyok River.",
      },
      {
        day: "Day 5",
        title: "Nubra to Pangong Tso via Shyok",
        plan: "Scenic drive along the Shyok Valley directly to Pangong Tso; watch afternoon and sunset colour shifts across the lake.",
      },
      {
        day: "Day 6–7",
        title: "Chang La, Thiksey Monastery & Return",
        plan: "Sunrise at Pangong, cross Chang La pass stopping at Thiksey and Shey Monasteries on the return to Leh for your Day 7 flight.",
      },
    ],
    localFood: [
      {
        dish: "Thukpa & Thenthuk",
        description:
          "Warming Himalayan noodle soups with mountain greens and subtle spices.",
      },
      {
        dish: "Skyu",
        description:
          "Traditional Ladakhi slow-simmered wheat-dough and root-vegetable stew.",
      },
      {
        dish: "Gur Gur Chai & Apricot Jam",
        description:
          "Salted Ladakhi butter tea and sweet sun-dried wild Ladakh apricots.",
      },
    ],
    accommodationGuidance: {
      budget:
        "Family-run homestays in Leh (Changspa), Diskit, and Turtuk include warm dinner and breakfast.",
      midRange:
        "Solar-heated boutique hotels in Leh and insulated wooden cottages at Pangong/Nubra.",
      tip: "Confirm room heating and hot-water hours if visiting in May, late September, or October.",
    },
    estimatedBudget: {
      rangeInr: "₹16,000 – ₹32,000 per person",
      duration: "6 to 7 days (approximate estimate)",
      note: "Costs depend heavily on shared vs private taxi hires and flight booking lead times.",
      breakdown: [
        {
          item: "Flight or Srinagar/Manali road transport",
          estimate: "₹6,000 – ₹14,000",
        },
        { item: "Homestays & camps (6 nights)", estimate: "₹4,500 – ₹9,000" },
        {
          item: "Shared cab / bike rental & fuel",
          estimate: "₹3,500 – ₹6,000",
        },
        {
          item: "Meals & Inner Line / green fees",
          estimate: "₹2,000 – ₹3,000",
        },
      ],
    },
    howToReach: {
      byAir:
        "Kushok Bakula Rimpochee Airport (IXL) in Leh operates year-round morning flights from Delhi, Srinagar, and Chandigarh.",
      byTrain:
        "No railway station in Ladakh; Jammu Tawi and Chandigarh are the nearest major railheads.",
      byRoad:
        "Srinagar–Leh (NH1) and Manali–Leh (NH3 via Atal Tunnel) generally open between May/June and October.",
    },
    travelTips: [
      "Spend 36–48 hours resting in Leh after flying in to prevent Acute Mountain Sickness (AMS).",
      "Obtain Ladakh Environmental / Inner Line Permits online via lahdclehpermit.in or registered Leh agents.",
      "Prepaid SIM cards from outside J&K/Ladakh do not work; carry an active postpaid SIM (Airtel, Jio, or BSNL).",
      "Carry printed permit copies, cash (ATMs can run dry outside Leh), and high-SPF sunscreen.",
    ],
    faqs: [
      {
        question: "What is the best time to visit Leh-Ladakh?",
        answer:
          "May to September is best when high passes, Nubra Valley, and Pangong Lake are accessible, with June and September offering the clearest skies.",
      },
      {
        question: "Do prepaid SIM cards work in Leh-Ladakh?",
        answer:
          "No. Prepaid mobile connections issued outside Ladakh and Jammu & Kashmir stop working on arrival; carry a postpaid connection.",
      },
      {
        question: "Is it better to fly to Leh or travel by road?",
        answer:
          "Driving via Srinagar–Leh provides gentler altitude acclimatization, whereas flying from Delhi saves days as long as you rest strictly for 48 hours in Leh.",
      },
    ],
    relatedDestinationSlugs: ["manali", "shimla", "rishikesh"],
    relatedBlogSlugs: [
      "complete-guide-to-planning-a-leh-ladakh-trip",
      "3-day-manali-trip-budget-from-delhi-by-volvo",
    ],
    officialSource: {
      label: "Ladakh Administration Portal",
      url: "https://ladakh.gov.in/",
    },
    isTrending: true,
  },
  {
    slug: "darjeeling",
    name: "Darjeeling",
    state: "West Bengal",
    region: "East India",
    category: "Hill Stations",
    budgetTier: "Budget",
    seoTitle: "Darjeeling Travel Guide: Toy Train & Views | Explore India",
    metaDescription:
      "Plan a Darjeeling trip with Tiger Hill Kanchenjunga sunrise, Darjeeling Himalayan Toy Train, tea estates, 3-day itinerary, momos, and budget tips.",
    targetKeyword: "Darjeeling travel guide",
    updatedAt: "2026-11-24",
    idealDuration: "3 to 4 days",
    nearestAirport: "Bagdogra (IXB, 70 km)",
    nearestRailhead: "New Jalpaiguri (NJP, 72 km)",
    geo: { lat: 27.041, lng: 88.2663 },
    image: "/images/darjeeling-tea-gardens-west-bengal.webp",
    imageAlt:
      "Rolling green tea plantations and misty Himalayan ridges in Darjeeling, West Bengal",
    tagline:
      "Queen of the Hills, celebrated for Kanchenjunga sunrises, heritage tea gardens, and the Toy Train.",
    quickAnswer:
      "Darjeeling is best visited from March to May for blooming rhododendrons or October to December for crystal-clear Mount Kanchenjunga views. A 3-to-4-day budget trip from NJP/Siliguri costs roughly ₹6,500–₹14,000 per person using shared jeeps, homestays, and the UNESCO Toy Train.",
    overview: [
      "Clinging to a dramatic Eastern Himalayan ridge in West Bengal, Darjeeling looks straight toward snow-clad Mount Kanchenjunga. Steep terraced tea gardens, pedestrian Chowrasta Mall, and the narrow-gauge Darjeeling Himalayan Railway make it a standout Eastern India classic.",
      "Easily combined with Kurseong, Mirik, or Kalimpong, Darjeeling also excels as a summer hill getaway. See how it compares in our [7 best summer hill stations in India](/blog/7-best-hill-stations-to-visit-in-summer) and [budget travel guide](/blog/best-budget-friendly-trips-in-india).",
    ],
    bestTimeToVisit: {
      months: "March to May & October to December",
      summary:
        "Clear Kanchenjunga views in spring and post-monsoon autumn; lush mist in monsoon.",
      seasons: [
        {
          label: "Spring",
          period: "March – May",
          note: "12°C–22°C days, first-flush tea harvest, and vibrant rhododendrons.",
        },
        {
          label: "Autumn & Early Winter",
          period: "October – December",
          note: "Sharpest post-monsoon skies for Tiger Hill sunrises over Kanchenjunga.",
        },
        {
          label: "Monsoon",
          period: "June – September",
          note: "Heavy hill mist and dramatic green estates, though mountain peaks stay hidden.",
        },
      ],
    },
    topAttractions: [
      {
        name: "Tiger Hill",
        description:
          "Iconic 2,590 m sunrise viewpoint glowing orange over Mount Kanchenjunga.",
        type: "Viewpoint",
      },
      {
        name: "Darjeeling Himalayan Railway",
        description:
          "UNESCO World Heritage steam and diesel Toy Train curving around Batasia Loop.",
        type: "Heritage Rail",
      },
      {
        name: "Happy Valley Tea Estate",
        description:
          "1854 hillside tea garden offering factory tours on rolling, withering, and brewing.",
        type: "Culture",
      },
      {
        name: "Padmaja Naidu Himalayan Zoo",
        description:
          "Renowned high-altitude conservation park breeding red pandas and snow leopards.",
        type: "Wildlife",
      },
    ],
    thingsToDo: [
      "Book the morning DHR Toy Train joyride from Darjeeling to Ghum Museum via Batasia Loop.",
      "Sip single-estate first-flush Darjeeling tea at cafés overlooking Chowrasta Mall.",
      "Explore the Himalayan Mountaineering Institute (HMI) and Zoo campus.",
      "Walk up to Japanese Peace Pagoda for serene mountain views.",
    ],
    suggestedItinerary: [
      {
        day: "Day 1",
        title: "Arrival via Hill Cart Road & Chowrasta Walk",
        plan: "Ascend from NJP/Bagdogra to Darjeeling, settle near Mall Road, stroll Observatory Hill and Chowrasta Mall, and watch mist roll in.",
      },
      {
        day: "Day 2",
        title: "Tiger Hill Sunrise, Batasia Loop & Toy Train",
        plan: "4:00 AM drive to Tiger Hill and Ghoom Monastery, return for Keventer's breakfast, and take the UNESCO Toy Train joyride.",
      },
      {
        day: "Day 3",
        title: "Happy Valley Tea Estate, HMI Zoo & Peace Pagoda",
        plan: "Morning tour of Happy Valley Tea Estate, afternoon at the Himalayan Zoo & HMI Museum, and sunset at Peace Pagoda.",
      },
    ],
    localFood: [
      {
        dish: "Steamed Momos & Thukpa",
        description:
          "Hand-folded Tibetan dumplings with fiery red chilli paste and hot noodle soup.",
      },
      {
        dish: "Churpee & Sel Roti",
        description:
          "Traditional Himalayan hardened cheese chews and crisp rice-flour ring doughnuts.",
      },
      {
        dish: "Glenary's & Keventer's Breakfast",
        description:
          "Century-old heritage bakeries serving warm croissants, platters, and pot-brewed Darjeeling tea.",
      },
    ],
    accommodationGuidance: {
      budget:
        "Cozy homestays and hostels along Gandhi Road, Zakir Hussain Road, and Mall Road.",
      midRange:
        "Heritage tea-estate bungalows and ridge hotels with direct Kanchenjunga balconies.",
      tip: "Confirm room heaters or electric blankets if visiting from November to February.",
    },
    estimatedBudget: {
      rangeInr: "₹6,500 – ₹14,000 per person",
      duration: "3 to 4 days (approximate estimate)",
      note: "Approximate costs starting from New Jalpaiguri (NJP) or Siliguri.",
      breakdown: [
        {
          item: "Shared sumo / cab from NJP (round trip)",
          estimate: "₹800 – ₹2,500",
        },
        { item: "Homestay / hotel (3 nights)", estimate: "₹2,700 – ₹6,500" },
        { item: "Meals & tea cafes", estimate: "₹1,500 – ₹2,800" },
        { item: "Toy Train joyride & local cabs", estimate: "₹1,500 – ₹2,200" },
      ],
    },
    howToReach: {
      byAir:
        "Bagdogra Airport (IXB) lies 70 km below (~3 hours via scenic Rohini or Kurseong road).",
      byTrain:
        "New Jalpaiguri (NJP) connects via Vande Bharat, Rajdhani, and overnight trains from Kolkata, Delhi, and Guwahati.",
      byRoad:
        "Shared Tata Sumos and private cabs operate frequently from Siliguri Junction and NJP.",
    },
    travelTips: [
      "Leave around 4:00 AM for Tiger Hill to beat sunrise vehicle queues and claim clear viewing railings.",
      "Reserve the DHR Toy Train joyride early on IRCTC, especially for steam-locomotive departures.",
      "Pack a light windproof jacket in every season as valley fog drops temperatures fast.",
    ],
    faqs: [
      {
        question: "Which month gives the clearest Kanchenjunga view in Darjeeling?",
        answer:
          "October and November offer the crispest post-monsoon visibility of Mount Kanchenjunga, followed by March and April mornings.",
      },
      {
        question: "How long does the Darjeeling Toy Train joyride take?",
        answer:
          "The round-trip joyride from Darjeeling to Ghum and back via Batasia Loop takes about 2 hours.",
      },
      {
        question: "Can you visit Darjeeling in a 3-day trip from Kolkata?",
        answer:
          "Yes. Taking an overnight train or Vande Bharat Express to NJP lets you comfortably enjoy three full hill days.",
      },
    ],
    relatedDestinationSlugs: ["shimla", "manali", "kerala"],
    relatedBlogSlugs: [
      "7-best-hill-stations-to-visit-in-summer",
      "best-budget-friendly-trips-in-india",
    ],
    officialSource: {
      label: "West Bengal Tourism",
      url: "https://wbtourism.gov.in/",
    },
    isBudgetFriendly: true,
  },
  {
    slug: "agra",
    name: "Agra",
    state: "Uttar Pradesh",
    region: "North India",
    category: "Heritage",
    budgetTier: "Budget",
    seoTitle: "Agra Travel Guide: Taj Mahal Timings & Fort | Explore India",
    metaDescription:
      "Plan your Agra trip with Taj Mahal sunrise timings (closed Fridays), Agra Fort, Fatehpur Sikri, 2-day itinerary, Petha food, and Delhi day-trip tips.",
    targetKeyword: "Agra Taj Mahal travel guide",
    updatedAt: "2026-11-24",
    idealDuration: "1 to 2 days",
    nearestAirport: "Agra (AGR) / Delhi IGI (DEL, 230 km)",
    nearestRailhead: "Agra Cantt (AGC)",
    geo: { lat: 27.1751, lng: 78.0421 },
    image: "/images/agra-taj-mahal-uttar-pradesh.webp",
    imageAlt:
      "White marble dome and minarets of the Taj Mahal at sunrise in Agra, Uttar Pradesh",
    tagline:
      "Home to three UNESCO World Heritage monuments along the Yamuna River.",
    quickAnswer:
      "Agra is best visited from October to March, entering the Taj Mahal at sunrise (note: closed every Friday). Fast trains from Delhi reach Agra Cantt in 100 minutes, making a 1-to-2-day budget trip cost roughly ₹3,500–₹8,500 per person.",
    overview: [
      "Agra anchors India's famed Golden Triangle with three UNESCO World Heritage Sites: the Taj Mahal, Agra Fort, and Fatehpur Sikri. Located 230 km southeast of Delhi, it works seamlessly either as a morning-to-evening express rail day trip or an unhurried two-day heritage stay.",
      "Beyond the marble symmetry of the Taj, take time for red-sandstone courtyards in Agra Fort, pietra dura inlay inside Baby Taj (Itmad-ud-Daulah), and sunset reflections from Mehtab Bagh across the Yamuna. Plan the Delhi leg with our [weekend getaways from Delhi guide](/blog/top-weekend-getaways-from-delhi) or continue west to [Jaipur](/destinations/jaipur).",
    ],
    bestTimeToVisit: {
      months: "October to March",
      summary:
        "Mild winter days; enter the Taj Mahal at dawn to skip crowds and heat.",
      seasons: [
        {
          label: "Winter",
          period: "October – March",
          note: "Best sightseeing temperatures (15°C–28°C); note thick Yamuna mist in late Dec–Jan mornings.",
        },
        {
          label: "Summer",
          period: "April – June",
          note: "High daytime heat; strictly schedule outdoor monuments at 6:00 AM sunrise.",
        },
        {
          label: "Monsoon",
          period: "July – September",
          note: "Dramatic rain-washed marble and fewer tourists despite humidity.",
        },
      ],
    },
    topAttractions: [
      {
        name: "Taj Mahal",
        description:
          "17th-century ivory-white marble mausoleum and UNESCO World Heritage Site (closed Fridays).",
        type: "UNESCO",
      },
      {
        name: "Agra Fort",
        description:
          "Massive red-sandstone Mughal citadel featuring Diwan-i-Khas and Taj views from Musamman Burj.",
        type: "UNESCO",
      },
      {
        name: "Fatehpur Sikri",
        description:
          "16th-century sandstone Mughal capital featuring Buland Darwaza, 40 km west of Agra.",
        type: "UNESCO",
      },
      {
        name: "Mehtab Bagh & Baby Taj",
        description:
          "Riverfront Moonlight Garden for sunset silhouettes and delicate Itmad-ud-Daulah marble inlay.",
        type: "Heritage",
      },
    ],
    thingsToDo: [
      "Enter the Taj Mahal at sunrise via the East Gate with pre-booked ASI QR tickets.",
      "Visit Itmad-ud-Daulah (Baby Taj) before crossing to Mehtab Bagh for golden-hour photography.",
      "Spend a half-day exploring Buland Darwaza and Jama Masjid in Fatehpur Sikri.",
      "Sample Agra street chaat and Mughlai parathas at Sadar Bazaar in the evening.",
    ],
    suggestedItinerary: [
      {
        day: "Day 1",
        title: "Taj Mahal Sunrise, Agra Fort & Mehtab Bagh",
        plan: "6:00 AM sunrise entry to the Taj Mahal (include main mausoleum add-on), breakfast in Tajganj, late-morning tour of Agra Fort, Baby Taj at 4:00 PM, and sunset at Mehtab Bagh.",
      },
      {
        day: "Day 2",
        title: "Fatehpur Sikri Excursion & Sadar Bazaar",
        plan: "Morning drive or bus to UNESCO Fatehpur Sikri (40 km), afternoon rest or Akbar's Tomb at Sikandra, and pick up authentic Petha before your evening train.",
      },
    ],
    localFood: [
      {
        dish: "Agra Petha",
        description:
          "Translucent candied ash-gourd sweet famous in classic, kesar, and angoori varieties.",
      },
      {
        dish: "Bedai & Jalebi",
        description:
          "Crisp spiced fried bread with tangy potato sabzi and hot jalebi for breakfast.",
      },
      {
        dish: "Dalmoth & Sadar Bazaar Chaat",
        description:
          "Crunchy spiced lentil namkeen and evening street aloo tikki around Sadar Bazaar.",
      },
    ],
    accommodationGuidance: {
      budget:
        "Clean hostels and family guesthouses in Tajganj within walking distance of the Taj East Gate.",
      midRange:
        "Comfortable business and heritage hotels along Fatehabad Road.",
      tip: "Never plan a Taj Mahal visit on a Friday—the monument stays closed to visitors all day.",
    },
    estimatedBudget: {
      rangeInr: "₹3,500 – ₹8,500 per person",
      duration: "1 to 2 days (approximate estimate)",
      note: "Highly economical as a fast train trip from New Delhi or Hazrat Nizamuddin.",
      breakdown: [
        {
          item: "Train from Delhi (round trip)",
          estimate: "₹600 – ₹1,800",
        },
        { item: "Hotel / hostel (1 night)", estimate: "₹1,200 – ₹3,500" },
        {
          item: "ASI monument entries (Indian citizens)",
          estimate: "₹700 – ₹1,400",
        },
        { item: "Food, Metro & e-rickshaws", estimate: "₹1,000 – ₹1,800" },
      ],
    },
    howToReach: {
      byAir:
        "Agra Airport (AGR) has select flights; Delhi IGI Airport is 3.5 hours away via the Yamuna Expressway.",
      byTrain:
        "Agra Cantt (AGC) receives Gatimaan Express (1h 40m from Hazrat Nizamuddin), Vande Bharat, and Shatabdi trains.",
      byRoad:
        "Roughly 3.5 hours from Delhi/Noida along the 6-lane Yamuna Expressway.",
    },
    travelTips: [
      "Remember: The Taj Mahal is closed every Friday for prayers.",
      "Book tickets in advance on ASI's official e-ticketing site (asi.payumoney.com) and add the ₹200 main mausoleum ticket.",
      "Leave power banks, chargers, and big backpacks at your hotel or locker—only phones, cameras, and clear water bottles are allowed inside.",
    ],
    faqs: [
      {
        question: "Is the Taj Mahal open on Fridays?",
        answer:
          "No. The Taj Mahal is closed to general tourists every Friday; Agra Fort, Baby Taj, and Mehtab Bagh remain open on Fridays.",
      },
      {
        question: "Can Agra be visited as a day trip from Delhi?",
        answer:
          "Yes. Morning Gatimaan or Vande Bharat trains reach Agra Cantt in about 1 hour 40 minutes, allowing plenty of time for the Taj Mahal and Agra Fort.",
      },
      {
        question: "Which Taj Mahal gate has shorter queues?",
        answer:
          "The East Gate (Shilpgram side) usually moves faster at sunrise than the busy West Gate.",
      },
    ],
    relatedDestinationSlugs: ["jaipur", "varanasi", "udaipur"],
    relatedBlogSlugs: [
      "top-weekend-getaways-from-delhi",
      "best-budget-friendly-trips-in-india",
    ],
    officialSource: {
      label: "Archaeological Survey of India",
      url: "https://asi.nic.in/",
    },
    isPopular: true,
    isBudgetFriendly: true,
  },
  {
    slug: "andaman-and-nicobar-islands",
    name: "Andaman and Nicobar Islands",
    state: "Andaman & Nicobar Islands",
    region: "Islands",
    category: "Beaches",
    budgetTier: "Mid-Range",
    seoTitle: "Andaman Islands Guide: Havelock & Neil Tips | Explore India",
    metaDescription:
      "Plan an Andaman Islands trip covering Radhanagar Beach, Havelock, Neil Island, Cellular Jail, ferry timings, 5-day itinerary, and budget breakdown.",
    targetKeyword: "Andaman and Nicobar Islands travel guide",
    updatedAt: "2026-11-24",
    idealDuration: "5 to 6 days",
    nearestAirport: "Veer Savarkar Int'l, Port Blair (IXZ)",
    nearestRailhead: "Island territory (Air + Ferry access)",
    geo: { lat: 11.6234, lng: 92.7265 },
    image: "/images/andaman-nicobar-islands-beaches-india.webp",
    imageAlt:
      "Turquoise lagoon, white sand beach, and tropical palms in the Andaman Islands",
    tagline:
      "Pristine coral lagoons, white-sand beaches, and rich maritime history in the Bay of Bengal.",
    quickAnswer:
      "The Andaman Islands are best visited from October to May for calm Bay of Bengal seas and underwater diving visibility. Indian citizens do not need a passport or special permit for Port Blair, Havelock, and Neil Island, and a 5-to-6-day budget trip costs ₹18,000–₹35,000 per person.",
    overview: [
      "Lying over 1,200 km off mainland India in the Bay of Bengal, the Andaman archipelago stands out for crystal-clear turquoise lagoons, healthy hard-coral reefs, and untouched rainforests. Swaraj Dweep (Havelock Island) and Shaheed Dweep (Neil Island) are home to some of South Asia's cleanest beaches.",
      "In Sri Vijaya Puram (Port Blair), the Cellular Jail National Memorial preserves poignant chapters of India's freedom movement. Get exact ferry order and cost math in our [5-day Andaman budget itinerary](/blog/andaman-5-day-budget-itinerary-port-blair-havelock-neil) or compare beach vibes with [Goa](/destinations/goa).",
    ],
    bestTimeToVisit: {
      months: "October to May",
      summary:
        "Calm seas, clear skies, and top underwater visibility for ferries and snorkelling.",
      seasons: [
        {
          label: "Peak Dry Season",
          period: "November – April",
          note: "24°C–31°C sunny weather with smooth ferry crossings and top scuba clarity.",
        },
        {
          label: "Shoulder",
          period: "October & May",
          note: "Warm days with occasional tropical showers and softer hotel rates.",
        },
        {
          label: "Monsoon",
          period: "June – September",
          note: "Rough seas can delay or cancel inter-island ferries and water activities.",
        },
      ],
    },
    topAttractions: [
      {
        name: "Radhanagar Beach (Havelock)",
        description:
          "Sweeping crescent of powdery white sand framed by rainforest, famed for sunsets.",
        type: "Beach",
      },
      {
        name: "Cellular Jail (Sri Vijaya Puram)",
        description:
          "Historic colonial prison and National Memorial hosting an evocative Sound & Light show.",
        type: "Heritage",
      },
      {
        name: "Bharatpur & Laxmanpur (Neil Island)",
        description:
          "Shallow turquoise coral lagoons and natural limestone bridge ideal for calm walks.",
        type: "Beach",
      },
      {
        name: "Elephant Beach",
        description:
          "Coral-fringed bay reached by speedboat or 40-minute jungle trek for snorkelling.",
        type: "Marine",
      },
      {
        name: "Ross Island (Netaji Subhash Chandra Bose Dweep)",
        description:
          "Short boat ride from Port Blair showcasing vine-covered ruins and spotted deer.",
        type: "Heritage",
      },
    ],
    thingsToDo: [
      "Snorkel or complete a beginner Discover Scuba Dive with certified dive shops at Nemo Reef or Havelock.",
      "Watch sunset at Radhanagar Beach and Natural Bridge tide pools in Neil Island.",
      "Attend the evening Light & Sound show at Cellular Jail (book English or Hindi slots early).",
      "Hike the shaded forest trail to Elephant Beach instead of waiting at jetty queues.",
    ],
    suggestedItinerary: [
      {
        day: "Day 1",
        title: "Port Blair Arrival & Cellular Jail",
        plan: "Fly into Port Blair (IXZ) before noon, visit Corbyn's Cove or Anthropological Museum, and attend the evening Sound & Light Show at Cellular Jail.",
      },
      {
        day: "Day 2",
        title: "Ferry to Havelock & Radhanagar Sunset",
        plan: "Take the morning catamaran to Swaraj Dweep (Havelock), check in near Govind Nagar, and spend late afternoon at Radhanagar Beach.",
      },
      {
        day: "Day 3",
        title: "Elephant Beach Snorkelling & Kalapathar",
        plan: "Morning scuba dive at Nemo Reef or boat/trek to Elephant Beach for coral snorkelling; drive to black-rock Kalapathar Beach at dusk.",
      },
      {
        day: "Day 4",
        title: "Neil Island Coral Reefs & Natural Bridge",
        plan: "Morning ferry to Shaheed Dweep (Neil), explore Bharatpur Beach, Natural Bridge at low tide, and sunset at Laxmanpur Beach.",
      },
      {
        day: "Day 5",
        title: "Return to Port Blair & Departure",
        plan: "Morning ferry back to Port Blair, quick Ross Island or Aberdeen Bazaar souvenir stop (always return to Port Blair the day before early flights).",
      },
    ],
    localFood: [
      {
        dish: "Grilled Reef Fish & Prawns",
        description:
          "Fresh catch marinated lightly with island lime, garlic, and mild coastal spices.",
      },
      {
        dish: "Coconut Prawn Curry",
        description:
          "Aromatic tropical curry blending South Indian and Bengali coastal cooking.",
      },
      {
        dish: "Fresh Island Fruit & Coconut",
        description:
          "Sweet pineapples, bananas, and chilled tender coconuts sold along beach paths.",
      },
    ],
    accommodationGuidance: {
      budget:
        "Eco-huts and clean guesthouses near Govind Nagar Beach in Havelock and Aberdeen Bazaar in Port Blair.",
      midRange:
        "Beachfront bamboo cottages and resorts in Havelock and Neil Island.",
      tip: "Book inter-island ferries (Makruzz, Nautika, Green Ocean, or Govt DSS) early during Dec–Jan.",
    },
    estimatedBudget: {
      rangeInr: "₹18,000 – ₹35,000 per person",
      duration: "5 to 6 days (approximate estimate)",
      note: "Mainland return flights from Chennai, Kolkata, Bengaluru, or Delhi form the largest share.",
      breakdown: [
        {
          item: "Return flight to Port Blair (IXZ)",
          estimate: "₹9,000 – ₹18,000",
        },
        { item: "Hotels / eco-cottages (5 nights)", estimate: "₹5,000 – ₹10,000" },
        { item: "Inter-island ferries", estimate: "₹2,000 – ₹3,500" },
        { item: "Meals & snorkelling / scuba", estimate: "₹2,000 – ₹4,500" },
      ],
    },
    howToReach: {
      byAir:
        "Veer Savarkar International Airport (IXZ) in Sri Vijaya Puram (Port Blair) connects nonstop to Chennai, Kolkata, Bengaluru, Hyderabad, and Delhi.",
      byTrain: "Not applicable (island union territory).",
      byRoad:
        "Inter-island transit between Port Blair, Havelock, and Neil runs exclusively via private catamarans and government ferries.",
    },
    travelTips: [
      "Carry original government photo ID and printed ferry/flight boarding confirmations.",
      "Always return from Havelock/Neil to Port Blair on the evening before a morning mainland flight.",
      "Do not touch or stand on coral reefs while snorkelling; choose reef-safe sunscreen.",
      "Download offline maps as mobile data stays slow on Neil Island and remote coves.",
    ],
    faqs: [
      {
        question: "Do Indian citizens need a passport or permit for Andaman?",
        answer:
          "No. Indian citizens do not need a passport or Restricted Area Permit for Port Blair, Havelock, Neil, or Ross Island—only a valid government photo ID.",
      },
      {
        question: "How many days are ideal for Andaman?",
        answer:
          "Five to six days allow a smooth loop across Port Blair, Havelock (Swaraj Dweep), and Neil Island (Shaheed Dweep) without rushing ferries.",
      },
      {
        question: "Should I stay overnight on Neil Island or do a day trip?",
        answer:
          "Staying one night on Neil Island lets you visit Natural Bridge at low tide and enjoy Laxmanpur sunset calmly before returning to Port Blair.",
      },
    ],
    relatedDestinationSlugs: ["goa", "kerala", "udaipur"],
    relatedBlogSlugs: [
      "andaman-5-day-budget-itinerary-port-blair-havelock-neil",
      "best-budget-friendly-trips-in-india",
    ],
    officialSource: {
      label: "Andaman & Nicobar Tourism",
      url: "https://www.andamantourism.gov.in/",
    },
    isTrending: true,
  },
];

export function getDestinationBySlug(slug: string): Destination | undefined {
  return DESTINATIONS.find((d) => d.slug === slug);
}

export const DESTINATION_REGIONS: DestinationRegion[] = [
  "North India",
  "West India",
  "South India",
  "East India",
  "Islands",
];

export const DESTINATION_CATEGORIES: DestinationCategory[] = [
  "Hill Stations",
  "Heritage",
  "Beaches",
  "Spiritual",
  "Adventure",
  "Nature",
];
