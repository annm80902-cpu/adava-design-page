const totalPages = 5;
const progressBar = document.getElementById('progress-bar');

// Create the progress dashes
for(let i=0; i < totalPages; i++) {
    let div = document.createElement('div');
    div.className = 'step';
    div.id = `step-${i+1}`;
    progressBar.appendChild(div);
}

// Intro sequence
window.addEventListener('load', () => {
    setTimeout(() => {
        const intro = document.getElementById('intro-animation');
        intro.style.opacity = '0';
        setTimeout(() => intro.style.display = 'none', 500);
    }, 2500);
    updateProgress(1);
});

// Navigation
function move(pageNum) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById(`p${pageNum}`).classList.add('active');
    updateProgress(pageNum);
}

function updateProgress(current) {
    for(let i=1; i <= totalPages; i++) {
        const step = document.getElementById(`step-${i}`);
        if(i <= current) {
            step.classList.add('completed');
        } else {
            step.classList.remove('completed');
        }
    }
}
