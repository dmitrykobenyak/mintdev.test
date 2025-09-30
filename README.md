# Tic Tac Toe Game

A simple, interactive Tic Tac Toe game built with HTML, CSS, and JavaScript. Features a clean, modern design with animations, sound effects, and multiple game modes.

## Features

- 🎮 **Interactive Gameplay**: Click on cells or use keyboard (1-9 keys)
- 🤖 **AI Opponent**: Play against a simple AI opponent
- 🎨 **Modern Design**: Beautiful gradient backgrounds and smooth animations
- 🏆 **Score Tracking**: Persistent score tracking using localStorage
- 🎉 **Celebrations**: Confetti animation when you win
- 🔊 **Sound Effects**: Optional beep sounds for moves and wins
- 📱 **Responsive**: Works on desktop and mobile devices
- ⌨️ **Keyboard Support**: Use number keys 1-9 to play, 'R' to reset

## How to Play

1. The game is played on a 3x3 grid
2. Players take turns placing X's and O's
3. The first player to get 3 marks in a row (horizontally, vertically, or diagonally) wins
4. If all 9 squares are filled and no player has 3 in a row, the game is a draw

## Controls

- **Mouse**: Click on any empty cell to make your move
- **Keyboard**: 
  - Press keys 1-9 to place your mark in the corresponding cell
  - Press 'R' to reset the game
- **Buttons**: 
  - "Reset Game" button to start a new game
  - "Play vs AI" / "Play vs Human" to toggle game modes

## Getting Started

### Option 1: Open Directly
Simply open `index.html` in your web browser.

### Option 2: Using a Local Server
For the best experience, run it on a local server:

```bash
# Install dependencies
npm install

# Start the development server
npm start
```

The game will open automatically in your browser at `http://localhost:8080`.

### Option 3: Using Python (if you have Python installed)
```bash
# Python 3
python -m http.server 8080

# Python 2
python -m SimpleHTTPServer 8080
```

Then open `http://localhost:8080` in your browser.

## Game Modes

### Human vs Human
- Default mode where two players take turns
- Perfect for playing with friends

### Human vs AI
- Click "Play vs AI" to enable AI opponent
- AI uses a simple strategy: try to win, block player, or make random move
- AI plays as 'O' and moves after a short delay

## Technical Details

### Files Structure
```
├── index.html      # Main HTML structure
├── style.css       # Styling and animations
├── script.js       # Game logic and interactions
├── package.json    # Project configuration
└── README.md       # This file
```

### Technologies Used
- **HTML5**: Semantic structure and accessibility
- **CSS3**: Modern styling with flexbox, grid, gradients, and animations
- **JavaScript ES6+**: Game logic, DOM manipulation, and local storage
- **Web Audio API**: Sound effects (optional)

### Browser Compatibility
- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## Customization

You can easily customize the game by modifying:

- **Colors**: Change the color scheme in `style.css`
- **Animations**: Adjust animation durations and effects
- **AI Difficulty**: Modify the AI logic in `script.js`
- **Sounds**: Enable/disable sound effects or add custom audio files

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

- Inspired by the classic Tic Tac Toe game
- Modern design principles and user experience best practices
- Accessibility considerations for keyboard navigation

---

Enjoy playing Tic Tac Toe! 🎮