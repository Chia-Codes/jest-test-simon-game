/**
 * @jest-environment jsdom
 */

const { game, newGame } = require("../game");

// Code to for beginning of every project
beforeAll(() => {
    let fs = require("fs");
    let fileContents = fs.readFileSync("index.html", "utf-8");
    document.body.innerHTML = fileContents;
})

// For setting up and tearing down test environments
//Fail test first, then fix it
describe("game object contains correct keys", () => {
    test("score key exists", () => {
        expect("score" in game).toBe(true);
    });
    test("currentGame key exists", () => {
        expect("currentGame" in game).toBe(true);
    });
    test("playerMoves key exists", () => {
        expect("playerMoves" in game).toBe(true);
    });
    test("choices key exists", () => {
        expect("choices" in game).toBe(true);
    });
    test("choices contain correct ids", () => {
        expect(game.choices).toEqual(["button1", "button2", "button3", "button4"]);
    });
});

// Test Newgame Function
describe("newGame works correctly", () => {
    beforeAll(() => {
        game.score = 42;
        newGame();
    });
    test("should set game score to zero", () => {
        expect(game.score).toEqual(0);
    });
});