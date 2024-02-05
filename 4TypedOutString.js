//Given two string S and T, return if they equal when both are typed out. Any '#' that appears in the string counts as a backspace.(easy)
// examples: "cb#d" -> "cd" ,,, 
// example2 : S:"ab#c"  T:"az#c"  =>  S:"ac" === T:"ac"

// Step1: Verify the constraints:
// 1) What happens when two #'s appear beside each other?
// -) Delete the two values before the first #.
// 2) what happens to # when there is no character to remove?
// -) It elete nothing then, Just like backspace would.
// 3) Are two empty strings equal to each other?
// -) Yes, consider two empty strings as equal.
// 4) Does case sensitivity matters?
// -) Yes, it does, "a" does not equal "A".

// Step 2: Brute Force
const buildString = function(string) {
  const builtArray = [];
  for (let p = 0; p < string.length; p++) {
    if (string[p] !== '#') {
      builtArray.push(string[p]);
    } else {
      builtArray.pop();
    }
  }
  return builtArray;
};

const backSpaceCompare = function(S, T) {
  const finalS = buildString(S);
  const finalT = buildString(T);

  if (finalS.length !== finalT.length) {
    return false;
  } else {
    for (let p = 0; p < finalS.length; p++) {
      if (finalS[p] !== finalT[p]) {
        return false;
      }
    }
  }
  return true;
};

// for this Brute Force solution the time complexity is O(a+b) in which a and b represent the size of strings. Also, the space compexity is O(a+b)

// Step 3: Optimized Solution (Two pointers)

const backSpaceCompareOptimum = function(S, T) {
  let p1 = S.length - 1, p2 = T.length - 1;
  while (p1 >= 0 || p2 >= 0) {
    if (S[p1] === "#" || T[p2] === "#") {
      if (S[p1] === "#") {
        let backcount = 2;
        while (backcount > 0) {
          p1--;
          backcount--;
          if (S[p1] === "#") {
            backcount += 2;
          }
        }
      }
      if (T[p2] === "#") {
        let backcount = 2;
        while (backcount > 0) {
          p2--;
          backcount--;
          if (T[p2] === "#") {
            backcount += 2;
          }
        }
      }
    } else {
      if (S[p1] !== T[p2]) {
        return false;
      } else {
        p1--;
        p2--;
      }
    }
  }
  return true;
};