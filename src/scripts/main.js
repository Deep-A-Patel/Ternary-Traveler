import API from "./dbCalls";

//testing import of dbcalls and calling getAllPlaces
API.getInterests().then(interests =>
  interests.forEach(interestsObj => {
    const interestsItem = `
      <div class="interestsItem" id="">
        <h3 class="interestsName" id="countryName">${
          interestsObj.place.name
        }</h3>
        <h4 id"placeName">PLACE NAME: ${interestsObj.name}</h4>
        <p id="description">DESCRIPTION: ${interestsObj.description}</p>
        <p id="cost">COST: ${interestsObj.cost}</p>
        <p id="review">REVIEW: ${interestsObj.review}</p>
        </div>`;
    const interestsList = document.querySelector("#mainResultArea");
    interestsList.innerHTML += interestsItem;
  })
);
