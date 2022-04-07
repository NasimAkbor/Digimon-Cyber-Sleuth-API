//Necessary Imports
import db from "../db/connection.js";
import Digimon from "../models/digimon-list.js";
import digimon from "./digimon-list.json" assert { type: "json" };

//Seeding database
const insertData = async () => {
  await Digimon.deleteMany();
  await Digimon.insertMany(digimon);

  db.close();
};

insertData();