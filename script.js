// Tic Tac Toe Game Logic
class TicTacToe {
    constructor() {
        this.board = Array(9).fill('');
        this.currentPlayer = 'X';
        this.gameActive = true;
        this.scores = { X: 0, O: 0 };
        
        // Get DOM elements
        this.cells = document.querySelectorAll('.cell');
        this.status = document.getElementById('status');
        this.resetBtn = document.getElementById('resetBtn');
        this.scoreX = document.getElementById('scoreX');
        this.scoreO = document.getElementById('scoreO');
        
        // Winning combinations
        this.winningCombinations = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
            [0, 4, 8], [2, 4, 6] // Diagonals
        ];
        
        this.init();
    }
    
    init() {
        // Add event listeners
        this.cells.forEach(cell => {
            cell.addEventListener('click', (e) => this.handleCellClick(e));
        });
        
        this.resetBtn.addEventListener('click', () => this.resetGame());
        
        // Load scores from localStorage
        this.loadScores();
        this.updateScoreDisplay();
        this.updateStatus();
        
        // Add keyboard support
        document.addEventListener('keydown', (e) => this.handleKeyPress(e));
    }
    
    handleCellClick(e) {
        const cell = e.target;
        const index = parseInt(cell.dataset.index);
        
        // Check if cell is already filled or game is not active
        if (this.board[index] !== '' || !this.gameActive) {
            return;
        }
        
        this.makeMove(index, cell);
    }
    
    handleKeyPress(e) {
        // Allow keyboard input (1-9 for cells)
        const key = e.key;
        if (key >= '1' && key <= '9') {
            const index = parseInt(key) - 1;
            const cell = this.cells[index];
            
            if (this.board[index] === '' && this.gameActive) {
                this.makeMove(index, cell);
            }
        } else if (key === 'r' || key === 'R') {
            this.resetGame();
        }
    }
    
    makeMove(index, cell) {
        // Update board state
        this.board[index] = this.currentPlayer;
        
        // Update cell display
        cell.textContent = this.currentPlayer;
        cell.classList.add(this.currentPlayer.toLowerCase());
        
        // Add animation
        cell.style.transform = 'scale(1.1)';
        setTimeout(() => {
            cell.style.transform = 'scale(1)';
        }, 150);
        
        // Check for win or draw
        if (this.checkWin()) {
            this.handleWin();
        } else if (this.checkDraw()) {
            this.handleDraw();
        } else {
            this.switchPlayer();
        }
    }
    
    checkWin() {
        return this.winningCombinations.some(combination => {
            const [a, b, c] = combination;
            if (this.board[a] && this.board[a] === this.board[b] && this.board[a] === this.board[c]) {
                this.winningCombination = combination;
                return true;
            }
            return false;
        });
    }
    
    checkDraw() {
        return this.board.every(cell => cell !== '');
    }
    
    handleWin() {
        this.gameActive = false;
        this.status.textContent = `Player ${this.currentPlayer} wins! 🎉`;
        this.status.style.color = this.currentPlayer === 'X' ? '#e53e3e' : '#3182ce';
        
        // Highlight winning cells
        this.winningCombination.forEach(index => {
            this.cells[index].classList.add('winning');
        });
        
        // Update score
        this.scores[this.currentPlayer]++;
        this.updateScoreDisplay();
        this.saveScores();
        
        // Show celebration animation
        this.celebrateWin();
    }
    
    handleDraw() {
        this.gameActive = false;
        this.status.textContent = "It's a draw! 🤝";
        this.status.style.color = '#718096';
        
        // Add draw animation to all cells
        this.cells.forEach(cell => {
            cell.style.background = '#fef5e7';
            cell.style.borderColor = '#f6ad55';
        });
    }
    
    celebrateWin() {
        // Add confetti effect (simple version)
        const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57'];
        
        for (let i = 0; i < 50; i++) {
            setTimeout(() => {
                this.createConfetti(colors[Math.floor(Math.random() * colors.length)]);
            }, i * 50);
        }
    }
    
    createConfetti(color) {
        const confetti = document.createElement('div');
        confetti.style.position = 'fixed';
        confetti.style.width = '10px';
        confetti.style.height = '10px';
        confetti.style.backgroundColor = color;
        confetti.style.left = Math.random() * window.innerWidth + 'px';
        confetti.style.top = '-10px';
        confetti.style.borderRadius = '50%';
        confetti.style.pointerEvents = 'none';
        confetti.style.zIndex = '1000';
        
        document.body.appendChild(confetti);
        
        const animation = confetti.animate([
            { transform: 'translateY(0px) rotate(0deg)', opacity: 1 },
            { transform: `translateY(${window.innerHeight + 10}px) rotate(360deg)`, opacity: 0 }
        ], {
            duration: 3000,
            easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
        });
        
        animation.onfinish = () => {
            document.body.removeChild(confetti);
        };
    }
    
    switchPlayer() {
        this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
        this.updateStatus();
    }
    
    updateStatus() {
        if (this.gameActive) {
            this.status.textContent = `Player ${this.currentPlayer}'s turn`;
            this.status.style.color = this.currentPlayer === 'X' ? '#e53e3e' : '#3182ce';
        }
    }
    
    resetGame() {
        // Reset game state
        this.board = Array(9).fill('');
        this.currentPlayer = 'X';
        this.gameActive = true;
        this.winningCombination = null;
        
        // Reset cells
        this.cells.forEach(cell => {
            cell.textContent = '';
            cell.className = 'cell';
            cell.style.background = '';
            cell.style.borderColor = '';
            cell.style.transform = '';
        });
        
        // Reset status
        this.updateStatus();
        
        // Add reset animation
        this.cells.forEach((cell, index) => {
            setTimeout(() => {
                cell.style.transform = 'scale(1.1)';
                setTimeout(() => {
                    cell.style.transform = 'scale(1)';
                }, 100);
            }, index * 50);
        });
    }
    
    updateScoreDisplay() {
        this.scoreX.textContent = this.scores.X;
        this.scoreO.textContent = this.scores.O;
    }
    
    saveScores() {
        localStorage.setItem('ticTacToeScores', JSON.stringify(this.scores));
    }
    
    loadScores() {
        const savedScores = localStorage.getItem('ticTacToeScores');
        if (savedScores) {
            this.scores = JSON.parse(savedScores);
        }
    }
    
    // AI opponent (simple implementation)
    makeAIMove() {
        if (!this.gameActive || this.currentPlayer !== 'O') return;
        
        // Simple AI: try to win, block player, or make random move
        let move = this.findWinningMove('O') || 
                  this.findWinningMove('X') || 
                  this.findRandomMove();
        
        if (move !== null) {
            setTimeout(() => {
                const cell = this.cells[move];
                this.makeMove(move, cell);
            }, 500); // Add delay for better UX
        }
    }
    
    findWinningMove(player) {
        for (let combination of this.winningCombinations) {
            const [a, b, c] = combination;
            const cells = [this.board[a], this.board[b], this.board[c]];
            
            if (cells.filter(cell => cell === player).length === 2 &&
                cells.filter(cell => cell === '').length === 1) {
                return combination[cells.indexOf('')];
            }
        }
        return null;
    }
    
    findRandomMove() {
        const emptyCells = this.board
            .map((cell, index) => cell === '' ? index : null)
            .filter(index => index !== null);
        
        return emptyCells.length > 0 ? 
               emptyCells[Math.floor(Math.random() * emptyCells.length)] : 
               null;
    }
}

