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
const Tile = ({
  element,
  hero,
  id,
  direction,
}) => (
  <div>
    <div id={id} className={classNames('tile', element, direction, { hero })} />
  </div>
);

Tile.propTypes = {
  element: PropTypes.string.isRequired,
  hero: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
  // direction: PropTypes.string.isRequired,
};
/**
 * Export
 */

export default Tile;
