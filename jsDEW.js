document.addEventListener('DOMContentLoaded', function () {
    const movableContainer = document.getElementById('movable-container');
    let isDragging = false;
    let startClientX, startClientY;
    let translateX = 0;
    let translateY = 0;

    movableContainer.addEventListener('mousedown', (e) => {
        isDragging = true;
        startClientX = e.clientX;
        startClientY = e.clientY;
    });

    document.addEventListener('mousemove', (e) => {
        if (!isDragging) return;

        const deltaX = e.clientX - startClientX;
        const deltaY = e.clientY - startClientY;

        translateX += deltaX;
        translateY += deltaY;

        movableContainer.style.transform = `translate(${translateX}px, ${translateY}px)`;

        startClientX = e.clientX;
        startClientY = e.clientY;
    });

    document.addEventListener('mouseup', () => {
        isDragging = false;
    });

    document.addEventListener('wheel', (e) => {
        if (e.deltaY < 0) {
            // Scrolling up
            translateY += 10;
        } else {
            // Scrolling down
            translateY -= 10;
        }

        movableContainer.style.transform = `translate(${translateX}px, ${translateY}px)`;
    });
});