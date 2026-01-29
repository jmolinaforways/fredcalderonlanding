function switchTab(location) {
    // Buttons
    const buttons = document.querySelectorAll('.tab-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    
    // Content Views
    const contents = document.querySelectorAll('.booking-content');
    contents.forEach(content => content.classList.remove('active'));
    
    // Activate clicked
    event.currentTarget.classList.add('active');
    document.getElementById(`content-${location}`).classList.add('active');
}

// Simple logic to make the calendar interaction feel real
document.querySelectorAll('.date:not(.empty)').forEach(date => {
    date.addEventListener('click', function() {
        // Remove active class from siblings in the same calendar
        const calendar = this.closest('.calendar-grid');
        calendar.querySelectorAll('.date').forEach(d => d.classList.remove('active'));
        this.classList.add('active');
    });
});

document.querySelectorAll('.slot').forEach(slot => {
    slot.addEventListener('click', function() {
        const grid = this.closest('.slots-grid');
        grid.querySelectorAll('.slot').forEach(s => {
            s.style.background = 'white';
            s.style.color = '#333';
            s.style.borderColor = '#e2e8f0';
        });
        
        this.style.background = 'var(--primary)';
        this.style.color = 'white';
        this.style.borderColor = 'var(--primary)';
    });
});

// Smooth Scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
