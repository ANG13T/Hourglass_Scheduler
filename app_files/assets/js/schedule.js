var userData;

function getData(){
  let data = localStorage.getItem("formData");
  console.log(data);
  userData = JSON.parse(data);
  console.log(userData, typeof userData);
}


function constructEventData(){
  if(!userData){
    console.log("undefined");
    return [];
  }

  let events = [];
  events.push({
    title: "Sleep", 
    start: moment(userData["startSleep"]),
    end: moment(addHours(userData["startSleep"], parseInt(userData["amountSleep"]))),
    dow: [ 1, 4 ]
  })
  console.log("events", events);
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