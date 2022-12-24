// A function for replacing at
String.prototype.replaceAt = function (index, replacement) {
  return (
    this.substring(0, index) +
    replacement +
    this.substring(index + replacement.length)
  );
};

//Constructor function
function Car(name, position = 0) {
  this.name = name;
  this.position = position;
}

function racingGame() {
  //Getting car numbers
  let carNumbers = parseInt(prompt("How many cars do you want?"));
  if (isNaN(carNumbers) || !Number.isInteger(carNumbers) || carNumbers < 1) {
    throw new Error("Use natural number");
    return "false input";
  }

  //if(!carNumber) is false
  //-1 is not falsy

  //Creating cars
  let carArray = Array(carNumbers);
  for (let index = 1; index <= carNumbers; index++) {
    carArray[index - 1] = new Car(
      prompt(`What is the name of car number ${index}`)
    );

    console.log(carArray[index]);
  }

  //Printing playground
  let playground = "";
  for (let dash = 0; dash < 300; dash++) {
    playground = playground.concat("*");
  }

  //For checking end of race
  let minPosition = 0;
  //For indicate the champion
  let championFlag = false;
  let champion;
  //For checking overlaps
  let positions = Array(carNumbers);

  //random order?

  //This while checks the end of race
  while (minPosition <= 300) {
    //Racing
    carArray.forEach(function (item, index) {
      if (item.position <= 300) {
        let step = Math.ceil(Math.random() * 10);
        //Clear the previous position
        playground = playground.replaceAt(item.position, "*");
        item.position += step;
        console.log(`${index} = ${item.position}`);
        playground = playground.replaceAt(item.position, item.name);
        //Add to positions array
        positions[index] = item.position;
      } else if (item.position > 300 && championFlag === false) {
        champion = item.name;
        championFlag = true;
      }

      //   //Overlap
      //   if (
      //     positions.includes(function (element, indicator) {
      //       return element === item;
      //     })
      //   )
      //     carArray[indicator].position = 0;
    });

    //Updating minimum position
    minPosition = Math.min(
      ...carArray.map(function (object) {
        return object.position;
      })
    );

    console.log(playground);
  }
  return `Champion is ${champion}`;
}
console.log(racingGame());
