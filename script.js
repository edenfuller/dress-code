const parameters = [
  {
    name: 'fancy',
    positions: ['153,117', '135,88', '116,59', '98,30', '81,1'],
  },
  {
    name: 'campy',
    positions: ['255,117', '273,88', '291,59', '309,30', '328,1'],
  },
  {
    name: 'sporty',
    positions: ['287,214', '316,221', '345,228', '374,235', '400,242'],
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
    campy: 2,
    sporty: 2,
    cozy: 4,
    edgy: 1,
  },
  {
    name: 'a wedding',
    color: '#ffaacc',
    fancy: 5,
    campy: 2,
    sporty: 1,
    cozy: 2,
    edgy: 1,
  },
  {
    name: 'a gay wedding',
    color: '#ff99ff',
    fancy: 4,
    campy: 5,
    sporty: 2,
    cozy: 2,
    edgy: 4,
  },
  {
    name: 'yoga & brunch',
    color: '#aaaaff',
    fancy: 3,
    campy: 1,
    sporty: 5,
    cozy: 4,
    edgy: 1,
  },
  {
    name: 'a warehouse rave',
    color: '#77ff77',
    fancy: 3,
    campy: 4,
    sporty: 4,
    cozy: 1,
    edgy: 5,
  },
  {
    name: 'a camping trip',
    color: '#eebb99',
    fancy: 1,
    campy: 5,
    sporty: 5,
    cozy: 5,
    edgy: 1,
  },
  {
    name: 'first day on the job',
    color: '#5e9fed',
    fancy: 4,
    campy: 1,
    sporty: 2,
    cozy: 2,
    edgy: 1,
  },
]

let points = [];

function handleSelection(val) {
  const event = events[val];
  points = parameters.map((param) => param.positions[event[param.name] - 1]);

  d3.select('polygon.selection')
    .transition()
    .duration(750)
    .attr('points', points.join(' '))
    .attr('stroke', event.color)
    .attr('fill', event.color + '88')

  d3.selectAll('.chart-area__labels div')
    .data(points)
    .transition()
    .duration(500)
    .attr('class', 'corner-point')
    .attr('style', (d) => {
      const axes = d.split(',');
      return `transform: translate(${Number(axes[0]) + 46}px, ${Number(axes[1]) + 46}px);`
    });

  d3.select('h1, select')
    .attr('style', `color: ${event.color}`);

  d3.select('select')
    .attr('style', `color: ${event.color}`);
}

function init() {
  d3.select('select')
    .selectAll('option')
    .data(events)
    .enter()
    .append('option')
    .text((d) => d.name)
    .attr('value', (_, i) => i);

  handleSelection(0);

  d3.select('.chart-area__labels')
    .selectAll('div')
    .data(points)
    .enter()
    .append('div')
    .attr('class', 'corner-point')
    .attr('style', (d) => {
      const axes = d.split(',');
      return `transform: translate(${Number(axes[0]) + 46}px, ${Number(axes[1]) + 46}px);`
    });

  d3.select('.chart-area__labels')
    .selectAll('p')
    .data(parameters)
    .enter()
    .append('p')
    .attr('class', 'chart-label chart-label--name')
    .text((d) => d.name)
    .attr('data-index', (_, i) => i)

  d3.select('.chart-area__labels')
    .selectAll('p.chart-label--number')
    .data(parameters)
    .enter()
    .append('p')
    .attr('class', 'chart-label chart-label--number')
    .text((_, i) => i + 1)
    .attr('data-index', (_, i) => i)
}

document.querySelector('select').addEventListener(
  'change', e => handleSelection(e.target.value)
);

init();