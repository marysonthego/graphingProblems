/*
maxConsectutiveSubsetSum(n, list)
params:   n - size of the subset to sum up in the list
          list - the array list to sum over
returns:  the maximum sum of a subset of the list of size n
variables:  baseline - the sum of the first n elements in the list
            s1 - the index of the first element in the subset
            s2 - the index of the last element in the subset

list = [1, 9, 8, 2, 4] n = 0 result = 1
list = [1, 9, 8, 2, 4]  n = 1 result = 9
list = [1, 9, 8, 2, 4]  n = 2 result = 17
list = [1, 9, 8, 2, 4]  n = 3 result = 19
list = [1, 9, 8, 2, 4]  n = 4 result = 23
*/

const maxConsecutiveSubsetSum = (n, list) => {
  let result = -1;
  let maxSum = baseline = 0;
  let s2 = s1 = 0;

  if (list.length < n ) {
    result =  'invalid subset size';
    return result;
  } else if (n === 0) {
    result = list[0];
    return result;
  } else if (list.length === n) {
    result = 'subset size of ' + n + ' must be less than list size of ' + list.length;
    return result;
  }
  for (let s1=0; s1 < list.length; s1++) {
    s2 = s1 + n;

    // baseline = sum of first n elements
    let temp = 0;
    list.slice(s1, s2).forEach((subItem) => {
      temp += subItem;
    })
    if (baseline < temp) {
      baseline = temp;
    }
    if (baseline > maxSum) {
        maxSum = baseline;
        result = maxSum;
    }
    //console.log('s1 ' + s1 + ' s2 ' + s2, ' maxSum ' + maxSum + ' baseline ' + baseline);
  };

  // while (s2 < list.length) {
  //   tempSum = tempSum - list[s1] + list[s2];
  //   if (tempSum > maxSum) {
  //     maxSum = tempSum;
  //   }
  //   s1++;
  //   s2++;
  // }
  // return maxSum;
};

const list = [1, 9, 8, 2, 4];

for(let n=0; n<6; n++) {
  console.log('n = ' + n);
  console.log('maxConsecutiveSubsetSum ' + maxConsecutiveSubsetSum(n, list));
}
