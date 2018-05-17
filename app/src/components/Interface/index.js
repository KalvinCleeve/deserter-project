/**
 * Npm import
 */
import React from 'react';

/**
 * Local import
 */
import Game from 'src/containers/Game';
import Score from 'src/components/Score';
import Rules from 'src/components/Rules';

/**
 * Code
 */
const Interface = () => (
  <div id="interface" className="columns">
    {/* <Score /> */}
    <Game />
    {/* <Rules /> */}
  </div>
);

/**
 * Export
 */
export default Interface;
