/* You are given an array of positive integers where each integer represents the height on a vertical line of a chart. Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store.*/

// Step 1: Barriers
// Does the thikness of the lines affect the area? NO
// Do the left and right side of the graph counts as walls? NO
// Does a higher line inside a container affect the area? No
// 
// Step 2: Brute force solution
const heightsArray1 = [7,1,2,3,9]
const getMaxWaterContainerBr = function(heights){
  let maxArea = 0;
  for (let p1 = 0 ; p1<heights.length; p1++){
    for (let p2=p1+1; p2 < heights.length; p2++){
      const height = Math.min(heights[p1], heights[p2]);
      const width = p2-p1;
      const area = height*width;
      maxArea = Math.max(maxArea, area);
    }
  };
  return maxArea;
}

console.log(getMaxWaterContainerBr(heightsArray1));

// step 3: Optimal Solution: Two point solution (Shifting pointers)

const heightsArray2 = [4,8,1,2,3,9];

const getMaxWaterContainerOp = function(heights){
  let p1 =0, p2 = heights.length-1 ; maxArea = 0;
  console.log({p1 , p2 , maxArea});

  while(p1<p2){
    console.log({p1 , p2});
    const height = Math.min(heights[p1], heights[p2]);
    const width = p2-p1;
    const area = height*width;
    console.log(`height:${height}, width:${width}, area:${area}`);
    maxArea = Math.max(maxArea, area);
    console.log({maxArea});

    if (heights[p1] <= heights[p2]){
      p1++;
    } else {
      p2--;
    } 
  }
  return maxArea;
}

console.log(getMaxWaterContainerOp(heightsArray2));