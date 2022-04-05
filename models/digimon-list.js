//Necessary Imports
import mongoose from "mongoose";

const Schema = mongoose.Schema;

//Schema for seeding to follow
let Digimon = new Schema({
  Number: { type: Number },
  Digimon: { type: String },
  Stage: { type: String },
  Type: { type: String },
  Attribute: { type: String },
  Memory: { type: Number },
  EquipSlots: { type: Number },
  Lv50HP: { type: Number },
  Lv50SP: { type: Number },
  Lv50Atk: { type: Number },
  Lv50Def: { type: Number },
  Lv50Int: { type: Number },
  Lv50Spd: { type: Number }
})

export default mongoose.model("digimon", Digimon)