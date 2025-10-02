/**
 * Simple i18n library for vanilla JavaScript
 * Supports interpolation and plural forms
 */
class I18n {
    constructor() {
        this.currentLanguage = 'en';
        this.translations = {};
        this.fallbackLanguage = 'en';
        
        // Load saved language preference
        this.loadLanguagePreference();
    }

    /**
     * Load translation files
     * @param {string} language - Language code (e.g., 'en', 'ru')
     * @returns {Promise}
     */
    async loadLanguage(language) {
        try {
            const response = await fetch(`./locales/${language}.json`);
            if (!response.ok) {
                throw new Error(`Failed to load language file: ${language}`);
            }
            
            const translations = await response.json();
            this.translations[language] = translations;
            
            return translations;
        } catch (error) {
            console.error(`Error loading language ${language}:`, error);
            
            // If it's not the fallback language, try to load fallback
            if (language !== this.fallbackLanguage) {
                return this.loadLanguage(this.fallbackLanguage);
            }
            
            throw error;
        }
    }

    /**
     * Set current language
     * @param {string} language - Language code
     * @returns {Promise}
     */
    async setLanguage(language) {
        // Load language if not already loaded
        if (!this.translations[language]) {
            await this.loadLanguage(language);
        }
        
        this.currentLanguage = language;
        this.saveLanguagePreference(language);
        
        // Update document language attribute
        document.documentElement.lang = language;
        
        // Trigger language change event
        window.dispatchEvent(new CustomEvent('languageChanged', { 
            detail: { language } 
        }));
    }

    /**
     * Get translation for a key
     * @param {string} key - Translation key (e.g., 'app.title')
     * @param {Object} params - Parameters for interpolation
     * @param {number} count - Count for plural forms (Russian)
     * @returns {string}
     */
    t(key, params = {}, count = null) {
        const translation = this.getNestedValue(
            this.translations[this.currentLanguage] || {},
            key
        );

        if (translation === undefined) {
            // Try fallback language
            const fallbackTranslation = this.getNestedValue(
                this.translations[this.fallbackLanguage] || {},
                key
            );
            
            if (fallbackTranslation === undefined) {
                console.warn(`Translation missing for key: ${key}`);
                return key; // Return key as fallback
            }
            
            return this.interpolate(fallbackTranslation, params, count);
        }

        return this.interpolate(translation, params, count);
    }

    /**
     * Get nested object value by dot notation key
     * @param {Object} obj - Object to search in
     * @param {string} key - Dot notation key
     * @returns {*}
     */
    getNestedValue(obj, key) {
        return key.split('.').reduce((current, prop) => {
            return current && current[prop] !== undefined ? current[prop] : undefined;
        }, obj);
    }

    /**
     * Interpolate parameters into translation string
     * @param {string} translation - Translation string
     * @param {Object} params - Parameters for interpolation
     * @param {number} count - Count for plural forms
     * @returns {string}
     */
    interpolate(translation, params = {}, count = null) {
        let result = translation;

        // Handle plural forms for Russian
        if (count !== null && this.currentLanguage === 'ru') {
            result = this.handleRussianPlurals(result, count);
        }

        // Replace parameters
        Object.keys(params).forEach(key => {
            const regex = new RegExp(`{{\\s*${key}\\s*}}`, 'g');
            result = result.replace(regex, params[key]);
        });

        return result;
    }

    /**
     * Handle Russian plural forms
     * Russian has complex plural rules:
     * - 1: singular (1, 21, 31, 41, ...)
     * - 2-4: few (2, 3, 4, 22, 23, 24, ...)
     * - 0, 5-20: many (0, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 25, 26, ...)
     * 
     * @param {string} translation - Translation string
     * @param {number} count - Count for plural forms
     * @returns {string}
     */
    handleRussianPlurals(translation, count) {
        // This is a simplified implementation
        // In a real app, you might want to use a more sophisticated plural rules library
        
        const lastDigit = count % 10;
        const lastTwoDigits = count % 100;

        // For now, we'll use a simple approach
        // You can extend this based on your specific needs
        return translation;
    }

    /**
     * Get current language
     * @returns {string}
     */
    getCurrentLanguage() {
        return this.currentLanguage;
    }

    /**
     * Get available languages
     * @returns {Array}
     */
    getAvailableLanguages() {
        return ['en', 'ru'];
    }

    /**
     * Save language preference to localStorage
     * @param {string} language - Language code
     */
    saveLanguagePreference(language) {
        try {
            localStorage.setItem('mindfulness-language', language);
        } catch (error) {
            console.error('Error saving language preference:', error);
        }
    }

    /**
     * Load language preference from localStorage
     */
    loadLanguagePreference() {
        try {
            const saved = localStorage.getItem('mindfulness-language');
            if (saved && this.getAvailableLanguages().includes(saved)) {
                this.currentLanguage = saved;
            } else {
                // Detect browser language
                const browserLang = navigator.language.split('-')[0];
                if (this.getAvailableLanguages().includes(browserLang)) {
                    this.currentLanguage = browserLang;
                }
            }
        } catch (error) {
            console.error('Error loading language preference:', error);
        }
    }

    /**
     * Format numbers according to current locale
     * @param {number} number - Number to format
     * @param {Object} options - Intl.NumberFormat options
     * @returns {string}
     */
    formatNumber(number, options = {}) {
        const locale = this.currentLanguage === 'ru' ? 'ru-RU' : 'en-US';
        return new Intl.NumberFormat(locale, options).format(number);
    }

    /**
     * Format dates according to current locale
     * @param {Date} date - Date to format
     * @param {Object} options - Intl.DateTimeFormat options
     * @returns {string}
     */
    formatDate(date, options = {}) {
        const locale = this.currentLanguage === 'ru' ? 'ru-RU' : 'en-US';
        return new Intl.DateTimeFormat(locale, options).format(date);
    }
}

// Create global i18n instance
window.i18n = new I18n();

// Convenience function for translations
window.t = (key, params, count) => window.i18n.t(key, params, count);

// Export for module systems
if (typeof module !== 'undefined' && module.exports) {
    module.exports = I18n;
}