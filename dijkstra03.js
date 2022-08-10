// visitedSet = shortest path graph
const visitedSet = new Set();

//parentMap = node, parent
const parentMap = new Map();

// valueMap map = node, calculated value
const valueMap = new Map();
valueMap.set(0, 0);
valueMap.set(1, Number.MAX_VALUE);
valueMap.set(2, Number.MAX_VALUE);
valueMap.set(3, Number.MAX_VALUE);
valueMap.set(4, Number.MAX_VALUE);
valueMap.set(5, Number.MAX_VALUE);

const graph = new Map();
graph.set(0,  [[1,1], [2,4]]);
graph.set(2, [[0,4], [1,4], [4,5], [3,3]]);
graph.set(1, [[2,4], [0,1], [3,2], [4,7]]);
graph.set(3, [[2,3], [1,2], [4,4], [5,6]]);
graph.set(4, [[1,7], [2,5], [3,4], [5,7]]);
graph.set(5, [[4,7], [3,6]]);

const start = 0;

const findSmallest = () => {
  const smallest = [-1, Number.MAX_VALUE];
  for (const [key, value] of valueMap) {
    if(!visitedSet.has(key) && value < smallest[1]) {
      smallest[0] = key;
      smallest[1] = value;
    }
  }
  console.log('\nfindSmallest smallest: ', smallest);
  if(!visitedSet.has(smallest[0])) {
    return smallest;
  } else {
      return [-1,-1];
  }
}

while(visitedSet.size < valueMap.size) {
  //Step 1
  //Find the node with the smallest valueMap value that's not in the visitedSet

  const current = findSmallest();
  console.log('While current ' + current);

  //if smallest node was not found
  if(current[0] === -1) {
    console.log('DONE. Shortest path graph map = ');
    for(const entry of visitedSet) {
      console.log(entry);
    }
    break;
  } else if(current[0] !== -1) {

    //smallest node was found

    //Step 2
    //update all neighbors of current with new valueMap values
    //if current is not in visitedSet
    if(!visitedSet.has(current[0])) {
      //get current's neighbors
      console.log('Step 2 current ' + current);
      graph.get(current[0]).forEach(neighbor => {
        console.log('Step 2 forEach neighbor ' + neighbor);
        //if neighbor is not in visitedSet
        if(!visitedSet.has(neighbor[0])) {
          //calculate the new valueMap value for neighbor
          const newValue = valueMap.get(current[0]) + neighbor[1];
          console.log('Step 2 newValue ' + newValue);
          //if the new value is < the neighbor's current value
          if(newValue < valueMap.get(neighbor[0])) {
            //update the neighbor's value with the new value
            valueMap.set(neighbor[0], newValue);
            parentMap.set(neighbor[0], current[0]);
          }
        }
      })
      //all neighbors have been updated or skipped

      //Step 3
      //add current to visitedSet because all its neighbors have been processed
      visitedSet.add(current[0]);
      //we could also delete current from the valueMap here,
      //but we'll leave it there and just skip any nodes in the valueMap that
      //are in the visitedSet
    }
    console.log('What is in the visitedSet?');
    for(const entry of visitedSet) {
      console.log(entry);
    }

    //list the valueMap
    console.log('What is in the valueMap?');
    console.log('What is the shortest path from 0 to any other node?');
    for (const entry of valueMap) {
      console.log(entry);
    }

    console.log('What is in the parentMap?');
    for (const entry of parentMap) {
      console.log(entry);
    }

    console.log('What is the shortest path from 0 to 5?');
    const spa = new Set();
    for (const entry of parentMap) {
      spa.add(entry[1])
    };
    console.log(spa);
  };

};
