var userData;

function getData(){
  let data = localStorage.getItem("formData");
  console.log(data);
  userData = JSON.parse(data);
  console.log(userData, typeof userData);
}



// $('#calendar').fullCalendar('removeEvents', function () { return true; });
  


function constructEventData(){
  if(!userData){
    console.log("undefined");
    return [];
  }

  let events = [];
  const today = new Date()
  const tomorrow = new Date(today)
  tomorrow.setDate(tomorrow.getDate() + 1)

  events.push({
    title:"Sleep",
    start: '22:00', // a start time (10am in this example)
    end: '29:00', // an end time (2pm in this example)
    daysOfWeek: [ '5' ] // Repeat monday and thursday
  })
  console.log("events", events);
  $('#calendar').fullCalendar('addEventSource', events, true);
  return events;
}

const pad = n => {
  const s = String(n);
  return s.length > 1 ? s : '0' + s;
};

const addHours = (timeVal, numHours) => {
  const [hr, min, sec] = timeVal.split(':').map(Number);
  const [,lefty, righty] = String(numHours).match(/(\d+)(?:(\.\d+))?/).map(Number);
  const hours = (hr + lefty) % 24;
  const minutes = righty === undefined ? 
    min : 
    ((righty * 60 | 0) + min) % 60;

  return [hours, minutes, sec].map(pad).join(':');  
};