// ============================================
// PART 1: VARIABLES & BASIC FUNCTIONS
// ============================================

// Get all DOM elements
const textInput = document.getElementById('textInput');
const displayText = document.getElementById('displayText');
const previewText = document.getElementById('previewText');
const controlsContainer = document.getElementById('controlsContainer');
const toggleBtn = document.getElementById('toggleBtn');
const fontSizeInput = document.getElementById('fontSizeInput');
const letterSpacingInput = document.getElementById('letterSpacingInput');
const wordSpacingInput = document.getElementById('wordSpacingInput');
const colorPicker = document.getElementById('colorPicker');
const shadowInput = document.getElementById('shadowInput');
const speedInput = document.getElementById('speedInput');
const fontDropdown = document.getElementById('fontDropdown');
const fontDropdownBtn = document.getElementById('fontDropdownBtn');
const animDropdown = document.getElementById('animDropdown');
const animDropdownBtn = document.getElementById('animDropdownBtn');

// Current states
let currentBg = 'black';
let currentFont = '';
let currentAnimation = '';
let controlsVisible = true;

// Text Input Change
textInput.addEventListener('input', function () {
    const newText = this.value || 'JAANI LYRICAL 🚀';
    displayText.textContent = newText;
});

// Toggle Controls
function toggleControls() {
    controlsVisible = !controlsVisible;
    if (controlsVisible) {
        controlsContainer.classList.remove('hidden');
        toggleBtn.innerHTML = '<span>👁️</span> Hide Controls';
    } else {
        controlsContainer.classList.add('hidden');
        toggleBtn.innerHTML = '<span>👁️</span> Show Controls';
    }
}

// Change Background
function changeBackground(color) {
    currentBg = color;
    document.body.className = color + '-bg';
}
// ============================================
// PART 2: FONT & ANIMATION FUNCTIONS
// ============================================

// Change Font
function changeFont(font) {
    currentFont = font;
    // Remove all font classes
    const fontClasses = ['font-orbitron', 'font-russo', 'font-press-start', 'font-monoton',
        'font-rubik', 'font-bebas', 'font-righteous', 'font-black-ops',
        'font-fredoka', 'font-bungee', 'font-creepster', 'font-permanent'];

    displayText.classList.remove(...fontClasses);
    previewText.classList.remove(...fontClasses);

    // Add new font class with emoji support
    if (font) {
        displayText.classList.add('font-' + font);
        previewText.classList.add('font-' + font);

        // Add emoji font fallback
        const currentFont = window.getComputedStyle(displayText).fontFamily;
        displayText.style.fontFamily = currentFont + ', "Apple Color Emoji", "Segoe UI Emoji", "Noto Color Emoji"';
        previewText.style.fontFamily = currentFont + ', "Apple Color Emoji", "Segoe UI Emoji", "Noto Color Emoji"';
    }

    // Close dropdown
    fontDropdown.classList.remove('show');
}

// Change Animation
function changeAnimation(anim) {
    currentAnimation = anim;
    // Remove all animation classes
    const animClasses = ['anim-rotate', 'anim-spin', 'anim-flip', 'anim-twist', 'anim-spiral',
        'anim-inout', 'anim-bounce', 'anim-float', 'anim-slide', 'anim-swing', 'anim-wave',
        'anim-pulse', 'anim-zoom', 'anim-expand', 'anim-breathe',
        'anim-glow', 'anim-neon', 'anim-electric', 'anim-rainbow', 'anim-matrix', 'anim-fire',
        'anim-shake', 'anim-glitch', 'anim-vibrate',
        'anim-fade', 'anim-blink'];

    displayText.classList.remove(...animClasses);
    previewText.classList.remove(...animClasses);

    // Add new animation class
    if (anim) {
        displayText.classList.add('anim-' + anim);
        previewText.classList.add('anim-' + anim);
        updateAnimationSpeed();
    }

    // Close dropdown
    animDropdown.classList.remove('show');
}

// Dropdown Toggle Functions
fontDropdownBtn.addEventListener('click', function (e) {
    e.stopPropagation();
    fontDropdown.classList.toggle('show');
    animDropdown.classList.remove('show');
});

animDropdownBtn.addEventListener('click', function (e) {
    e.stopPropagation();
    animDropdown.classList.toggle('show');
    fontDropdown.classList.remove('show');
});

// Close dropdowns when clicking outside
document.addEventListener('click', function (e) {
    if (!e.target.closest('.dropdown-container')) {
        fontDropdown.classList.remove('show');
        animDropdown.classList.remove('show');
    }
});

// ============================================
// PART 3: SIZE CONTROL FUNCTIONS
// ============================================

// Font Size Controls
function increaseFontSize() {
    let currentSize = parseInt(fontSizeInput.value);
    if (currentSize < 300) {
        currentSize += 10;
        fontSizeInput.value = currentSize;
        displayText.style.fontSize = currentSize + 'px';
    }
}

function decreaseFontSize() {
    let currentSize = parseInt(fontSizeInput.value);
    if (currentSize > 20) {
        currentSize -= 10;
        fontSizeInput.value = currentSize;
        displayText.style.fontSize = currentSize + 'px';
    }
}

// Letter Spacing Controls
function increaseLetterSpacing() {
    let currentSpacing = parseInt(letterSpacingInput.value);
    if (currentSpacing < 50) {
        currentSpacing += 2;
        letterSpacingInput.value = currentSpacing;
        displayText.style.letterSpacing = currentSpacing + 'px';
    }
}

