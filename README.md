# Mindfulness Cards App with i18n

A mindful awareness cards app with internationalization support for English and Russian languages.

## Features

- 100 unique mindfulness cards across three categories (Think, Do, Feel)
- Swipe navigation between cards
- Random card selection
- Favorites system with local storage
- **Internationalization (i18n) support**
- Language switching between English and Russian
- Proper plural forms and formatting for Russian
- Settings modal for language preferences

## i18n Implementation

### Structure

The app uses a custom lightweight i18n library (`js/i18n.js`) with the following features:

- **Translation files**: `locales/en.json` and `locales/ru.json`
- **Automatic language detection** from browser settings
- **Persistent language preferences** in localStorage
- **Fallback to English** if translation is missing
- **Dynamic language switching** without page reload

### Translation Files Structure

```json
{
  "app": {
    "title": "Mindfulness Cards",
    "subtitle": "Find your moment of awareness"
  },
  "navigation": {
    "all": "All",
    "think": "Think",
    "do": "Do",
    "feel": "Feel",
    "favorites": "Favorites",
    "previous": "Previous",
    "next": "Next",
    "drawRandom": "Draw Random Card"
  },
  "ui": {
    "currentIndex": "{{current}} / {{total}}",
    "emptyState": {
      "title": "No cards found",
      "description": "Try selecting a different category or add some favorites!"
    },
    "settings": {
      "title": "Settings",
      "language": "Language",
      "close": "Close"
    }
  },
  "cards": {
    "categories": {
      "Think": "Think",
      "Do": "Do",
      "Feel": "Feel"
    },
    "content": {
      "1": {
        "title": "Mindful Breathing",
        "description": "Take five deep breaths. Focus on the sensation of air entering and leaving your body..."
      }
      // ... 100 cards total
    }
  }
}
```

### Usage Examples

#### Basic Translation

```javascript
// Get translation for a key
const title = window.t('app.title'); // "Mindfulness Cards" or "Карты Осознанности"

// With parameters
const counter = window.t('ui.currentIndex', { current: 1, total: 100 }); // "1 / 100" or "1 из 100"
```

#### HTML Integration

```html
<!-- Static text with data-i18n attribute -->
<h1 data-i18n="app.title">Mindfulness Cards</h1>

<!-- Dynamic content updated via JavaScript -->
<span id="cardTitle"></span>
```

#### Language Switching

```javascript
// Change language programmatically
await window.i18n.setLanguage('ru');

// Listen for language changes
window.addEventListener('languageChanged', (event) => {
    console.log('Language changed to:', event.detail.language);
});
```

### Russian Language Support

The Russian translation includes:

- **Proper grammar and terminology** for mindfulness concepts
- **Cultural adaptation** of meditation and awareness practices
- **Correct plural forms** (though simplified implementation)
- **Localized number formatting** for counters

### File Structure

```
├── locales/
│   ├── en.json          # English translations
│   └── ru.json          # Russian translations
├── js/
│   └── i18n.js          # i18n library
├── index.html           # Main HTML with i18n attributes
├── script.js            # App logic with i18n integration
├── style.css            # Styles including settings modal
└── README.md            # This file
```

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start development server**:
   ```bash
   npm run dev
   ```

3. **Open in browser**: The app will open at `http://localhost:8080`

4. **Change language**: Click the settings gear icon (⚙️) in the top-right corner

## Language Settings

- **Default language**: English
- **Available languages**: English, Russian
- **Language detection**: Automatic based on browser settings
- **Language persistence**: Saved in localStorage
- **Manual switching**: Via settings modal

## Technical Implementation

### i18n Library Features

- **Lightweight**: ~200 lines of vanilla JavaScript
- **No dependencies**: Works without external libraries
- **Async loading**: Translation files loaded on demand
- **Nested keys**: Support for dot notation (`app.title`)
- **Parameter interpolation**: `{{variable}}` syntax
- **Fallback support**: Falls back to English if translation missing
- **Event system**: Emits `languageChanged` events

### Integration Points

1. **HTML elements**: Use `data-i18n` attributes for static text
2. **Dynamic content**: Update via JavaScript using `window.t()`
3. **Settings UI**: Language selector in modal
4. **Card content**: All 100 cards translated
5. **Navigation**: All buttons and labels translated

## Browser Support

- Modern browsers with ES6+ support
- localStorage for preferences
- Fetch API for loading translations
- CSS Grid and Flexbox for layout

## Contributing

To add a new language:

1. Create `locales/{language-code}.json`
2. Add language option to `getAvailableLanguages()`
3. Update language selector in HTML
4. Test all UI elements and card content

## License

MIT License - see LICENSE file for details.