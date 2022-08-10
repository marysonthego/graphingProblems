#!/usr/bin/env node
require("google-closure-library");
require('yargs')
  .scriptName("dijkstra")
  .usage('$0 <cmd> [args]')

  .command('hello [name]', 'welcome ter yargs!', (yargs) => {
    yargs.positional('name', {
      type: 'string',
      default: 'Cambi',
      describe: 'the name to say hello to'
    })

  }, function (argv) {
    console.log('hello', argv.name, 'welcome to yargs!')
  })
.help()
.argv

function main() {

  let a = 0;
  let b = c = d = e = f = g = Number.POSITIVE_INFINITY;
  let destination = f;
  let ab = ba = 4,
      ac = ca = 3,
      ae = ea = 7,
      bc = cb = 6,
      bd = db = 5,
      cd = dc = 11,
      dg = gd = 10,
      df = fd = 2,
      ec = ce = 8,
      ed = de = 2,
      eg = ge = 5,
      gf = fg = 3;

  const unVisited = [{vertex: 'a', distance: a}, {vertex: 'b', distance: b}, {vertex: 'c', distance: c}, {vertex: 'd', distance: d}, {vertex: 'e', distance: e}, {vertex: 'f', distance: f}, {vertex: 'g', distance: g}];

  const visited = [];

  let aNeighbors = [{vertex: 'b', weight: ab}, {vertex: 'c', weight: ac}, {vertex: 'e', weight: ae}];

  let bNeighbors = [{vertex: 'a', weight: ba}, {vertex: 'c', weight: bc}, {vertex: 'd', weight: bd}];

  let cNeighbors = [{vertex: 'a', weight: ca}, {vertex: 'b', weight: cb}, {vertex: 'd', weight: cd}, {vertex: 'e', weight: ce}];

  let dNeighbors = [{vertex: 'b', weight: db}, {vertex: 'c', weight: dc}, {vertex: 'e', weight: de}, {vertex: 'f', weight: df}, {vertex: 'g', weight: dg}];

  let eNeighbors = [{vertex: 'a', weight: ea}, {vertex: 'c', weight: ec}, {vertex: 'd', weight: ed}, {vertex: 'g', weight: eg}];

  let fNeighbors = [{vertex: 'd', weight: fd}, {vertex: 'g', weight: fg}];

  let gNeighbors = [{vertex: 'd', weight: dg}, {vertex: 'e', weight: eg}, {vertex: 'f', weight: fg}];

  unVisited.forEach(function(item) {
    switch(item.vertex) {
      case 'a':
        item.distance = calcNeighbors(item.vertex, aNeighbors);
        console.log('switch vertex: ' + JSON.stringify(item.vertex));
        break;
      case 'b':
        item.vertex.distance = calcNeighbors(item.vertex, bNeighbors);
        break;
      case 'c':
        item.vertex.distance = calcNeighbors(item.vertex, cNeighbors);
        break;
      case 'd':
        item.vertex.distance = calcNeighbors(item.vertex, dNeighbors);
        break;
      case 'e':
        item.vertex.distance = calcNeighbors(item.vertex, eNeighbors);
        break;
      case 'f':
        item.vertex.distance = calcNeighbors(item.vertex, fNeighbors);
        break;
      case 'g':
        item.vertex.distance = calcNeighbors(item, gNeighbors);
        break;
      default:
        break;
    };
  });

  function calcNeighbors(item, neighbors){

    neighbors.forEach(function(neighbor) {
      console.log('calcNeighbors item: ' + item.vertex + ' item.distance: ' + item.distance);
      console.log('neighbor: ' + neighbor.vertex + ' neighbor.weight: ' + neighbor.weight);
      //console.log('item.vertex: ', item.vertex);
      //console.log('visited[item.vertex]: ' + JSON.stringify(visited['item.vertex']));


      if (!Number.isFinite(item.distance)) {
        item.distance = 0;
      }

      unVisited.forEach(function (unVisitedItem) {
        let distance = 0;
        if (unVisitedItem.vertex === neighbor.vertex) {
          distance = unVisitedItem.distance + item.distance + neighbor.weight;
          unVisitedItem.distance = distance;
          visited.push(unVisitedItem);
          unVisited.shift();
          console.log('visited: ' + JSON.stringify(visited));
        }
      })

      if (visited[visited.length-1].vertex === destination) {
        return;
      } else {

        if (visited.length > 0) {
          visited.sort(function(a, b) {
              return a.distance - b.distance;
          })
          console.log('visited:', JSON.stringify(visited));
        return (visited[visited.length-1].distance);
        }
      }

    });
  }
};

main();
