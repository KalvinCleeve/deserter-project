/**
 * Npm import
 */

import React from 'react';
import classNames from 'classnames';
/**
 * Local import
 */

/**
 * Code
 */
const Tile = ({ element, hero, obstacle }) => (
  <div>
    <div className={classNames('tile', element, { hero })} />
  </div>
);


/**
 * Export
 */

export default Tile;
