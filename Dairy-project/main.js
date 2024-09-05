//const { response } = require("express");


// selectors
const takeInput = document.querySelector('#takeInput');
const takeInputButton = document.querySelector('#inputBtn');
const demoList = document.querySelector('.demo'); // Select the ul with class 'demo'

// add eventListeners
takeInputButton.addEventListener('click', addInput);
takeInput.addEventListener('input', autoResize);

// functions
function addInput(event) {
    event.preventDefault();
    const mood = document.querySelector('#mood').value; // Get mood input
    const detail = document.querySelector('#takeInput').value; // Get detail input

    //.value is a property used in JavaScript to access or set the current value of input elements in a form, such as text fields, text areas, checkboxes, and select boxes.
    //why?

    if (detail === "" || mood === "") {
        alert("dont worries, it safe with me :D ");
    } else {
        fetch('http://localhost:3001/api/products', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ mood, detail }), // Adjust based on your expected fields
        })
            .then(response => response.json())
            // line 28 take response from fetch request and convert it into usable js object.
            // line 28, whenever we use a fetch, the server will always send back a response object. this object contain details about the HTTP response, status code and body of the request. and fetch always return a Promise. 
            .then(data => {
                console.log('Success:', data);
            }) // line 31, the data = response.json()
            // the purpose of the second then is handle the JS object that returned by the previos .then() block
            // so why we need 2 then()? the first one convert it into JS object so we can use, the second one convert a string of JSON data into JS object that we can work with. 
            .catch((error) => {
                console.error('Error:', error);
            });

        // Reset the form fields
        document.querySelector('#mood').value = "";
        document.querySelector('#takeInput').value = "";
        document.querySelector('#takeInput').style.height = "50px"; // Reset height after clearing
    }
}

function autoResize() {
    takeInput.style.height = 'auto'; // Reset height
    takeInput.style.height = takeInput.scrollHeight + 'px'; // Set height to scroll height
}

// Smooth scroll functionality
const viewHistoryBtn = document.querySelector('#viewHistoryBtn');
const viewHistoryDiv = document.querySelector('.viewHistory');
viewHistoryBtn.addEventListener('click', function () {
    document.querySelector('.viewHistory').scrollIntoView({ behavior: 'smooth' });


    ViewHistory();
});

document.querySelector('#viewFutureBtn').addEventListener('click', function () {
    document.querySelector('.viewFuture').scrollIntoView({ behavior: 'smooth' });
});


function ViewHistory() {
    fetch('http://localhost:3001/api/products', {
        method: 'GET'
    })
        .then(response => response.json()) // Parse JSON response into JavaScript object
        .then(data => {
            console.log("data", data);
            // Assuming `data` is an array, iterate over it directly
            demoList.innerHTML = ""; // Clear the current list to avoid duplicates
            data.forEach(entry => {
                const li = document.createElement('li');
                li.innerHTML = `Mood: ${entry.mood} <br> Detail: ${entry.detail}`;
                demoList.appendChild(li);

                const deleted = document.createElement('button');
                deleted.innerHTML = "delete";
                deleted.classList.add('delete-btn');
                deleted.addEventListener('click', () => deleteEntry(entry._id, li));
                li.appendChild(deleted);


                const updated = document.createElement('button');
                updated.innerHTML = "Update";
                updated.classList.add('update-btn');
                updated.addEventListener('click', () => updateEntry(entry._id, li));
                li.appendChild(updated);

            });
        })
        .catch((error) => {
            console.error('Error fetching history:', error);
        });
}


function updateEntry(id, listItem) {
    // Create a div to contain the update fields
    const divUpdate = document.createElement('div');
    divUpdate.classList.add('update-container');

    // Create input fields for mood and detail updates
    const moodUpdate = document.createElement('input');
    moodUpdate.classList.add('moodUpdate');
    moodUpdate.placeholder = 'Enter new mood';

    const detailUpdate = document.createElement('input');
    detailUpdate.classList.add('detailUpdate');
    detailUpdate.placeholder = 'Enter new detail';

    // Create a save button
    const saveBtn = document.createElement('button');
    saveBtn.textContent = 'Save';
    saveBtn.classList.add('save-btn');

    // Append inputs and button to the update div
    divUpdate.appendChild(moodUpdate);
    divUpdate.appendChild(detailUpdate);
    divUpdate.appendChild(saveBtn);

    // Append the update div to the list item
    listItem.appendChild(divUpdate);

    // Add event listener for the save button
    saveBtn.addEventListener('click', () => {
        // Fetch the values from the input fields after user input
        const newMood = moodUpdate.value;
        const newDetail = detailUpdate.value;

        // Validate input fields are not empty
        if (!newMood || !newDetail) {
            alert('Please fill in both fields.');
            return;
        }

        // Make fetch request to update the entry
        fetch(`http://localhost:3001/api/products/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                mood: newMood,
                detail: newDetail
            })
        })
        .then(response => response.json())
        .then(data => {
            console.log('Updated:', data);
            // Update the list item with the new values
            listItem.innerHTML = `Mood: ${newMood} <br> Detail: ${newDetail}`;

           
        })
        .catch(error => {
            console.error('Error updating entry:', error);
        });
    });
}


function deleteEntry(id, listItem) {
    fetch(`http://localhost:3001/api/products/${id}`, {
        method: 'DELETE'
    })
        .then(response => response.json())
        .then(data => {
            console.log('Deleted:', data);
            listItem.remove(); // Remove the list item from the front-end upon successful deletion
        })
        .catch(error => {
            console.error('Error deleting entry:', error);
        });
}



