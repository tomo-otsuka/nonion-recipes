# Design System & Philosophy: Nonion Recipes

This document outlines the visual and verbal guidelines for the Nonion Recipes project. The goal is to create a thoughtful, delightful, and beautiful webpage that frames allium-free cooking as a culinary adventure rather than a restriction.

## 1. Core Philosophy
* **Celebrate Abundance:** Frame the allium-free constraint as a catalyst for creativity. Show that the food is vibrant, robust, and complex.
* **Friendly & Empowering:** Educate the reader on *why* substitutions work, empowering them to cook off-script.
* **Premium & Tactile:** The site should feel like a well-loved, modern cookbook—clean, inviting, and high-quality.

## 2. Color Palette
The colors should evoke the warmth of a kitchen and the natural vibrancy of the ingredients.

* **Base & Backgrounds:**
  * **Parchment / Oat (Warm Off-White):** Use instead of stark, clinical white to make the page feel cozy and approachable.
* **Primary Accents (The Substitutes):**
  * **Fennel Green:** A soft, calming sage green.
  * **Turmeric Gold:** A rich, warm yellow (ideal for buttons, highlights, or links).
  * **Dashi Amber:** A deep, umami-evoking warm brown/orange (great for borders or secondary text).
* **Text:**
  * **Deep Charcoal:** Use instead of pure black for reduced eye strain.

## 3. Typography
- Header Font: *Playfair Display* (Serif, for elegance and tradition)
- Body Font: *Inter* (Sans-serif, for modern readability)

### UI Patterns & Layouts
- **Glassmorphism Header:** The main navigation uses a translucent frosted-glass effect to remain visible but unobtrusive while scrolling.
- **Interactive Ingredients:** Ingredient lists (`ul` inside `.ingredients-section`) are automatically transformed into clickable checklists that dim and strike through when tapped.
- **Instruction Counters:** Instruction steps (`ol`) automatically generate large, golden serif numbers to guide the eye.
- **Problem-Solution Guides:** For informational pages (like Substitutions), use a vertical, single-column stack with `.problem-title` (Dashi Amber accent) and `.solution-box` (Fennel Green accent) to create actionable troubleshooting guides.
- **Recipe Pages (HTML):** Recipes must be built in pure HTML (not Markdown) using the `.recipe-layout-grid` class to create a two-column desktop layout (sticky ingredients on the left, instructions on the right). Use `.recipe-badges` for metadata and `.flavor-swap-panel` for highlighting allium substitutions.

## 4. UI & Layout Elements
* **The "Flavor Swap" Callout:** A dedicated, beautifully styled card or quote block in every recipe that highlights the clever substitution used (e.g., *"Why this works: A splash of Hondashi and toasted fennel seed replaces the traditional onion base..."*).
* **Generous Whitespace:** Give ingredients and instructions room to breathe so the cooking experience feels peaceful, not chaotic.
* **Micro-animations:** Incorporate delightful, subtle interactions. For example, recipe cards that gently lift on hover, or smooth strikethrough animations when checking off ingredients.
* **Soft Geometry:** Use slightly rounded corners on cards and images to make the interface feel friendly and tactile.

## 5. Language & Terminology
The way we talk about the food is just as important as how it looks.

* **Reframe the Base:** Instead of saying "without mirepoix" or "without onions," use terms like **"Aromatic Base," "Flavor Foundation,"** or **"Umami Backbone."**
* **Descriptive Adjectives:** Emphasize words like *vibrant, robust, deep, savory, complex, rich, bright, comforting, nourishing*.
* **Avoid Apologetic Language:** Never say "This tastes almost as good as the real thing." Instead say, *"This dish is intensely flavorful and rich."*
* **Avoid Comparative/Competitive Language:** Do not use words like "upgraded version," "better than," or "improved." Frame the recipe simply as what it is—a delicious, standalone dish—without implying it needs to compete with or "fix" traditional allium-heavy recipes.

### Example Copy
> *"Traditionally, this stew relies on hours of caramelized onions. Here, we build a complex, savory foundation using earthy celery root, a spoonful of rich miso paste, and a finishing splash of Hondashi. The result is a deeply comforting, umami-packed bowl that stands entirely on its own."*
