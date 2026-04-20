# Agent Instructions for `nonion-recipes`

Hello, AI Assistant! When working in this repository, please adhere strictly to the following guidelines:

## Core Directive: NO ALLIUMS

This is the most critical rule of this repository. **Never suggest, add, or generate recipes containing any alliums.** 

If you are asked to adapt, convert, or generate a recipe, you MUST ensure there are absolutely no traces of:
- Onions (white, yellow, red, sweet)
- Garlic
- Shallots
- Leeks
- Scallions / Green Onions
- Chives
- Onion powder
- Garlic powder
- Any commercial spice blends or broths containing the above

### Substitutions
When adapting recipes, use your best judgment to replace the missing flavor profile using these common allium-free alternatives:
- **For savory depth (mirepoix/sofrito base):** Celery, carrots, fennel, bell peppers, celery root (celeriac), radishes.
- **For umami:** Mushrooms, soy sauce, miso paste, tomato paste, nutritional yeast, MSG, Hondashi (dashi powder), asafoetida (hing) in small amounts (ensure the specific brand doesn't mix it with alliums).
- **For broths, soups, and braises:** Hondashi (dashi powder) is an excellent umami-rich onion substitute.
- **For aromatics and pungency:** Ginger, galangal, turmeric, mustard powder, horseradish, black pepper, fresh herbs.

## Project Structure & Output
- **Deployment:** This project is intended to be published as a static site via GitHub Pages.
- **Format:** We use **pure HTML/CSS** (not Markdown) for recipes to enable premium layouts. All new recipes must be created as `.html` files in the `/recipes/` directory. 
- **Template:** A starter template is available at `/recipes/_template.html`. When creating a new recipe, always use this structure.

### Required HTML Structure (Interactive Checklists & Counters)
The site uses custom JavaScript in `_layouts/default.html` to automatically apply interactive styling to standard HTML lists. To ensure recipes match the site's design system:
1. **Ingredients:** Must be placed inside `<aside class="recipe-ingredients ingredients-section">`. Use standard `<ul>` and `<li>` tags. The JS will automatically transform these into interactive checklists that dim and strike through when tapped. (Do NOT add `class="ingredient-list"` manually).
2. **Instructions:** Must be placed inside `<section class="recipe-instructions">`. Use standard `<ol>` and `<li>` tags. The JS will automatically inject elegant golden numbers for the steps.
3. **Other Layout Components:**
   - Liquid frontmatter (`layout: default`, `title`, `permalink`).
   - `.recipe-hero` block for the `<h1>`, `.recipe-description`, and `.recipe-badges` (Yield, Prep, Cook Time).
   - `.flavor-swap-panel` to highlight the allium-free strategy used.
   - `.recipe-layout-grid` with a two-column desktop layout containing the ingredients aside and instructions section.

## Tone
- Friendly, encouraging, and focused on flavor. We want to show that allium-free food can be just as delicious and complex as traditional recipes.
