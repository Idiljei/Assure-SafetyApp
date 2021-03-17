
  // current user location  + post 
  // const p1 = {lat: 56.7112494, lng: -111.3426811 } //current user location 
  // const p2 = { lat: 56.7105386, lng: -111.3403816 },

const distanceBetween2Points = async(p1, p2)  => {
  const [distance, setDistance] = useState(" ")

  try {

  const response = await fetch("http://localhost:8080/forum");
  const jsonData = await response.json();

     setDistance(jsonData);

const p1 = jsonData[1].address
const p2 = jsonData[2].address
const obj = JSON.parse(test)
const lat = obj.lat
const lng = obj.lng
console.log("PERSON 1", p1)
console.log("PERSON 2,", p2)


    const lat1 = p1[0] / (180 / Math.PI);
    const lat2 = p2[0] / (180 / Math.PI);
    const lon1 = p1[1] / (180 / Math.PI);
    const lon2 = p2[1] / (180 / Math.PI);
    const distance =
      6371 *
      Math.acos(
        Math.sin(lat1) * Math.sin(lat2) +
          Math.cos(lat1) * Math.cos(lat2) * Math.cos(lon1 - lon2)
      );
    return distance;
  } catch (error) {
    return null;
  }
useEffect(() => {
  distanceBetween2Points();
}, []);

