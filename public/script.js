document.getElementById('urlForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const url = document.getElementById('urlInput').value;
  
    fetch('/generate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ url: url }),
    })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        document.getElementById('result').innerHTML = `
          <p>QR code generated successfully!</p>
          <img src="/qrimg.png" alt="QR Code">
        `;
      } else {
        document.getElementById('result').innerHTML = `<p>Failed to generate QR code.</p>`;
      }
    })
    .catch(error => {
      console.error('Error:', error);
      document.getElementById('result').innerHTML = `<p>Something went wrong.</p>`;
    });
  });
  