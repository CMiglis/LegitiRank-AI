/**
 * @jest-environment jsdom
 */

const fs = require("fs");
const path = require("path");

describe("LegitiRank-AI content script", () => {
  beforeEach(() => {
    // Load mock HTML similar to Google search results
    const html = fs.readFileSync(path.resolve(__dirname, "mock_google.html"), "utf8");
    document.documentElement.innerHTML = html;

    // Mock console.log to silence test output
    jest.spyOn(console, 'log').mockImplementation(() => {});
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  test("adds Trust Score badge to each search result", () => {
    // Load content.js logic manually
    require("../src/content.js");

    const badges = document.querySelectorAll("span");
    expect(badges.length).toBeGreaterThan(0);

    badges.forEach(badge => {
      expect(badge.innerText).toContain("Trust Score");
      expect(badge.style.color).toBe("rgb(136, 136, 136)");
    });
  });
});

