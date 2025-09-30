# Mindfulness Cards App

A beautiful, interactive mindfulness and awareness cards app built with vanilla HTML, CSS, and JavaScript. Features a clean, minimal design with soft colors and smooth animations to help users find moments of peace and awareness throughout their day.

## Features

- 🧘 **Mindfulness Cards**: 12 carefully crafted cards with titles, categories, and descriptions
- 🏷️ **Category Filtering**: Filter cards by "Think", "Do", "Feel" categories or view all
- 👆 **Swipe Navigation**: Swipe left/right on mobile or use arrow keys on desktop
- 🎲 **Random Card**: Draw a random card for spontaneous mindfulness moments
- ❤️ **Favorites System**: Save favorite cards and view them in a dedicated tab
- 💾 **Local Storage**: Favorites are saved locally and persist between sessions
- 📱 **Responsive Design**: Works beautifully on desktop, tablet, and mobile
- ⌨️ **Keyboard Support**: Arrow keys for navigation, spacebar for random card, 'F' for favorites
- 🎨 **Beautiful UI**: Soft color palette with teal, lavender, and white tones

## Card Categories

### Think 💭
Cards focused on mindful thinking, awareness, and mental observation practices.

### Do 🤲
Cards with actionable mindfulness exercises and physical awareness practices.

### Feel 💝
Cards centered on emotional awareness, heart connection, and feeling-based practices.

## How to Use

1. **Browse Cards**: Use the navigation buttons or swipe left/right to browse through cards
2. **Filter by Category**: Click on category tabs (Think, Do, Feel) to filter cards
3. **Draw Random Card**: Click the "Draw Random Card" button for a surprise mindfulness moment
4. **Save Favorites**: Click the heart icon to save cards you love
5. **View Favorites**: Click the "Favorites" tab to see your saved cards

## Controls

- **Touch/Mouse**: Swipe left/right or click navigation buttons
- **Keyboard**: 
  - Arrow keys (←/→) to navigate cards
  - Spacebar to draw a random card
  - 'F' key to toggle favorite status
- **Buttons**: 
  - Category tabs for filtering
  - Heart icon to favorite/unfavorite cards
  - "Draw Random Card" for random selection

## Getting Started

### Option 1: Open Directly
Simply open `index.html` in your web browser.

### Option 2: Using a Local Server (Recommended)
For the best experience with all features:

```bash
# Install dependencies
npm install

# Start the development server
npm start
```

The app will open automatically in your browser at `http://localhost:8080`.

### Option 3: Using Python
```bash
# Python 3
python -m http.server 8080

# Python 2
python -m SimpleHTTPServer 8080
```

Then open `http://localhost:8080` in your browser.

## Technical Details

### Files Structure
```
├── index.html      # Main HTML structure
├── style.css       # Styling with CSS custom properties
├── script.js       # App logic and interactions
├── package.json    # Project configuration
└── README.md       # This file
```

### Technologies Used
- **HTML5**: Semantic structure and accessibility
- **CSS3**: Modern styling with custom properties, flexbox, animations
- **JavaScript ES6+**: Classes, localStorage, touch events, modern DOM APIs
- **LocalStorage**: For persisting favorite cards

### Design System
- **Colors**: Soft palette with teal (#4fd1c7), lavender (#b794f6), and white (#fefefe)
- **Typography**: System fonts with large, readable text
- **Layout**: Mobile-first responsive design
- **Animations**: Smooth transitions and micro-interactions

### Browser Compatibility
- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## Customization

You can easily customize the app by modifying:

- **Cards Content**: Edit the `cards` array in `script.js` to add/modify cards
- **Colors**: Change CSS custom properties in `:root` selector in `style.css`
- **Categories**: Add new categories by updating both the data and UI
- **Animations**: Adjust animation durations and effects in CSS

## Future Enhancements

- 🔔 Daily reminder notifications
- 🌙 Dark mode support
- 📊 Usage statistics and insights
- 🔄 Card sharing functionality
- 🎵 Optional ambient sounds
- 📱 Progressive Web App (PWA) features

## Contributing

Feel free to fork this project and submit pull requests for any improvements:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Inspired by mindfulness and meditation practices
- Designed with accessibility and user experience in mind
- Built with modern web standards and best practices

---

Find your moment of awareness. 🧘‍♀️✨