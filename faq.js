        document.querySelectorAll('.faq-item h3').forEach(question => {
            question.addEventListener('click', () => {
                const answer = question.nextElementSibling;
                const parent = question.parentElement;
                parent.classList.toggle('active');
                if (answer.style.display === 'block') {
                    answer.style.display = 'none';
                } else {
                    answer.style.display = 'block';
                }
            });
        });