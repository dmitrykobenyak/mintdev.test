// Mindfulness Cards App
class MindfulnessCards {
    constructor() {
        // Expanded mindfulness cards data - 100 unique cards
        this.cards = [
            // THINK CATEGORY (33 cards)
            {
                id: 1,
                title: "Mindful Breathing",
                category: "Think",
                description: "Take five deep breaths. Focus on the sensation of air entering and leaving your body. Let each breath anchor you to the present moment."
            },
            {
                id: 2,
                title: "Present Moment Awareness",
                category: "Think",
                description: "Ask yourself: What am I thinking right now? What am I feeling? What do I notice around me? Simply observe without changing anything."
            },
            {
                id: 3,
                title: "Thought Observation",
                category: "Think",
                description: "Imagine your thoughts as clouds passing through the sky of your mind. Watch them come and go without getting caught up in their stories."
            },
            {
                id: 4,
                title: "Inner Wisdom",
                category: "Think",
                description: "Ask yourself: 'What does my inner wisdom want me to know right now?' Listen quietly for any insights that arise from within."
            },
            {
                id: 5,
                title: "Mental Clarity",
                category: "Think",
                description: "Notice the quality of your thoughts right now. Are they rushed, calm, scattered, or focused? Simply observe without judgment."
            },
            {
                id: 6,
                title: "Perspective Shift",
                category: "Think",
                description: "Consider a current challenge from the viewpoint of your wisest, most compassionate self. What would that version of you say?"
            },
            {
                id: 7,
                title: "Mindful Questioning",
                category: "Think",
                description: "Ask yourself: 'What am I learning about myself in this moment?' Allow the answer to emerge naturally without forcing it."
            },
            {
                id: 8,
                title: "Acceptance Practice",
                category: "Think",
                description: "Notice something you've been resisting. Can you soften around it, even just a little? Practice saying 'this too' to whatever arises."
            },
            {
                id: 9,
                title: "Intention Setting",
                category: "Think",
                description: "Pause and ask: 'How do I want to show up in the next hour?' Set a gentle intention for how you want to be."
            },
            {
                id: 10,
                title: "Mental Space",
                category: "Think",
                description: "Imagine your mind as a vast, open sky. Notice how thoughts and feelings are just temporary weather patterns passing through."
            },
            {
                id: 11,
                title: "Curiosity Cultivation",
                category: "Think",
                description: "Approach your current experience with genuine curiosity. What would you notice if you were encountering this moment for the first time?"
            },
            {
                id: 12,
                title: "Wisdom Reflection",
                category: "Think",
                description: "Think of someone you admire for their wisdom. What would they say about your current situation? Let their perspective guide you."
            },
            {
                id: 13,
                title: "Mental Reset",
                category: "Think",
                description: "Imagine pressing a gentle reset button in your mind. What thoughts would you choose to keep? What would you let go?"
            },
            {
                id: 14,
                title: "Awareness Check",
                category: "Think",
                description: "Notice where your attention has been dwelling. Gently guide it back to this present moment, like a kind shepherd with wandering sheep."
            },
            {
                id: 15,
                title: "Inner Dialogue",
                category: "Think",
                description: "Listen to the tone of your inner voice. Is it kind, critical, or neutral? Practice speaking to yourself as you would a dear friend."
            },
            {
                id: 16,
                title: "Mindful Priorities",
                category: "Think",
                description: "Ask yourself: 'What truly matters most right now?' Let this question guide your attention and energy for the next few minutes."
            },
            {
                id: 17,
                title: "Thought Patterns",
                category: "Think",
                description: "Notice any recurring thoughts or mental loops. Acknowledge them with kindness, then gently redirect your attention to your breath."
            },
            {
                id: 18,
                title: "Present Focus",
                category: "Think",
                description: "Count five things you can see, four you can hear, three you can touch, two you can smell, and one you can taste."
            },
            {
                id: 19,
                title: "Mental Flexibility",
                category: "Think",
                description: "Consider a belief you hold strongly. Can you imagine how someone might see it differently? Practice holding multiple perspectives gently."
            },
            {
                id: 20,
                title: "Conscious Choice",
                category: "Think",
                description: "Pause before your next action and ask: 'Am I choosing this consciously, or am I on autopilot?' Make your next move deliberately."
            },
            {
                id: 21,
                title: "Inner Stillness",
                category: "Think",
                description: "Find the quiet space between your thoughts. Rest there for a moment, like sitting by a peaceful lake at dawn."
            },
            {
                id: 22,
                title: "Mindful Analysis",
                category: "Think",
                description: "If you're facing a decision, ask: 'What would love do?' Let this question illuminate your path forward."
            },
            {
                id: 23,
                title: "Mental Inventory",
                category: "Think",
                description: "Take stock of your mental state. Are you carrying any unnecessary worries? Set them down gently, like putting down heavy bags."
            },
            {
                id: 24,
                title: "Awareness Expansion",
                category: "Think",
                description: "Expand your awareness beyond your immediate concerns. Feel yourself as part of the larger web of life around you."
            },
            {
                id: 25,
                title: "Thought Compassion",
                category: "Think",
                description: "Notice any self-critical thoughts. Respond to them with the same kindness you'd show a child who made a mistake."
            },
            {
                id: 26,
                title: "Mental Clarity",
                category: "Think",
                description: "Ask yourself: 'What is the most important thing I need to remember right now?' Let the answer arise from your deepest knowing."
            },
            {
                id: 27,
                title: "Perspective Practice",
                category: "Think",
                description: "Imagine viewing your current situation from high above, like from an airplane. How does this broader perspective change your understanding?"
            },
            {
                id: 28,
                title: "Mindful Reflection",
                category: "Think",
                description: "Think of one thing you're grateful for that you usually take for granted. Let appreciation fill your awareness."
            },
            {
                id: 29,
                title: "Inner Guidance",
                category: "Think",
                description: "Place your hand on your heart and ask: 'What does my heart want me to know?' Listen with gentle attention."
            },
            {
                id: 30,
                title: "Mental Freedom",
                category: "Think",
                description: "Notice any mental constraints you've placed on yourself. What would be possible if you released just one of them?"
            },
            {
                id: 31,
                title: "Conscious Awareness",
                category: "Think",
                description: "Become aware that you are aware. Notice the consciousness that notices your thoughts, feelings, and sensations."
            },
            {
                id: 32,
                title: "Wisdom Integration",
                category: "Think",
                description: "Recall a recent lesson you learned. How can you apply this wisdom to your current moment or situation?"
            },
            {
                id: 33,
                title: "Mental Spaciousness",
                category: "Think",
                description: "Create space between you and your thoughts. You are not your thoughts; you are the awareness that observes them."
            },

            // DO CATEGORY (34 cards)
            {
                id: 34,
                title: "Gratitude Walk",
                category: "Do",
                description: "Take a 5-minute walk and notice three things you're grateful for. It could be the warmth of sunlight, a bird's song, or simply your ability to move."
            },
            {
                id: 35,
                title: "Mindful Eating",
                category: "Do",
                description: "Choose one bite of food. Notice its color, texture, smell, and taste. Chew slowly and appreciate the nourishment it provides your body."
            },
            {
                id: 36,
                title: "Mindful Listening",
                category: "Do",
                description: "Sit quietly for 2 minutes and listen to all the sounds around you. Don't label them, just let them wash over you like waves of awareness."
            },
            {
                id: 37,
                title: "Mindful Movement",
                category: "Do",
                description: "Stand up and stretch your arms overhead. Move your body slowly and deliberately, appreciating its strength and flexibility."
            },
            {
                id: 38,
                title: "Breathing Exercise",
                category: "Do",
                description: "Practice 4-7-8 breathing: inhale for 4 counts, hold for 7, exhale for 8. Repeat three times to activate your relaxation response."
            },
            {
                id: 39,
                title: "Mindful Touch",
                category: "Do",
                description: "Find a textured object nearby. Close your eyes and explore it with your fingertips. Notice temperature, roughness, smoothness, and weight."
            },
            {
                id: 40,
                title: "Nature Connection",
                category: "Do",
                description: "Step outside or look out a window. Find one element of nature and observe it closely for two minutes without distraction."
            },
            {
                id: 41,
                title: "Mindful Drinking",
                category: "Do",
                description: "Take a sip of water or tea. Notice the temperature, taste, and sensation as it travels down your throat. Appreciate this simple nourishment."
            },
            {
                id: 42,
                title: "Gentle Stretching",
                category: "Do",
                description: "Slowly roll your shoulders, neck, and wrists. Pay attention to any areas of tension and breathe into them with kindness."
            },
            {
                id: 43,
                title: "Mindful Writing",
                category: "Do",
                description: "Write three sentences about your current experience without editing or judging. Let your thoughts flow freely onto paper."
            },
            {
                id: 44,
                title: "Sensory Grounding",
                category: "Do",
                description: "Name five things you can see, four you can touch, three you can hear, two you can smell, and one you can taste."
            },
            {
                id: 45,
                title: "Mindful Cleaning",
                category: "Do",
                description: "Choose one small cleaning task. Do it slowly and deliberately, focusing on the movements and sensations involved."
            },
            {
                id: 46,
                title: "Walking Meditation",
                category: "Do",
                description: "Take ten slow, deliberate steps. Feel your feet connecting with the ground and notice the rhythm of your movement."
            },
            {
                id: 47,
                title: "Mindful Observation",
                category: "Do",
                description: "Choose an object in your environment. Study it for two minutes as if you're seeing it for the first time. Notice every detail."
            },
            {
                id: 48,
                title: "Breathing Space",
                category: "Do",
                description: "Take three conscious breaths. With each exhale, let your shoulders drop and your jaw soften. Create space in your body."
            },
            {
                id: 49,
                title: "Mindful Posture",
                category: "Do",
                description: "Notice your current posture. Gently adjust to sit or stand taller, imagining a string pulling you up from the crown of your head."
            },
            {
                id: 50,
                title: "Hand Awareness",
                category: "Do",
                description: "Look at your hands for one minute. Notice their lines, texture, and capability. Appreciate all they help you accomplish each day."
            },
            {
                id: 51,
                title: "Mindful Transition",
                category: "Do",
                description: "Before moving to your next activity, pause for three breaths. Set an intention for how you want to approach what comes next."
            },
            {
                id: 52,
                title: "Sound Meditation",
                category: "Do",
                description: "Make a gentle humming sound for 30 seconds. Feel the vibration in your chest and throat. Notice how sound affects your body."
            },
            {
                id: 53,
                title: "Mindful Organizing",
                category: "Do",
                description: "Organize one small area mindfully. Handle each item with attention, deciding consciously what to keep, move, or release."
            },
            {
                id: 54,
                title: "Conscious Breathing",
                category: "Do",
                description: "Place one hand on your chest, one on your belly. Breathe so that only the bottom hand moves. Practice for five breaths."
            },
            {
                id: 55,
                title: "Mindful Technology",
                category: "Do",
                description: "Before checking your phone or computer, pause and set an intention. Use technology consciously rather than automatically."
            },
            {
                id: 56,
                title: "Body Appreciation",
                category: "Do",
                description: "Thank three parts of your body for their service today. Place your hand on each area and offer genuine gratitude."
            },
            {
                id: 57,
                title: "Mindful Creativity",
                category: "Do",
                description: "Draw, doodle, or create something for five minutes without any goal. Let your hands move freely and enjoy the process."
            },
            {
                id: 58,
                title: "Conscious Hydration",
                category: "Do",
                description: "Drink a full glass of water slowly. Notice your body's response and appreciate this essential act of self-care."
            },
            {
                id: 59,
                title: "Mindful Communication",
                category: "Do",
                description: "In your next conversation, listen with full attention. Notice the urge to interrupt or plan your response, then return to listening."
            },
            {
                id: 60,
                title: "Energy Check",
                category: "Do",
                description: "Stand up and shake out your hands, arms, and whole body for 30 seconds. Notice how this changes your energy and alertness."
            },
            {
                id: 61,
                title: "Mindful Routine",
                category: "Do",
                description: "Choose one daily routine (brushing teeth, washing hands) and do it with complete attention. Notice every sensation and movement."
            },
            {
                id: 62,
                title: "Conscious Rest",
                category: "Do",
                description: "Lie down for two minutes and consciously relax each part of your body, starting from your toes and moving up to your head."
            },
            {
                id: 63,
                title: "Mindful Giving",
                category: "Do",
                description: "Do one small act of kindness for someone else, whether it's a smile, holding a door, or sending an encouraging message."
            },
            {
                id: 64,
                title: "Breathing Rhythm",
                category: "Do",
                description: "Match your breathing to a natural rhythm around you - waves, wind in trees, or your own heartbeat. Sync with life's natural flow."
            },
            {
                id: 65,
                title: "Mindful Preparation",
                category: "Do",
                description: "Before starting any task, take three breaths and set a clear intention. Approach your work with presence and purpose."
            },
            {
                id: 66,
                title: "Sensory Appreciation",
                category: "Do",
                description: "Choose one sense and focus on it for two minutes. If it's sight, really see. If it's hearing, truly listen. Deepen your sensory awareness."
            },
            {
                id: 67,
                title: "Mindful Completion",
                category: "Do",
                description: "When finishing any task, pause and acknowledge what you've accomplished. Take a moment to appreciate your effort and dedication."
            },

            // FEEL CATEGORY (33 cards)
            {
                id: 68,
                title: "Body Scan",
                category: "Feel",
                description: "Close your eyes and slowly scan your body from head to toe. Notice any tension or sensations without judgment. Simply observe and breathe."
            },
            {
                id: 69,
                title: "Loving Kindness",
                category: "Feel",
                description: "Send kind thoughts to yourself: 'May I be happy, may I be peaceful, may I be free from suffering.' Then extend these wishes to someone you love."
            },
            {
                id: 70,
                title: "Heart Connection",
                category: "Feel",
                description: "Place your hand on your heart. Feel its steady rhythm. Take a moment to appreciate this organ that works tirelessly to keep you alive."
            },
            {
                id: 71,
                title: "Emotional Check-in",
                category: "Feel",
                description: "Place both hands on your chest. What emotions are present right now? Welcome them with compassion, knowing all feelings are temporary visitors."
            },
            {
                id: 72,
                title: "Self-Compassion",
                category: "Feel",
                description: "Speak to yourself as you would to a beloved friend facing the same situation. Offer yourself the same kindness and understanding."
            },
            {
                id: 73,
                title: "Emotional Acceptance",
                category: "Feel",
                description: "Notice any difficult emotions present. Instead of pushing them away, breathe with them. Say 'I see you' to whatever you're feeling."
            },
            {
                id: 74,
                title: "Gratitude Feeling",
                category: "Feel",
                description: "Think of someone who has positively impacted your life. Let the feeling of gratitude fill your heart and radiate through your body."
            },
            {
                id: 75,
                title: "Inner Peace",
                category: "Feel",
                description: "Find a place of calm within yourself, even if chaos surrounds you. Rest in this inner sanctuary for a few moments."
            },
            {
                id: 76,
                title: "Emotional Waves",
                category: "Feel",
                description: "Notice that emotions rise and fall like waves. You don't have to be swept away; you can observe them from the shore of awareness."
            },
            {
                id: 77,
                title: "Heart Opening",
                category: "Feel",
                description: "Imagine your heart expanding with each breath. Feel it growing more spacious, able to hold both joy and sorrow with equal grace."
            },
            {
                id: 78,
                title: "Comfort Zone",
                category: "Feel",
                description: "Wrap your arms around yourself in a gentle hug. Offer yourself the comfort and security you need in this moment."
            },
            {
                id: 79,
                title: "Emotional Wisdom",
                category: "Feel",
                description: "Ask your current emotion: 'What are you trying to tell me?' Listen with curiosity rather than resistance to its message."
            },
            {
                id: 80,
                title: "Joy Recognition",
                category: "Feel",
                description: "Recall a moment of simple joy from today, however small. Let that feeling expand and fill your awareness completely."
            },
            {
                id: 81,
                title: "Vulnerability Strength",
                category: "Feel",
                description: "Acknowledge something you're feeling vulnerable about. Recognize that vulnerability is not weakness, but courage to be authentic."
            },
            {
                id: 82,
                title: "Emotional Balance",
                category: "Feel",
                description: "Notice if you're leaning too heavily into any one emotion. Gently invite balance, like adjusting your posture when sitting."
            },
            {
                id: 83,
                title: "Inner Child",
                category: "Feel",
                description: "Connect with the playful, curious part of yourself. What does your inner child need to feel safe and loved right now?"
            },
            {
                id: 84,
                title: "Forgiveness Practice",
                category: "Feel",
                description: "Think of a small mistake you made recently. Offer yourself forgiveness with the same grace you'd give a good friend."
            },
            {
                id: 85,
                title: "Emotional Courage",
                category: "Feel",
                description: "Acknowledge your courage in facing whatever challenges you're currently experiencing. You are braver than you know."
            },
            {
                id: 86,
                title: "Love Expansion",
                category: "Feel",
                description: "Think of someone you love deeply. Let that feeling of love expand to include yourself, then gradually extend it to others around you."
            },
            {
                id: 87,
                title: "Emotional Release",
                category: "Feel",
                description: "If you're holding onto any tension or difficult emotions, imagine breathing them out with each exhale. Let them go with kindness."
            },
            {
                id: 88,
                title: "Inner Strength",
                category: "Feel",
                description: "Connect with your inner resilience. Remember a time you overcame difficulty. Feel that same strength available to you now."
            },
            {
                id: 89,
                title: "Emotional Honesty",
                category: "Feel",
                description: "Be completely honest with yourself about how you're feeling right now. There's no need to fix or change anything, just acknowledge."
            },
            {
                id: 90,
                title: "Compassionate Presence",
                category: "Feel",
                description: "Imagine sitting with a dear friend who is experiencing exactly what you're experiencing. What compassion would you offer them?"
            },
            {
                id: 91,
                title: "Emotional Freedom",
                category: "Feel",
                description: "Notice any emotions you've been trying to control or suppress. What would it feel like to let them exist without resistance?"
            },
            {
                id: 92,
                title: "Heart Gratitude",
                category: "Feel",
                description: "Place your hand on your heart and feel grateful for its constant, faithful beating. Let appreciation flow through your entire being."
            },
            {
                id: 93,
                title: "Emotional Gentleness",
                category: "Feel",
                description: "Treat your current emotional state with the same gentleness you'd show a wounded animal. Offer yourself tender care."
            },
            {
                id: 94,
                title: "Inner Warmth",
                category: "Feel",
                description: "Generate a feeling of warmth in your chest, like sitting by a cozy fire. Let this warmth spread throughout your body."
            },
            {
                id: 95,
                title: "Emotional Trust",
                category: "Feel",
                description: "Trust that whatever you're feeling right now is valid and temporary. You have the capacity to hold all of your experiences."
            },
            {
                id: 96,
                title: "Love Receiving",
                category: "Feel",
                description: "Imagine receiving unconditional love from the universe, nature, or a higher power. Let yourself be held in this loving embrace."
            },
            {
                id: 97,
                title: "Emotional Integration",
                category: "Feel",
                description: "Notice how different emotions can coexist within you. You can feel sad and grateful, anxious and hopeful, all at once."
            },
            {
                id: 98,
                title: "Heart Wisdom",
                category: "Feel",
                description: "Ask your heart: 'What do I most need to feel right now?' Listen with openness to whatever response arises."
            },
            {
                id: 99,
                title: "Emotional Sanctuary",
                category: "Feel",
                description: "Create an inner sanctuary where all your emotions are welcome. This is a safe space within you that nothing can disturb."
            },
            {
                id: 100,
                title: "Infinite Love",
                category: "Feel",
                description: "Connect with the infinite capacity for love within your heart. Feel it as an inexhaustible source of warmth and compassion."
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