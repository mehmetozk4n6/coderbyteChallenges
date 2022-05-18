// function StepWalking(num) {
//   // there is only 1 solution, and for 2 steps there are 2 solutions

//   // code goes here
//   if (num === 1) {
//     return 1;
//   }
//   if (num === 2) {
//     return 2;
//   }

//   // for all N > 2, we add the previous (N - 1) + (N - 2) steps to get
//   // an answer recursively
//   return StepWalking(num - 1) + StepWalking(num - 2);
// }
function StepWalking(num) {
  // there is only 1 solution, and for 2 steps there are 2 solutions

  // code goes here
  if (num === 1) {
    return 1;
  }
  if (num === 2) {
    return 2;
  }

  // for all N > 2, we add the previous (N - 1) + (N - 2) steps to get
  // an answer recursively
  return StepWalking(num - 1) + StepWalking(num - 2);
}

// keep this function call here
console.log(StepWalking(25));

// function StepWalking(4) {
//   // there is only 1 solution, and for 2 steps there are 2 solutions

//   // code goes here
//   if (num === 1) {
//     return 1;
//   }
//   if (num === 2) {
//     return 2;
//   }

//   // for all N > 2, we add the previous (N - 1) + (N - 2) steps to get
//   // an answer recursively
//   return StepWalking(3) + StepWalking(2);
// }

// function StepWalking(3) {
//   // there is only 1 solution, and for 2 steps there are 2 solutions

//   // code goes here
//   if (num === 1) {
//     return 1;
//   }
//   if (num === 2) {
//     return 2;
//   }

//   // for all N > 2, we add the previous (N - 1) + (N - 2) steps to get
//   // an answer recursively
//   return StepWalking(2) + StepWalking(1);
// }