function decreaseLetterSpacing() {
    let currentSpacing = parseInt(letterSpacingInput.value);
    if (currentSpacing > 0) {
        currentSpacing -= 2;
        letterSpacingInput.value = currentSpacing;
        displayText.style.letterSpacing = currentSpacing + 'px';
    }
}

// Word Spacing Controls
function increaseWordSpacing() {
    let currentSpacing = parseInt(wordSpacingInput.value);
    if (currentSpacing < 100) {
        currentSpacing += 5;
        wordSpacingInput.value = currentSpacing;
        displayText.style.wordSpacing = currentSpacing + 'px';
    }
}

function decreaseWordSpacing() {
    let currentSpacing = parseInt(wordSpacingInput.value);
    if (currentSpacing > 0) {
        currentSpacing -= 5;
        wordSpacingInput.value = currentSpacing;
        displayText.style.wordSpacing = currentSpacing + 'px';
    }
}


// ============================================
// PART 4: COLOR & SPEED CONTROL FUNCTIONS
// ============================================

// Shadow Intensity Controls
function increaseShadow() {
    let currentShadow = parseInt(shadowInput.value);
    if (currentShadow < 100) {
        currentShadow += 10;
        shadowInput.value = currentShadow;
        updateTextShadow(currentShadow);
    }
}

function decreaseShadow() {
    let currentShadow = parseInt(shadowInput.value);
    if (currentShadow > 0) {
        currentShadow -= 10;
        shadowInput.value = currentShadow;
        updateTextShadow(currentShadow);
    }
}

function updateTextShadow(intensity) {
    const factor = intensity / 100;
    const shadow = `
        0 1px 0 rgba(0,0,0,${0.3 * factor}),
        0 2px 0 rgba(0,0,0,${0.3 * factor}),
        0 3px 0 rgba(0,0,0,${0.3 * factor}),
        0 5px 10px rgba(0,0,0,${0.4 * factor}),
        0 10px 20px rgba(0,0,0,${0.4 * factor}),
        0 20px 30px rgba(0,0,0,${0.3 * factor})
    `;
    displayText.style.textShadow = shadow;
}

// Color Picker
colorPicker.addEventListener('input', function () {
    const color = this.value;
    displayText.style.color = color;
    displayText.classList.add('custom-color');
    previewText.style.color = color;
});

// Speed Controls
function increaseSpeed() {
    let currentSpeed = parseInt(speedInput.value);
    if (currentSpeed < 300) {
        currentSpeed += 25;
        speedInput.value = currentSpeed;
        updateAnimationSpeed();
    }
}

function decreaseSpeed() {
    let currentSpeed = parseInt(speedInput.value);
    if (currentSpeed > 25) {
        currentSpeed -= 25;
        speedInput.value = currentSpeed;
        updateAnimationSpeed();
    }
}

function setSpeed(speed) {
    speedInput.value = speed;
    updateAnimationSpeed();
}

function updateAnimationSpeed() {
    const speed = parseInt(speedInput.value);
    const duration = 400 / speed; // Base duration is 4s at 100% speed

    displayText.style.animationDuration = duration + 's';
    previewText.style.animationDuration = duration + 's';
}


// ============================================
// PART 5: DOWNLOAD VIDEO FUNCTION
// ============================================

async function downloadVideo() {
    // Hide controls during recording
    const wasVisible = controlsVisible;
    if (wasVisible) {
        toggleControls();
    }

    // Create canvas
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = 1920;
    canvas.height = 1080;

    // Capture stream
    const stream = canvas.captureStream(30);
    const mediaRecorder = new MediaRecorder(stream, {
        mimeType: 'video/webm;codecs=vp9',
        videoBitsPerSecond: 8000000
    });

    const chunks = [];
    mediaRecorder.ondataavailable = (e) => chunks.push(e.data);

    mediaRecorder.onstop = async () => {
        const blob = new Blob(chunks, { type: 'video/webm' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'epic-3d-text-' + Date.now() + '.webm';
        a.click();
        URL.revokeObjectURL(url);

        // Show controls again
        if (wasVisible) {
            toggleControls();
        }

        alert('✅ Video downloaded successfully!');
    };

    mediaRecorder.start();

    // Get background
    const bgColor = currentBg === 'black' ? '#000000' :
        currentBg === 'green' ? '#00ff00' :
            currentBg === 'blue' ? '#0066ff' : '#ffffff';

    // Record for 5 seconds
    let frames = 0;
    const maxFrames = 150; // 5 seconds at 30fps

    function drawFrame() {
        // Fill background
        ctx.fillStyle = bgColor;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Get text properties
        const text = displayText.textContent;
        const fontSize = parseInt(window.getComputedStyle(displayText).fontSize);
        const fontFamily = window.getComputedStyle(displayText).fontFamily;
        const color = window.getComputedStyle(displayText).color;

        // Set text style
        ctx.fillStyle = color;
        ctx.font = `900 ${fontSize}px ${fontFamily}`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';

        // Draw text
        ctx.fillText(text, canvas.width / 2, canvas.height / 2);

        frames++;
        if (frames < maxFrames) {
            requestAnimationFrame(drawFrame);
        } else {
            mediaRecorder.stop();
        }
    }

    drawFrame();
}

// Initialize default values
window.addEventListener('DOMContentLoaded', function () {
    displayText.style.fontSize = fontSizeInput.value + 'px';
    displayText.style.letterSpacing = letterSpacingInput.value + 'px';
    displayText.style.wordSpacing = wordSpacingInput.value + 'px';
});
