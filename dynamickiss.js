function getCosmicTheme() {
    const hour = new Date().getHours();
    
    // 6 AM - 6 PM: The Sun's Kiss (Golden/Creation)
    if (hour >= 6 && hour < 18) {
        return {
            bg: '#FFF9E3',       // Soft Solar Glow
            particle: '#FFD700', // Gold Creation
            line: 'rgba(255, 140, 0, 0.2)' // Sunbeam Flow
        };
    } 
    // 6 PM - 6 AM: The Moon's Kiss (Indigo/Tidal Control)
    else {
        return {
            bg: '#0B1026',       // Deep Space Indigo
            particle: '#A2D2FF', // Lunar Blue
            line: 'rgba(255, 255, 255, 0.1)' // Starlight Flow
        };
    }
}
// Update the animation loop with these dynamic values
function animate() {
    const theme = getCosmicTheme();
    ctx.fillStyle = theme.bg;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    particles.forEach(p => {
        p.color = theme.particle;
        p.lineColor = theme.line;
        p.update();
        p.draw();
    });
    requestAnimationFrame(animate);
}
