import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import User from "./model/data.js"; 

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:56338/nikhilworldgame";


app.use(cors());
app.use(express.json()); 

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB Connection Error:", err));


  const initialState = {
    data: [
      [
        "Country Code",
        "Name",
        "Population (millions)",
        "GDP (billions)",
        "Military Strength",
        "Education Index",
        "Happiness Index",
        "Territorial Size (sq km)",
        { role: "style" },
      ],
      ["AF", "Afghanistan", 40, 20, 200, 35, 45, 652230, "#8B0000"],
      ["AL", "Albania", 2.8, 18, 120, 72, 60, 28748, "#556B2F"],
      ["DZ", "Algeria", 45, 20, 350, 68, 55, 2381741, "#FF8C00"],
      ["AD", "Andorra", 0.08, 3, 10, 80, 75, 468, "#FFD700"],
      ["AO", "Angola", 35, 100, 300, 50, 48, 1246700, "#FF4500"],
      ["AG", "Antigua and Barbuda", 100, 0.002, 5, 78, 70, 442, "#32CD32"],
      ["AR", "Argentina", 45, 50, 250, 78, 65, 2780400, "#87CEEB"],
      ["AM", "Armenia", 3, 15, 150, 75, 58, 29743, "#800080"],
      ["AU", "Australia", 26, 1600, 400, 83, 79, 7692024, "#00FFFF"],
      ["AT", "Austria", 9, 500, 200, 88, 80, 83879, "#00FF7F"],
      ["AZ", "Azerbaijan", 10, 75, 250, 74, 65, 86600, "#1E90FF"],
      ["BS", "Bahamas", 0.4, 15, 5, 78, 72, 13943, "#1E90FF"],
      ["BH", "Bahrain", 1.5, 40, 40, 82, 74, 760, "#FF4500"],
      ["BD", "Bangladesh", 169, 400, 300, 65, 55, 147570, "#FFD700"],
      ["BB", "Barbados", 0.3,5, 10, 80, 76, 430, "#32CD32"],
      ["BY", "Belarus", 9.3, 60, 350, 78, 60, 207600, "#800080"],
      ["BE", "Belgium", 11.7, 600, 200, 89, 78, 30689, "#00FF7F"],
      ["BZ", "Belize", 0.4,2, 5, 72, 70, 22966, "#8B0000"],
      ["BJ", "Benin", 13,15, 100, 58, 50, 114763, "#FF8C00"],
      ["BT", "Bhutan", 0.8, 3, 50, 75, 80, 38394, "#556B2F"],
      ["BO", "Bolivia", 12.1, 40, 200, 70, 62, 1098581, "#DC143C"],
      ["BA", "Bosnia and Herzegovina", 3.2, 20, 120, 76, 65, 51197, "#87CBEB"],
      ["BW", "Botswana", 2.6, 18, 90, 73, 67, 581730, "#00FFFF"],
      ["BR", "Brazil", 213, 2100, 500, 68, 62, 8516000, "#33FF57"],
      ["BN", "Brunei", 0.45,20, 80, 79, 75, 5765, "#6A0DAD"],
      ["BG", "Bulgaria", 6.8, 80, 250, 82, 68, 110879, "#D2691E"],
      ["BF", "Burkina Faso", 22, 15, 150, 55, 45, 272967, "#228B22"],
      ["BI", "Burundi", 13, 10, 120, 50, 40, 27834, "#8A2BE2"],
      ["MM", "Burma (Myanmar)", 55, 80, 400, 60, 50, 676578, "#C70039"],
      ["KH", "Cambodia", 17, 30, 200, 65, 55, 181035, "#FF5733"],
      ["CM", "Cameroon", 28, 40, 250, 60, 50, 475442, "#FFC300"],
      ["CA", "Canada", 38, 1800, 450, 85, 82, 9985000, "#FF4500"],
      ["CV", "Cape Verde", 600, 0.002, 10, 72, 68, 4033, "#6A0DAD"],
      [
        "CF",
        "Central African Republic",
        5.5,
        2,
        100,
        45,
        40,
        622984,
        "#33FF57",
      ],
      ["TD", "Chad", 17, 15, 300, 50, 42, 1284000, "#DAF7A6"],
      ["CL", "Chile", 19.5, 300, 200, 80, 75, 756096, "#C70039"],
      ["CN", "China", 1412, 14700, 950, 78, 65, 9597000, "#DC143C"],
      ["CO", "Colombia", 52, 400, 350, 74, 70, 1141748, "#FF8C00"],
      ["KM", "Comoros", 0.9, 1, 20, 58, 52, 2235, "#556B2F"],
      ["CG", "Congo", 5.6, 20, 220, 60, 45, 342000, "#00FFFF"],
      [
        "CD",
        "Democratic Republic of the Congo",
        95,
        50,
        400,
        50,
        42,
        2344858,
        "#00FF7F",
      ],
      ["CR", "Costa Rica", 5.2, 60, 80, 82, 78, 51100, "#1E90FF"],
      ["HR", "Croatia", 3.8, 70, 150, 85, 74, 56594, "#8A2BE2"],
      ["CU", "Cuba", 11.2, 90, 250, 76, 60, 109884, "#D2691E"],
      ["CY", "Cyprus", 1.2, 40, 50, 86, 75, 9251, "#228B22"],
      ["DK", "Denmark", 5.9, 400, 150, 90, 82, 42931, "#FF5733"],
      ["DJ", "Djibouti", 1.2, 5, 80, 50, 45, 23200, "#FFC300"],
      ["DM", "Dominica", 0.07, 1, 5, 75, 70, 751, "#C70039"],
      ["DO", "Dominican Republic", 11, 100, 200, 72, 68, 48671, "#33FF57"],
      ["EC", "Ecuador", 18, 110, 200, 72, 65, 283561, "#FF5733"],
      ["EG", "Egypt", 112, 380, 900, 68, 55, 1002450, "#FFC300"],
      ["SV", "El Salvador", 6.5, 30, 150, 70, 60, 21041, "#C70039"],
      ["GQ", "Equatorial Guinea", 1.7, 15, 100, 65, 50, 28051, "#333907"],
      ["ER", "Eritrea", 3.7, 6, 250, 50, 45, 117600, "#DAF7A6"],
      ["EE", "Estonia", 1.3,50, 80, 90, 78, 45339, "#6A0DAD"],
      ["SZ", "Eswatini (Swaziland)", 1.2, 5, 50, 68, 55, 17364, "#00FFFF"],
      ["ET", "Ethiopia", 126, 120, 500, 60, 50, 1104300, "#00FF7F"],
      ["FJ", "Fiji", 0.9, 5, 30, 75, 70, 18274, "#FF5733"],
      ["FI", "Finland", 5.5, 300, 200, 92, 85, 338455, "#FFC300"],
      ["FR", "France", 65, 2800, 470, 86, 78, 551695, "#C70039"],
      ["GA", "Gabon", 2.5, 20, 100, 65, 60, 267668, "#FF5733"],
      ["GM", "Gambia", 2.7, 2, 50, 58, 52, 11295, "#FFC300"],
      ["GE", "Georgia", 3.7, 25, 120, 78, 65, 69700, "#C70039"],
      ["DE", "Germany", 83, 4200, 500, 90, 82, 357022, "#DAF7A6"],
      ["GH", "Ghana", 33, 80, 250, 70, 62, 238533, "#33FF57"],
      ["GR", "Greece", 10.3, 200, 300, 85, 75, 131957, "#6A0DAD"],
      ["GD", "Grenada", 0.1, 1, 10, 74, 68, 344, "#00FFFF"],
      ["GT", "Guatemala", 18, 95, 220, 68, 60, 108889, "#00FF7F"],
      ["GN", "Guinea", 14.2, 25, 200, 55, 50, 245857, "#D2691E"],
      ["GW", "Guinea-Bissau", 2.2, 2, 80, 50, 45, 36125, "#228B22"],
      ["GY", "Guyana", 0.8, 15, 50, 70, 65, 214969, "#8A2BE2"],
      ["IS", "Iceland", 0.37,24, 30, 92, 84, 103000, "#FF5733"],
      ["IN", "India", 1393, 2900, 700, 72, 60, 3287000, "#FFC300"],
      ["ID", "Indonesia", 277, 1300, 500, 70, 65, 1904569, "#C70039"],
      ["IR", "Iran", 89, 1500, 850, 74, 58, 1648195, "#33FF57"],
      ["IQ", "Iraq", 44, 250, 600, 60, 50, 438317, "#DAF7A6"],
      ["IE", "Ireland", 5.2, 550, 100, 92, 80, 70273, "#6A0DAD"],
      ["IL", "Israel", 9.5, 520, 700, 88, 75, 22072, "#00FFFF"],
      ["IT", "Italy", 60, 2100, 420, 87, 78, 301340, "#8A2BE2"],
      [
        "CI",
        "Ivory Coast (Côte d'Ivoire)",
        28,
        70,
        250,
        65,
        55,
        322463,
        "#D2691E",
      ],
      ["JM", "Jamaica", 2.8, 16, 50, 72, 65, 10991, "#FF5733"],
      ["JP", "Japan", 126, 5100, 550, 89, 76, 377975, "#FFC300"],
      ["JO", "Jordan", 11, 45, 300, 75, 60, 89342, "#C70039"],
      ["KZ", "Kazakhstan", 19, 250, 350, 78, 65, 2724900, "#FF5733"],
      ["KE", "Kenya", 54, 110, 300, 70, 60, 580367, "#FFC300"],
      ["KI", "Kiribati", 0.12, 2, 10, 60, 50, 811, "#C70039"],
      ["KW", "Kuwait", 4.5, 150, 400, 80, 70, 17818, "#33FF57"],
      ["KG", "Kyrgyzstan", 6.8, 10, 250, 72, 55, 199951, "#DAF7A6"],
      ["KP", "North Korea", 26, 30, 900, 68, 40, 120540, "#6A0DAD"],
      ["KR", "South Korea", 52, 1700, 600, 90, 78, 100210, "#DC143C"],
      ["LA", "Laos", 7.5, 20, 150, 65, 55, 236800, "#FF5733"],
      ["LV", "Latvia", 1.8, 40, 80, 88, 75, 64589, "#FFC300"],
      ["LB", "Lebanon", 6.7, 20, 200, 74, 60, 10452, "#C70039"],
      ["LS", "Lesotho", 2.3, 3, 50, 65, 55, 30355, "#33FF57"],
      ["LR", "Liberia", 5.2, 5, 100, 55, 50, 111369, "#DAF7A6"],
      ["LY", "Libya", 7.0, 50, 400, 60, 45, 1759540, "#6A0DAD"],
      ["LI", "Liechtenstein", 0.04, 7, 10, 90, 80, 160, "#00FFFF"],
      ["LT", "Lithuania", 2.7, 60, 100, 89, 78, 65300, "#8A2BE2"],
      ["LU", "Luxembourg", 0.65, 90, 50, 92, 85, 2586, "#D2691E"],
      ["MG", "Madagascar", 30, 15, 150, 60, 50, 587041, "#FF5733"],
      ["MW", "Malawi", 21, 10, 100, 58, 45, 118484, "#FFC300"],
      ["MY", "Malaysia", 33, 430, 400, 82, 70, 330803, "#C70039"],
      ["MV", "Maldives", 0.55, 5, 30, 75, 72, 300, "#33FF57"],
      ["ML", "Mali", 22, 20, 250, 55, 45, 1240192, "#DAF7A6"],
      ["MT", "Malta", 0.52, 15, 50, 88, 78, 316, "#6A0DAD"],
      ["MH", "Marshall Islands", 0.06, 1, 10, 65, 55, 181, "#00FFFF"],
      ["MR", "Mauritania", 4.7, 12, 200, 60, 50, 1030700, "#8A2BE2"],
      ["MU", "Mauritius", 1.3, 15, 50, 80, 75, 2040, "#D2691E"],
      ["MX", "Mexico", 129, 1200, 350, 75, 70, 1964000, "#228B22"],
      ["FM", "Micronesia", 0.12, 1, 20, 60, 55, 702, "#DC143C"],
      ["MD", "Moldova", 2.5, 14, 80, 74, 60, 33846, "#FF4500"],
      ["MC", "Monaco", 0.04, 7, 5, 92, 85, 2, "#00FF7F"],
      ["MN", "Mongolia", 3.4, 15, 150, 68, 55, 1564116, "#B22222"],
      ["ME", "Montenegro", 0.62, 12, 60, 85, 75, 13812, "#4682B4"],
      ["MA", "Morocco", 37, 130, 350, 70, 65, 446550, "#FFD700"],
      ["MZ", "Mozambique", 33, 20, 300, 55, 50, 801590, "#FF8C00"],
      ["NA", "Namibia", 2.6, 13, 100, 68, 60, 825615, "#FF5733"],
      ["NR", "Nauru", 0.011, 1, 5, 70, 65, 21, "#FFC300"],
      ["NP", "Nepal", 30.5, 40, 200, 62, 50, 147516, "#C70039"],
      ["NL", "Netherlands", 17.5, 1000, 300, 90, 82, 41543, "#33FF57"],
      ["NZ", "New Zealand", 5.1, 250, 200, 88, 84, 268021, "#DAF7A6"],
      ["NI", "Nicaragua", 7.0, 13, 150, 65, 55, 130373, "#6A0DAD"],
      ["NE", "Niger", 27.3, 15, 250, 50, 45, 1267000, "#00FFFF"],
      ["NG", "Nigeria", 223, 450, 600, 55, 50, 923768, "#8A2BE2"],
      ["MK", "North Macedonia", 2.1, 13, 120, 75, 65, 25713, "#D2691E"],
      ["NO", "Norway", 5.4, 540, 200, 92, 85, 385207, "#FF8C00"],
      ["OM", "Oman", 4.5, 110, 300, 78, 70, 309500, "#FF5733"],
      ["PK", "Pakistan", 240, 370, 800, 65, 50, 881913, "#FF5733"],
      ["PW", "Palau", 0.02, 1, 10, 75, 68, 459, "#FFC300"],
      ["PA", "Panama", 4.6, 80, 100, 78, 72, 75417, "#C70039"],
      ["PG", "Papua New Guinea", 10.3, 25, 200, 60, 55, 462840, "#33FF57"],
      ["PY", "Paraguay", 7.4, 45, 150, 70, 65, 406752, "#DAF7A6"],
      ["PE", "Peru", 34, 270, 300, 74, 68, 1285216, "#6A0DAD"],
      ["PH", "Philippines", 114, 450, 500, 72, 65, 300000, "#00FFFF"],
      ["PL", "Poland", 38, 700, 400, 88, 78, 312696, "#8A2BE2"],
      ["PT", "Portugal", 10.2, 260, 250, 86, 80, 92212, "#D2691E"],
      ["PS", "Palestine", 5.4, 15, 50, 65, 55, 6020, "#FF8C00"],
      ["QA", "Qatar", 2.9, 220, 150, 88, 80, 11586, "#FF5733"],
      ["RO", "Romania", 19, 320, 250, 85, 70, 238397, "#FF5733"],
      ["RU", "Russia", 144, 1700, 920, 74, 58, 17098242, "#336AAA"],
      ["RW", "Rwanda", 14, 13, 100, 65, 60, 26338, "#33FF57"],
      ["KN", "Saint Kitts and Nevis", 0.05, 1, 5, 75, 70, 261, "#FF5733"],
      ["LC", "Saint Lucia", 0.18, 2, 10, 78, 72, 616, "#FFC300"],
      [
        "VC",
        "Saint Vincent and the Grenadines",
        0.11,
        1,
        8,
        76,
        68,
        389,
        "#C70039",
      ],
      ["WS", "Samoa", 0.22, 1, 15, 72, 65, 2842, "#33FF57"],
      ["SM", "San Marino", 0.03, 2, 2, 85, 75, 61, "#DAF7A6"],
      ["ST", "Sao Tome and Principe", 0.23, 1, 10, 70, 65, 964, "#6A0DAD"],
      ["SA", "Saudi Arabia", 36.2, 1100, 850, 80, 60, 2149690, "#FF8C00"],
      ["SN", "Senegal", 17.9, 30, 250, 65, 60, 196722, "#00FFFF"],
      ["RS", "Serbia", 6.6, 60, 300, 82, 70, 88361, "#8A2BE2"],
      ["SC", "Seychelles", 0.1, 2, 20, 80, 75, 459, "#D2691E"],
      ["SL", "Sierra Leone", 8.4, 5, 150, 55, 50, 71740, "#FF5733"],
      ["SG", "Singapore", 5.6, 480, 400, 92, 85, 728, "#C70039"],
      ["SK", "Slovakia", 5.4, 120, 300, 88, 75, 49037, "#33FF57"],
      ["SI", "Slovenia", 2.1, 70, 200, 89, 80, 20273, "#DAF7A6"],
      ["SB", "Solomon Islands", 0.72, 1, 50, 68, 60, 28896, "#6A0DAD"],
      ["SO", "Somalia", 17.1, 8, 400, 45, 40, 637657, "#FF8C00"],
      ["ZA", "South Africa", 60.1, 420, 700, 75, 65, 1219090, "#00FFFF"],
      ["SS", "South Sudan", 11.2, 4, 300, 50, 45, 619745, "#8A2BE2"],
      ["ES", "Spain", 47.5, 1500, 380, 86, 76, 505990, "#D2691E"],
      ["LK", "Sri Lanka", 22.2, 90, 250, 78, 70, 65610, "#FF5733"],
      ["SD", "Sudan", 48.1, 20, 500, 55, 45, 1861484, "#C70039"],
      ["SR", "Suriname", 0.62, 4, 80, 70, 65, 163821, "#33FF57"],
      ["SE", "Sweden", 10.4, 67, 350, 90, 80, 450295, "#DAF7A6"],
      ["CH", "Switzerland", 8.7, 890, 250, 94, 85, 41284, "#6A0DAD"],
      ["SY", "Syria", 22.1, 20, 600, 60, 45, 185180, "#FF8C00"],
      ["TJ", "Tajikistan", 9.7, 9, 200, 65, 50, 143100, "#FF5733"],
      ["TZ", "Tanzania", 63.6, 70, 400, 60, 55, 945087, "#FFC300"],
      ["TH", "Thailand", 69.8, 540, 700, 78, 72, 513120, "#C70039"],
      ["TL", "Timor-Leste", 1.3, 2, 50, 62, 55, 14874, "#33FF57"],
      ["TG", "Togo", 8.5, 6, 150, 65, 58, 56785, "#DAF7A6"],
      ["TO", "Tonga", 0.1, 1, 20, 70, 65, 747, "#6A0DAD"],
      ["TT", "Trinidad and Tobago", 1.5, 24, 100, 75, 70, 5130, "#FF8C00"],
      ["TN", "Tunisia", 12.3, 48, 300, 80, 65, 163610, "#00FFFF"],
      ["TR", "Turkey", 86.5, 920, 900, 84, 70, 783562, "#8A2BE2"],
      ["TM", "Turkmenistan", 6.2, 100, 250, 67, 50, 491210, "#D2691E"],
      ["TV", "Tuvalu", 0.012, 0.05, 5, 65, 60, 26, "#FF4500"],
      ["UG", "Uganda", 45.9, 42, 350, 60, 50, 241038, "#FF5733"],
      ["UA", "Ukraine", 41.2, 200, 700, 82, 60, 603628, "#FFC300"],
      ["AE", "United Arab Emirates", 9.9, 500, 400, 90, 80, 83600, "#C70039"],
      ["GB", "United Kingdom", 67, 3100, 450, 88, 80, 243610, "#6A0DAD"],
      ["US", "United States", 331, 21000, 900, 85, 75, 9834000, "#FF4500"],
      ["UY", "Uruguay", 3.5, 70, 150, 85, 78, 176215, "#00FFFF"],
      ["UZ", "Uzbekistan", 35.2, 80, 500, 75, 55, 447400, "#8A2BE2"],
      ["VU", "Vanuatu", 0.33, 1, 20, 65, 60, 12189, "#FF5733"],
      ["VA", "Vatican City", 0.8, 0.00002, 5, 90, 80, 0.49, "#FFC300"],
      ["VE", "Venezuela", 28.2,100, 600, 70, 50, 916445, "#C70039"],
      ["VN", "Vietnam", 99.5, 420, 750, 78, 65, 331212, "#33FF57"],
      ["YE", "Yemen", 32.9, 30, 500, 50, 40, 527968, "#FF5733"],
      ["ZM", "Zambia", 19.6, 30, 300, 65, 50, 752612, "#FF5733"],
      ["ZW", "Zimbabwe", 16.5,20, 350, 60, 45, 390757, "#FFC300"],
      ["GL", "Greenland", 0.056, 3, 50, 75, 70, 2166086, "#00FFFF"],
      ["SJ", "Svalbard", 0.0025, 0.1, 20, 85, 75, 610000, "#00FFFF"],
      ["EH", "Western Sahara", 0.6, 2, 100, 55, 45, 266000, "#FFD700"],
      ["HN", "Honduras", 10.1, 29, 250, 65, 55, 112492, "#228B22"],
    ],
    selectedCountry: null,
    playerCountry: null,
    budget: 1000000,
    influence: 89,
    territories: [],
    economyUpgrade: {
      "GDP Growth": [
        { name: "Industrialization", percent: 0, cost: 1000, rate: 0.25 },
        { name: "Tech Innovation", percent: 0, cost: 900, rate: 0.2 },
        { name: "Production", percent: 0, cost: 850, rate: 0.3 },
        { name: "Skilled Workforce", percent: 0, cost: 950, rate: 0.35 },
        {
          name: "Energy Generation and Supply",
          percent: 0,
          cost: 1100,
          rate: 0.4,
        },
      ],
      Trade: [
        { name: "Exports", percent: 0, cost: 1200, rate: 0.5 },
        { name: "Domestic Productions", percent: 0, cost: 1700, rate: 0.15 },
        {
          name: "Logistics and Infra for Trade",
          percent: 0,
          cost: 917,
          rate: 0.33,
        },
        { name: "Supply Chains", percent: 0, cost: 1800, rate: 0.4 },
        { name: "NetWorks", percent: 0, cost: 900, rate: 0.35 },
      ],
      "Financial System": [
        { name: "Banking Expansion", percent: 0, cost: 1500, rate: 0.25 },
        { name: "Investment", percent: 0, cost: 1700, rate: 0.15 },
        { name: "Inflation Control", percent: 0, cost: 1000, rate: 0.05 },
        { name: "Govt Policies", percent: 0, cost: 910, rate: 0.1 },
      ],
      Employment: [
        { name: "Jobs", percent: 0, cost: 9000, rate: 0.15 },
        { name: "Training", percent: 0, cost: 900, rate: 0.15 },
        { name: "Skilled Labours", percent: 0, cost: 900, rate: 0.2 },
        { name: "Wages", percent: 0, cost: 9000, rate: 0.11 },
        { name: "Affordable Education", percent: 0, cost: 6400, rate: 0.35 },
      ],
      Public: [
        { name: "Progressive Taxation", percent: 0, cost: 6000, rate: 0.14 },
        { name: "Subsidy Programs", percent: 0, cost: 8000, rate: 0.18 },
        { name: "Debt Management", percent: 0, cost: 9000, rate: 0.15 },
        {
          name: "Infrastructure Development",
          percent: 0,
          cost: 12000,
          rate: 0.25,
        },
        { name: "Public Healthcare", percent: 0, cost: 8500, rate: 0.22 },
      ],
  
      Investment: [
        { name: "Special Economic Zones", percent: 0, cost: 10000, rate: 0.2 },
        {
          name: "Natural Resource Extraction",
          percent: 0,
          cost: 12000,
          rate: 0.22,
        },
        { name: "Foreign Debt & Aid", percent: 0, cost: 9000, rate: 0.18 },
        { name: "Technology & Innovation", percent: 0, cost: 11000, rate: 0.25 },
        {
          name: "Public-Private Partnerships",
          percent: 0,
          cost: 9500,
          rate: 0.19,
        },
      ],
    },
    educationUpgrade: {
      "Primary Secondary Education": [
        { name: "School Infrastructure", percent: 0, cost: 8000, rate: 0.5 },
        {
          name: "Digital Classrooms & AI Tutors",
          percent: 0,
          cost: 9000,
          rate: 0.3,
        },
        {
          name: "Standardized Curriculum & Exams",
          percent: 0,
          cost: 7500,
          rate: 0.4,
        },
        {
          name: "Public vs Private Schooling",
          percent: 0,
          cost: 6000,
          rate: 0.2,
        },
        { name: "STEM Education Focus", percent: 0, cost: 9500, rate: 0.35 },
      ],
      "Higher Education Universities": [
        { name: "University Expansion", percent: 0, cost: 10000, rate: 0.6 },
        {
          name: "Research Facility Development",
          percent: 0,
          cost: 12000,
          rate: 0.5,
        },
        { name: "AI & Quantum Computing", percent: 0, cost: 11000, rate: 0.45 },
        {
          name: "Space & Aerospace Engineering",
          percent: 0,
          cost: 10500,
          rate: 0.4,
        },
        { name: "Robotics & Automation", percent: 0, cost: 9500, rate: 0.38 },
      ],
      "Scientific Research Innovation": [
        { name: "AI & Machine Learning", percent: 0, cost: 13000, rate: 0.55 },
        { name: "Nuclear Research", percent: 0, cost: 15000, rate: 0.6 },
        { name: "Biotech & Genetics", percent: 0, cost: 14000, rate: 0.52 },
        { name: "Quantum Computing", percent: 0, cost: 12000, rate: 0.48 },
        { name: "Aerospace Research", percent: 0, cost: 14500, rate: 0.5 },
      ],
      "Military Defense Research": [
        { name: "Nuclear Weapons", percent: 0, cost: 16000, rate: 0.7 },
        { name: "Robotics & Drones", percent: 0, cost: 14000, rate: 0.5 },
        { name: "Cyber Warfare", percent: 0, cost: 17000, rate: 0.65 },
        { name: "Biological Warfare", percent: 0, cost: 12500, rate: 0.45 },
        { name: "Directed Energy Weapons", percent: 0, cost: 15500, rate: 0.6 },
      ],
      "Industrial Technological Advancements": [
        { name: "Nanotech & Materials", percent: 0, cost: 13500, rate: 0.5 },
        { name: "Fusion Energy", percent: 0, cost: 14500, rate: 0.55 },
        { name: "Autonomous Vehicles", percent: 0, cost: 12500, rate: 0.4 },
        { name: "6G & Quantum Internet", percent: 0, cost: 15000, rate: 0.6 },
        { name: "Space Manufacturing", percent: 0, cost: 16000, rate: 0.65 },
      ],
      "Space Research Exploration": [
        { name: "Satellite & GPS", percent: 0, cost: 14000, rate: 0.5 },
        { name: "Space Stations", percent: 0, cost: 15000, rate: 0.55 },
      ],
    },
    infraStructureUpgrade: {
      Transportation: [
        { name: "High-Speed Rail", percent: 0, cost: 12000, rate: 0.18 },
        { name: "Smart Traffic", percent: 0, cost: 8000, rate: 0.12 },
        { name: "EV Charging", percent: 0, cost: 9500, rate: 0.15 },
      ],
      "Energy Power": [
        { name: "Renewable Energy", percent: 0, cost: 14000, rate: 0.2 },
        { name: "Smart Grid", percent: 0, cost: 13000, rate: 0.17 },
        { name: "Rural Electrification", percent: 0, cost: 11000, rate: 0.14 },
        { name: "Hydropower Plants", percent: 0, cost: 12500, rate: 0.16 },
        { name: "Nuclear Energy", percent: 0, cost: 15000, rate: 0.22 },
      ],
      "Communication Internet": [
        { name: "5G Rollout", percent: 0, cost: 9000, rate: 0.15 },
        { name: "Fiber Optic", percent: 0, cost: 9500, rate: 0.14 },
        { name: "Satellite Comms", percent: 0, cost: 13000, rate: 0.18 },
      ],
      "Urban Development": [
        { name: "Smart Cities", percent: 0, cost: 16000, rate: 0.2 },
        { name: "Water & Sanitation", percent: 0, cost: 10000, rate: 0.13 },
        { name: "Waste Management", percent: 0, cost: 8500, rate: 0.1 },
        { name: "Green Buildings", percent: 0, cost: 12000, rate: 0.16 },
        { name: "Public Transport", percent: 0, cost: 14000, rate: 0.18 },
      ],
      "Industrial Infrastructure": [
        { name: "Special Economic Zones", percent: 0, cost: 11000, rate: 0.19 },
        { name: "Logistics & Supply Chain", percent: 0, cost: 10000, rate: 0.16 },
        {
          name: "Port & Airport Modernization",
          percent: 0,
          cost: 15000,
          rate: 0.21,
        },
      ],
    },
    militaryUpgrade: {
      "Army Strength": [
        { name: "Infantry Soldiers", amount: 10000, costPerUnit: 5000 },
        { name: "Tanks", amount: 500, costPerUnit: 6000 },
        { name: "Artillery", amount: 300, costPerUnit: 3000 },
        { name: "Helicopters", amount: 50, costPerUnit: 20000 },
        { name: "Special Forces", amount: 2000, costPerUnit: 10000 },
      ],
      Navy: [
        { name: "Warships", amount: 20, costPerUnit: 8000 },
        { name: "Submarines", amount: 15, costPerUnit: 5000 },
        { name: "Aircraft Carriers", amount: 5, costPerUnit: 130000 },
        { name: "Destroyers", amount: 10, costPerUnit: 20000 },
        { name: "Patrol Boats", amount: 25, costPerUnit: 500 },
      ],
      Airforce: [
        { name: "Fighter Jets", amount: 100, costPerUnit: 90000 },
        { name: "Bombers", amount: 20, costPerUnit: 250000 },
        { name: "Drones", amount: 50, costPerUnit: 4000 },
        { name: "Missiles", amount: 100, costPerUnit: 1500 },
        { name: "Transport Aircraft", amount: 30, costPerUnit: 100000 },
      ],
    },
    region: "world",
    gdpGrowthrate: 1,
  };


  const createNewUser = async (username, password, country) => {
    try {
      const existingUser = await User.findOne({ username });
  
      if (existingUser) {
        return { error: "Username already exists" };
      }
      if (!Array.isArray(country)) {
        return { error: "Invalid country data format" };
      }
  
      const newUser = new User({
        username,
        password,
        gameData: {
          ...initialState,
          playerCountry: country, 
          region: country[0], 
        },
      });
  
      console.log("New user object before saving:", newUser);
      await newUser.save();
      console.log("User saved successfully");
  
      return { message: "User created successfully", user: newUser };
    } catch (error) {
      console.error("🔥 Error in createNewUser:", error);
      return { error: error.message };
    }
  };
  
  
  

