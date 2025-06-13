
const billionaires = [

  
   // Example for Elon Musk
{
    name: "Bernard Arnault",
    netWorth: 195000000000,
    description: "CEO of LVMH",
    icon: "",
    category: "Businessman",
    image: "https://imageio.forbes.com/specials-images/imageserve/5c76943831358e35dd277381/0x0.jpg?format=jpg&crop=814,814,x0,y0,safe&width=416"
  },
  {
    name: "Jeff Bezos",
    netWorth: 184000000000,
    description: "Founder of Amazon",
    icon: "",
    image: "https://imageio.forbes.com/specials-images/imageserve/5bb22ae84bbe6f67d2e82e05/0x0.jpg?format=jpg&crop=1012,1013,x627,y129,safe&width=416"
  },
  {
    name: "Elon Musk",
    netWorth: 180000000000,
    description: "CEO of Tesla and SpaceX",
    icon: "",
    category: "Businessman",
    image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR6bAaKXafqo8j-faUhkf6EixtnE2ER6_k02C4DM45RlLK_69ly0b4BqecKl7r1MH6s2tsshXIp-zk43QHoAaCQI22dY7wOyzpAkKG5Q9BmYw"
  },
  {
    name: "Bill Gates",
    netWorth: 130000000000,
    description: "Co-founder of Microsoft",
    icon: "",
    category: "Businessman",
    image: "https://imageio.forbes.com/specials-images/imageserve/62d59facbe3ff49348f9b9c4/0x0.jpg?format=jpg&crop=1668,1668,x154,y651,safe&width=416"
  },
  {
    name: "Warren Buffett",
    netWorth: 118000000000,
    description: "CEO of Berkshire Hathaway",
    icon: "",
    category: "Businessman",
    image: "https://imageio.forbes.com/specials-images/imageserve/5c76b7d331358e35dd2773a9/0x0.jpg?format=jpg&crop=1004,1004,x0,y0,safe&width=416"
  },
  {
    name: "Larry Page",
    netWorth: 115000000000,
    description: "Co-founder of Google",
    icon: "",
    category: "Businessman",
    image: "https://imageio.forbes.com/specials-images/imageserve/5c7695c831358e35dd277415/0x0.jpg?format=jpg&crop=1727,1727,x0,y0,safe&width=416"
  },
  {
    name: "Sergey Brin",
    netWorth: 110000000000,
    description: "Co-founder of Google",
    icon: "",
    category: "Businessman",
    image: "ttps://imageio.forbes.com/specials-images/imageserve/5c76970d4bbe6f35a2a47eb5/0x0.jpg?format=jpg&crop=1620,1620,x0,y0,safe&width=416"
  },
  {
    name: "Larry Ellison",
    netWorth: 108000000000,
    description: "Co-founder of Oracle",
    icon: "",
    category: "Businessman",
    image: "https://imageio.forbes.com/specials-images/imageserve/5c76962331358e35dd2773f7/0x0.jpg?format=jpg&crop=1080,1080,x0,y0,safe&width=416"
  },
  {
    name: "Steve Ballmer",
    netWorth: 105000000000,
    description: "Former CEO of Microsoft",
    icon: "",
    category: "Businessman",
    
    image: "https://imageio.forbes.com/specials-images/imageserve/5c7693a131358e35dd2773d1/0x0.jpg?format=jpg&crop=814,814,x0,y0,safe&width=416"
  },
  {
    name: "Mukesh Ambani",
    netWorth: 95000000000,
    description: "Chairman of Reliance Industries",
    icon: "",
    category: "Businessman",
    image: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202209/mukesh-ambani-1200x768.jpeg"
  },
  {
    name: "Francoise Bettencourt Meyers",
    netWorth: 92000000000,
    description: "Heiress of L'Oréal",
    icon: "",
    category: "Businessman",
    image: "https://imageio.forbes.com/specials-images/imageserve/5c76945331358e35dd277383/0x0.jpg?format=jpg&crop=814,814,x0,y0,safe&width=416"
  },
  {
    name: "Mark Zuckerberg",
    netWorth: 90000000000,
    description: "CEO of Meta (Facebook)",
    icon: "",
    category: "Businessman",
    image: "https://imageio.forbes.com/specials-images/imageserve/5c76b85331358e35dd2773ca/0x0.jpg?format=jpg&crop=814,814,x0,y0,safe&width=416"
  },
  {
    name: "Amancio Ortega",
    netWorth: 85000000000,
    description: "Founder of Zara (Inditex)",
    icon: "",
    category: "Businessman",
    image: "https://cdn.britannica.com/48/195348-050-C4D1D85A/Amancio-Ortega-2011.jpg"
  },
  {
    name: "Michael Bloomberg",
    netWorth: 82000000000,
    description: "Founder of Bloomberg LP",
    icon: "",
    category: "Businessman",
    image: "https://imageio.forbes.com/specials-images/imageserve/5c76941931358e35dd277377/0x0.jpg?format=jpg&crop=814,814,x0,y0,safe&width=416"
  },
  {
    name: "Carlos Slim",
    netWorth: 78000000000,
    description: "Chairman of Grupo Carso",
    icon: "",
    category: "Businessman",
    image: "https://imageio.forbes.com/specials-images/imageserve/5c7697b731358e35dd277423/0x0.jpg?format=jpg&crop=814,814,x0,y0,safe&width=416"
  },
  {
    name: "Gautam Adani",
    netWorth: 75000000000,
    description: "Chairman of Adani Group",
    icon: "",
    category: "Businessman",
    image: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202209/gautam_adani_1200x768.jpeg"
  },
  {
    name: "Jim Walton",
    netWorth: 70000000000,
    description: "Heir to Walmart fortune",
    icon: "",
    category: "Businessman",
    image: "https://imageio.forbes.com/specials-images/imageserve/5c769e5831358e35dd277457/0x0.jpg?format=jpg&crop=814,814,x0,y0,safe&width=416"
  },
  {
    name: "Rob Walton",
    netWorth: 68000000000,
    description: "Heir to Walmart fortune",
    icon: "",
    category: "Businessman",
    image: "https://imageio.forbes.com/specials-images/imageserve/5c769e8531358e35dd277459/0x0.jpg?format=jpg&crop=814,814,x0,y0,safe&width=416"
  },
  {
    name: "Alice Walton",
    netWorth: 67000000000,
    description: "Heiress to Walmart fortune",
    icon: "",
    category: "Businessman",
    image: "https://imageio.forbes.com/specials-images/imageserve/5c769d8131358e35dd277441/0x0.jpg?format=jpg&crop=814,814,x0,y0,safe&width=416"
  },
  {
    name: "Zhong Shanshan",
    netWorth: 65000000000,
    description: "Founder of Nongfu Spring",
    icon: "",
    category: "Businessman",
    image: "https://img.etimg.com/thumb/msid-80828091,width-650,height-488,imgsize-111083,,resizemode-75/zhong-shanshan.jpg"
  },
  {
    name: "Ma Huateng",
    netWorth: 63000000000,
    description: "CEO of Tencent",
    icon: "",
    category: "Businessman",
    image: "https://imageio.forbes.com/specials-images/imageserve/5c7696a531358e35dd277407/0x0.jpg?format=jpg&crop=814,814,x0,y0,safe&width=416"
  },
  {
    name: "Jack Ma",
    netWorth: 60000000000,
    description: "Founder of Alibaba",
    icon: "",
    category: "Businessman",
    image: "https://imageio.forbes.com/specials-images/imageserve/5c76965f31358e35dd2773fb/0x0.jpg?format=jpg&crop=814,814,x0,y0,safe&width=416"
  },
  {
    name: "Charles Koch",
    netWorth: 58000000000,
    description: "CEO of Koch Industries",
    icon: "",
    category: "Businessman",
    image: "https://imageio.forbes.com/specials-images/imageserve/5c76969431358e35dd277409/0x0.jpg?format=jpg&crop=814,814,x0,y0,safe&width=416"
  },
  {
    name: "Julia Koch",
    netWorth: 58000000000,
    description: "Widow of David Koch",
    icon: "",
    category: "Businessman",
    image: "https://cdn.vox-cdn.com/thumbor/MpA2HVftSFntlPMNQ-NgEcj-Fl4=/0x213:3000x2213/1200x800/filters:focal(0x213:3000x2213)/cdn.vox-cdn.com/uploads/chorus_image/image/54236901/shutterstock_533661251.0.jpg"
  },
  {
    name: "Jacqueline Mars",
    netWorth: 55000000000,
    description: "Heiress to Mars fortune",
    icon: "",
    category: "Businessman",
    image: "https://imageio.forbes.com/specials-images/imageserve/5c7696d831358e35dd27740f/0x0.jpg?format=jpg&crop=814,814,x0,y0,safe&width=416"
  },
  {
    name: "John Mars",
    netWorth: 55000000000,
    description: "Heir to Mars fortune",
    icon: "",
    category: "Businessman",
    image: "https://imageio.forbes.com/specials-images/imageserve/5c7696e831358e35dd277411/0x0.jpg?format=jpg&crop=814,814,x0,y0,safe&width=416"
  },
  {
    name: "Miriam Adelson",
    netWorth: 52000000000,
    description: "Widow of Sheldon Adelson",
    icon: "",
    category: "Businessman",
    image: "https://cdn.businessinsider.de/wp-content/uploads/2021/02/GettyImages-1208393421-800x533.jpg"
  },
  {
    name: "Phil Knight",
    netWorth: 50000000000,
    description: "Co-founder of Nike",
    icon: "",
    category: "Businessman",
    image: "https://imageio.forbes.com/specials-images/imageserve/5c76973831358e35dd277419/0x0.jpg?format=jpg&crop=814,814,x0,y0,safe&width=416"
  },
  {
    name: "Michael Dell",
    netWorth: 48000000000,
    description: "Founder of Dell Technologies",
    icon: "",
    category: "Businessman",
    image: "https://imageio.forbes.com/specials-images/imageserve/5c7694b731358e35dd277387/0x0.jpg?format=jpg&crop=814,814,x0,y0,safe&width=416"
  },
  {
    name: "Tadashi Yanai",
    netWorth: 46000000000,
    description: "Founder of Uniqlo",
    icon: "",
    category: "Businessman",
    image: "https://imageio.forbes.com/specials-images/imageserve/5c769b5531358e35dd277443/0x0.jpg?format=jpg&crop=814,814,x0,y0,safe&width=416"
  },
  {
    name: "Giovanni Ferrero",
    netWorth: 45000000000,
    description: "Chairman of Ferrero Group",
    icon: "",
    category: "Businessman",
    image: "https://cdn.geekwire.com/wp-content/uploads/2019/03/giovanni-ferrero-630x472.jpg"
  },
  {
    name: "Len Blavatnik",
    netWorth: 44000000000,
    description: "Founder of Access Industries",
    icon: "",
    category: "Businessman",
    image: "https://imageio.forbes.com/specials-images/imageserve/5c76941031358e35dd277375/0x0.jpg?format=jpg&crop=814,814,x0,y0,safe&width=416"
  },
  {
    name: "Susanne Klatten",
    netWorth: 43000000000,
    description: "BMW heiress",
    icon: "",
    category: "Businessman",
    image: "https://imageio.forbes.com/specials-images/imageserve/5c76976431358e35dd27741d/0x0.jpg?format=jpg&crop=814,814,x0,y0,safe&width=416"
  },
  {
    name: "François Pinault",
    netWorth: 42000000000,
    description: "Founder of Kering",
    icon: "",
    category: "Businessman",
    image: "https://imageio.forbes.com/specials-images/imageserve/5c76975031358e35dd27741b/0x0.jpg?format=jpg&crop=814,814,x0,y0,safe&width=416"
  },
  {
    name: "Gina Rinehart",
    netWorth: 41000000000,
    description: "Chairman of Hancock Prospecting",
    icon: "",
    category: "Businessman",
    image: "https://imageio.forbes.com/specials-images/imageserve/5c76975e31358e35dd27741f/0x0.jpg?format=jpg&crop=814,814,x0,y0,safe&width=416"
  },
  {
    name: "Zhang Yiming",
    netWorth: 40000000000,
    description: "Founder of ByteDance (TikTok)",
    icon: "",
    category: "Businessman",
    image: "https://img.etimg.com/thumb/msid-91069102,width-650,height-488,imgsize-31684,,resizemode-75/zhang-yiming.jpg"
  },
  {
    name: "Dieter Schwarz",
    netWorth: 39000000000,
    description: "Owner of Lidl and Kaufland",
    icon: "",
    category: "Businessman",
    image: "https://imageio.forbes.com/specials-images/imageserve/5c7695a031358e35dd277413/0x0.jpg?format=jpg&crop=814,814,x0,y0,safe&width=416"
  },
  {
    name: "Stephen Schwarzman",
    netWorth: 38000000000,
    description: "CEO of Blackstone",
    icon: "",
    category: "Businessman",
    image: "https://imageio.forbes.com/specials-images/imageserve/5c76978431358e35dd277425/0x0.jpg?format=jpg&crop=814,814,x0,y0,safe&width=416"
  },
    {
    name: "CarryMinati (Ajey Nagar)",
    netWorth: 4000000,
    description: "Gaming and Comedy Content Creator",
    category: "Youtuber",
    image: "https://imageio.forbes.com/specials-images/imageserve/6076f5c5c3f3e38aa28227c0/CarryMinati/960x0.jpg"
  },
  {
    name: "Total Gaming (Ajjubhai)",
    netWorth: 3500000,
    description: "Gaming Content Creator - Free Fire",
    category: "Youtuber",
    image: "https://cdn.thedailystar.net/sites/default/files/styles/big_202/public/images/2022/05/16/ajjubhai.jpg"
  },
  {
    name: "BB Ki Vines (Bhuvan Bam)",
    netWorth: 3200000,
    description: "Comedy Sketch Creator and Actor",
    category: "Youtuber",
    image: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202201/bhuvan_bam_1200x768.jpeg"
  },
  {
    name: "Ashish Chanchlani",
    netWorth: 2800000,
    description: "Comedy and Entertainment Creator",
    category: "Youtuber",
    image: "https://www.bollywoodhungama.com/wp-content/uploads/2020/08/Ashish-Chanchlani.jpg"
  },
  {
    name: "Round2Hell (R2H)",
    netWorth: 2500000,
    description: "Comedy Trio - Nazim, Wasim, Zayn",
    category: "Youtuber",
    image: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202106/round2hell_1200x768.jpeg"
  },
  {
    name: "Amit Bhadana",
    netWorth: 2200000,
    description: "Comedy Content Creator",
    category: "Youtuber",
    image: "https://images.indianexpress.com/2020/05/amit-bhadana-1.jpg"
  },
  {
    name: "Technical Guruji (Gaurav Chaudhary)",
    netWorth: 2000000,
    description: "Tech Reviews and Tutorials",
    category: "Youtuber",
    image: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202112/technical_guruji_1200x768.jpeg"
  },

  
];
const shoppingItems = {
    realEstate: [
        { name: "Luxury Mansion", price: 50000000, image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80" },
        { name: "Private Island", price: 100000000, image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80" },
        { name: "Skyscraper", price: 500000000, image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=400&q=80" },
      
  
  { name: "Luxury Mansion",        price: 50000000, image: "https://picsum.photos/id/1018/600/400" },
  { name: "Modern Apartment",      price: 15000000, image: "https://picsum.photos/id/1025/600/400" },
  { name: "Beachfront Villa",      price: 40000000, image: "https://picsum.photos/id/1027/600/400" },
  { name: "City Penthouse",        price: 35000000, image: "https://picsum.photos/id/1031/600/400" },
  { name: "Suburban Home",         price: 10000000, image: "https://placeimg.com/600/400/arch" },
  { name: "Countryside Cottage",   price: 7500000,  image: "https://placeimg.com/600/400/nature" },
  { name: "Studio Apartment",      price: 5000000,  image: "https://placeimg.com/600/400/interior" },
  { name: "Mountain Cabin",        price: 8500000,  image: "https://picsum.photos/id/1056/600/400" },
  { name: "Eco-Friendly Home",     price: 12000000, image: "https://placeimg.com/600/400/tech" },
  { name: "Historic Mansion",      price: 30000000, image: "https://picsum.photos/id/1003/600/400" },
  { name: "Urban Loft",            price: 18000000, image: "https://placeimg.com/600/400/urban" },
  { name: "Riverside Bungalow",    price: 14000000, image: "https://picsum.photos/id/1059/600/400" },
  { name: "Tiny House",            price: 4000000,  image: "https://placeimg.com/600/400/people" },
  { name: "Desert Retreat",        price: 16000000, image: "https://picsum.photos/id/1005/600/400" },
  { name: "Private Island Villa",  price: 80000000, image: "https://placeimg.com/600/400/beach" }
],

  
    vehicles: [
        { name: "Ferrari LaFerrari", price: 1500000 },
        { name: "Private Jet", price: 75000000 },
        { name: "Super Yacht", price: 200000000 },
      
  // CARS
  { name: "Tesla Model S",             price: 90000,   image: "https://picsum.photos/id/1011/600/400" },
  { name: "Lamborghini Aventador",     price: 500000,  image: "https://picsum.photos/id/1003/600/400" },
  { name: "Ferrari LaFerrari",         price: 450000,  image: "https://picsum.photos/id/1022/600/400" },
  { name: "Bugatti Chiron",            price: 600000,  image: "https://picsum.photos/id/1015/600/400" },
  { name: "Rolls-Royce Phantom",       price: 550000,  image: "https://picsum.photos/id/1036/600/400" },
  { name: "Porsche 911",               price: 200000,  image: "https://picsum.photos/id/1021/600/400" },
  { name: "Ford Mustang",              price: 80000,   image: "https://picsum.photos/id/1012/600/400" },
  { name: "Chevrolet Camaro",          price: 75000,   image: "https://picsum.photos/id/1052/600/400" },
  { name: "BMW M3",                    price: 85000,   image: "https://picsum.photos/id/1031/600/400" },
  { name: "Audi R8",                   price: 120000,  image: "https://picsum.photos/id/1042/600/400" },
  { name: "Mercedes-Benz S-Class",     price: 95000,   image: "https://picsum.photos/id/1033/600/400" },
  { name: "Nissan GT-R",               price: 110000,  image: "https://picsum.photos/id/1051/600/400" },
  { name: "Jeep Wrangler",             price: 60000,   image: "https://picsum.photos/id/1020/600/400" },
  { name: "Land Rover Defender",       price: 95000,   image: "https://picsum.photos/id/1060/600/400" },
  { name: "Honda Civic",               price: 25000,   image: "https://picsum.photos/id/1044/600/400" },
  { name: "Toyota Supra",              price: 43000,   image: "https://picsum.photos/id/1035/600/400" },
  { name: "Hyundai Creta",             price: 22000,   image: "https://picsum.photos/id/1049/600/400" },
  { name: "Mahindra Thar",             price: 18000,   image: "https://picsum.photos/id/1055/600/400" },
  { name: "Toyota Land Cruiser",       price: 85000,   image: "https://picsum.photos/id/1056/600/400" },
  { name: "Urban Mini Cooper",         price: 27000,   image: "https://picsum.photos/id/1024/600/400" },

  { name: "Royal Enfield Classic 350", price: 2700,    image: "https://picsum.photos/id/1001/600/400" },
  { name: "KTM Duke 390",              price: 4000,    image: "https://picsum.photos/id/1012/600/400" },
  { name: "Yamaha R15 V4",             price: 2300,    image: "https://picsum.photos/id/1035/600/400" },
  { name: "Honda CBR 650R",            price: 11000,   image: "https://picsum.photos/id/1040/600/400" },
  { name: "TVS Apache RR 310",         price: 3100,    image: "https://picsum.photos/id/1041/600/400" },
  { name: "Suzuki Hayabusa",           price: 19500,   image: "https://picsum.photos/id/1011/600/400" },
  { name: "BMW S1000RR",               price: 24500,   image: "https://picsum.photos/id/1003/600/400" },
  { name: "Ducati Panigale V4",        price: 28000,   image: "https://picsum.photos/id/1050/600/400" },
  { name: "Harley-Davidson Iron 883",  price: 12500,   image: "https://picsum.photos/id/1027/600/400" },
  { name: "Kawasaki Ninja ZX-10R",     price: 17000,   image: "https://picsum.photos/id/1048/600/400" },
  { name: "Hero Xpulse 200",           price: 1600,    image: "https://picsum.photos/id/1033/600/400" },
  { name: "Kawasaki Z650",             price: 7200,    image: "https://picsum.photos/id/1031/600/400" },
  { name: "Triumph Street Triple",     price: 9500,    image: "https://picsum.photos/id/1043/600/400" },
  { name: "Bajaj Dominar 400",         price: 2500,    image: "https://picsum.photos/id/1025/600/400" },
  { name: "Honda CB350 H'ness",        price: 2300,    image: "https://picsum.photos/id/1016/600/400" },
  { name: "Royal Enfield Himalayan",   price: 2800,    image: "https://picsum.photos/id/1026/600/400" },
  { name: "Yamaha MT-15",              price: 2200,    image: "https://picsum.photos/id/1005/600/400" },
  { name: "Benelli 502C",              price: 5900,    image: "https://picsum.photos/id/1051/600/400" },
  { name: "Harley-Davidson Street Glide", price: 33000, image: "https://picsum.photos/id/1062/600/400" },
  { name: "TVS Raider 125",            price: 1500,    image: "https://picsum.photos/id/1047/600/400" },


  { name: "Gulfstream G700 Private Jet",     price: 75000000, image: "https://picsum.photos/id/1084/600/400" },
  { name: "Bell 429 Helicopter",             price: 8500000,  image: "https://picsum.photos/id/1076/600/400" },
  { name: "Ferretti 780 Luxury Yacht",       price: 5000000,  image: "https://picsum.photos/id/1080/600/400" },
  { name: "Sunseeker Predator 55",           price: 2200000,  image: "https://picsum.photos/id/1069/600/400" },
  { name: "Amtrak Acela Express Train",      price: 30000000, image: "https://picsum.photos/id/1073/600/400" },
  { name: "Tesla Semi Truck",                price: 180000,   image: "https://picsum.photos/id/1068/600/400" },
  { name: "Volvo FH16 Heavy Truck",          price: 150000,   image: "https://picsum.photos/id/1065/600/400" },
  { name: "Can-Am Maverick X3 ATV",          price: 28000,    image: "https://picsum.photos/id/1071/600/400" },
  { name: "Sea-Doo GTX Limited 300 (Jet Ski)", price: 17000,  image: "https://picsum.photos/id/1064/600/400" },
  { name: "John Deere 8R Series Tractor",    price: 350000,   image: "https://picsum.photos/id/1059/600/400" }


],
 fashionAndAppearance : [
  { name: "Gucci GG Supreme Jacket",         price: 3200,    image: "https://picsum.photos/id/1120/600/400" },
  { name: "Balenciaga Triple S Sneakers",    price: 995,     image: "https://picsum.photos/id/1121/600/400" },
  { name: "Prada Linea Rossa Sunglasses",    price: 525,     image: "https://picsum.photos/id/1122/600/400" },
  { name: "Louis Vuitton Leather Belt",      price: 740,     image: "https://picsum.photos/id/1123/600/400" },
  { name: "Dior Oblique Saddle Bag",         price: 3800,    image: "https://picsum.photos/id/1124/600/400" },
  { name: "Versace Medusa Robe",             price: 595,     image: "https://picsum.photos/id/1125/600/400" },
  { name: "Tom Ford Noir Perfume",           price: 195,     image: "https://picsum.photos/id/1126/600/400" },
  { name: "Armani Men's Suit",               price: 2500,    image: "https://picsum.photos/id/1127/600/400" },
  { name: "Cartier Love Bracelet",           price: 7400,    image: "https://picsum.photos/id/1128/600/400" },
  { name: "Givenchy Leather Boots",          price: 1290,    image: "https://picsum.photos/id/1129/600/400" },

  { name: "Chanel Tweed Jacket",                 price: 6000,    image: "https://picsum.photos/id/1130/600/400" },
  { name: "Saint Laurent Leather Pants",         price: 2990,    image: "https://picsum.photos/id/1131/600/400" },
  { name: "Off-White Industrial Belt",           price: 450,     image: "https://picsum.photos/id/1132/600/400" },
  { name: "Burberry Trench Coat",                price: 2450,    image: "https://picsum.photos/id/1133/600/400" },
  { name: "Bottega Veneta Mini Jodie Bag",       price: 3200,    image: "https://picsum.photos/id/1134/600/400" },
  { name: "Alexander McQueen Oversized Sneakers",price: 650,     image: "https://picsum.photos/id/1135/600/400" },
  { name: "Fendi FF Logo Scarf",                 price: 490,     image: "https://picsum.photos/id/1136/600/400" },
  { name: "Salvatore Ferragamo Loafers",         price: 895,     image: "https://picsum.photos/id/1137/600/400" },
  { name: "Yves Saint Laurent Tuxedo Blazer",    price: 3300,    image: "https://picsum.photos/id/1138/600/400" },
  { name: "Balmain Gold Button Blazer",          price: 2800,    image: "https://picsum.photos/id/1139/600/400" },
  { name: "Dolce & Gabbana Lace Dress",          price: 4100,    image: "https://picsum.photos/id/1140/600/400" },
  { name: "Moschino Teddy Bear Hoodie",          price: 780,     image: "https://picsum.photos/id/1141/600/400" },
  { name: "Ralph Lauren Purple Label Suit",      price: 4000,    image: "https://picsum.photos/id/1142/600/400" },
  { name: "Gucci GG Marmont Mini Bag",           price: 2100,    image: "https://picsum.photos/id/1143/600/400" },
  { name: "Tiffany & Co. Elsa Peretti Necklace", price: 4200,    image: "https://picsum.photos/id/1144/600/400" },
  { name: "Maison Margiela Tabi Boots",          price: 1180,    image: "https://picsum.photos/id/1145/600/400" },
  { name: "Givenchy Aviator Sunglasses",         price: 650,     image: "https://picsum.photos/id/1146/600/400" },
  { name: "Loro Piana Cashmere Sweater",         price: 2700,    image: "https://picsum.photos/id/1147/600/400" },
  { name: "Versace Crystal Studded Belt",        price: 1150,    image: "https://picsum.photos/id/1148/600/400" },
  { name: "Tom Ford Leather Wallet",             price: 850,     image: "https://picsum.photos/id/1149/600/400" }


],


    
    investments: [
        { name: "Tech Startup", price: 100000000 },
        { name: "Sports Team", price: 3000000000 },
        { name: "Media Company", price: 5000000000 },
      
  { name: "Real Estate Property",      price: 100000,     image: "https://picsum.photos/id/1023/600/400" },
  { name: "Stock Market (S&P 500 ETF)",price: 500,         image: "https://picsum.photos/id/1010/600/400" },
  { name: "Gold Bullion",              price: 65000,       image: "https://picsum.photos/id/1032/600/400" },
  { name: "Cryptocurrency (Bitcoin)",  price: 69000,       image: "https://picsum.photos/id/1045/600/400" },
  { name: "Luxury Art",                price: 250000,      image: "https://picsum.photos/id/1053/600/400" },
  { name: "Fine Wine Collection",      price: 15000,       image: "https://picsum.photos/id/1066/600/400" },
  { name: "Classic Cars (Collectibles)",price: 120000,     image: "https://picsum.photos/id/1070/600/400" },
  { name: "Venture Capital (Startups)",price: 50000,       image: "https://picsum.photos/id/1081/600/400" },
  { name: "Mutual Funds",              price: 1000,        image: "https://picsum.photos/id/1039/600/400" },
  { name: "Government Bonds",          price: 10000,       image: "https://picsum.photos/id/1029/600/400" }

    ],
    subscriptions: [

  { name: "Netflix (Unlimited Movies & Shows)",      price: 15.99, image: "https://picsum.photos/id/1008/600/400" },
  { name: "Xbox Game Pass Ultimate",                 price: 16.99, image: "https://picsum.photos/id/1014/600/400" },
  { name: "Spotify Premium (Ad-Free Music)",         price: 9.99,  image: "https://picsum.photos/id/1028/600/400" },
  { name: "Crunchyroll Mega Fan (Anime Lovers)",     price: 9.99,  image: "https://picsum.photos/id/1067/600/400" },
  { name: "PlayStation Plus Extra",                  price: 14.99, image: "https://picsum.photos/id/1082/600/400" },
  { name: "MasterClass (Celebrity Courses)",         price: 20.00, image: "https://picsum.photos/id/1030/600/400" },
  { name: "Audible Plus (Audiobooks & Podcasts)",    price: 7.95,  image: "https://picsum.photos/id/1038/600/400" },
  { name: "Shudder (Horror Streaming)",              price: 6.99,  image: "https://picsum.photos/id/1075/600/400" },
  { name: "Marvel Unlimited (Comics Library)",       price: 9.99,  image: "https://picsum.photos/id/1085/600/400" },
  { name: "BarkBox (Toys for Your Dog)",             price: 35.00, image: "https://picsum.photos/id/1086/600/400" },


    ],
    luxury: [ // <-- Add this section!
        { name: "Diamond Watch", price: 250000 },
        { name: "Private Concert", price: 1000000 },
        { name: "Supercar Collection", price: 5000000 },

  { name: "Rolex Daytona Watch",             price: 35000,    image: "https://picsum.photos/id/1110/600/400" },
  { name: "Vertu Signature Cobra Phone",     price: 310000,   image: "https://picsum.photos/id/1111/600/400" },
  { name: "Hermès Birkin Bag",               price: 150000,   image: "https://picsum.photos/id/1112/600/400" },
  { name: "Louis Vuitton Diamond Sneakers",  price: 10000,    image: "https://picsum.photos/id/1113/600/400" },
  { name: "Chanel Classic Flap Bag",         price: 9500,     image: "https://picsum.photos/id/1114/600/400" },
  { name: "Apple Watch Hermès Edition",      price: 1299,     image: "https://picsum.photos/id/1115/600/400" },
  { name: "Tiffany & Co. Diamond Necklace",  price: 120000,   image: "https://picsum.photos/id/1116/600/400" },
  { name: "Bugatti Chiron 24k Gold Model",   price: 2500000,  image: "https://picsum.photos/id/1117/600/400" },
  { name: "Caviar iPhone 15 Pro Max Gold",   price: 9000,     image: "https://picsum.photos/id/1118/600/400" },
  { name: "Dolce & Gabbana Gold Sunglasses", price: 1250,     image: "https://picsum.photos/id/1119/600/400" }

      
    ],
};

let currentBalance = 0;
let selectedBillionaire = null;
let purchasedItems = [];
let itemQuantities = {};

let currentPage = 0;
const CARDS_PER_PAGE = 16;
let filteredBillionaires = [...billionaires];

function formatMoney(amount) {
    if (amount >= 1000000000) {
        return '$' + (amount / 1000000000).toFixed(0) + ' Billion';
    } else if (amount >= 1000000) {
        return '$' + (amount / 1000000).toFixed(0) + ' Million';
    } else if (amount >= 1000) {
        return '$' + (amount / 1000).toFixed(0) + 'K';
    } else {
        return '$' + amount.toLocaleString();
    }
}

function formatBalance(amount) {
    return amount.toLocaleString();
}

// --- 4x4 grid rendering with paging, search, and category ---
function renderBillionaireGrid() {
    const grid = document.getElementById('billionaireGrid');
    grid.innerHTML = '';
    const start = currentPage * CARDS_PER_PAGE;
    const end = start + CARDS_PER_PAGE;
    const visible = filteredBillionaires.slice(start, end);

    visible.forEach((billionaire, index) => {
        const card = document.createElement('div');
        card.className = 'billionaire-card';
        card.onclick = () => selectBillionaire(billionaires.indexOf(visible[index]));
        card.innerHTML = `
            ${billionaire.image
                ? `<img class="billionaire-img" src="${billionaire.image}" alt="${billionaire.name}" />`
                : `<span class="billionaire-icon">${billionaire.icon}</span>`
            }
            <div class="billionaire-name">${billionaire.name}</div>
            <div class="billionaire-worth">${formatMoney(billionaire.netWorth)}</div>
            <div class="billionaire-desc">${billionaire.description}</div>
        `;
        grid.appendChild(card);
    });
    document.getElementById('carouselLeft').disabled = currentPage === 0;
    document.getElementById('carouselRight').disabled = (currentPage + 1) * CARDS_PER_PAGE >= filteredBillionaires.length;
}

function updateFilteredBillionaires() {
    const query = document.getElementById('billionaireSearchInput').value.toLowerCase();
    const selectedCategory = document.getElementById('categorySelect')?.value || "All";
    filteredBillionaires = billionaires.filter(b =>
        (selectedCategory === "All" || b.category === selectedCategory) &&
        b.name.toLowerCase().includes(query)
    );
    currentPage = 0;
    renderBillionaireGrid();
}


// --- Event bindings for paging, search, and category ---
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('carouselLeft').onclick = function() {
        if (currentPage > 0) {
            currentPage--;
            renderBillionaireGrid();
        }
    };
    document.getElementById('carouselRight').onclick = function() {
        if ((currentPage + 1) * CARDS_PER_PAGE < filteredBillionaires.length) {
            currentPage++;
            renderBillionaireGrid();
        }
    };
    document.getElementById('categorySelect').onchange = updateFilteredBillionaires;
    document.getElementById('billionaireSearchBtn').onclick = updateFilteredBillionaires;
    document.getElementById('billionaireSearchInput').oninput = updateFilteredBillionaires;
    renderBillionaireGrid();
});

// --- Add billionaire form ---
document.getElementById('addBillionaireBtn').onclick = function() {
    const form = document.getElementById('addBillionaireForm');
    form.style.display = form.style.display === 'none' ? 'block' : 'none';
};

document.getElementById('saveBillionaireBtn').onclick = function() {
    const name = document.getElementById('newBillionaireName').value.trim();
    const netWorth = parseInt(document.getElementById('newBillionaireNetWorth').value, 10);
    const description = document.getElementById('newBillionaireDesc').value.trim();
    const icon = document.getElementById('newBillionaireIcon').value.trim() || "💰";
    const category = document.getElementById('newBillionaireCategory').value;

    if (!name || isNaN(netWorth) || netWorth <= 0) {
        alert('Please enter a valid name and net worth.');
        return;
    }

    billionaires.push({
        name,
        netWorth,
        description: description || "No description",
        icon,
        category
    });

    document.getElementById('newBillionaireName').value = '';
    document.getElementById('newBillionaireNetWorth').value = '';
    document.getElementById('newBillionaireDesc').value = '';
    document.getElementById('newBillionaireIcon').value = '';
    document.getElementById('newBillionaireCategory').selectedIndex = 0;
    document.getElementById('addBillionaireForm').style.display = 'none';

    updateFilteredBillionaires();
};

// --- Selection, shopping, and reset logic ---
function selectBillionaire(index) {
    selectedBillionaire = billionaires[index];
    currentBalance = selectedBillionaire.netWorth;

    document.querySelectorAll('.billionaire-card').forEach((card, i) => {
        card.classList.toggle('selected', i === index % CARDS_PER_PAGE);
    });

    document.getElementById('currentBalance').textContent = formatBalance(currentBalance);
    document.getElementById('selectedBillionaire').textContent = `You are now ${selectedBillionaire.name}!`;
    document.getElementById('balanceSection').style.display = 'block';
    document.getElementById('shoppingSection').style.display = 'block';

    const img = document.getElementById('selectedBillionaireImg');
    if (selectedBillionaire.image) {
        img.src = selectedBillionaire.image;
        img.alt = selectedBillionaire.name;
        img.style.display = 'block';
    } else {
        img.style.display = 'none';
    }

    initializeShoppingItems();
    document.getElementById('balanceSection').scrollIntoView({ behavior: 'smooth' });
}

function initializeShoppingItems() {
    initializeCategory('realEstateItems', shoppingItems.realEstate, 'realEstate');
    initializeCategory('vehicleItems', shoppingItems.vehicles, 'vehicles');
    initializeCategory('fashionItem', shoppingItems.fashionAndAppearance, 'fashion');
    initializeCategory('luxuryItems', shoppingItems.luxury, 'luxury');
    initializeCategory('investmentItems', shoppingItems.investments, 'investments');
    initializeCategory('subscriptionItems', shoppingItems.subscriptions, 'subscriptions'); // <-- Add this line
}

function initializeCategory(containerId, items, category) {
    const container = document.getElementById(containerId);
    container.innerHTML = '';
    container.classList.add('item-grid'); // Add a grid class for styling

    items.forEach((item, index) => {
        const itemKey = `${category}-${index}`;
        itemQuantities[itemKey] = 0;

        const card = document.createElement('div');
        card.className = 'item-card';
        card.innerHTML = `
            <div class="item-img-wrap">
                <img class="item-img" src="${item.image || 'https://via.placeholder.com/120'}" alt="${item.name}">
            </div>
            <div class="item-info">
                <div class="item-name">${item.name}</div>
                <div class="item-price">${formatMoney(item.price)}</div>
            </div>
            <div class="quantity-controls">
                <button class="quantity-btn minus-btn" data-itemkey="${itemKey}">−</button>
                <span class="quantity-display" id="qty-${itemKey}">0</span>
                <button class="quantity-btn plus-btn" data-itemkey="${itemKey}">+</button>
            </div>
        `;
        container.appendChild(card);
    });

    // Add event listeners for all plus and minus buttons
    container.querySelectorAll('.plus-btn').forEach(btn => {
        setupHoldButton(btn, 1);
    });
    container.querySelectorAll('.minus-btn').forEach(btn => {
        setupHoldButton(btn, -1);
    });
}

// Helper for hold-to-increment/decrement and single click
function setupHoldButton(button, change) {
    let intervalId;
    let timeoutId;
    let pressed = false; // Track if hold event was used
    const itemKey = button.getAttribute('data-itemkey');

    const start = (e) => {
        // Only allow left mouse button or touch
        if (e.type.startsWith('mouse') && e.button !== 0) return;
        e.preventDefault();
        pressed = true;
        changeQuantity(itemKey, change); // Immediate change on press
        timeoutId = setTimeout(() => {
            intervalId = setInterval(() => {
                changeQuantity(itemKey, change);
            }, 80);
        }, 500);
    };

    const stop = () => {
        clearTimeout(timeoutId);
        clearInterval(intervalId);
        setTimeout(() => { pressed = false; }, 0); // Reset after click event
    };

    button.addEventListener('mousedown', start);
    button.addEventListener('touchstart', start);
    button.addEventListener('mouseup', stop);
    button.addEventListener('mouseleave', stop);
    button.addEventListener('touchend', stop);
    button.addEventListener('touchcancel', stop);

    // Single click support, but only if not already handled by mousedown/touchstart
    button.addEventListener('click', (e) => {
        // Only allow left mouse button
        if (e.button !== undefined && e.button !== 0) return;
        e.preventDefault();
        if (!pressed) {
            changeQuantity(itemKey, change);
        }
    });
}

function changeQuantity(itemKey, change) {
    const [category, index] = itemKey.split('-');
    const item = shoppingItems[category][parseInt(index)];
    const currentQty = itemQuantities[itemKey];
    const newQuantity = currentQty + change;

    if (newQuantity >= 0) {
        const totalCost = newQuantity * item.price;
        const remainingBalance = currentBalance + (currentQty * item.price);

        if (totalCost <= remainingBalance) {
            currentBalance = remainingBalance - totalCost;
            itemQuantities[itemKey] = newQuantity;

            document.getElementById(`qty-${itemKey}`).textContent = newQuantity;
            document.getElementById('currentBalance').textContent = formatBalance(currentBalance);

            updatePurchasedItems();
            updateAllButtons();
        }
    }
}

function updatePurchasedItems() {
    const purchasedList = document.getElementById('purchasedList');
    purchasedList.innerHTML = '';

    let totalSpent = 0;
    let hasItems = false;

    Object.entries(itemQuantities).forEach(([itemKey, quantity]) => {
        if (quantity > 0) {
            hasItems = true;
            const [category, index] = itemKey.split('-');
            const item = shoppingItems[category][parseInt(index)];
            const itemTotal = item.price * quantity;
            totalSpent += itemTotal;

            const purchasedItem = document.createElement('div');
            purchasedItem.className = 'purchased-item';
            purchasedItem.innerHTML = `
                <div>${item.name} ${quantity > 1 ? `(${quantity}x)` : ''}</div>
                <div>${formatMoney(itemTotal)}</div>
            `;
            purchasedList.appendChild(purchasedItem);
        }
    });

    if (hasItems) {
        const totalRow = document.createElement('div');
        totalRow.className = 'purchased-item total-spent';
        totalRow.innerHTML = `
            <div><strong>Total Spent</strong></div>
            <div class="total-spent-amount">${formatMoney(totalSpent)}</div>
        `;
        purchasedList.appendChild(totalRow);

        const totalLeftRow = document.createElement('div');
        totalLeftRow.className = 'purchased-item total-left';
        totalLeftRow.innerHTML = `
            <div><strong>Total Left</strong></div>
            <div class="total-left-amount">${formatMoney(currentBalance)}</div>
        `;
        purchasedList.appendChild(totalLeftRow);

        document.getElementById('purchasedSection').style.display = 'block';
    } else {
        document.getElementById('purchasedSection').style.display = 'none';
    }
}

function updateAllButtons() {
    Object.keys(itemQuantities).forEach(itemKey => {
        const [category, index] = itemKey.split('-');
        const item = shoppingItems[category][parseInt(index)];
        const buttons = document.querySelectorAll(`[onclick*="${itemKey}"]`);

        buttons.forEach(button => {
            if (button.textContent.trim() === '+') {
                button.disabled = currentBalance < item.price;
            }
        });
    });
}

function resetGame() {
    currentBalance = 0;
    selectedBillionaire = null;
    purchasedItems = [];
    itemQuantities = {};

    document.querySelectorAll('.billionaire-card').forEach(card => {
        card.classList.remove('selected');
    });

    document.getElementById('balanceSection').style.display = 'none';
    document.getElementById('shoppingSection').style.display = 'none';
    document.getElementById('purchasedSection').style.display = 'none';
}

// --- Swipe support for grid paging (add this at the end of your JS file) ---
// ...all your previous code...

// --- Swipe and paging support for 4x4 billionaire grid ---
document.addEventListener('DOMContentLoaded', function() {
    // Paging buttons (REMOVE or COMMENT OUT if you want to remove the buttons from HTML too)
    // document.getElementById('carouselLeft').onclick = function() {
    //     if (currentPage > 0) {
    //         currentPage--;
    //         renderBillionaireGrid();
    //     }
    // };
    // document.getElementById('carouselRight').onclick = function() {
    //     if ((currentPage + 1) * CARDS_PER_PAGE < filteredBillionaires.length) {
    //         currentPage++;
    //         renderBillionaireGrid();
    //     }
    // };

    document.getElementById('categorySelect').onchange = updateFilteredBillionaires;
    document.getElementById('billionaireSearchBtn').onclick = updateFilteredBillionaires;
    document.getElementById('billionaireSearchInput').oninput = updateFilteredBillionaires;
    renderBillionaireGrid();

    // --- REMOVE swipe support code ---
    // (No drag/swipe events for grid paging)
});