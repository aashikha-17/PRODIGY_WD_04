const menuToggle = document.getElementById('menu-toggle');
        const menu = document.getElementById('menu');

        menuToggle.addEventListener('click', () => {
            menu.classList.toggle('hidden');
        });

        document.getElementById('contact-form').addEventListener('submit', function (e) {
            e.preventDefault();
            alert('Message sent!');
        });
       