const form = document.querySelector('form');

form.addEventListener('submit', e => {
  e.preventDefault();
  
  const request = new XMLHttpRequest();
  request.open(form.method, form.action);
  const data = new FormData(form);

  request.addEventListener('load', () => {
    const id = JSON.parse(request.response).id;
    alert(`Successfully created staff with id: ${id}`);
  });

  request.addEventListener('error', () => {
    alert('Staff cannot be created. Check your inputs');
  });

  request.send(data);
});