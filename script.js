// Dark Mode Toggle
const toggleTheme = document.getElementById('toggle-theme');
const body = document.body;

toggleTheme.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    const icon = toggleTheme.querySelector('i');
    icon.classList.toggle('fa-moon');
    icon.classList.toggle('fa-sun');
    localStorage.setItem('theme', body.classList.contains('dark-mode') ? 'dark' : 'light');
});

// Load saved theme
const savedTheme = localStorage.getItem('theme') || 'light';
if (savedTheme === 'dark') {
    body.classList.add('dark-mode');
    toggleTheme.querySelector('i').classList.replace('fa-moon', 'fa-sun');
}

// Form Handling
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        alert('Please enter a valid email address');
        return;
    }

    if (message.trim().length < 10) {
        alert('Message must be at least 10 characters');
        return;
    }

    alert('Thank you for your message! I will respond soon.');
    this.reset();
});