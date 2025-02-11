function cancelSchedule(scheduleId) {
  const xhr = new XMLHttpRequest();
  xhr.open('DELETE', `/api/schedules/${scheduleId}`);

  xhr.addEventListener('load', () => {
    if (xhr.status === 204) {
      alert('Schedule successfully deleted!');
    } else {
      alert(xhr.responseText);
    }
  });

  xhr.send();
}

function cancelBooking(bookingId) {
  const xhr = new XMLHttpRequest();
  xhr.open('PUT', `/api/bookings/${bookingId}`);

  xhr.addEventListener('load', () => {
    if (xhr.status === 204) {
      alert('Booking cancelled!');
    } else {
      alert(xhr.responseText);
    }
  });

  xhr.send();
}