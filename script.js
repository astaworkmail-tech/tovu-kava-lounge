// ===== PAGE REVEAL =====
    // Purpose: Staggered fade-up animation for sections as the page loads
    // Triggers: On DOM ready and while elements enter the viewport
    document.addEventListener('DOMContentLoaded', function () {
      const items = document.querySelectorAll('.reveal');
      items.forEach((el, i) => {
        el.style.transitionDelay = (i * 120) + 'ms';
        requestAnimationFrame(() => el.classList.add('show'));
      });

      const form = document.getElementById('bookingForm');
      const note = document.getElementById('formNote');
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        const name = form.name.value.trim();
        note.textContent = `Thanks, ${name}. Your note is ready to send to the Tovu team — please follow up by email or phone for a faster reply.`;
        form.reset();
      });
    });