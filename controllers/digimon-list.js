//Import model
import Digimon from "../models/digimon-list.js"

//Get request to obtain full JSON
export const getDigimon = async (req, res) => {
  try {
    const digimon = await Digimon.find();
    res.json(digimon);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

//Get request to get one specific digimon's object/JSON by name
export const getDigimonName = async (req, res) => {
  try {
    let { name } = req.params;
    const digimon = await Digimon.find({ Digimon: name })

    if (digimon) {
      return res.json(digimon);
    }
    res.status(400).json({ message: "Digimon not found!" })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
};

//Get request to show all digimon that share an attribute
export const getDigimonAttribute = async (req, res) => {
  try {
    let { attribute } = req.params;
    const digimon = await Digimon.find({ Attribute: attribute })

    if (digimon) {
      return res.json(digimon);
    }
    res.status(400).json({ message: "Digimon not found!" })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
};

//Get request to show all digimon that are at a certain stage
export const getDigimonStage = async (req, res) => {
  try {
    let { stage } = req.params;
    const digimon = await Digimon.find({ Stage: stage })

    if (digimon) {
      return res.json(digimon);
    }
    res.status(400).json({ message: "Digimon not found!" })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
};

//Get request to show a single digimon by its number
export const getDigimonNumber = async (req, res) => {
  try {
    let { num } = req.params;
    const digimon = await Digimon.find({ Number: num })

    if (digimon) {
      return res.json(digimon);
    }
    res.status(400).json({ message: "Digimon not found!" })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
};

//Post request to create a Digimon Object/JSON depending on the info provided in the body
export const createDigimon = async (req, res) => {
  try {
    const digimon = new Digimon(req.body);
    await digimon.save();
    res.status(201).json(digimon);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

//Put request to update any Digimon file
export const updateDigimon = async (req, res) => {
  const query = { Digimon: `${req.params.name}` };
  console.log(query);
  const digimon = await Digimon.findOneAndUpdate(query, req.body);
  res.status(200).json(digimon);
};

//Delete request to remove a digimon's Object/JSON searched by their name
export const deleteDigimon = async (req, res) => {
  try {
    const name = { Digimon: `${req.params.name}` };
    const deleted = await Digimon.findOneAndDelete(name);

    if (deleted) {
      return res.status(200).send(`Digimon, ${req.params.name} deleted!`);
    }

    throw new Error("Digimon not found");
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};