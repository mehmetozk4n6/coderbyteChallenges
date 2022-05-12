function GasStation(strArr) {
  let alinan = 0;
  let ihtiyac = 0;

  for (let i = 1; i < strArr.length; i++) {
    let station = strArr[i].split(":");
    alinan += parseInt(station[0]);
    ihtiyac += parseInt(station[1]);
  }
  if (ihtiyac > alinan) {
    return "impossible";
  }

  newArr = strArr
    .slice(1, strArr[strArr.length])
    .concat(strArr.slice(1, strArr[strArr.length]));
  console.log(strArr);
  console.log(newArr);

  for (let i = 0; i < strArr[0]; i++) {
    let eldeki = 0;
    for (
      let index = i;
      index < newArr.length - parseInt(strArr[0]) + i;
      index++
    ) {
      let station = newArr[index].split(":");
      alinan = parseInt(station[0]);
      ihtiyac = parseInt(station[1]);
      eldeki += alinan;
      if (ihtiyac > eldeki) {
        break;
      } else {
        eldeki -= ihtiyac;
      }
      if (index === newArr.length - parseInt(strArr[0]) + i) {
        return i + 1;
      }
    }
  }

  // code goes here
  // return "false";
}

// keep this function call here
console.log(GasStation(["4", "0:1", "2:2", "1:2", "3:1"]));

// ["4","1:1","2:2","1:2","0:1"]  impossible
// ["4","0:1","2:2","1:2","3:1"]  4

// 1. For input ["3","2:3","2:1","4:4"] the output was incorrect. The correct output is 2

// 2. For input ["5","3:3","1:2","2:2","3:2","4:3"] the output was incorrect. The correct output is 3

// 3. For input ["5","0:1","2:1","3:2","4:6","4:3"] the output was incorrect. The correct output is 2

// 4. For input ["2","1:2","3:2"] the output was incorrect. The correct output is 2

// 5. For input ["6","3:2","2:2","10:6","0:4","1:1","30:10"] the output was incorrect. The correct output is 1
