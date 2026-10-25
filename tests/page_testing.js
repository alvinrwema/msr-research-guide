const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");

// Reads the website files
const html = fs.readFileSync("src/index.html", "utf8");
const script = fs.readFileSync("src/script.js", "utf8");

// Test 1: Navigation(this makes sure when we open each tab the correct sections appear)
test("Navigation - tabs link to the correct sections", function () {
    assert.ok(html.includes('data-section="sources"'));
    assert.ok(html.includes('data-section="collection"'));
    assert.ok(html.includes('data-section="analysis"'));
    assert.ok(html.includes('data-section="venues"'));

    assert.ok(html.includes('id="sources"'));
    assert.ok(html.includes('id="collection"'));
    assert.ok(html.includes('id="analysis"'));
    assert.ok(html.includes('id="venues"'));
});

// Test 2: Content Display(this basically makes sure that the section shows its correct heading and text.)
test("Content Display - all four section headings exist", function () {
    assert.ok(html.includes("Data Sources"));
    assert.ok(html.includes("Collection Methods"));
    assert.ok(html.includes("Analysis Methods"));
    assert.ok(html.includes("Publication Venues"));
});

// Test 3: Switching Sections(this also checks when i swictch a section that previous section hides and the selected section appears)
test("Switching Sections - previous section hides and selected section shows", function () {
    assert.ok(script.includes("section.hidden = true"));
    assert.ok(script.includes("getElementById(sectionId).hidden = false"));
});
