import Paris1 from "./assets/paris1.jpeg";
import Paris2 from "./assets/paris2.jpeg";
import Paris3 from "./assets/paris3.jpeg";
import Paris4 from "./assets/img1.jpeg";
import Paris5 from "./assets/img2.jpeg";
import Paris6 from "./assets/img3.jpeg";
import Paris7 from "./assets/img4.jpeg";

import sayajiHotel from "./assets/sayaji.jpg";
import royalOrchidHotel from "./assets/royal-orchid.jpg";
import marriottHotel from "./assets/marriott.jpg";

import LaxmiVillasPalace from "./assets/Laxmi-Vilas-Palace.jpg";
import surSagar from "./assets/Sur-Sagar-Lake.webp";
import sayajiPark from "./assets/sayaji Park.jpg";
import kirtiMandir from "./assets/Kirti mandir.jpg";

import Hyatt from "./assets/hyatt_regency.jpeg";
import Hillock from "./assets/hillock.jpeg";
import TajSkyline from "./assets/taj_skyline.jpeg";

import Kankaria from "./assets/kankaria.jpg";
import ScienceCity from "./assets/science city.jpg";
import SabarMatiRiverFront from "./assets/sabarmati-riverfront.jpg";
import AdalajStepwell from "./assets/adalaj_stepwell.jpeg";


import Shreemaya from "./assets/Shreemaya.png";
import Bluebonnets from "./assets/Bluebonnets.png";
import Fairfield from "./assets/Fairfield.jpg";

import CentralMuseum from "./assets/Central Museum.jpg";
import RajwadaPalace from "./assets/Rajwada Palace.jpg";
import PatalPaniWaterFall from "./assets/Patalpani Water Falls.jpg";
import ShriAnnapurnaTemple from "./assets/Shri Annapurna Temple.jpg";


import UdaanHotel from "./assets/Udaan Hotels.jpg";
import CentralHeritageResort from "./assets/Central Heritage Resort.jpg";
import ShangriHotel from "./assets/Hotel Shangri.jpg";




import DaliMonastery from "./assets/Dali Monastery.jpg";
import ObservatoryHill from "./assets/Observatory Hill.jpg";
import TeaGarden from "./assets/Tea Garden.jpg";
import TigerHill from "./assets/Tiger Hill.jpg";




import PortMuziris from "./assets/port_muziris.jpeg";
import GatewayBekal from "./assets/gateway_bekal.jpg";
import TheLeelaAshtamudi from "./assets/the_leela_ashtamudi.jpeg";
import Alappuzha from "./assets/alappuzha.jpeg";
import Munnar from "./assets/munnar.jpg";
import Trivandrum from "./assets/trivandrum.jpg";
import Varkala from "./assets/varkala.jpg";






import RangNiwasPalace from "./assets/hotel_rang_niwas_palace.jpeg";
import SwaroopVilas from "./assets/hotel_swaroop_vilas.jpeg";
import FatehPrakashPalace from "./assets/taj_fateh_prakash_palace.jpeg";

import AharCenotaphs from "./assets/ahar_cenotaphs.jpeg";
import CityPalace from "./assets/city_palace.jpeg";
import Shilpgram from "./assets/shilpgram.jpeg";
import VintageCarMuseum from "./assets/vintage_car_museum.jpeg";















