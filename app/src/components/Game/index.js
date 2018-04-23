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
    direction: PropTypes.string.isRequired,
    positionHero: PropTypes.string.isRequired,
  };

  componentDidMount = () => {
    const move = document.addEventListener('keydown', this.handleKeyPress);
  }

  handleKeyPress = (event) => {
    switch (event.key) {
      case 'ArrowRight':
        this.props.moveRight(this.props.level1);
        break;
      case 'ArrowLeft':
        this.props.moveLeft(this.props.level1);
        break;
      case 'ArrowUp':
        this.props.moveUp(this.props.level1);
        break;
      case 'ArrowDown':
        this.props.moveDown(this.props.level1);
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
              obstacle={tile.obstacle}
              id={`${lineIndex}-${index}`}
              key={`${lineIndex}-${index}`}
              hero={this.props.positionHero === `${lineIndex}-${index}`}
              direction={this.props.positionHero === `${lineIndex}-${index}` && this.props.direction}
            />
            ))))}
      </div>
    );
  }
}
/**
 * Export
 */
