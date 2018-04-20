
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
  [border, border, border, border, border, border, border, border, border, border, border],
  [border, forest, forest, forest, forest, forest, forest, forest, forest, forest, border],
  [border, forest, forest, water, water, water, water, forest, forest, forest, border],
  [border, forest, forest, water, water, water, water, forest, forest, forest, border],
  [border, forest, forest, forest, forest, forest, forest, forest, forest, forest, border],
  [border, forest, forest, forest, forest, forest, forest, forest, forest, forest, door],
  [border, forest, forest, forest, forest, forest, forest, forest, forest, forest, border],
  [border, forest, forest, forest, tree, tree, tree, tree, forest, forest, border],
  [border, forest, forest, forest, forest, forest, forest, forest, forest, forest, border],
  [border, forest, forest, forest, forest, forest, forest, forest, forest, forest, border],
  [border, border, border, border, border, border, border, border, border, border, border],
];

export const level2 = [];
