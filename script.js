// API Variables
const apiKey = "coinranking70c09e19fbc0966bbe258a36c4735f9014a4523ffe106e7c";
var baseUrl = "https://api.coinranking.com/v2/coins";
var proxyUrl = "https://cors-anywhere.herokuapp.com/";

// Arrays to Store Fetch API data
const nameArray = [];
const priceArray = [];
const mCapArray = [];
const pChangeArray = [];

// Define these variables for later use to hide intro text after api has been called
const divContainer = document.getElementById("apiResultContainer");
divContainer.style.visibility = "hidden";
const introText = document.getElementById("introText");

// Fetch API
// Fetch Information About All Coins (top 50)
fetch(`${proxyUrl}${baseUrl}`, {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    "X-My-Custom-Header": `${apiKey}`,
    "Access-Control-Allow-Origin": "*",
  },
}).then((response) => {
  if (response.ok) {
    response.json().then((json) => {
      console.log(json.data);
      const coinData = json.data.coins;

      // Push retrieved data into arrays
      coinData.forEach((coin) => {
        nameArray.push(coin.name);
        priceArray.push(coin.price);
        mCapArray.push(coin.marketCap);
        pChangeArray.push(coin.change);
      });

      // Display API on to Crypto Display Cards
      function displayData(name, price, mCap, pChange) {
        //Remove Intro Text
        introText.remove();
        divContainer.style.visibility = "visible";
        //Crypto Card One HTML Element
        const parentElement = document.getElementById("apiResultOne");

        //Create and append API results
        const cryptoOneName = document.createElement("h2");
        cryptoOneName.innerText = name;
        cryptoOneName.classList.add("resultTitle");
        parentElement.append(cryptoOneName);

        const priceOne = document.createElement("div");
        priceOne.classList.add("resultDivValue");
        const priceOneText = document.createElement("p");
        priceOneText.classList.add("resultText");
        priceOneText.innerText = "$" + price;
        priceOne.append(priceOneText);
        parentElement.append(priceOne);

        const mCapOne = document.createElement("div");
        mCapOne.classList.add("resultDivValue");
        const mCapOneText = document.createElement("p");
        mCapOneText.classList.add("resultText");
        mCapOneText.innerText = mCap;
        mCapOne.append(mCapOneText);
        parentElement.append(mCapOne);

        const pChangeOne = document.createElement("div");
        pChangeOne.classList.add("resultDivValue");
        const pChangeOneText = document.createElement("p");
        pChangeOneText.classList.add("resultText");
        pChangeOneText.innerText = pChange + "%";
        pChangeOne.append(pChangeOneText);
        parentElement.append(pChangeOne);

        // Result Label Elements
        const resultDivOne = document.createElement("div");
        resultDivOne.classList.add("resultDiv");
        const resultOneLabel = document.createElement("p");
        resultOneLabel.classList.add("resultText");
        resultOneLabel.innerText = "Coin Price:";
        resultDivOne.append(resultOneLabel);
        parentElement.append(resultDivOne);

        const resultDivTwo = document.createElement("div");
        resultDivTwo.classList.add("resultDiv");
        const resultTwoLabel = document.createElement("p");
        resultTwoLabel.classList.add("resultText");
        resultTwoLabel.innerText = "Market Cap:";
        resultDivTwo.append(resultTwoLabel);
        parentElement.append(resultDivTwo);

        const resultDivThree = document.createElement("div");
        resultDivThree.classList.add("resultDiv");
        const resultThreeLabel = document.createElement("p");
        resultThreeLabel.classList.add("resultText");
        resultThreeLabel.innerText = "Daily Change:";
        resultDivThree.append(resultThreeLabel);
        parentElement.append(resultDivThree);

        const secondResultContainer = document.getElementById("apiResultTwo");
        const awaitInput = document.createElement("h2");
        awaitInput.classList.add("awaitingInput");
        awaitInput.innerText = "Awaiting Input . . .";
        secondResultContainer.append(awaitInput);

        //Remove Awaiting Input Text once second search button has been clicked.

        buttonTwo.addEventListener("click", () => {
          awaitInput.remove();
        });
      }

      function displayDataRight(name, price, mCap, pChange) {
        //Remove Intro Text
        introText.remove();

        divContainer.style.visibility = "visible";

        //Crypto Card One HTML Element
        const parentElement = document.getElementById("apiResultTwo");

        //Create and append API results
        const cryptoOneName = document.createElement("h2");
        cryptoOneName.innerText = name;
        cryptoOneName.classList.add("resultTitle");
        parentElement.append(cryptoOneName);

        const priceOne = document.createElement("div");
        priceOne.classList.add("resultDivValue");
        const priceOneText = document.createElement("p");
        priceOneText.classList.add("resultText");
        priceOneText.innerText = "$" + price;
        priceOne.append(priceOneText);
        parentElement.append(priceOne);

        const mCapOne = document.createElement("div");
        mCapOne.classList.add("resultDivValue");
        const mCapOneText = document.createElement("p");
        mCapOneText.classList.add("resultText");
        mCapOneText.innerText = mCap;
        mCapOne.append(mCapOneText);
        parentElement.append(mCapOne);

        const pChangeOne = document.createElement("div");
        pChangeOne.classList.add("resultDivValue");
        const pChangeOneText = document.createElement("p");
        pChangeOneText.classList.add("resultText");
        pChangeOneText.innerText = pChange + "%";
        pChangeOne.append(pChangeOneText);
        parentElement.append(pChangeOne);

        // Result Label Elements
        const resultDivOne = document.createElement("div");
        resultDivOne.classList.add("resultDiv");
        const resultOneLabel = document.createElement("p");
        resultOneLabel.classList.add("resultText");
        resultOneLabel.innerText = "Coin Price:";
        resultDivOne.append(resultOneLabel);
        parentElement.append(resultDivOne);

        const resultDivTwo = document.createElement("div");
        resultDivTwo.classList.add("resultDiv");
        const resultTwoLabel = document.createElement("p");
        resultTwoLabel.classList.add("resultText");
        resultTwoLabel.innerText = "Market Cap:";
        resultDivTwo.append(resultTwoLabel);
        parentElement.append(resultDivTwo);

        const resultDivThree = document.createElement("div");
        resultDivThree.classList.add("resultDiv");
        const resultThreeLabel = document.createElement("p");
        resultThreeLabel.classList.add("resultText");
        resultThreeLabel.innerText = "Daily Change:";
        resultDivThree.append(resultThreeLabel);
        parentElement.append(resultDivThree);
      }

      //First Search Bar Value
      const searchBarOne = document.getElementById("textFieldOne");
      const buttonOne = document.getElementById("buttonOne");

      //Event listner for submit button
      buttonOne.addEventListener("click", () => {
        let data = searchBarOne.value;
        if (nameArray.includes(data)) {
          const tag = data;
          const tagIndex = nameArray.indexOf(tag);
          let price = priceArray[tagIndex];
          price = Math.round(price * 100) / 100;
          let mCap = mCapArray[tagIndex];
          mCap = new Intl.NumberFormat("us-US", {
            style: "currency",
            currency: "USD",
          }).format(mCap);
          const pChange = pChangeArray[tagIndex];
          displayData(data, price, mCap, pChange);
        } else {
          alert("That Crypto Does Not Exist");
        }
      });

      //Second Search Bar Value
      const searchBarTwo = document.getElementById("textFieldTwo");
      const buttonTwo = document.getElementById("buttonTwo");

      //Event listner for submit button
      buttonTwo.addEventListener("click", () => {
        let data = searchBarTwo.value;
        if (nameArray.includes(data)) {
          const tag = data;
          const tagIndex = nameArray.indexOf(tag);
          let price = priceArray[tagIndex];
          price = Math.round(price * 100) / 100;
          let mCap = mCapArray[tagIndex];
          mCap = new Intl.NumberFormat("us-US", {
            style: "currency",
            currency: "USD",
          }).format(mCap);
          const pChange = pChangeArray[tagIndex];
          displayDataRight(data, price, mCap, pChange);
        } else {
          alert("That Crypto Does Not Exist");
        }
      });
    });
  }
});
