import elements from 'src/components/Game/elementsMap';

const btp = elements.borderTop;
const blt = elements.borderLeft;
const brt = elements.borderRight;
const bbm = elements.borderBottom;
const fot = elements.forest;
const war = elements.water;
const lon = elements.leverOn;
const lof = elements.leverOff;
const tre = elements.tree;
const dor = elements.door;
export default [
  [btp, btp, btp, btp, btp, btp, btp, btp, btp, btp, btp],
  [blt, fot, fot, fot, fot, fot, fot, fot, fot, fot, brt],
  [blt, fot, fot, war, war, war, war, fot, fot, fot, brt],
  [blt, fot, fot, war, war, war, war, fot, fot, fot, brt],
  [blt, fot, fot, fot, fot, fot, fot, fot, fot, fot, brt],
  [blt, fot, fot, lof, fot, lon, fot, fot, fot, fot, dor],
  [blt, fot, fot, fot, fot, fot, fot, fot, fot, fot, brt],
  [blt, fot, fot, fot, tre, tre, tre, tre, fot, fot, brt],
  [blt, fot, fot, fot, fot, fot, fot, fot, fot, fot, brt],
  [blt, fot, fot, fot, fot, fot, fot, fot, fot, fot, brt],
  [bbm, bbm, bbm, bbm, bbm, bbm, bbm, bbm, bbm, bbm, bbm]];