app.get("/game/data", async (req, res) => {
  console.log("Request Received")
  try {
    const { username } = req.query;
    console.log(username)
    if (!username) {
      return res.status(400).json({ error: "Username is required" });
    }

    const user = await User.findOne({ username });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    console.log(user.gameData);
    return res.json( user.gameData );
  } catch (error) {
    console.error("Error fetching game data:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
});


app.post("/game/setPlayerCountry", async (req, res) => {
  const { username, password, playerCountry } = req.body;

  if (!password) {
    console.error("Password is missing in request!");
    return res.status(400).json({ error: "Password is required" });
  }

  if (!Array.isArray(playerCountry)) {
    console.error("playerCountry must be an array!");
    return res.status(400).json({ error: "Invalid playerCountry format" });
  }

  try {
    console.log("Received request to set player country:", { username, password, playerCountry });
    const msg = await createNewUser(username, password, playerCountry);
    console.log("User creation result:", msg);

    if (msg.error) {
      return res.status(400).json({ error: msg.error });
    }

    const user = await User.findOne({ username });
    if (!user) {
      return res.status(404).json({ error: "User not found after creation" });
    }

    res.status(200).json(user.gameData);
  } catch (error) {
    console.error("Error in /game/setPlayerCountry:", error);
    res.status(500).json({ error: "Server error" });
  }
});

app.post('/game/Save', async (req, res) => {
  const { username, gameData } = req.body;

  if (!username || !gameData) {
    return res.status(400).send('Username and game data are required.');
  }

  try {
    const updatedUser = await User.findOneAndUpdate(
      { username },
      { gameData },
      { new: true, upsert: true }
    );

    res.status(200).json({
      message: 'Game data updated successfully.',
      user: updatedUser,
    });
  } catch (error) {
    console.error('Error updating game data:', error);
    res.status(500).send('An error occurred while updating game data.');
  }
});




app.post("/game/auth", async (req, res) => {
  const { username, password } = req.body;

  console.log(username,password)
  const user= await User.findOne({username});
  if (username === user.username&& password === user.password) {
    console.log("Login Success")
    return res.json({ success: true, message: "Login successful!" });
  } else {
    console.log("Not Logged in")
    return res.status(401).json({ success: false, message: "Invalid credentials" });
  }
});


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
