console.log('Document loaded!');

function tallyStaff(data) {
  const tally = {};

  for (let schedule of data) {
    const staff = `staff ${schedule.staff_id}`;
    tally[staff] = (tally[staff] || 0) + 1; 
  }

  return tally;
}

function getSchedules() {
  const request = new XMLHttpRequest();
  request.open('GET', 'http://localhost:3000/api/schedules');
  request.timeout = 5000;
  request.responseType = 'json';

  request.addEventListener('load', () => {
    const data = request.response;
    
    if (!data.length) {
      alert('No Schedules are available for booking');
      return;
    } else {
      console.log(data);
      const tally = tallyStaff(data);
      console.log(tally);
    }
  });

  request.addEventListener('timeout', (e) => {
    alert('It is taking longer than usual, please try again later.');
  });

  request.addEventListener('loaded', (e) => {
    alert('Request Completed');
  });

  request.send();
}
