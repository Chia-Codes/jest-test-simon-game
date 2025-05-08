
// Code to for beginning of every project
beforeAll(() => {
    let fs = require("fs");
    let fileContents = fs.readFileSync("index.html", "utf-8");
    document.body.innerHTML = fileContents;
})

// For setting up and tearing down test environments
//Fail test to see if score exsists
describe("game object contains correct keys", () => {
    test ("score key exists", () => {
        expect("score" in game).toBe(true);
    });
});