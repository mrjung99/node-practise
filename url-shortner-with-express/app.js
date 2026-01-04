import express from "express";
import path from "path";
import { readFile, writeFile } from "fs/promises";
import crypto from "crypto";

const app = express();
const PORT = 3000;

const DATA_PATH = path.join("data", "links.json");

async function getLinks() {
  try {
    const links = await readFile(DATA_PATH, "utf-8");
    return JSON.parse(links);
  } catch (error) {
    if (error.code === "ENOENT") {
      await writeFile(DATA_PATH, JSON.stringify({}));
      return {};
    }
    throw error;
  }
}

async function saveLInks(data) {
  await writeFile(DATA_PATH, JSON.stringify(data));
}

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/links", async (req, res) => {
  try {
    const links = await getLinks();
    res.status(200).json(links);
  } catch (error) {
    console.log("Error in /links: ", error);
    res.status(500).json({ error: "Something went wrong!" });
  }
});

app.post("/shortened", async (req, res) => {
  const links = await getLinks();
  const { url, shortCode } = req.body;

  if (!url) {
    return res.status(400).json({ error: "URL is required!" });
  }

  const finalShortCode = shortCode || crypto.randomBytes(4).toString("hex");

  if (links[finalShortCode]) {
    return res
      .status(400)
      .json({ error: "Short code already taken enter another one!" });
  }

  links[finalShortCode] = url;

  await saveLInks(links);

  res
    .status(200)
    .json({ success: true, message: "URL shortened successfully!" });
});

app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});
