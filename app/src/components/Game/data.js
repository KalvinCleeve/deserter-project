
const forest =
{
  element: 'forest',
  obstacle: false,
  hero: false,
};

const tree =
{
  element: 'tree',
  obstacle: true,
  hero: false,
};

const border =
{
  element: 'unknown',
  obstacle: true,
  hero: false,
};

const water =
{
  element: 'water',
  obstacle: true,
  hero: false,
};

const test =
{
  element: 'forest',
  obstacle: false,
  hero: true,
};


export const level1 = [
  border, border, border, border, border, border, border, border, border, border, border,
  border, forest, forest, forest, forest, forest, forest, forest, forest, forest, border,
  border, forest, forest, water, water, water, water, forest, forest, forest, border,
  border, forest, forest, water, water, water, water, forest, forest, forest, border,
  border, forest, forest, forest, forest, forest, forest, forest, forest, forest, border,
  border, forest, forest, forest, test, forest, forest, forest, forest, forest, border,
  border, forest, forest, forest, forest, forest, forest, forest, forest, forest, border,
  border, forest, forest, forest, tree, tree, tree, tree, forest, forest, border,
  border, forest, forest, forest, forest, forest, forest, forest, forest, forest, border,
  border, forest, forest, forest, forest, forest, forest, forest, forest, forest, border,
  border, border, border, border, border, border, border, border, border, border, border,
];

export const level2 = [];
