const fs = require("fs");
const glob = require("glob");
const Handlebars = require("handlebars");

function get_nb_files() {
  return new Promise((resolve, reject) => {
    glob("*.html", (err, files) => {
      if (err) {
        console.log("error", err);
        reject(err);
      } else {
        let nb_files = files.filter((fname) => fname != "index.html");
        console.log(nb_files);
        resolve(nb_files);
      }
    });
  });
}

get_nb_files()
  .then((files) => {
    const template = Handlebars.compile(
      fs.readFileSync("index.mustache", "utf8")
    );
    let result = template({ files });
    const data = fs.writeFileSync("index.html", result);
  })
  .catch((err) => {
    console.log(err);
  });
