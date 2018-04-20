/**
 * Npm import
 */

import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
/**
 * Local import
 */

/**
 * Code
 */
const Tile = ({ element, hero, id }) => (
  <div>
    <div id={id} className={classNames('tile', element, { hero })} />
  </div>
);

Tile.propTypes = {
  element: PropTypes.string.isRequired,
  hero: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
};
/**
 * Export
 */

export default Tile;
