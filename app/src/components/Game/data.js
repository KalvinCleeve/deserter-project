
const forest =
{
  element: 'forest',
  obstacle: false,
};

const tree =
{
  element: 'tree',
  obstacle: true,
};

const border =
{
  element: 'unknown',
  obstacle: true,
};

const borderTop =
{
  element: 'unknownTop',
  obstacle: true,
};

const borderBottom =
{
  element: 'unknownBottom',
  obstacle: true,
};

const borderLeft =
{
  element: 'unknownLeft',
  obstacle: true,
};

const water =
{
  element: 'water',
  obstacle: true,
};

const door =
{
  element: 'door',
  obstacle: false,
};


export const level1 = [
  [borderTop, borderTop, borderTop, borderTop, borderTop, borderTop, borderTop, borderTop, borderTop, borderTop, borderTop],
  [borderLeft, forest, forest, forest, forest, forest, forest, forest, forest, forest, border],
  [borderLeft, forest, forest, water, water, water, water, forest, forest, forest, border],
  [borderLeft, forest, forest, water, water, water, water, forest, forest, forest, border],
  [borderLeft, forest, forest, forest, forest, forest, forest, forest, forest, forest, border],
  [borderLeft, forest, forest, forest, forest, forest, forest, forest, forest, forest, door],
  [borderLeft, forest, forest, forest, forest, forest, forest, forest, forest, forest, border],
  [borderLeft, forest, forest, forest, tree, tree, tree, tree, forest, forest, border],
  [borderLeft, forest, forest, forest, forest, forest, forest, forest, forest, forest, border],
  [borderLeft, forest, forest, forest, forest, forest, forest, forest, forest, forest, border],
  [borderBottom, borderBottom, borderBottom, borderBottom, borderBottom, borderBottom, borderBottom, borderBottom, borderBottom, borderBottom, borderBottom]];

export const level2 = [];
