# Project Overview

## Current State
The repository currently contains a Tic Tac Toe game built with vanilla HTML, CSS, and JavaScript. However, the task is to create a **mindfulness/awareness cards app** with the following requirements:

## Target Application Requirements
- Display a deck of mindfulness/awareness cards with title, category, and description
- Categories should be filterable via top menu (tabs/chips)
- User can swipe left/right to browse cards
- "Draw random card" button functionality
- Pleasant card design with title, category color, and text block
- Favorite cards feature with separate "Favorites" tab
- Local storage using AsyncStorage for favorites
- Daily reminder notifications (bonus feature)
- Clean, minimal UI with soft colors (teal, lavender, white)

## Tech Stack
- **Frontend**: HTML5, CSS3, JavaScript ES6+
- **Storage**: LocalStorage (instead of AsyncStorage since this is web-based)
- **Styling**: Modern CSS with flexbox/grid, gradients, animations
- **Server**: http-server for development

## Project Structure
```
├── index.html      # Main HTML structure
├── style.css       # Styling and animations
├── script.js       # Application logic
├── package.json    # Project configuration
└── README.md       # Documentation
```