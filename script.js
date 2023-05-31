const parameters = [
  {
    name: 'fancy',
    positions: ['153,117', '135,88', '116,59', '98,30', '81,1'],
  },
  {
    name: 'camp',
    positions: ['255,117', '273,88', '291,59', '309,30', '328,1'],
  },
  {
    name: 'sporty',
    positions: ['287,214', '316,221', '345,228', '374,235', '403,242'],
  },
  {
    name: 'cozy',
    positions: ['204,273', '204,303', '204,333', '204,362', '204,391'],
  },
  {
    name: 'edgy',
    positions: ['121,214', '93,221', '63,228', '34,235', '4,242'],
  },
];

const events = [
  {
    name: 'a garden party',
    color: '#aaffaa',
    fancy: 4,
    camp: 2,
    sporty: 2,
    cozy: 4,
    edgy: 1,
  },
  {
    name: 'a wedding',
    color: '#ffaacc',
    fancy: 5,
    camp: 2,
    sporty: 1,
    cozy: 2,
    edgy: 1,
  },
  {
    name: 'a gay wedding',
    color: '#ff99ff',
    fancy: 4,
    camp: 5,
    sporty: 2,
    cozy: 2,
    edgy: 4,
  },
  {
    name: 'a warehouse rave',
    color: '#aaffaa',
    fancy: 3,
    camp: 4,
    sporty: 2,
    cozy: 2,
    edgy: 5,
  },
  {
    name: 'yoga & brunch',
    color: '#aaaaff',
    fancy: 3,
    camp: 1,
    sporty: 5,
    cozy: 4,
    edgy: 1,
  },
  {
    name: 'first day on the job',
    color: '#ffccaa',
    fancy: 4,
    camp: 1,
    sporty: 2,
    cozy: 2,
    edgy: 1,
  },
  {
    name: 'fifth year on the job',
    color: '#ffccaa',
    fancy: 2,
    camp: 2,
    sporty: 2,
    cozy: 5,
    edgy: 3,
  }
]

function handleSelection(val) {
  const event = events[val];
  const points = parameters.map((param, i) => param.positions[event[param.name]]).join(' ');
  console.log(points);

  d3.select('polygon.selection')
    .data(points)
    .attr('points', points)
    .attr('stroke', event.color)
    .attr('fill', event.color + '66')
}

function init() {
  handleSelection(0);
}

init();