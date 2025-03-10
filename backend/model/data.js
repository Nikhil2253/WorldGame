import mongoose from "mongoose";

const upgradeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  percent: { type: Number, required: true, min: 0, max: 100 },
  cost:{type:Number,required:true},
  rate:{type:Number,required:true}
});

const militarySchema = new mongoose.Schema({
  name: { type: String, required: true },
  amount: { type: Number, required: true},
  costPerUnit:{type:Number,required:true}
});

// Game Data Schema
const gameDataSchema = new mongoose.Schema({
  data: { type: [[mongoose.Schema.Types.Mixed]], required: true },
  selectedCountry: { type: [mongoose.Schema.Types.Mixed], default: null },
  playerCountry: { type: [mongoose.Schema.Types.Mixed], default: null },
  budget: { type: Number, default: 99000 },
  influence: { type: Number, default: 89 },
  territories: { type: [[mongoose.Schema.Types.Mixed]], default: [] },

  economyUpgrade: {
    "GDP Growth": { type: [upgradeSchema], default: [] },
    Trade: { type: [upgradeSchema], default: [] },
    "Financial System": { type: [upgradeSchema], default: [] },
    Employment: { type: [upgradeSchema], default: [] },
    Public: { type: [upgradeSchema], default: [] },
    Investment: { type: [upgradeSchema], default: [] },
  },

  educationUpgrade: {
    "Primary Secondary Education": { type: [upgradeSchema], default: [] },
    "Higher Education Universities": { type: [upgradeSchema], default: [] },
    "Scientific Research Innovation": { type: [upgradeSchema], default: [] },
    "Military Defense Research": { type: [upgradeSchema], default: [] },
    "Industrial Technological Advancements": { type: [upgradeSchema], default: [] },
    "Space Research Exploration": { type: [upgradeSchema], default: [] },
  },

  infraStructureUpgrade: {
    Transportation: { type: [upgradeSchema], default: [] },
    "Energy Power": { type: [upgradeSchema], default: [] },
    "Communication Internet": { type: [upgradeSchema], default: [] },
    "Urban Development": { type: [upgradeSchema], default: [] },
    "Industrial Infrastructure": { type: [upgradeSchema], default: [] },
  },

  militaryUpgrade: {
    "Army Strength": { type: [militarySchema], default: [] },
    Navy: { type: [militarySchema], default: [] },
    Airforce: { type: [militarySchema], default: [] }
  },
  
  region: { type: String, default: "world" },
  gdpGrowthrate:{type:Number,default:1}
});

// User Schema
const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  gameData: gameDataSchema, // Embedding gameData inside the User schema
});

const User = mongoose.model("User", userSchema);
export default User;
