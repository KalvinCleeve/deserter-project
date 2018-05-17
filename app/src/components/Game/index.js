/**
 * Npm import
 */
import React from 'react';
import { Redirect } from 'react-router-dom';
/**
 * Local import
 */
/**
 * Code
 */

const Game = ({ user }) => (
  <div id="boardGame" className="column is-half">
    { !user ? <Redirect to="/connect" /> : ''}

    <iframe width="1080" height='760' src="http://217.70.191.18/" frameBorder="0" allowFullScreen target="_parent" />
  </div>
);


/**
 * Export
 */
export default Game;
