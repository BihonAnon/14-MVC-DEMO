const newFormHandler = async (event) => {
  event.preventDefault();

  const name = "anonomous" //document.querySelector('#comment-name').value.trim();
  const description = document.querySelector('#comment-desc').value.trim();

  if (name && description) {
    const response = await fetch(`/api/comment`, {
      method: 'POST',
      body: JSON.stringify({ name, description }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to create Comment');
    }
  }
};



