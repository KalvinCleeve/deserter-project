/**
 * Npm import
 */

import React from 'react';
import PropTypes from 'prop-types';

/**
 * Local import
 */
import Tile from 'src/components/Game/Tile';
/**
 * Code
 */
export default class Game extends React.Component {
  static propTypes = {
    level1: PropTypes.array.isRequired,
    moveRight: PropTypes.func.isRequired,
    moveLeft: PropTypes.func.isRequired,
    moveUp: PropTypes.func.isRequired,
    moveDown: PropTypes.func.isRequired,
  };

  componentDidMount = () => {
    const move = addEventListener("keydown", this.handleKeyPress);
  }

  handleKeyPress = (event) => {
    switch (event.key) {
      case 'ArrowRight':
        this.props.moveRight();
        break;
      case 'ArrowLeft':
        this.props.moveLeft();
        break;
      case 'ArrowUp':
        this.props.moveUp();
        break;
      case 'ArrowDown':
        this.props.moveDown();
        break;
      default:
    }
  };

  render() {
    return (
      <div id="game">
        {this.props.level1.map((line, lineIndex) => (
          line.map((tile, index) => (
            <Tile
              element={tile.element}
              hero={tile.hero}
              obstacle={tile.obstacle}
              id={`${lineIndex}-${index}`}
              key={`${lineIndex}-${index}`}
              hero={this.props.positionHero===lineIndex+"-"+index}
            />
            ))))}
      </div>
    );
  }
}
/**
 * Export
 */
