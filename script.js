// Mindfulness Cards App
class MindfulnessCards {
    constructor() {
        // Sample mindfulness cards data
        this.cards = [
            {
                id: 1,
                title: "Mindful Breathing",
                category: "Think",
                description: "Take five deep breaths. Focus on the sensation of air entering and leaving your body. Let each breath anchor you to the present moment."
            },
            {
                id: 2,
                title: "Body Scan",
                category: "Feel",
                description: "Close your eyes and slowly scan your body from head to toe. Notice any tension or sensations without judgment. Simply observe and breathe."
            },
            {
                id: 3,
                title: "Gratitude Walk",
                category: "Do",
                description: "Take a 5-minute walk and notice three things you're grateful for. It could be the warmth of sunlight, a bird's song, or simply your ability to move."
            },
            {
                id: 4,
                title: "Present Moment Awareness",
                category: "Think",
                description: "Ask yourself: What am I thinking right now? What am I feeling? What do I notice around me? Simply observe without changing anything."
            },
            {
                id: 5,
                title: "Loving Kindness",
                category: "Feel",
                description: "Send kind thoughts to yourself: 'May I be happy, may I be peaceful, may I be free from suffering.' Then extend these wishes to someone you love."
            },
            {
                id: 6,
                title: "Mindful Eating",
                category: "Do",
                description: "Choose one bite of food. Notice its color, texture, smell, and taste. Chew slowly and appreciate the nourishment it provides your body."
            },
            {
                id: 7,
                title: "Thought Observation",
                category: "Think",
                description: "Imagine your thoughts as clouds passing through the sky of your mind. Watch them come and go without getting caught up in their stories."
            },
            {
                id: 8,
                title: "Heart Connection",
                category: "Feel",
                description: "Place your hand on your heart. Feel its steady rhythm. Take a moment to appreciate this organ that works tirelessly to keep you alive."
            },
            {
                id: 9,
                title: "Mindful Listening",
                category: "Do",
                description: "Sit quietly for 2 minutes and listen to all the sounds around you. Don't label them, just let them wash over you like waves of awareness."
            },
            {
                id: 10,
                title: "Inner Wisdom",
                category: "Think",
                description: "Ask yourself: 'What does my inner wisdom want me to know right now?' Listen quietly for any insights that arise from within."
            },
            {
                id: 11,
                title: "Emotional Check-in",
                category: "Feel",
                description: "Place both hands on your chest. What emotions are present right now? Welcome them with compassion, knowing all feelings are temporary visitors."
            },
            {
                id: 12,
                title: "Mindful Movement",
                category: "Do",
                description: "Stand up and stretch your arms overhead. Move your body slowly and deliberately, appreciating its strength and flexibility."
            }
        ];

        this.currentIndex = 0;
        this.currentCategory = 'all';
        this.filteredCards = [...this.cards];
        this.favorites = this.loadFavorites();
        
        // Touch/swipe handling
        this.touchStartX = 0;
        this.touchEndX = 0;
        this.isSwipeEnabled = true;
        
        this.init();
    }

    init() {
        // Get DOM elements
        this.cardWrapper = document.getElementById('cardWrapper');
        this.currentCard = document.getElementById('currentCard');
        this.cardTitle = document.getElementById('cardTitle');
        this.cardCategory = document.getElementById('cardCategory');
        this.cardDescription = document.getElementById('cardDescription');
        this.favoriteBtn = document.getElementById('favoriteBtn');
        this.randomBtn = document.getElementById('randomBtn');
        this.prevBtn = document.getElementById('prevBtn');
        this.nextBtn = document.getElementById('nextBtn');
        this.currentIndexSpan = document.getElementById('currentIndex');
        this.totalCardsSpan = document.getElementById('totalCards');
        this.emptyState = document.getElementById('emptyState');
        this.categoryBtns = document.querySelectorAll('.category-btn');

        // Add event listeners
        this.addEventListeners();
        
        // Initialize display
        this.updateDisplay();
        this.updateNavigation();
    }

