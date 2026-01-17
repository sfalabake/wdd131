// References to HTML elements
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

// Function to add a new chapter
function addChapter() {
    const value = input.value.trim(); // Remove extra spaces

    if (value === '') {
        input.focus(); // Nothing entered, return focus
        return;
    }

    // Limit to Top 10
    if (list.children.length >= 10) {
        alert("You have reached the Top 10 chapters!");
        input.focus();
        return;
    }

    // Create new <li>
    const li = document.createElement('li');

    // Add chapter text
    li.textContent = value + ' '; // add space before delete button

    // Create delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = '❌';
    deleteButton.setAttribute('aria-label', `Remove ${value}`);

    // Delete button event
    deleteButton.addEventListener('click', () => {
        li.remove();
        input.focus();
    });

    li.appendChild(deleteButton);
    list.appendChild(li);

    // Clear input and focus for next entry
    input.value = '';
    input.focus();
}

// Add event listener for button click
button.addEventListener('click', addChapter);

// Add Enter key support
input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addChapter();
    }
});
