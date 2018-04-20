/**
 * Npm import
 */

import React from 'react';
import { level1 } from 'src/components/Game/data';
import Tile from 'src/components/Game/Tile';
/**
 * Local import
 */

/**
 * Code
 */
const Game = () => (
  <div id="game">
    {level1.map(tile => (
      <Tile
        element={tile.element}
        hero={tile.hero}
        obstacle={tile.obstacle}
      />
    ))}
  </div>
);


/**
 * Export
 */

export default Game;
