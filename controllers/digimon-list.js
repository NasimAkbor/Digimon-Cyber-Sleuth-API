import Digimon from "../models/digimon-list.js"

export const getDigimon = async (req, res) => {
  try {
    const digimon = await Digimon.find();
    res.json(digimon);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

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

export const updateDigimon = async (req, res) => {
  const query = { Digimon: `${req.params.name}` };
  console.log(query);
  const digimon = await Digimon.findOneAndUpdate(query, req.body);
  res.status(200).json(digimon);
};

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