    addEventListeners() {
        // Category buttons
        this.categoryBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.filterByCategory(e.target.dataset.category);
            });
        });

        // Navigation buttons
        this.prevBtn.addEventListener('click', () => this.previousCard());
        this.nextBtn.addEventListener('click', () => this.nextCard());
        this.randomBtn.addEventListener('click', () => this.drawRandomCard());
        this.favoriteBtn.addEventListener('click', () => this.toggleFavorite());

        // Touch/swipe events
        this.cardWrapper.addEventListener('touchstart', (e) => this.handleTouchStart(e), { passive: true });
        this.cardWrapper.addEventListener('touchend', (e) => this.handleTouchEnd(e), { passive: true });
        
        // Mouse events for desktop swipe simulation
        this.cardWrapper.addEventListener('mousedown', (e) => this.handleMouseDown(e));
        this.cardWrapper.addEventListener('mouseup', (e) => this.handleMouseUp(e));

        // Keyboard navigation
        document.addEventListener('keydown', (e) => this.handleKeyPress(e));
    }

    filterByCategory(category) {
        this.currentCategory = category;
        this.currentIndex = 0;

        // Update active category button
        this.categoryBtns.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.category === category);
        });

        // Filter cards
        if (category === 'all') {
            this.filteredCards = [...this.cards];
        } else if (category === 'favorites') {
            this.filteredCards = this.cards.filter(card => this.favorites.includes(card.id));
        } else {
            this.filteredCards = this.cards.filter(card => card.category === category);
        }

        this.updateDisplay();
        this.updateNavigation();
    }

    updateDisplay() {
        if (this.filteredCards.length === 0) {
            this.cardWrapper.style.display = 'none';
            this.emptyState.style.display = 'block';
            return;
        }

        this.cardWrapper.style.display = 'block';
        this.emptyState.style.display = 'none';

        const card = this.filteredCards[this.currentIndex];
        
        // Update card content
        this.cardTitle.textContent = card.title;
        this.cardDescription.textContent = card.description;
        this.cardCategory.textContent = card.category;
        
        // Update category styling
        this.cardCategory.className = `card-category ${card.category.toLowerCase()}`;
        
        // Update favorite button
        const isFavorite = this.favorites.includes(card.id);
        this.favoriteBtn.classList.toggle('active', isFavorite);
        this.favoriteBtn.querySelector('.heart').textContent = isFavorite ? '♥' : '♡';

        // Add fade-in animation
        this.currentCard.classList.remove('slide-in-left', 'slide-in-right', 'fade-in');
        setTimeout(() => {
            this.currentCard.classList.add('fade-in');
        }, 50);
    }

    updateNavigation() {
        if (this.filteredCards.length === 0) {
            this.prevBtn.disabled = true;
            this.nextBtn.disabled = true;
            this.currentIndexSpan.textContent = '0';
            this.totalCardsSpan.textContent = '0';
            return;
        }

        this.prevBtn.disabled = this.currentIndex === 0;
        this.nextBtn.disabled = this.currentIndex === this.filteredCards.length - 1;
        
        this.currentIndexSpan.textContent = this.currentIndex + 1;
        this.totalCardsSpan.textContent = this.filteredCards.length;
    }

    previousCard() {
        if (this.currentIndex > 0) {
            this.currentIndex--;
            this.currentCard.classList.add('slide-in-left');
            setTimeout(() => {
                this.updateDisplay();
                this.updateNavigation();
            }, 100);
        }
    }

    nextCard() {
        if (this.currentIndex < this.filteredCards.length - 1) {
            this.currentIndex++;
            this.currentCard.classList.add('slide-in-right');
            setTimeout(() => {
                this.updateDisplay();
                this.updateNavigation();
            }, 100);
        }
    }

    drawRandomCard() {
        if (this.filteredCards.length === 0) return;
        
        const randomIndex = Math.floor(Math.random() * this.filteredCards.length);
        this.currentIndex = randomIndex;
        
        // Add special animation for random card
        this.currentCard.style.transform = 'scale(0.8) rotate(5deg)';
        this.currentCard.style.opacity = '0';
        
        setTimeout(() => {
            this.updateDisplay();
            this.updateNavigation();
            this.currentCard.style.transform = 'scale(1) rotate(0deg)';
            this.currentCard.style.opacity = '1';
        }, 200);
    }

    toggleFavorite() {
        if (this.filteredCards.length === 0) return;
        
        const card = this.filteredCards[this.currentIndex];
        const favoriteIndex = this.favorites.indexOf(card.id);
        
        if (favoriteIndex === -1) {
            this.favorites.push(card.id);
        } else {
            this.favorites.splice(favoriteIndex, 1);
        }
        
        this.saveFavorites();
        this.updateDisplay();
        
        // If we're viewing favorites and removed this card, update the view
        if (this.currentCategory === 'favorites' && favoriteIndex !== -1) {
            this.filterByCategory('favorites');
        }
    }

    // Touch/Swipe handling
    handleTouchStart(e) {
        if (!this.isSwipeEnabled) return;
        this.touchStartX = e.touches[0].clientX;
    }

    handleTouchEnd(e) {
        if (!this.isSwipeEnabled) return;
        this.touchEndX = e.changedTouches[0].clientX;
        this.handleSwipe();
    }

    handleMouseDown(e) {
        if (!this.isSwipeEnabled) return;
        this.touchStartX = e.clientX;
        this.cardWrapper.style.cursor = 'grabbing';
    }

    handleMouseUp(e) {
        if (!this.isSwipeEnabled) return;
        this.touchEndX = e.clientX;
        this.cardWrapper.style.cursor = 'grab';
        this.handleSwipe();
    }

    handleSwipe() {
        const swipeThreshold = 50;
        const swipeDistance = this.touchEndX - this.touchStartX;
        
        if (Math.abs(swipeDistance) < swipeThreshold) return;
        
        if (swipeDistance > 0) {
            // Swipe right - previous card
            this.previousCard();
        } else {
            // Swipe left - next card
            this.nextCard();
        }
    }

    handleKeyPress(e) {
        switch(e.key) {
            case 'ArrowLeft':
                e.preventDefault();
                this.previousCard();
                break;
            case 'ArrowRight':
                e.preventDefault();
                this.nextCard();
                break;
            case ' ':
                e.preventDefault();
                this.drawRandomCard();
                break;
            case 'f':
            case 'F':
                e.preventDefault();
                this.toggleFavorite();
                break;
        }
    }

    // Local Storage methods
    loadFavorites() {
        try {
            const saved = localStorage.getItem('mindfulness-favorites');
            return saved ? JSON.parse(saved) : [];
        } catch (error) {
            console.error('Error loading favorites:', error);
            return [];
        }
    }

    saveFavorites() {
        try {
            localStorage.setItem('mindfulness-favorites', JSON.stringify(this.favorites));
        } catch (error) {
            console.error('Error saving favorites:', error);
        }
    }
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new MindfulnessCards();
});

// Service Worker registration for potential PWA features
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}