const data = {
    'paris': {
        hotels: [
            { name: 'Grand Paris Palace', price: '$120/night', rating: 4.8, tags: ['Free WiFi', 'Pool', 'Spa', 'Restaurant'], image: Paris1 },
            { name: 'Paris Boutique Hotel', price: '$85/night', rating: 4.6, tags: ['Free Breakfast', 'Gym', 'Bar', 'City View'], image: Paris2 },
            { name: 'Heritage Paris Inn', price: '$65/night', rating: 4.4, tags: ['Free WiFi', 'Garden', 'Restaurant', 'Parking'], image: Paris3 },
        ],
        weather: { temp: '24°C', desc: 'Partly Cloudy', humidity: '65%', wind: '12 km/h', forecast: ['Sunny 28° 18°', 'Cloudy 26° 19°', 'Partly Cloudy 25° 17°', 'Sunny 27° 20°'] },
        spots: [
            { name: 'Paris Historic Center', time: '2–3 hours', desc: 'Explore the rich history and beautiful architecture.', image: Paris4 },
            { name: 'Paris Cultural Museum', time: '1–2 hours', desc: 'Discover local art, culture, and traditions.', image: Paris5 },
            { name: 'Paris Garden Paradise', time: '1–2 hours', desc: 'A beautiful botanical garden for peaceful walks.', image: Paris6 },
            { name: 'Paris Viewpoint', time: '1 hour', desc: 'Stunning panoramic views of the city.', image: Paris7 },
        ],
        explore: { title: 'Explore Paris', locations: 'Explore Paris locations' },
        food: [
            { name: 'Paris Spice Kitchen', type: 'Local Cuisine', desc: 'Traditional regional dishes', rating: 4.7, price: '$$', /* image: optional */ },
            { name: 'Royal Palace Restaurant', type: 'Fine Dining', desc: 'Gourmet local fusion', rating: 4.9, price: '$$$', /* image: optional */ },
            { name: 'Street Food Paradise', type: 'Street Food', desc: 'Authentic street snacks', rating: 4.5, price: '$', /* image: optional */ },
        ],
        dishes: ['Paris Special Curry', 'Traditional Sweet Delicacy', 'Famous Local Bread', 'Regional Specialty Drink'],
        itinerary: [
            { time: '9:00 AM', activity: 'Start at Paris Historic Center', desc: 'Begin exploring the beautiful historic architecture', duration: '2 hours' },
            { time: '11:30 AM', activity: 'Coffee Break at Local Café', desc: 'Try traditional coffee and local pastries', duration: '30 minutes' },
            { time: '12:00 PM', activity: 'Visit Cultural Museum', desc: 'Immerse yourself in local history and art', duration: '2 hours' },
            { time: '2:30 PM', activity: 'Lunch at Traditional Restaurant', desc: 'Enjoy authentic local cuisine', duration: '1.5 hours' },
            { time: '4:00 PM', activity: 'Explore Garden Paradise', desc: 'Peaceful walk through botanical gardens', duration: '1.5 hours' },
            { time: '6:00 PM', activity: 'Sunset at City Viewpoint', desc: 'Watch the sunset with panoramic views', duration: '1 hour' },
            { time: '8:00 PM', activity: 'Dinner & Local Entertainment', desc: 'End with great food and cultural shows', duration: '2 hours' },
        ],
    },

    'vadodara': {
        hotels: [
            { name: 'Sayaji', price: '₹7,000/night', rating: 4.8, tags: ['Free WiFi', 'Pool', 'Spa', 'Restaurant'], image: sayajiHotel },
            { name: 'Royal Orchid', price: '₹5,500/night', rating: 4.6, tags: ['Free Breakfast', 'Gym', 'Bar', 'City View'], image: royalOrchidHotel },
            { name: 'Marriott', price: '₹10,200/night', rating: 4.4, tags: ['Free WiFi', 'Garden', 'Restaurant', 'Parking'], image: marriottHotel },
        ],
        weather: { temp: '24°C', desc: 'Partly Cloudy', humidity: '65%', wind: '12 km/h', forecast: ['Sunny 28° 18°', 'Cloudy 26° 19°', 'Partly Cloudy 25° 17°', 'Sunny 27° 20°'] },
        spots: [
            { name: 'Laxmi Vilas Palace', time: '2–3 hours', desc: 'Explore the grand architecture and royal history of Vadodara.', image: LaxmiVillasPalace },
            { name: 'Sur Sagar Lake', time: '1–2 hours', desc: 'Enjoy the serene lake and its beautiful surroundings.', image: surSagar },
            { name: 'Sayaji Park', time: '1–2 hours', desc: 'A lush green park perfect for peaceful walks and relaxation.', image: sayajiPark },
            { name: 'Kirti Mandir', time: '1 hour', desc: 'Visit the historic monument dedicated to the Gaekwad dynasty.', image: kirtiMandir },
        ],
        explore: { title: 'Explore Vadodara', locations: 'Explore Vadodara locations' },
        food: [
            { name: 'Mandap Restaurant', type: 'Gujarati Thali', desc: 'Authentic Gujarati cuisine', rating: 4.7, price: '₹₹', /* image: optional */ },
            { name: '22nd Parallel', type: 'South Indian', desc: 'Popular for dosas and idlis', rating: 4.6, price: '₹', /* image: optional */ },
            { name: 'Barbeque Nation', type: 'Buffet', desc: 'Live grills and wide variety', rating: 4.5, price: '₹₹₹', /* image: optional */ },
        ],
        dishes: ['Mahakaali Sev Usal', 'PyareLal Kachori', 'Raju Patti Samosa', 'ManMohan Samosa'],
        itinerary: [
            {
                time: '8:00 AM',
                activity: 'Breakfast at Mandap Restaurant',
                desc: 'Start your day with an authentic Gujarati thali breakfast at Mandap Restaurant.',
                duration: '1 hour'
            },
            {
                time: '9:30 AM',
                activity: 'Explore Laxmi Vilas Palace',
                desc: 'Visit the grand Laxmi Vilas Palace and discover its royal history and stunning architecture.',
                duration: '2 hours'
            },
            {
                time: '11:45 AM',
                activity: 'Relax at Sayaji Park',
                desc: 'Take a peaceful walk and enjoy the greenery at Sayaji Park.',
                duration: '1 hour'
            },
            {
                time: '1:00 PM',
                activity: 'Lunch at 22nd Parallel',
                desc: 'Enjoy delicious South Indian cuisine, famous for dosas and idlis, at 22nd Parallel.',
                duration: '1 hour'
            },
            {
                time: '2:30 PM',
                activity: 'Visit Kirti Mandir',
                desc: 'Explore the historic Kirti Mandir, dedicated to the Gaekwad dynasty.',
                duration: '45 minutes'
            },
        ],
    },




    'ahmedabad': {
        hotels: [
            { name: 'Hyatt Regency', price: '₹8,000/night', rating: 4.7, tags: ['Free WiFi', 'Pool', 'Spa', 'Restaurant'], image: Hyatt },
            { name: 'Courtyard by Marriott', price: '₹7,500/night', rating: 4.6, tags: ['Free Breakfast', 'Gym', 'Bar', 'City View'], image: Hillock },
            { name: 'Lemon Tree Premier', price: '₹6,000/night', rating: 4.5, tags: ['Free WiFi', 'Garden', 'Restaurant', 'Parking'], image: TajSkyline },
        ],
        weather: { temp: '32°C', desc: 'Sunny', humidity: '40%', wind: '10 km/h', forecast: ['Sunny 34° 25°', 'Cloudy 33° 24°', 'Sunny 35° 26°', 'Partly Cloudy 32° 23°'] },
        spots: [
            { name: 'Science City', time: '1–2 hours', desc: 'Interactive science wonderland blending learning with fun.', image: ScienceCity },
            { name: 'Kankaria Lake', time: '1–2 hours', desc: 'Popular lakefront with activities and zoo.', image: Kankaria },
            { name: 'Adalaj Stepwell', time: '1 hour', desc: 'Intricately carved stepwell from the 15th century.', image: AdalajStepwell },
            { name: 'Sabarmati River-Front', time: '30 minutes', desc: 'Scenic urban promenade with gardens, activities, and river views.', image: SabarMatiRiverFront },
        ],
        explore: { title: 'Explore Ahmedabad', locations: 'Explore Ahmedabad locations' },
        food: [
            { name: 'Agashiye', type: 'Gujarati Thali', desc: 'Rooftop dining with authentic Gujarati cuisine', rating: 4.8, price: '₹₹₹', image: null },
            { name: 'Swati Snacks', type: 'Snacks', desc: 'Popular for local snacks and light meals', rating: 4.7, price: '₹₹', image: null },
            { name: 'Manek Chowk', type: 'Street Food', desc: 'Famous night food market', rating: 4.6, price: '₹', image: null },
        ],
        dishes: ['Khaman Dhokla', 'Fafda Jalebi', 'Sev Khamani', 'Gujarati Thali'],
        itinerary: [
            { time: '8:00 AM', activity: 'Breakfast at Swati Snacks', desc: 'Enjoy local breakfast items like Khaman Dhokla and Fafda Jalebi.', duration: '1 hour' },
            { time: '9:30 AM', activity: 'Visit Sabarmati Ashram', desc: 'Explore the historic ashram of Mahatma Gandhi.', duration: '1.5 hours' },
            { time: '11:30 AM', activity: 'See Sidi Saiyyed Mosque', desc: 'Admire the famous stone latticework windows.', duration: '30 minutes' },
            { time: '12:30 PM', activity: 'Lunch at Agashiye', desc: 'Savor an authentic Gujarati thali on a rooftop.', duration: '1.5 hours' },
            { time: '2:30 PM', activity: 'Tour Adalaj Stepwell', desc: 'Marvel at the intricate carvings of this ancient stepwell.', duration: '1 hour' },
            { time: '4:00 PM', activity: 'Relax at Kankaria Lake', desc: 'Enjoy the lakefront, zoo, and activities.', duration: '2 hours' },
            { time: '7:00 PM', activity: 'Dinner at Manek Chowk', desc: 'Experience Ahmedabad’s famous street food market.', duration: '2 hours' },
        ],
    },

    'tokyo': {
        hotels: [
            { name: 'Aman Tokyo', price: '$250/night', rating: 4.9, tags: ['Free WiFi', 'Spa', 'Skyline View'], image: null },
            { name: 'Park Hyatt Tokyo', price: '$200/night', rating: 4.7, tags: ['Free Breakfast', 'Gym', 'City View'], image: null },
        ],
        weather: { temp: '20°C', desc: 'Sunny', humidity: '55%', wind: '8 km/h', forecast: ['Sunny 22° 15°', 'Partly Cloudy 21° 14°', 'Sunny 23° 16°', 'Cloudy 20° 13°'] },
        spots: [
            { name: 'Tokyo Tower', time: '1.5–2 hours', desc: 'Iconic tower with stunning city views.', image: null },
            { name: 'Shibuya Crossing', time: '1 hour', desc: 'Experience the world’s busiest pedestrian crossing.', image: null },
        ],
        explore: { title: 'Explore Tokyo', locations: 'Explore Tokyo locations' },
        food: [
            { name: 'Sushi Saito', type: 'Sushi', desc: 'World-class sushi experience', rating: 4.8, price: '$$$$', /* image: optional */ },
            { name: 'Ichiran Ramen', type: 'Ramen', desc: 'Authentic tonkotsu ramen', rating: 4.6, price: '$', /* image: optional */ },
        ],
        dishes: ['Sushi', 'Ramen', 'Tempura', 'Matcha Dessert'],
        itinerary: [
            { time: '8:00 AM', activity: 'Visit Tokyo Tower', desc: 'Start with iconic city views', duration: '1.5 hours' },
            { time: '10:00 AM', activity: 'Explore Shibuya Crossing', desc: 'Witness the bustling intersection', duration: '1 hour' },
            { time: '11:30 AM', activity: 'Lunch at Sushi Saito', desc: 'Enjoy world-class sushi', duration: '1 hour' },
            { time: '1:00 PM', activity: 'Shop at Akihabara', desc: 'Dive into electronics and anime culture', duration: '2 hours' },
            { time: '4:00 PM', activity: 'Visit Meiji Shrine', desc: 'Peaceful traditional shrine', duration: '1.5 hours' },
            { time: '6:30 PM', activity: 'Dinner at Ichiran Ramen', desc: 'Savor authentic ramen', duration: '1 hour' },
        ],
    },






    'indore': {
        hotels: [
            { name: 'Shreemaya', price: '₹8,000/night', rating: 4.5, tags: ['Free WiFi', 'Pool', 'Spa'], image: Shreemaya },
            { name: 'Bluebonnets', price: '₹7,000/night', rating: 4.4, tags: ['Multiple Dining Options', 'Pool', 'Gym'], image: Bluebonnets },
            { name: 'Fairfield', price: '₹9,500/night', rating: 4.6, tags: ['Excellent Service', 'Good Food'], image: Fairfield },
        ],
        weather: { temp: '25°C', desc: 'Partly Cloudy', humidity: '60%', wind: '15 km/h', forecast: ['Sunny 30° 19°', 'Cloudy 28° 20°', 'Partly Cloudy 27° 18°', 'Sunny 31° 21°'] },
        spots: [
            { name: 'Rajwada Palace', time: '2–3 hours', desc: 'Historic palace showcasing Holkar dynasty architecture.', image: RajwadaPalace },
            { name: 'Patalpani Water Fall', time: '1–2 hours', desc: 'Grand palace reflecting the taste of Holkar rulers.', image: PatalPaniWaterFall },
            { name: 'Shri Annapurna Temple', time: '1 hour', desc: 'Famous temple dedicated to Lord Ganesh.', image: ShriAnnapurnaTemple },
            { name: 'Central Museum', time: '1–2 hours', desc: 'Museum with a rich collection of artifacts and sculptures.', image: CentralMuseum  },
        ],
        explore: { title: 'Explore Indore', locations: 'Explore Indore locations' },
        food: [
            { name: 'Poha Jalebi', type: 'Breakfast', desc: 'Indore’s iconic breakfast dish.', rating: 4.5, price: '₹', /* image: optional */ },
            { name: 'Sarafa Bazaar', type: 'Street Food', desc: 'Night food market offering a variety of local snacks.', rating: 4.7, price: '₹₹', /* image: optional */ },
            { name: 'Dal Bafla', type: 'Local Cuisine', desc: 'A popular dish similar to Dal Baati.', rating: 4.6, price: '₹₹', /* image: optional */ },
        ],
        dishes: ['Poha', 'Jalebi', 'Bhutta Kees', 'Khopra Patties'],
        itinerary: [
            { time: '9:00 AM', activity: 'Visit Rajwada Palace', desc: 'Explore the historical grandeur of Rajwada.', duration: '2 hours' },
            { time: '11:30 AM', activity: 'Explore Patalpani Water Fall', desc: 'Discover the elegant Lal Bagh Palace.', duration: '1.5 hours' },
            { time: '1:00 PM', activity: 'Lunch at Local Restaurant', desc: 'Try the famous Dal Bafla.', duration: '1 hour' },
            { time: '2:30 PM', activity: 'Visit Shri Annapurna Temple', desc: 'Seek blessings at the popular Ganesh temple.', duration: '1 hour' },
            { time: '4:00 PM', activity: 'Explore Central Museum', desc: 'Immerse yourself in history and art.', duration: '1.5 hours' },
            { time: '7:00 PM', activity: 'Dinner at Sarafa Bazaar', desc: 'Enjoy Indore’s vibrant street food scene.', duration: '2 hours' },
        ],
    },

    'udaipur': {
        hotels: [
            { name: 'Hotel Rang Niwas Palace', price: '₹35,000/night', rating: 4.9, tags: ['Luxury', 'Lake Pichola View', 'Spa'], image: RangNiwasPalace },
            { name: 'Hotel Swaroop Vilas', price: '₹30,000/night', rating: 4.8, tags: ['Heritage', 'Floating Palace', 'Romantic'], image: SwaroopVilas },
            { name: 'Taj Fateh Prakash Palace', price: '₹32,000/night', rating: 4.8, tags: ['Modern Luxury', 'Lake View', 'Fine Dining'], image: FatehPrakashPalace },
        ],
        weather: { temp: '28°C', desc: 'Sunny', humidity: '55%', wind: '10 km/h', forecast: ['Sunny 32° 22°', 'Partly Cloudy 30° 21°', 'Sunny 33° 23°', 'Cloudy 29° 20°'] },
        spots: [
            { name: 'Ahar Cenotaphs', time: '2–3 hours', desc: 'Majestic palace complex with stunning views of Lake Pichola.', image: AharCenotaphs },
            { name: 'City Palace', time: '1–2 hours', desc: 'Beautiful lake with boat tours and island palaces.', image: CityPalace },
            { name: 'Shilpgram', time: '1 hour', desc: 'Palace located on an island in Lake Pichola.', image: Shilpgram },
            { name: 'Vintage Car Museum', time: '1–2 hours', desc: 'Garden with fountains and kiosks.', image: VintageCarMuseum },
        ],
        explore: { title: 'Explore Udaipur', locations: 'Explore Udaipur locations' },
        food: [
            { name: 'Dal Baati Churma', type: 'Local Cuisine', desc: 'Signature Rajasthani dish.', rating: 4.7, price: '₹₹', /* image: optional */ },
            { name: 'Kachori', type: 'Snack', desc: 'Popular fried pastry with spicy filling.', rating: 4.5, price: '₹', /* image: optional */ },
            { name: 'Laal Maas', type: 'Non-Vegetarian', desc: 'Spicy mutton curry.', rating: 4.6, price: '₹₹₹', /* image: optional */ },
        ],
        dishes: ['Dal Baati Churma', 'Gatte ki Sabzi', 'Ker Sangri', 'Mirchi Bada'],
        itinerary: [
            { time: '9:00 AM', activity: 'Visit City Palace', desc: 'Explore the grandeur of the City Palace.', duration: '3 hours' },
            { time: '12:30 PM', activity: 'Lunch at Local Restaurant', desc: 'Savor the traditional Dal Baati Churma.', duration: '1.5 hours' },
            { time: '2:30 PM', activity: 'Boat Ride on Lake Pichola', desc: 'Enjoy the scenic beauty and visit Jag Mandir.', duration: '2 hours' },
            { time: '5:00 PM', activity: 'Explore Saheliyon ki Bari', desc: 'Relax in the garden with fountains.', duration: '1.5 hours' },
            { time: '7:30 PM', activity: 'Dinner at Rooftop Restaurant', desc: 'Enjoy a meal with a view of the illuminated palaces.', duration: '2 hours' },
        ],
    },

    'darjeeling': {
        hotels: [
            { name: 'Udaan Hotels', price: '₹6,000/night', rating: 4.6, tags: ['Elegant Rooms', 'Gardens', 'Casual Dining'], image: UdaanHotel },
            { name: 'Central Heritage Resort', price: '₹5,500/night', rating: 4.2, tags: ['Mountain Views', 'Restaurant', 'Free Breakfast'], image: CentralHeritageResort },
            { name: 'Hotel Shangri', price: '₹8,000/night', rating: 4.8, tags: ['Tea Estate', 'Luxury', 'Scenic Views'], image: ShangriHotel },
        ],
        weather: { temp: '15°C', desc: 'Misty', humidity: '70%', wind: '5 km/h', forecast: ['Cloudy 18° 10°', 'Rainy 16° 9°', 'Partly Cloudy 17° 11°', 'Cloudy 19° 12°'] },
        spots: [
            { name: 'Tiger Hill', time: '2-3 hours (including travel)', desc: 'Famous for its panoramic views of sunrise over Kanchenjunga.', image: TigerHill },
            { name: 'Dali-Monastery', time: '2 hours (toy train ride)', desc: 'UNESCO World Heritage Site, a charming narrow-gauge railway.', image: DaliMonastery },
            { name: 'Observatory Hill', time: '2-3 hours', desc: 'Home to endangered species like Red Panda and Snow Leopard.', image: ObservatoryHill },
            { name: 'Tea Garden', time: '1 hour', desc: 'Scenic railway loop with a war memorial and garden.', image: TeaGarden },
        ],
        explore: { title: 'Explore Darjeeling', locations: 'Explore Darjeeling locations' },
        food: [
            { name: 'Momos', type: 'Street Food', desc: 'Steamed or fried dumplings with various fillings.', rating: 4.6, price: '₹', /* image: optional */ },
            { name: 'Thukpa', type: 'Noodle Soup', desc: 'Hearty noodle soup with Tibetan origins.', rating: 4.5, price: '₹', /* image: optional */ },
            { name: 'Darjeeling Tea', type: 'Beverage', desc: 'World-renowned tea with a delicate flavour.', rating: 4.8, price: '₹₹', /* image: optional */ },
        ],
        dishes: ['Momo', 'Thukpa', 'Sel Roti', 'Aloo Dum'],
        itinerary: [
            { time: '5:00 AM', activity: 'Sunrise at Tiger Hill', desc: 'Wake up early to witness the spectacular sunrise over Kanchenjunga.', duration: '3 hours' },
            { time: '9:00 AM', activity: 'Toy Train Ride', desc: 'Experience the scenic toy train ride on the Darjeeling Himalayan Railway.', duration: '2 hours' },
            { time: '11:30 AM', activity: 'Visit Zoological Park', desc: 'See rare Himalayan animals.', duration: '2.5 hours' },
            { time: '2:00 PM', activity: 'Lunch at Local Restaurant', desc: 'Enjoy momos and thukpa.', duration: '1 hour' },
            { time: '3:30 PM', activity: 'Explore Batasia Loop', desc: 'Visit the war memorial and enjoy the views.', duration: '1.5 hours' },
            { time: '5:30 PM', activity: 'Tea Tasting', desc: 'Sample different varieties of Darjeeling tea.', duration: '1 hour' },
        ],
    },

    'kerala': {
        hotels: [
            { name: 'Port Muziris', price: '₹12,000/night', rating: 4.6, tags: ['Beachfront', 'Spa', 'Multiple Restaurants'], image: PortMuziris },
            { name: 'Gateway Bekal', price: '₹10,000/night', rating: 4.7, tags: ['Water Views', 'Rooftop Bar', 'Spa'], image: GatewayBekal },
            { name: 'The Leela Ashtamudi', price: '₹15,000/night', rating: 4.6, tags: ['Backwaters', 'Villas', 'Ayurvedic Spa'], image: TheLeelaAshtamudi },
        ],
        weather: { temp: '27°C', desc: 'Humid', humidity: '80%', wind: '10 km/h', forecast: ['Partly Cloudy 29° 23°', 'Rainy 26° 22°', 'Sunny 30° 24°', 'Cloudy 28° 23°'] },
        spots: [
            { name: 'Trivandrum', time: 'Full Day', desc: 'Experience serene houseboat cruises along the backwaters.', image: Trivandrum },
            { name: 'Munnar Tea Plantations', time: 'Full Day', desc: 'Explore the lush green tea estates and enjoy scenic views.', image: Munnar },
            { name: 'Varkala', time: 'Full Day', desc: 'Visit historical sites like Fort Kochi, Chinese Fishing Nets, and Jewish Synagogue.', image: Varkala },
            { name: 'Alappuzha', time: '2-3 Days', desc: 'Discover waterfalls, caves, and wildlife sanctuaries.', image: Alappuzha },
        ],
        explore: { title: 'Explore Kerala', locations: 'Explore Kerala locations' },
        food: [
            { name: 'Appam with Stew', type: 'Breakfast', desc: 'Lacy pancakes served with a flavorful vegetable or meat stew.', rating: 4.7, price: '₹₹', /* image: optional */ },
            { name: 'Kerala Fish Curry', type: 'Seafood', desc: 'Tangy and spicy fish curry cooked in coconut milk.', rating: 4.6, price: '₹₹', /* image: optional */ },
            { name: 'Thalassery Biryani', type: 'Rice Dish', desc: 'Fragrant biryani made with kaima rice and spices.', rating: 4.5, price: '₹₹₹', /* image: optional */ },
        ],
        dishes: ['Puttu and Kadala Curry', 'Idiyappam with Curry', 'Erissery', 'Palada Payasam'],
        itinerary: [
            { time: 'Day 1', activity: 'Explore Kochi', desc: 'Visit Fort Kochi, Chinese Fishing Nets, St. Francis Church, and enjoy a Kathakali performance.', duration: 'Full Day' },
            { time: 'Day 2', activity: 'Travel to Munnar', desc: 'Drive to Munnar and check into your hotel. Enjoy the scenic journey.', duration: 'Full Day' },
            { time: 'Day 3', activity: 'Munnar Sightseeing', desc: 'Visit tea plantations, Mattupetty Dam, Echo Point, and Eravikulam National Park.', duration: 'Full Day' },
            { time: 'Day 4', activity: 'Alleppey Houseboat', desc: 'Drive to Alleppey and embark on a relaxing houseboat cruise in the backwaters.', duration: 'Full Day' },
            { time: 'Day 5', activity: 'Kumarakom Visit', desc: 'Explore the bird sanctuary in Kumarakom or enjoy an Ayurvedic massage.', duration: 'Full Day' },
            { time: 'Day 6', activity: 'Travel to Wayanad (Optional)', desc: 'If time permits, explore the waterfalls and wildlife in Wayanad.', duration: 'Full Day' },
        ],
    },





}

export default data;