// ===== GENERATE CV ========
document.addEventListener('DOMContentLoaded', function () {

    const form = document.getElementById('cvForm');
    const cvTemplate = document.getElementById('cvTemplate');
    const formContainer = document.querySelector('.formContainer');

    // Helper function to split by comma OR newlines and populate as dynamic <ul> list
    function populateList(elementId, inputValue) {
        const listElement = document.getElementById(elementId);
        listElement.innerHTML = '';

        if (!inputValue.trim()) return;

        // Splits text by comma (,) OR new line (\n)
        const items = inputValue.split(/[\n,]+/);

        items.forEach(function (item) {
            const cleanText = item.trim();
            if (cleanText !== '') {
                const li = document.createElement('li');
                li.innerText = cleanText;
                
                // Styling for solid circle bullets
                li.style.listStyleType = 'disc';
                li.style.marginLeft = '20px';
                li.style.marginBottom = '5px';
                
                listElement.appendChild(li);
            }
        });
    }

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        // Direct Text Fields
        document.getElementById('cvName').innerText = document.getElementById('name').value;
        document.getElementById('cvAbout').innerText = document.getElementById('about').value;

        // FIX: Target inner span instead of li so SVG icons remain intact
        document.querySelector('#cvPhone .contact-text').innerText = document.getElementById('number').value;
        document.querySelector('#cvEmail .contact-text').innerText = document.getElementById('email').value;
        document.querySelector('#cvAddress .contact-text').innerText = document.getElementById('address').value;

        // Comma & Newline Separated Fields
        populateList('cvEducation', document.getElementById('education').value);
        populateList('cvExperience', document.getElementById('experience').value);
        populateList('cvSkills', document.getElementById('skills').value);
        populateList('cvLanguages', document.getElementById('languages').value);
        populateList('cvHobbies', document.getElementById('hobbies').value);

        // ===== IMAGE UPLOAD =====
        var file = document.getElementById('picture').files[0];

        if (file) {
            var reader = new FileReader();
            reader.onload = function () {
                document.getElementById('cvImage').src = reader.result;
            }
            reader.readAsDataURL(file);
        } else {
            document.getElementById('cvImage').src = '';
        }

        // Show CV Template & Hide Form
        cvTemplate.style.display = 'flex';
        formContainer.style.display = 'none';
    });
});