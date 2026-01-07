import fs from "fs";

const movies = JSON.parse(fs.readFileSync("./data/movies.json"));
export function getMovies(req, res) {
  res.status(200).json({
    success: true,
    data: {
      movies: movies,
    },
  });
}

export function postMovie(req, res) {
  const id = movies.length + 1;
  const movie = req.body;
  movies.push(Object.assign({ id: id }, movie));

  fs.writeFile("./data/movies.json", JSON.stringify(movies), (err) => {
    if (err) {
      return res
        .status(500)
        .json({ success: false, message: "Movie can't be added!" });
    }

    res.status(201).json({ success: true, message: "Created" });
  });
}
