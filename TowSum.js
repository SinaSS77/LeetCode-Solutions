// %%%%%First question:%%%%%%%%
//  Given an array of integers, return the indices of the two numbers that add up to a given target.
// for example : 
// const tstArr = [1,3,7,9,2]
// const targetNumber = 10;
// Should return 0,3 and 1,2 
const tstArr = [1, 3, 8, 9, 2];
const targetNumber = 10;

function findPairsWithSum(arr, target) {
  const indices = [];
  const seen = new Map();

  for (let i = 0; i < arr.length; i++) {
    const complement = target - arr[i];

    if (seen.has(complement)) {
      indices.push([seen.get(complement), i]);
    }

    seen.set(arr[i], i);
  }

  return indices;
}

const result = findPairsWithSum(tstArr, targetNumber);
result.forEach(pair => {
  console.log(pair[0], pair[1]);
});

/* Description:
Creating a Map:

You can create a new Map by using the new Map() constructor:

const myMap = new Map();
Setting and Getting Values:

You can set values in a Map using the set method and retrieve values using the get method:

myMap.set('key1', 'value1');
myMap.set('key2', 'value2');

console.log(myMap.get('key1')); // Outputs: 'value1'
Iterating Over a Map:

You can iterate over the keys and values in a Map using for...of loops:

for (const [key, value] of myMap) {
  console.log(key, value);
}
Checking for Key Existence:

You can check if a key exists in a Map using the has method:

console.log(myMap.has('key1')); // Outputs: true
Deleting Entries:

You can remove an entry from a Map using the delete method:

myMap.delete('key1');
Size of the Map:

You can determine the number of entries in a Map using the size property:

console.log(myMap.size); // Outputs: 1 */

/***************But in the simplest sploution: */

for (let i=0; i < tstArr.length ; i++) {
  for (let j=i+1 ; i < tstArr.length ; j++){
    if (tstArr[i]+tstArr[j] === targetNumber){
      console.log(i,j);
    } else {
      return null;
    }
  }
}

// other solution :
const findTwoSum = function(nums, target){
  const numsMap ={};
  for (let i=0 ; i<nums.length ; i++){
    const currentMapVal = numsMap[nums[i]];
    if(currentMapVal >= 0){
      return [currentMapVal, i];
    } else {
      const numberToFind = target - nums[i];
      numsMap[numberToFind] = i;
    }
  }
  return null;
}

console.log(findTwoSum(tstArr, targetNumber));