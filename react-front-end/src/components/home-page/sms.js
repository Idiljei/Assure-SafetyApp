// Texting Safety Network Live Location 
export const smsLocation = async() => {
  // e.preventDefault();
  const body = { "message": "Phoebe has sent her live location through Assure" }
  await fetch('/sms', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body),
  })
  .then(res =>  res.json())
  .catch(err => console.log(err))

}

// Texting Police 
export const smsPolice = async(e) => {
  // e.preventDefault();
  const body = { "message": "CALLING 911" }
  await fetch('/sms', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body),
  })
  .then(res =>  res.json())
  .catch(err => console.log(err))
}


// SAFENOW text to Safetey Network  
export const smsSafeNow = async(e) => {
  // e.preventDefault();
  const body = { "message": "Safe now! Thanks for following my location status" }
  await fetch('/sms', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body),
  })
  .then(res =>  res.json())
  .catch(err => console.log(err))
}


