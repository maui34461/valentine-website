document.getElementById('valentineButton').addEventListener('click', function() {
    // Remove the entire container from the page
    const container = document.querySelector('.container');
    if (container) {
        container.remove();
    }
    
    // Redirect to another page after drawing flowers
    function redirectToGallery() {
        setTimeout(() => {
            window.location.href = 'gallery.html'; // Redirect to a new page
        }, 5000); // Redirect after 5 seconds
    }
    
    // Create a canvas for drawing flowers
    const canvas = document.createElement('canvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.style.position = 'absolute';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.pointerEvents = 'none';
    document.body.appendChild(canvas);
    
    const ctx = canvas.getContext('2d');
    
    function drawFlowerStepByStep(x, y, size, color, delay) {
        setTimeout(() => {
            ctx.fillStyle = color;
            for (let i = 0; i < 5; i++) {
                setTimeout(() => {
                    ctx.beginPath();
                    ctx.ellipse(x, y, size, size * 2, (Math.PI / 5) * i, 0, 2 * Math.PI);
                    ctx.fill();
                }, i * 200);
            }
            setTimeout(() => {
                ctx.beginPath();
                ctx.arc(x, y, size / 2, 0, 2 * Math.PI);
                ctx.fillStyle = 'yellow';
                ctx.fill();
            }, 1000);
        }, delay);
    }
    
    function generateFlowers() {
        for (let i = 0; i < 10; i++) {
            let x = Math.random() * canvas.width;
            let y = Math.random() * canvas.height;
            let size = Math.random() * 20 + 10;
            let colors = ['red', 'pink', 'purple', 'blue', 'orange'];
            let color = colors[Math.floor(Math.random() * colors.length)];
            drawFlowerStepByStep(x, y, size, color, i * 500);
        }
        redirectToGallery(); // Redirect after flowers are drawn
    }
    generateFlowers();
});
