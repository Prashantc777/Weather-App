const cityInput = document.getElementById("input-city");
const submitBtn = document.getElementById("submit-Btn");

const cityToUpdate  = document.getElementById("city-name");

submitBtn.onclick = handleButtonClick;

//https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/pune?unitGroup=metric&key=2AGJJ5SCMVNXJQWGA5SVC52C9&contentType=json

function handleButtonClick() {
    const city = cityInput.value;
    console.log(city);

    fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&key=2AGJJ5SCMVNXJQWGA5SVC52C9&contentType=json`)
    
    .then((res) => res.json())
    .then((data) => {
        cityToUpdate.innerText = data.address;
        console.log(data.days[0].feelslike);
    })
    .catch((err) => console.log(err));
}