// Initialize game when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const game = new TicTacToe();
    
    // Add AI mode toggle (optional feature)
    const aiToggle = document.createElement('button');
    aiToggle.textContent = 'Play vs AI';
    aiToggle.className = 'reset-btn';
    aiToggle.style.marginLeft = '10px';
    aiToggle.style.background = 'linear-gradient(135deg, #48bb78, #38a169)';
    
    let aiMode = false;
    aiToggle.addEventListener('click', () => {
        aiMode = !aiMode;
        aiToggle.textContent = aiMode ? 'Play vs Human' : 'Play vs AI';
        game.resetGame();
    });
    
    document.querySelector('.game-info').appendChild(aiToggle);
    
    // Override the switchPlayer method to include AI moves
    const originalSwitchPlayer = game.switchPlayer.bind(game);
    game.switchPlayer = function() {
        originalSwitchPlayer();
        if (aiMode && this.currentPlayer === 'O' && this.gameActive) {
            this.makeAIMove();
        }
    };
    
    // Add instructions
    const instructions = document.createElement('div');
    instructions.innerHTML = `
        <p style="margin-top: 15px; font-size: 0.9rem; color: #718096;">
            <strong>How to play:</strong><br>
            • Click on cells or use keys 1-9<br>
            • Press 'R' to reset the game<br>
            • First to get 3 in a row wins!
        </p>
    `;
    document.querySelector('.container').appendChild(instructions);
});

// Add some fun sound effects (optional - requires audio files)
class SoundManager {
    constructor() {
        this.sounds = {
            move: this.createBeep(800, 100),
            win: this.createBeep(1000, 300),
            draw: this.createBeep(400, 200)
        };
    }
    
    createBeep(frequency, duration) {
        return () => {
            if (typeof AudioContext !== 'undefined' || typeof webkitAudioContext !== 'undefined') {
                const audioContext = new (AudioContext || webkitAudioContext)();
                const oscillator = audioContext.createOscillator();
                const gainNode = audioContext.createGain();
                
                oscillator.connect(gainNode);
                gainNode.connect(audioContext.destination);
                
                oscillator.frequency.value = frequency;
                oscillator.type = 'sine';
                
                gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
                gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + duration / 1000);
                
                oscillator.start(audioContext.currentTime);
                oscillator.stop(audioContext.currentTime + duration / 1000);
            }
        };
    }
    
    play(soundName) {
        if (this.sounds[soundName]) {
            this.sounds[soundName]();
        }
    }
}

// Initialize sound manager
const soundManager = new SoundManager();