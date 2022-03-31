import db from "../db/connection.js";
import Digimon from "../models/house.js";
import digimon from "./digimon-list.json" assert { type: "json" };

const insertData = async () => {

  await Digimon.insertMany(digimon);

  db.close();
};

insertData();