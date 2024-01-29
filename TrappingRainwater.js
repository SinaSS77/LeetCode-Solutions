// Given an array of integers representing an elevetion map where the width of each bar is 1, return how much rainwater can be trapped.

// Step 1: Barriers Or Verify the Constraints:
// Do the left and right sides of the graph count as walls? No
// Will there be negative integers? NO
// 

// Step 2: Brute Force:
const testArray1 = [0,1,0,2,1,0,3,1,0,1,2];
const getTrappedWaterBr = function(heights) {
  let totalWater = 0;

  for (let p=0; p<heights.length; p++){
    let leftP= p, rightP = p, maxLeft = 0 , maxRight=0;

    while(leftP>=0){
      maxLeft = Math.max(maxLeft, heights[leftP]);
      leftP--;
    }

    while(rightP < heights.length){
      maxRight = Math.max(maxRight, heights[rightP]);
      rightP++;
    }

    const currentWater = Math.min(maxLeft,maxRight) - heights[p];

    if(currentWater >= 0){
      totalWater += currentWater;
    }
  }

  return totalWater;
}

console.log("first:",getTrappedWaterBr(testArray1));
// The code obove has a time complexity of O(n^2) due to the nested while loops

// Opptimised code : two pointers:

const getTrappedWaterOp = function(heights) {
  let left = 0; right = heights.length - 1, totalWater = 0, maxLeft = 0, maxRight = 0;

  while (left < right) {
    if (heights[left] <= heights[right]) {
      if (heights[left] >= maxLeft) {
        maxLeft = heights[left];
      } else {
        totalWater += maxLeft - heights[left];
      }
      left++;
    } else {
      if (heights[right] >= maxRight) {
        maxRight = heights[right];
      } else {
        totalWater += maxRight - heights[right];
      }
      right--;
    }
  }

  return totalWater;
};

console.log("second:", getTrappedWaterOp(testArray1));