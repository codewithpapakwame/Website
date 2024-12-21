document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;

    fetch('process.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name: name })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('result').innerText = data.message;
    })
    .catch(error => console.error('Error:', error));
});