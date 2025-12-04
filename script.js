// Mindfulness Cards App with i18n support
class MindfulnessCards {
    constructor() {
        // Expanded mindfulness cards data - 300 unique cards
        this.cards = [
            // THINK CATEGORY (100 cards)
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
            {
                id: 34,
                title: "Beginner's Mind",
                category: "Think",
                description: "Approach this moment as if you know nothing. What do you notice when you drop all assumptions and expectations?"
            },
            {
                id: 35,
                title: "Thought Detachment",
                category: "Think",
                description: "Practice watching your thoughts without identifying with them. You are the observer, not the observed."
            },
            {
                id: 36,
                title: "Mental Pause",
                category: "Think",
                description: "Before reacting to anything, take three conscious breaths. Notice how this pause creates space for wiser responses."
            },
            {
                id: 37,
                title: "Clarity Seeking",
                category: "Think",
                description: "If something feels confusing, ask: 'What am I not seeing clearly?' Wait patiently for insight to emerge."
            },
            {
                id: 38,
                title: "Mind-Body Connection",
                category: "Think",
                description: "Notice how your thoughts affect your body. Where do you feel stress, peace, or tension manifesting physically?"
            },
            {
                id: 39,
                title: "Assumption Questioning",
                category: "Think",
                description: "Identify one assumption you're making right now. Ask yourself: 'Is this absolutely true? How do I know?'"
            },
            {
                id: 40,
                title: "Present Anchoring",
                category: "Think",
                description: "Name three facts about your immediate environment. This anchors your mind in the present reality."
            },
            {
                id: 41,
                title: "Thought Gratitude",
                category: "Think",
                description: "Appreciate your mind's ability to think, reason, and imagine. Thank it for serving you, even when thoughts are challenging."
            },
            {
                id: 42,
                title: "Mental Boundaries",
                category: "Think",
                description: "Notice if you're taking on others' problems mentally. Practice distinguishing between your thoughts and others' concerns."
            },
            {
                id: 43,
                title: "Wisdom Questions",
                category: "Think",
                description: "Ask yourself: 'What would my 80-year-old self want me to know about this situation?' Listen for the answer."
            },
            {
                id: 44,
                title: "Thought Energy",
                category: "Think",
                description: "Notice which thoughts drain your energy and which ones uplift you. Choose to dwell on the uplifting ones."
            },
            {
                id: 45,
                title: "Mental Simplicity",
                category: "Think",
                description: "If your mind feels cluttered, ask: 'What's the simplest way to think about this?' Let complexity dissolve."
            },
            {
                id: 46,
                title: "Awareness Practice",
                category: "Think",
                description: "For one minute, simply be aware of being aware. Rest in pure consciousness without focusing on any particular object."
            },
            {
                id: 47,
                title: "Thought Patterns Recognition",
                category: "Think",
                description: "Identify your most common thought pattern today. Is it worry, planning, reminiscing, or something else?"
            },
            {
                id: 48,
                title: "Mental Nourishment",
                category: "Think",
                description: "What thoughts nourish your soul? Deliberately think about something that brings you genuine joy or peace."
            },
            {
                id: 49,
                title: "Perspective Zoom",
                category: "Think",
                description: "Zoom out from your current concern. In the context of your whole life, how significant is this really?"
            },
            {
                id: 50,
                title: "Inner Listening",
                category: "Think",
                description: "Stop all mental activity for a moment. Listen to the silence beneath your thoughts. What do you hear?"
            },
            {
                id: 51,
                title: "Thought Reframing",
                category: "Think",
                description: "Take a negative thought and reframe it neutrally or positively. Notice how this shift changes your emotional state."
            },
            {
                id: 52,
                title: "Mental Presence",
                category: "Think",
                description: "Ask yourself: 'Am I here now, or am I lost in thoughts about past or future?' Gently return to now."
            },
            {
                id: 53,
                title: "Wisdom Cultivation",
                category: "Think",
                description: "Reflect on a mistake you made. What wisdom did it teach you? How has it made you wiser?"
            },
            {
                id: 54,
                title: "Thought Observation Practice",
                category: "Think",
                description: "Set a timer for 2 minutes. Simply watch your thoughts arise and pass without engaging with them."
            },
            {
                id: 55,
                title: "Mental Clarity Check",
                category: "Think",
                description: "Rate your mental clarity right now from 1-10. What would help you move one point higher?"
            },
            {
                id: 56,
                title: "Conscious Thinking",
                category: "Think",
                description: "Choose one thought deliberately. Notice the difference between chosen thoughts and automatic ones."
            },
            {
                id: 57,
                title: "Mind Appreciation",
                category: "Think",
                description: "Marvel at your mind's incredible capacity to learn, adapt, and create. Appreciate this amazing gift."
            },
            {
                id: 58,
                title: "Thought Liberation",
                category: "Think",
                description: "Identify one limiting belief. Ask: 'What would I do if I didn't believe this?' Feel the freedom in that question."
            },
            {
                id: 59,
                title: "Mental Hygiene",
                category: "Think",
                description: "Just as you clean your body, clean your mind. Release any toxic thoughts with compassion and let them go."
            },
            {
                id: 60,
                title: "Awareness Depth",
                category: "Think",
                description: "Go deeper into your awareness. Behind your thoughts, behind your feelings, what is the essence of you?"
            },
            {
                id: 61,
                title: "Thought Intention",
                category: "Think",
                description: "Before thinking about a topic, set an intention: 'May my thoughts about this be wise, kind, and helpful.'"
            },
            {
                id: 62,
                title: "Mental Balance",
                category: "Think",
                description: "Notice if you're overthinking or underthinking. Find the middle way between analysis and intuition."
            },
            {
                id: 63,
                title: "Wisdom Seeking",
                category: "Think",
                description: "Ask yourself: 'What is life trying to teach me right now?' Be open to unexpected answers."
            },
            {
                id: 64,
                title: "Thought Awareness",
                category: "Think",
                description: "Notice the gap between thoughts. In that gap, there is peace. Rest there as long as you can."
            },
            {
                id: 65,
                title: "Mental Gratitude",
                category: "Think",
                description: "Think of three things your mind helped you accomplish today. Thank it for its service."
            },
            {
                id: 66,
                title: "Perspective Wisdom",
                category: "Think",
                description: "Consider how someone from a different culture or time period might view your situation. What can you learn?"
            },
            {
                id: 67,
                title: "Conscious Reflection",
                category: "Think",
                description: "Reflect on your day so far. What patterns do you notice in your thinking? What would you like to shift?"
            },
            {
                id: 68,
                title: "Mental Anchoring",
                category: "Think",
                description: "Choose a word that represents how you want to feel. Repeat it silently as an anchor when your mind wanders."
            },
            {
                id: 69,
                title: "Thought Witnessing",
                category: "Think",
                description: "Become the silent witness of your thoughts. Watch them without commentary, like observing fish in an aquarium."
            },
            {
                id: 70,
                title: "Cognitive Flexibility",
                category: "Think",
                description: "Challenge yourself to think of three different ways to interpret a recent event. Notice how perspective shapes reality."
            },
            {
                id: 71,
                title: "Mental Decluttering",
                category: "Think",
                description: "Identify three thoughts that no longer serve you. Imagine placing them in a box and setting it aside."
            },
            {
                id: 72,
                title: "Awareness Meditation",
                category: "Think",
                description: "Ask yourself: 'Who is aware of these thoughts?' Trace back to the source of awareness itself."
            },
            {
                id: 73,
                title: "Thought Neutrality",
                category: "Think",
                description: "Practice viewing your thoughts as neutral data rather than truth. They're just mental events, not facts."
            },
            {
                id: 74,
                title: "Mental Sanctuary",
                category: "Think",
                description: "Create a mental sanctuary you can visit anytime. Visualize it in detail and return there when you need peace."
            },
            {
                id: 75,
                title: "Wisdom Dialogue",
                category: "Think",
                description: "Have an imaginary conversation with your wisest self. What advice would they offer about your current situation?"
            },
            {
                id: 76,
                title: "Thought Momentum",
                category: "Think",
                description: "Notice how one thought leads to another. Can you interrupt this momentum and choose a new direction?"
            },
            {
                id: 77,
                title: "Mental Centering",
                category: "Think",
                description: "Bring your awareness to the center of your head. Rest there, observing thoughts from this central point."
            },
            {
                id: 78,
                title: "Perspective Rotation",
                category: "Think",
                description: "Rotate through different perspectives: past you, future you, a loved one, a stranger. How does each view this moment?"
            },
            {
                id: 79,
                title: "Thought Ecology",
                category: "Think",
                description: "Consider the ecosystem of your mind. Are your thoughts creating a healthy environment for growth?"
            },
            {
                id: 80,
                title: "Mental Sovereignty",
                category: "Think",
                description: "Reclaim sovereignty over your mind. You are the ruler of your mental kingdom. What laws will you establish?"
            },
            {
                id: 81,
                title: "Awareness Layers",
                category: "Think",
                description: "Notice the layers of awareness: thoughts, awareness of thoughts, awareness of awareness. How deep can you go?"
            },
            {
                id: 82,
                title: "Thought Gardening",
                category: "Think",
                description: "Tend to your mental garden. Which thoughts are weeds to pull? Which are flowers to nurture?"
            },
            {
                id: 83,
                title: "Mental Horizon",
                category: "Think",
                description: "Expand your mental horizon. What lies beyond your current way of thinking? Explore the edges."
            },
            {
                id: 84,
                title: "Wisdom Embodiment",
                category: "Think",
                description: "Don't just think wise thoughts—embody them. How would wisdom move through your body and actions?"
            },
            {
                id: 85,
                title: "Thought Archaeology",
                category: "Think",
                description: "Dig beneath surface thoughts to find their origins. What beliefs or experiences created this thought pattern?"
            },
            {
                id: 86,
                title: "Mental Alchemy",
                category: "Think",
                description: "Practice transforming heavy thoughts into lighter ones. What's the alchemical process that works for you?"
            },
            {
                id: 87,
                title: "Awareness Expansion Practice",
                category: "Think",
                description: "Gradually expand your awareness from your body, to the room, to the building, to the city, to the planet."
            },
            {
                id: 88,
                title: "Thought Architecture",
                category: "Think",
                description: "Examine the structure of your thoughts. Are they building something beautiful or something that needs renovation?"
            },
            {
                id: 89,
                title: "Mental Resilience",
                category: "Think",
                description: "Reflect on how your mind has bounced back from challenges. What mental strengths have you developed?"
            },
            {
                id: 90,
                title: "Wisdom Integration Practice",
                category: "Think",
                description: "Take one piece of wisdom you've learned and integrate it fully. How can it become part of your being?"
            },
            {
                id: 91,
                title: "Thought Transparency",
                category: "Think",
                description: "Make your thoughts transparent to yourself. Shine light on hidden assumptions and unconscious patterns."
            },
            {
                id: 92,
                title: "Mental Metamorphosis",
                category: "Think",
                description: "Notice how your thinking is evolving. Like a caterpillar becoming a butterfly, how is your mind transforming?"
            },
            {
                id: 93,
                title: "Awareness Calibration",
                category: "Think",
                description: "Calibrate your awareness like tuning an instrument. What frequency of consciousness feels most aligned?"
            },
            {
                id: 94,
                title: "Thought Symphony",
                category: "Think",
                description: "Listen to the symphony of your thoughts. Notice the rhythm, harmony, and sometimes discord. Can you conduct it?"
            },
            {
                id: 95,
                title: "Mental Navigation",
                category: "Think",
                description: "Navigate your mental landscape with intention. Where do you want to go? What thoughts will take you there?"
            },
            {
                id: 96,
                title: "Wisdom Crystallization",
                category: "Think",
                description: "Let your experiences crystallize into wisdom. What clear insights have formed from the chaos of life?"
            },
            {
                id: 97,
                title: "Thought Liberation Practice",
                category: "Think",
                description: "Practice liberating yourself from thought tyranny. You don't have to believe every thought that arises."
            },
            {
                id: 98,
                title: "Mental Homecoming",
                category: "Think",
                description: "Return home to your true mind—the one beneath conditioning and habit. What does it feel like to come home?"
            },
            {
                id: 99,
                title: "Awareness Mastery",
                category: "Think",
                description: "Mastery isn't controlling thoughts but dancing with them skillfully. How can you become a better dancer?"
            },
            {
                id: 100,
                title: "Infinite Mind",
                category: "Think",
                description: "Touch the infinite nature of mind. Beyond all thoughts, there is boundless awareness. Rest in that infinity."
            },

            // DO CATEGORY (100 cards)
            {
                id: 101,
                title: "Gratitude Walk",
                category: "Do",
                description: "Take a 5-minute walk and notice three things you're grateful for. It could be the warmth of sunlight, a bird's song, or simply your ability to move."
            },
            {
                id: 102,
                title: "Mindful Eating",
                category: "Do",
                description: "Choose one bite of food. Notice its color, texture, smell, and taste. Chew slowly and appreciate the nourishment it provides your body."
            },
            {
                id: 103,
                title: "Mindful Listening",
                category: "Do",
                description: "Sit quietly for 2 minutes and listen to all the sounds around you. Don't label them, just let them wash over you like waves of awareness."
            },
            {
                id: 104,
                title: "Mindful Movement",
                category: "Do",
                description: "Stand up and stretch your arms overhead. Move your body slowly and deliberately, appreciating its strength and flexibility."
            },
            {
                id: 105,
                title: "Breathing Exercise",
                category: "Do",
                description: "Practice 4-7-8 breathing: inhale for 4 counts, hold for 7, exhale for 8. Repeat three times to activate your relaxation response."
            },
            {
                id: 106,
                title: "Mindful Touch",
                category: "Do",
                description: "Find a textured object nearby. Close your eyes and explore it with your fingertips. Notice temperature, roughness, smoothness, and weight."
            },
            {
                id: 107,
                title: "Nature Connection",
                category: "Do",
                description: "Step outside or look out a window. Find one element of nature and observe it closely for two minutes without distraction."
            },
            {
                id: 108,
                title: "Mindful Drinking",
                category: "Do",
                description: "Take a sip of water or tea. Notice the temperature, taste, and sensation as it travels down your throat. Appreciate this simple nourishment."
            },
            {
                id: 109,
                title: "Gentle Stretching",
                category: "Do",
                description: "Slowly roll your shoulders, neck, and wrists. Pay attention to any areas of tension and breathe into them with kindness."
            },
            {
                id: 110,
                title: "Mindful Writing",
                category: "Do",
                description: "Write three sentences about your current experience without editing or judging. Let your thoughts flow freely onto paper."
            },
            {
                id: 111,
                title: "Sensory Grounding",
                category: "Do",
                description: "Name five things you can see, four you can touch, three you can hear, two you can smell, and one you can taste."
            },
            {
                id: 112,
                title: "Mindful Cleaning",
                category: "Do",
                description: "Choose one small cleaning task. Do it slowly and deliberately, focusing on the movements and sensations involved."
            },
            {
                id: 113,
                title: "Walking Meditation",
                category: "Do",
                description: "Take ten slow, deliberate steps. Feel your feet connecting with the ground and notice the rhythm of your movement."
            },
            {
                id: 114,
                title: "Mindful Observation",
                category: "Do",
                description: "Choose an object in your environment. Study it for two minutes as if you're seeing it for the first time. Notice every detail."
            },
            {
                id: 115,
                title: "Breathing Space",
                category: "Do",
                description: "Take three conscious breaths. With each exhale, let your shoulders drop and your jaw soften. Create space in your body."
            },
            {
                id: 116,
                title: "Mindful Posture",
                category: "Do",
                description: "Notice your current posture. Gently adjust to sit or stand taller, imagining a string pulling you up from the crown of your head."
            },
            {
                id: 117,
                title: "Hand Awareness",
                category: "Do",
                description: "Look at your hands for one minute. Notice their lines, texture, and capability. Appreciate all they help you accomplish each day."
            },
            {
                id: 118,
                title: "Mindful Transition",
                category: "Do",
                description: "Before moving to your next activity, pause for three breaths. Set an intention for how you want to approach what comes next."
            },
            {
                id: 119,
                title: "Sound Meditation",
                category: "Do",
                description: "Make a gentle humming sound for 30 seconds. Feel the vibration in your chest and throat. Notice how sound affects your body."
            },
            {
                id: 120,
                title: "Mindful Organizing",
                category: "Do",
                description: "Organize one small area mindfully. Handle each item with attention, deciding consciously what to keep, move, or release."
            },
            {
                id: 121,
                title: "Conscious Breathing",
                category: "Do",
                description: "Place one hand on your chest, one on your belly. Breathe so that only the bottom hand moves. Practice for five breaths."
            },
            {
                id: 122,
                title: "Mindful Technology",
                category: "Do",
                description: "Before checking your phone or computer, pause and set an intention. Use technology consciously rather than automatically."
            },
            {
                id: 123,
                title: "Body Appreciation",
                category: "Do",
                description: "Thank three parts of your body for their service today. Place your hand on each area and offer genuine gratitude."
            },
            {
                id: 124,
                title: "Mindful Creativity",
                category: "Do",
                description: "Draw, doodle, or create something for five minutes without any goal. Let your hands move freely and enjoy the process."
            },
            {
                id: 125,
                title: "Conscious Hydration",
                category: "Do",
                description: "Drink a full glass of water slowly. Notice your body's response and appreciate this essential act of self-care."
            },
            {
                id: 126,
                title: "Mindful Communication",
                category: "Do",
                description: "In your next conversation, listen with full attention. Notice the urge to interrupt or plan your response, then return to listening."
            },
            {
                id: 127,
                title: "Energy Check",
                category: "Do",
                description: "Stand up and shake out your hands, arms, and whole body for 30 seconds. Notice how this changes your energy and alertness."
            },
            {
                id: 128,
                title: "Mindful Routine",
                category: "Do",
                description: "Choose one daily routine (brushing teeth, washing hands) and do it with complete attention. Notice every sensation and movement."
            },
            {
                id: 129,
                title: "Conscious Rest",
                category: "Do",
                description: "Lie down for two minutes and consciously relax each part of your body, starting from your toes and moving up to your head."
            },
            {
                id: 130,
                title: "Mindful Giving",
                category: "Do",
                description: "Do one small act of kindness for someone else, whether it's a smile, holding a door, or sending an encouraging message."
            },
            {
                id: 131,
                title: "Breathing Rhythm",
                category: "Do",
                description: "Match your breathing to a natural rhythm around you - waves, wind in trees, or your own heartbeat. Sync with life's natural flow."
            },
            {
                id: 132,
                title: "Mindful Preparation",
                category: "Do",
                description: "Before starting any task, take three breaths and set a clear intention. Approach your work with presence and purpose."
            },
            {
                id: 133,
                title: "Sensory Appreciation",
                category: "Do",
                description: "Choose one sense and focus on it for two minutes. If it's sight, really see. If it's hearing, truly listen. Deepen your sensory awareness."
            },
            {
                id: 134,
                title: "Mindful Completion",
                category: "Do",
                description: "When finishing any task, pause and acknowledge what you've accomplished. Take a moment to appreciate your effort and dedication."
            },
            {
                id: 135,
                title: "Barefoot Walking",
                category: "Do",
                description: "If safe, walk barefoot for a few minutes. Feel the texture of the ground beneath your feet. Connect with the earth."
            },
            {
                id: 136,
                title: "Mindful Smiling",
                category: "Do",
                description: "Smile gently for 30 seconds, even if you don't feel like it. Notice how this simple act affects your mood and body."
            },
            {
                id: 137,
                title: "Conscious Yawning",
                category: "Do",
                description: "Take a big, deliberate yawn. Stretch your jaw and feel the release. Yawning oxygenates your brain and releases tension."
            },
            {
                id: 138,
                title: "Mindful Doorway",
                category: "Do",
                description: "Each time you pass through a doorway today, take one conscious breath. Use doorways as mindfulness reminders."
            },
            {
                id: 139,
                title: "Hand Massage",
                category: "Do",
                description: "Massage one hand with the other for one minute. Press into the palm, stretch the fingers, and appreciate your hands' hard work."
            },
            {
                id: 140,
                title: "Mindful Waiting",
                category: "Do",
                description: "Next time you're waiting, instead of checking your phone, simply breathe and observe your surroundings with curiosity."
            },
            {
                id: 141,
                title: "Conscious Sighing",
                category: "Do",
                description: "Take three deep sighs, letting each exhale be audible and complete. Sighing is your body's natural stress release mechanism."
            },
            {
                id: 142,
                title: "Mindful Stairs",
                category: "Do",
                description: "If you encounter stairs, climb them mindfully. Feel each step, notice your breathing, and appreciate your body's ability to move."
            },
            {
                id: 143,
                title: "Eye Rest",
                category: "Do",
                description: "Close your eyes for one minute. Cup your palms over them gently. Give your eyes a break from screens and stimulation."
            },
            {
                id: 144,
                title: "Mindful Dressing",
                category: "Do",
                description: "When changing clothes, do it mindfully. Feel the fabric, notice the movements, and appreciate the protection clothing provides."
            },
            {
                id: 145,
                title: "Conscious Laughing",
                category: "Do",
                description: "Laugh out loud for 30 seconds, even if it feels forced at first. Laughter releases endorphins and shifts your energy."
            },
            {
                id: 146,
                title: "Mindful Photography",
                category: "Do",
                description: "Take a photo of something beautiful or interesting nearby. Really look at it before capturing it. See with fresh eyes."
            },
            {
                id: 147,
                title: "Breath Counting",
                category: "Do",
                description: "Count your breaths from 1 to 10, then start over. If you lose count, gently begin again. This trains attention."
            },
            {
                id: 148,
                title: "Mindful Gratitude Note",
                category: "Do",
                description: "Write a brief thank-you note to someone, even if you don't send it. Feel the gratitude as you write each word."
            },
            {
                id: 149,
                title: "Body Shaking",
                category: "Do",
                description: "Shake your entire body vigorously for 30 seconds. This releases stuck energy and brings you into the present moment."
            },
            {
                id: 150,
                title: "Mindful Aromatherapy",
                category: "Do",
                description: "Find something with a pleasant scent. Close your eyes and breathe it in deeply. Notice how scent affects your mood."
            },
            {
                id: 151,
                title: "Conscious Blinking",
                category: "Do",
                description: "Blink slowly and deliberately ten times. Notice the brief darkness and the refreshing of your vision with each blink."
            },
            {
                id: 152,
                title: "Mindful Humming",
                category: "Do",
                description: "Hum your favorite tune for one minute. Feel the vibration throughout your head and chest. Let the sound soothe you."
            },
            {
                id: 153,
                title: "Finger Tracing",
                category: "Do",
                description: "Trace the outline of your opposite hand with one finger. Move slowly and feel every contour. This calms the nervous system."
            },
            {
                id: 154,
                title: "Mindful Sunrise/Sunset",
                category: "Do",
                description: "If possible, watch the sunrise or sunset for a few minutes. Witness the changing light and colors with full attention."
            },
            {
                id: 155,
                title: "Conscious Clapping",
                category: "Do",
                description: "Clap your hands together slowly ten times. Feel the impact, hear the sound, and notice the tingling sensation afterward."
            },
            {
                id: 156,
                title: "Mindful Plant Care",
                category: "Do",
                description: "If you have a plant, tend to it mindfully. Water it, touch its leaves, and appreciate its living presence."
            },
            {
                id: 157,
                title: "Breath Visualization",
                category: "Do",
                description: "Visualize your breath as colored light entering and leaving your body. Choose a color that feels healing to you."
            },
            {
                id: 158,
                title: "Mindful Listening to Music",
                category: "Do",
                description: "Listen to one song with complete attention. Notice instruments, lyrics, rhythm, and how the music makes you feel."
            },
            {
                id: 159,
                title: "Conscious Toe Wiggling",
                category: "Do",
                description: "Wiggle your toes for 30 seconds. This brings awareness to your feet and grounds you in your body."
            },
            {
                id: 160,
                title: "Mindful Cloud Watching",
                category: "Do",
                description: "Look at the sky and watch clouds for two minutes. Notice their shapes, movement, and constant transformation."
            },
            {
                id: 161,
                title: "Gratitude Breathing",
                category: "Do",
                description: "With each inhale, think 'I am grateful.' With each exhale, think 'for this moment.' Repeat for one minute."
            },
            {
                id: 162,
                title: "Mindful Texture Hunt",
                category: "Do",
                description: "Find and touch five different textures around you. Really feel each one. Notice which textures you find most pleasant."
            },
            {
                id: 163,
                title: "Conscious Shoulder Drops",
                category: "Do",
                description: "Raise your shoulders to your ears, hold for 3 seconds, then drop them completely. Repeat three times."
            },
            {
                id: 164,
                title: "Mindful Bell Listening",
                category: "Do",
                description: "If you have a bell or singing bowl, ring it and listen until you can no longer hear the sound. Follow it completely."
            },
            {
                id: 165,
                title: "Loving Touch",
                category: "Do",
                description: "Place both hands over your heart. Feel the warmth and connection. Send yourself love through this gentle touch."
            },
            {
                id: 166,
                title: "Mindful Coloring",
                category: "Do",
                description: "Color or draw for five minutes. Focus on the movement of your hand and the colors you choose. Let creativity flow."
            },
            {
                id: 167,
                title: "Breath Holding",
                category: "Do",
                description: "After an exhale, hold your breath comfortably for a few seconds. Notice the stillness. Then breathe normally."
            },
            {
                id: 168,
                title: "Mindful Journaling",
                category: "Do",
                description: "Write for five minutes without stopping. Let your pen flow across the page, capturing whatever wants to be expressed."
            },
            {
                id: 169,
                title: "Conscious Stretching Sequence",
                category: "Do",
                description: "Do a simple stretch sequence: reach up, side bend left, side bend right, forward fold. Move with your breath."
            },
            {
                id: 170,
                title: "Mindful Tea Ceremony",
                category: "Do",
                description: "Prepare and drink tea with full attention. Notice each step: heating water, steeping, pouring, sipping. Make it sacred."
            },
            {
                id: 171,
                title: "Grounding Exercise",
                category: "Do",
                description: "Stand barefoot if possible. Feel your connection to the earth. Imagine roots growing from your feet deep into the ground."
            },
            {
                id: 172,
                title: "Mindful Breathing Pattern",
                category: "Do",
                description: "Try box breathing: inhale 4, hold 4, exhale 4, hold 4. Repeat for five cycles. Notice the calming effect."
            },
            {
                id: 173,
                title: "Conscious Movement Flow",
                category: "Do",
                description: "Move your body in any way that feels good for two minutes. Dance, sway, stretch—let your body lead."
            },
            {
                id: 174,
                title: "Mindful Object Meditation",
                category: "Do",
                description: "Hold a small object. Explore it completely with all your senses. Become intimately familiar with this simple thing."
            },
            {
                id: 175,
                title: "Loving-Kindness Gestures",
                category: "Do",
                description: "Place your hands in prayer position at your heart. Bow slightly to yourself, honoring your own being."
            },
            {
                id: 176,
                title: "Mindful Breathing Anchor",
                category: "Do",
                description: "Set a timer for three minutes. Return to your breath every time your mind wanders. Practice gentle persistence."
            },
            {
                id: 177,
                title: "Conscious Facial Relaxation",
                category: "Do",
                description: "Relax every muscle in your face. Let your jaw hang loose, soften your eyes, smooth your forehead. Feel the release."
            },
            {
                id: 178,
                title: "Mindful Gratitude Ritual",
                category: "Do",
                description: "Light a candle or simply pause. Name three things you're grateful for out loud. Let gratitude fill the space."
            },
            {
                id: 179,
                title: "Body Scan Practice",
                category: "Do",
                description: "Scan through your body from toes to head. Notice sensations without judgment. Simply observe what is."
            },
            {
                id: 180,
                title: "Mindful Affirmation",
                category: "Do",
                description: "Choose one positive affirmation. Say it out loud three times with conviction. Feel its truth resonating within you."
            },
            {
                id: 181,
                title: "Conscious Pause Practice",
                category: "Do",
                description: "Set three random alarms today. When they ring, stop everything and take three conscious breaths. Return to presence."
            },
            {
                id: 182,
                title: "Mindful Mandala Drawing",
                category: "Do",
                description: "Draw a simple mandala or circular pattern. Let the repetitive motion calm your mind and center your awareness."
            },
            {
                id: 183,
                title: "Breath Awareness Walk",
                category: "Do",
                description: "Walk for five minutes while maintaining awareness of your breath. Coordinate your steps with your breathing rhythm."
            },
            {
                id: 184,
                title: "Mindful Self-Massage",
                category: "Do",
                description: "Massage your temples, jaw, and neck with gentle circular motions. Offer yourself this gift of caring touch."
            },
            {
                id: 185,
                title: "Conscious Gratitude Bow",
                category: "Do",
                description: "Bow to something or someone you're grateful for. Let this physical gesture embody your appreciation."
            },
            {
                id: 186,
                title: "Mindful Breathing Meditation",
                category: "Do",
                description: "Sit comfortably and follow your breath for five minutes. When your mind wanders, gently return to the breath."
            },
            {
                id: 187,
                title: "Energy Clearing Practice",
                category: "Do",
                description: "Sweep your hands over your body without touching, as if clearing away stagnant energy. Shake it off your hands."
            },
            {
                id: 188,
                title: "Mindful Intention Setting",
                category: "Do",
                description: "Write down one intention for today. Place it somewhere visible. Return to it throughout the day."
            },
            {
                id: 189,
                title: "Conscious Vocal Toning",
                category: "Do",
                description: "Make a long 'om' or 'ah' sound. Feel the vibration throughout your body. Let sound be a form of meditation."
            },
            {
                id: 190,
                title: "Mindful Appreciation Walk",
                category: "Do",
                description: "Walk slowly and appreciate everything you see. Silently say 'thank you' to objects, nature, and people you encounter."
            },
            {
                id: 191,
                title: "Breath and Movement Sync",
                category: "Do",
                description: "Raise your arms on the inhale, lower them on the exhale. Repeat ten times, perfectly synchronizing breath and movement."
            },
            {
                id: 192,
                title: "Mindful Listening Practice",
                category: "Do",
                description: "Close your eyes and identify five different sounds. Listen to each one fully before moving to the next."
            },
            {
                id: 193,
                title: "Conscious Body Gratitude",
                category: "Do",
                description: "Touch different parts of your body and thank each one: 'Thank you, feet, for carrying me. Thank you, hands, for creating.'"
            },
            {
                id: 194,
                title: "Mindful Breathing Rhythm",
                category: "Do",
                description: "Find your natural breathing rhythm. Don't change it, just observe it. Notice its unique pattern and pace."
            },
            {
                id: 195,
                title: "Present Moment Anchor",
                category: "Do",
                description: "Choose a physical sensation as your anchor (breath, heartbeat, feet on ground). Return to it whenever you feel scattered."
            },
            {
                id: 196,
                title: "Mindful Completion Ritual",
                category: "Do",
                description: "When you finish any task, take three breaths and say 'complete.' This creates closure and presence."
            },
            {
                id: 197,
                title: "Conscious Smile Practice",
                category: "Do",
                description: "Smile at yourself in a mirror for one minute. Let the smile reach your eyes. Notice how it affects your inner state."
            },
            {
                id: 198,
                title: "Mindful Sound Bath",
                category: "Do",
                description: "Listen to calming sounds (singing bowls, nature sounds) for five minutes. Let the sound wash over and through you."
            },
            {
                id: 199,
                title: "Grounding Breath Practice",
                category: "Do",
                description: "With each exhale, imagine sending roots deep into the earth. Feel yourself becoming more grounded and stable."
            },
            {
                id: 200,
                title: "Mindful Closing Ritual",
                category: "Do",
                description: "End your practice by placing your hands together at your heart. Bow to yourself and your commitment to presence."
            },

            // FEEL CATEGORY (100 cards)
            {
                id: 201,
                title: "Body Scan",
                category: "Feel",
                description: "Close your eyes and slowly scan your body from head to toe. Notice any tension or sensations without judgment. Simply observe and breathe."
            },
            {
                id: 202,
                title: "Loving Kindness",
                category: "Feel",
                description: "Send kind thoughts to yourself: 'May I be happy, may I be peaceful, may I be free from suffering.' Then extend these wishes to someone you love."
            },
            {
                id: 203,
                title: "Heart Connection",
                category: "Feel",
                description: "Place your hand on your heart. Feel its steady rhythm. Take a moment to appreciate this organ that works tirelessly to keep you alive."
            },
            {
                id: 204,
                title: "Emotional Check-in",
                category: "Feel",
                description: "Place both hands on your chest. What emotions are present right now? Welcome them with compassion, knowing all feelings are temporary visitors."
            },
            {
                id: 205,
                title: "Self-Compassion",
                category: "Feel",
                description: "Speak to yourself as you would to a beloved friend facing the same situation. Offer yourself the same kindness and understanding."
            },
            {
                id: 206,
                title: "Emotional Acceptance",
                category: "Feel",
                description: "Notice any difficult emotions present. Instead of pushing them away, breathe with them. Say 'I see you' to whatever you're feeling."
            },
            {
                id: 207,
                title: "Gratitude Feeling",
                category: "Feel",
                description: "Think of someone who has positively impacted your life. Let the feeling of gratitude fill your heart and radiate through your body."
            },
            {
                id: 208,
                title: "Inner Peace",
                category: "Feel",
                description: "Find a place of calm within yourself, even if chaos surrounds you. Rest in this inner sanctuary for a few moments."
            },
            {
                id: 209,
                title: "Emotional Waves",
                category: "Feel",
                description: "Notice that emotions rise and fall like waves. You don't have to be swept away; you can observe them from the shore of awareness."
            },
            {
                id: 210,
                title: "Heart Opening",
                category: "Feel",
                description: "Imagine your heart expanding with each breath. Feel it growing more spacious, able to hold both joy and sorrow with equal grace."
            },
            {
                id: 211,
                title: "Comfort Zone",
                category: "Feel",
                description: "Wrap your arms around yourself in a gentle hug. Offer yourself the comfort and security you need in this moment."
            },
            {
                id: 212,
                title: "Emotional Wisdom",
                category: "Feel",
                description: "Ask your current emotion: 'What are you trying to tell me?' Listen with curiosity rather than resistance to its message."
            },
            {
                id: 213,
                title: "Joy Recognition",
                category: "Feel",
                description: "Recall a moment of simple joy from today, however small. Let that feeling expand and fill your awareness completely."
            },
            {
                id: 214,
                title: "Vulnerability Strength",
                category: "Feel",
                description: "Acknowledge something you're feeling vulnerable about. Recognize that vulnerability is not weakness, but courage to be authentic."
            },
            {
                id: 215,
                title: "Emotional Balance",
                category: "Feel",
                description: "Notice if you're leaning too heavily into any one emotion. Gently invite balance, like adjusting your posture when sitting."
            },
            {
                id: 216,
                title: "Inner Child",
                category: "Feel",
                description: "Connect with the playful, curious part of yourself. What does your inner child need to feel safe and loved right now?"
            },
            {
                id: 217,
                title: "Forgiveness Practice",
                category: "Feel",
                description: "Think of a small mistake you made recently. Offer yourself forgiveness with the same grace you'd give a good friend."
            },
            {
                id: 218,
                title: "Emotional Courage",
                category: "Feel",
                description: "Acknowledge your courage in facing whatever challenges you're currently experiencing. You are braver than you know."
            },
            {
                id: 219,
                title: "Love Expansion",
                category: "Feel",
                description: "Think of someone you love deeply. Let that feeling of love expand to include yourself, then gradually extend it to others around you."
            },
            {
                id: 220,
                title: "Emotional Release",
                category: "Feel",
                description: "If you're holding onto any tension or difficult emotions, imagine breathing them out with each exhale. Let them go with kindness."
            },
            {
                id: 221,
                title: "Inner Strength",
                category: "Feel",
                description: "Connect with your inner resilience. Remember a time you overcame difficulty. Feel that same strength available to you now."
            },
            {
                id: 222,
                title: "Emotional Honesty",
                category: "Feel",
                description: "Be completely honest with yourself about how you're feeling right now. There's no need to fix or change anything, just acknowledge."
            },
            {
                id: 223,
                title: "Compassionate Presence",
                category: "Feel",
                description: "Imagine sitting with a dear friend who is experiencing exactly what you're experiencing. What compassion would you offer them?"
            },
            {
                id: 224,
                title: "Emotional Freedom",
                category: "Feel",
                description: "Notice any emotions you've been trying to control or suppress. What would it feel like to let them exist without resistance?"
            },
            {
                id: 225,
                title: "Heart Gratitude",
                category: "Feel",
                description: "Place your hand on your heart and feel grateful for its constant, faithful beating. Let appreciation flow through your entire being."
            },
            {
                id: 226,
                title: "Emotional Gentleness",
                category: "Feel",
                description: "Treat your current emotional state with the same gentleness you'd show a wounded animal. Offer yourself tender care."
            },
            {
                id: 227,
                title: "Inner Warmth",
                category: "Feel",
                description: "Generate a feeling of warmth in your chest, like sitting by a cozy fire. Let this warmth spread throughout your body."
            },
            {
                id: 228,
                title: "Emotional Trust",
                category: "Feel",
                description: "Trust that whatever you're feeling right now is valid and temporary. You have the capacity to hold all of your experiences."
            },
            {
                id: 229,
                title: "Love Receiving",
                category: "Feel",
                description: "Imagine receiving unconditional love from the universe, nature, or a higher power. Let yourself be held in this loving embrace."
            },
            {
                id: 230,
                title: "Emotional Integration",
                category: "Feel",
                description: "Notice how different emotions can coexist within you. You can feel sad and grateful, anxious and hopeful, all at once."
            },
            {
                id: 231,
                title: "Heart Wisdom",
                category: "Feel",
                description: "Ask your heart: 'What do I most need to feel right now?' Listen with openness to whatever response arises."
            },
            {
                id: 232,
                title: "Emotional Sanctuary",
                category: "Feel",
                description: "Create an inner sanctuary where all your emotions are welcome. This is a safe space within you that nothing can disturb."
            },
            {
                id: 233,
                title: "Infinite Love",
                category: "Feel",
                description: "Connect with the infinite capacity for love within your heart. Feel it as an inexhaustible source of warmth and compassion."
            },
            {
                id: 234,
                title: "Emotional Presence",
                category: "Feel",
                description: "Be fully present with whatever emotion is here now. Don't try to change it, just be with it like a caring companion."
            },
            {
                id: 235,
                title: "Heart Breathing",
                category: "Feel",
                description: "Imagine breathing in and out through your heart center. Feel your heart softening and opening with each breath."
            },
            {
                id: 236,
                title: "Emotional Resilience",
                category: "Feel",
                description: "Acknowledge all the emotions you've successfully navigated in your life. Feel proud of your emotional resilience."
            },
            {
                id: 237,
                title: "Self-Love Practice",
                category: "Feel",
                description: "Look at yourself in a mirror or imagine your face. Say 'I love you' to yourself. Mean it, even if it feels awkward."
            },
            {
                id: 238,
                title: "Emotional Softening",
                category: "Feel",
                description: "Notice any hardness or resistance in your emotional state. Breathe into it and let it soften, like ice melting in warm water."
            },
            {
                id: 239,
                title: "Heart Expansion",
                category: "Feel",
                description: "Feel your heart expanding beyond your body, touching everyone and everything around you with invisible threads of connection."
            },
            {
                id: 240,
                title: "Emotional Validation",
                category: "Feel",
                description: "Whatever you're feeling is valid. Say to yourself: 'It makes sense that I feel this way.' Validate your experience."
            },
            {
                id: 241,
                title: "Inner Joy",
                category: "Feel",
                description: "Find a spark of joy within you, no matter how small. Fan it gently with your attention and let it grow."
            },
            {
                id: 242,
                title: "Emotional Spaciousness",
                category: "Feel",
                description: "Create space around your emotions. They don't have to fill your entire being. You are larger than any feeling."
            },
            {
                id: 243,
                title: "Heart Healing",
                category: "Feel",
                description: "Place your hand on your heart and imagine healing light flowing into any emotional wounds. Let your heart heal."
            },
            {
                id: 244,
                title: "Emotional Curiosity",
                category: "Feel",
                description: "Approach your emotions with curiosity rather than judgment. What can they teach you about yourself and your needs?"
            },
            {
                id: 245,
                title: "Love Meditation",
                category: "Feel",
                description: "Sit quietly and repeat: 'I am loved, I am loving, I am love.' Feel the truth of these words in your heart."
            },
            {
                id: 246,
                title: "Emotional Grounding",
                category: "Feel",
                description: "If emotions feel overwhelming, place your feet firmly on the ground. Feel the earth supporting you through everything."
            },
            {
                id: 247,
                title: "Heart Appreciation",
                category: "Feel",
                description: "Appreciate your heart's capacity to feel deeply. This sensitivity is a gift, not a burden."
            },
            {
                id: 248,
                title: "Emotional Alchemy",
                category: "Feel",
                description: "Notice a difficult emotion. Can you find any gift or lesson hidden within it? Transform pain into wisdom."
            },
            {
                id: 249,
                title: "Inner Calm",
                category: "Feel",
                description: "Beneath all emotions, there is a place of deep calm. Sink into that calm like settling into a comfortable chair."
            },
            {
                id: 250,
                title: "Emotional Authenticity",
                category: "Feel",
                description: "Allow yourself to feel what you truly feel, not what you think you should feel. Honor your authentic emotional experience."
            },
            {
                id: 251,
                title: "Heart Coherence",
                category: "Feel",
                description: "Breathe slowly and evenly while focusing on your heart. Imagine breathing in and out through your heart center."
            },
            {
                id: 252,
                title: "Emotional Compassion",
                category: "Feel",
                description: "Offer compassion to yourself for any difficult emotions you're experiencing. You're doing the best you can."
            },
            {
                id: 253,
                title: "Love Overflow",
                category: "Feel",
                description: "Fill yourself so full of love that it overflows naturally to others. You can't pour from an empty cup."
            },
            {
                id: 254,
                title: "Emotional Awareness",
                category: "Feel",
                description: "Simply notice what you're feeling without naming it. Experience the raw sensation before the label."
            },
            {
                id: 255,
                title: "Heart Opening Practice",
                category: "Feel",
                description: "Gently arch your upper back and lift your chest. This physical heart opening can create emotional opening too."
            },
            {
                id: 256,
                title: "Emotional Patience",
                category: "Feel",
                description: "Be patient with your emotional process. Healing and growth happen in their own time, not on your schedule."
            },
            {
                id: 257,
                title: "Inner Light",
                category: "Feel",
                description: "Feel the light of awareness within you. This light illuminates all emotions without being affected by them."
            },
            {
                id: 258,
                title: "Emotional Kindness",
                category: "Feel",
                description: "Treat every emotion with kindness, even the uncomfortable ones. They're all messengers trying to help you."
            },
            {
                id: 259,
                title: "Heart Gratitude Practice",
                category: "Feel",
                description: "Think of three things your heart is grateful for. Feel the warmth of gratitude spreading through your chest."
            },
            {
                id: 260,
                title: "Emotional Wholeness",
                category: "Feel",
                description: "You are whole, regardless of what you're feeling. Emotions are experiences, not your identity."
            },
            {
                id: 261,
                title: "Love Affirmation",
                category: "Feel",
                description: "Repeat: 'I am worthy of love. I am deserving of compassion. I am enough.' Feel the truth of these words."
            },
            {
                id: 262,
                title: "Emotional Flow",
                category: "Feel",
                description: "Let your emotions flow like water. Don't dam them up or force them. Allow natural movement and release."
            },
            {
                id: 263,
                title: "Heart Peace",
                category: "Feel",
                description: "Find the peace that exists in your heart, beneath all the noise and activity. Rest in that peaceful center."
            },
            {
                id: 264,
                title: "Emotional Acceptance Practice",
                category: "Feel",
                description: "Say to yourself: 'I accept what I'm feeling right now.' Notice how acceptance creates space and ease."
            },
            {
                id: 265,
                title: "Unconditional Love",
                category: "Feel",
                description: "Feel unconditional love for yourself, exactly as you are in this moment. No conditions, no requirements, just love."
            },
            {
                id: 266,
                title: "Emotional Completion",
                category: "Feel",
                description: "Honor the full cycle of your emotions. What arises will also pass. Trust in the natural rhythm of feeling."
            },
            {
                id: 267,
                title: "Heart Resonance",
                category: "Feel",
                description: "Feel your heart resonating with love, compassion, and peace. Let these qualities radiate outward from your center."
            },
            {
                id: 268,
                title: "Emotional Tenderness",
                category: "Feel",
                description: "Approach your feelings with tenderness. Handle them gently, as you would a delicate flower or a small child."
            },
            {
                id: 269,
                title: "Inner Radiance",
                category: "Feel",
                description: "Feel the radiance of your inner being. You are a source of light and warmth, regardless of external circumstances."
            },
            {
                id: 270,
                title: "Emotional Nourishment",
                category: "Feel",
                description: "What emotions nourish your soul? Cultivate feelings of peace, joy, love, and gratitude. Let them feed you."
            },
            {
                id: 271,
                title: "Heart Meditation",
                category: "Feel",
                description: "Rest your awareness in your heart center. Feel it as a space of infinite love and compassion. Dwell there."
            },
            {
                id: 272,
                title: "Emotional Sovereignty",
                category: "Feel",
                description: "You are sovereign over your emotional landscape. You can choose how to respond to what you feel."
            },
            {
                id: 273,
                title: "Love Embodiment",
                category: "Feel",
                description: "Embody love in this moment. Let it infuse your posture, your breath, your presence. Be love."
            },
            {
                id: 274,
                title: "Emotional Depth",
                category: "Feel",
                description: "Explore the depth of your emotional capacity. You can feel deeply and still remain centered and whole."
            },
            {
                id: 275,
                title: "Heart Blessing",
                category: "Feel",
                description: "Bless your heart for all it has felt and will feel. Thank it for its courage to remain open and alive."
            },
            {
                id: 276,
                title: "Emotional Harmony",
                category: "Feel",
                description: "Find harmony within your emotional landscape. Like notes in a chord, different feelings can create beautiful music together."
            },
            {
                id: 277,
                title: "Inner Sanctuary",
                category: "Feel",
                description: "Your heart is a sanctuary. Return there whenever you need refuge, comfort, or connection to your true self."
            },
            {
                id: 278,
                title: "Emotional Maturity",
                category: "Feel",
                description: "Emotional maturity means feeling fully while remaining grounded. You can experience intensity without losing yourself."
            },
            {
                id: 279,
                title: "Love Circulation",
                category: "Feel",
                description: "Feel love circulating through your being like blood through your veins. It nourishes every cell, every thought, every feeling."
            },
            {
                id: 280,
                title: "Emotional Wisdom Practice",
                category: "Feel",
                description: "Your emotions carry wisdom. Listen to them, learn from them, but don't let them rule you. Be their wise guardian."
            },
            {
                id: 281,
                title: "Heart Centering",
                category: "Feel",
                description: "Center yourself in your heart. From this place, you can respond to life with wisdom, compassion, and clarity."
            },
            {
                id: 282,
                title: "Emotional Artistry",
                category: "Feel",
                description: "Your emotional life is an art form. You are both the artist and the canvas. What masterpiece are you creating?"
            },
            {
                id: 283,
                title: "Love Transmission",
                category: "Feel",
                description: "Transmit love through your presence. You don't need words—your being can communicate love to all you encounter."
            },
            {
                id: 284,
                title: "Emotional Intelligence",
                category: "Feel",
                description: "Develop emotional intelligence by feeling fully, understanding deeply, and responding wisely to your inner world."
            },
            {
                id: 285,
                title: "Heart Awakening",
                category: "Feel",
                description: "Awaken your heart to its full capacity. Let it feel everything—the joy, the sorrow, the love, the loss. This is being alive."
            },
            {
                id: 286,
                title: "Emotional Mastery",
                category: "Feel",
                description: "Mastery isn't controlling emotions but dancing with them gracefully. Learn the steps of this sacred dance."
            },
            {
                id: 287,
                title: "Love Essence",
                category: "Feel",
                description: "At your essence, you are love. Everything else is temporary. Return to this truth whenever you feel lost."
            },
            {
                id: 288,
                title: "Emotional Alchemy Practice",
                category: "Feel",
                description: "Transform emotional lead into gold. Every difficult feeling can become wisdom, strength, and compassion."
            },
            {
                id: 289,
                title: "Heart Wisdom Integration",
                category: "Feel",
                description: "Integrate the wisdom of your heart with the clarity of your mind. Together, they create balanced, wise living."
            },
            {
                id: 290,
                title: "Emotional Liberation",
                category: "Feel",
                description: "Free yourself from emotional imprisonment. You are not your emotions—you are the vast space in which they arise."
            },
            {
                id: 291,
                title: "Love Realization",
                category: "Feel",
                description: "Realize that love is not something you find—it's what you are. You are the love you've been seeking."
            },
            {
                id: 292,
                title: "Emotional Transcendence",
                category: "Feel",
                description: "Transcend emotional reactivity while honoring emotional truth. Feel deeply, but don't be swept away."
            },
            {
                id: 293,
                title: "Heart Illumination",
                category: "Feel",
                description: "Let your heart be illuminated by awareness. In this light, all emotions are seen clearly and held with love."
            },
            {
                id: 294,
                title: "Emotional Wholeness Practice",
                category: "Feel",
                description: "Practice feeling whole regardless of your emotional state. Wholeness includes all feelings, rejects none."
            },
            {
                id: 295,
                title: "Love Infinity",
                category: "Feel",
                description: "Touch the infinite nature of love. It has no beginning, no end, no limits. You are part of this infinity."
            },
            {
                id: 296,
                title: "Emotional Enlightenment",
                category: "Feel",
                description: "Enlightenment includes emotions, not excludes them. Feel everything with awareness, and you are free."
            },
            {
                id: 297,
                title: "Heart Unity",
                category: "Feel",
                description: "Feel the unity of all hearts. Your heart beats in rhythm with the universal heart. You are never alone."
            },
            {
                id: 298,
                title: "Emotional Divinity",
                category: "Feel",
                description: "Your capacity to feel is divine. It connects you to all of life. Honor this sacred gift."
            },
            {
                id: 299,
                title: "Love Eternal",
                category: "Feel",
                description: "Love is eternal. It existed before you, will exist after you, and exists as you. Rest in this eternal love."
            },
            {
                id: 300,
                title: "Emotional Completion Journey",
                category: "Feel",
                description: "You've journeyed through 300 moments of awareness. Each emotion, each thought, each action—all sacred. You are complete."
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
        
        // Initialize i18n and then the app
        this.initializeI18n();
    }

    async initializeI18n() {
        try {
            // Load the current language
            await window.i18n.loadLanguage(window.i18n.getCurrentLanguage());
            await window.i18n.setLanguage(window.i18n.getCurrentLanguage());
            
            // Initialize the app after i18n is ready
            this.init();
            
            // Listen for language changes
            window.addEventListener('languageChanged', () => {
                this.updateTranslations();
                this.updateDisplay();
            });
        } catch (error) {
            console.error('Failed to initialize i18n:', error);
            // Initialize app anyway with default language
            this.init();
        }
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
        
        // Settings elements
        this.settingsBtn = document.getElementById('settingsBtn');
        this.settingsModal = document.getElementById('settingsModal');
        this.closeSettingsBtn = document.getElementById('closeSettingsBtn');
        this.languageSelect = document.getElementById('languageSelect');

        // Add event listeners
        this.addEventListeners();
        
        // Initialize display
        this.updateTranslations();
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
        
        // Settings modal
        this.settingsBtn.addEventListener('click', () => this.openSettings());
        this.closeSettingsBtn.addEventListener('click', () => this.closeSettings());
        this.settingsModal.addEventListener('click', (e) => {
            if (e.target === this.settingsModal) {
                this.closeSettings();
            }
        });
        
        // Language selection
        this.languageSelect.addEventListener('change', (e) => {
            this.changeLanguage(e.target.value);
        });
        
        // Set current language in select
        this.languageSelect.value = window.i18n.getCurrentLanguage();
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
        
        // Update card content with translations
        const cardTitle = window.t(`cards.content.${card.id}.title`);
        const cardDescription = window.t(`cards.content.${card.id}.description`);
        
        this.cardTitle.textContent = cardTitle !== `cards.content.${card.id}.title` ? cardTitle : card.title;
        this.cardDescription.textContent = cardDescription !== `cards.content.${card.id}.description` ? cardDescription : card.description;
        
        // Update category with translation
        const categoryTranslation = window.t(`cards.categories.${card.category}`);
        this.cardCategory.textContent = categoryTranslation !== `cards.categories.${card.category}` ? categoryTranslation : card.category;
        
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
            this.updateCardCounter();
            return;
        }

        this.prevBtn.disabled = this.currentIndex === 0;
        this.nextBtn.disabled = this.currentIndex === this.filteredCards.length - 1;
        
        this.updateCardCounter();
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

    // Settings methods
    openSettings() {
        this.settingsModal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }

    closeSettings() {
        this.settingsModal.style.display = 'none';
        document.body.style.overflow = '';
    }

    async changeLanguage(language) {
        try {
            await window.i18n.setLanguage(language);
            this.languageSelect.value = language;
        } catch (error) {
            console.error('Failed to change language:', error);
        }
    }

    // Translation methods
    updateTranslations() {
        // Update all elements with data-i18n attributes
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(element => {
            const key = element.getAttribute('data-i18n');
            const translation = window.t(key);
            
            // Debug logging
            if (key === 'navigation.favorites') {
                console.log(`Translating favorites: key="${key}", translation="${translation}", lang="${window.i18n.getCurrentLanguage()}"`);
            }
            
            // Only update if translation is valid
            if (translation && translation !== key) {
                element.textContent = translation;
            }
        });
        
        // Update card counter format
        this.updateCardCounter();
    }

    updateCardCounter() {
        if (this.filteredCards.length === 0) {
            this.currentIndexSpan.textContent = '0';
            this.totalCardsSpan.textContent = '0';
        } else {
            // Use localized format for card counter
            const current = this.currentIndex + 1;
            const total = this.filteredCards.length;
            
            // For now, we'll use simple number formatting
            // You could extend this to use the i18n number formatting
            this.currentIndexSpan.textContent = current.toString();
            this.totalCardsSpan.textContent = total.toString();
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