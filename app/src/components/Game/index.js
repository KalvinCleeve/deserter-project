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
    testMoveRight: PropTypes.func.isRequired,
    testMoveLeft: PropTypes.func.isRequired,
    testMoveUp: PropTypes.func.isRequired,
    testMoveDown: PropTypes.func.isRequired,
    direction: PropTypes.string.isRequired,
    positionHero: PropTypes.string.isRequired,
  };

  componentDidMount = () => {
    document.addEventListener('keydown', this.handleKeyPress);
  };
  componentWillUnmount = () => {
    document.removeEventListener('keydown', this.handleKeyPress);
  };

  handleKeyPress = (event) => {
    switch (event.key) {
      case 'ArrowRight':
        this.props.testMoveRight();
        break;
      case 'ArrowLeft':
        this.props.testMoveLeft();
        break;
      case 'ArrowUp':
        this.props.testMoveUp();
        break;
      case 'ArrowDown':
        this.props.testMoveDown();
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
              // eslint-disable-next-line
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
