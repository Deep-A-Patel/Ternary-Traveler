import API from "./dbCalls";

//testing import of dbcalls and calling getAllPlaces
API.getInterests().then(interests => {
  let mainItem = `
  <div class="interestsForm">
  <h2 id="">Add Interests</h2>
  <label for="interestsName">Name</label>
  <input type="text" id="interestsNameInput" name="interestsName"></input><br>
  <label for="interestsDescription">Description</label>
  <input type="text" id="interestsDescriptionInput" name="interestsDescription"></input><br>
  <label for="interestsCost">Cost</label>
  <input type="text" id="interestsCostInput" name="interestsCost"></input><br>
  <select name="country" id="country">
   <option value="none"></option>
   <option value="italy">Italy</option>
   <option value="switzerland">Switzerland</option>
   <option value="france">France</option>
  </select><br>
  <button id="postInterestsBtn">Add Interests</button>
  </div>
  `;
  const interestsList = document.querySelector("#mainResultArea");
  interestsList.innerHTML = mainItem;

  interests.forEach(interestsObj => {
    let interestsItem = `
       <div class="interestsItem" id="">
        <h3 class="interestsName" id="countryName">${
          interestsObj.place.name
        }</h3>
        <h4 id"placeName">PLACE NAME: ${interestsObj.name}</h4>
        <p id="description">DESCRIPTION: ${interestsObj.description}</p>
        <p id="cost">COST: ${interestsObj.cost}</p>
        <p id="review">REVIEW: ${interestsObj.review}</p>
        <button id="deleteBtn">Delete</button>
        <button id="editBtn">Edit</button>
        </div>
        
        
        `;

    interestsList.innerHTML += interestsItem;
  });
});
