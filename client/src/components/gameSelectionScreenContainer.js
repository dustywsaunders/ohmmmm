import React from 'react';
import PropTypes from 'prop-types';
import GameSelectionScreen from './gameSelectionScreen';
import { connect } from 'react-redux';
import { setGame } from '../actions/setGame';
import { setCurrentUser } from '../actions/auth';

class GameSelectionScreenContainer extends React.Component {
  logoff = () => {
    localStorage.clear();
    window.location.href = '/';
  };

  componentDidMount = () => {
    const { setCurrentUser } = this.props;
    if (localStorage.getItem('currentUser')) {
      const currentUserId = JSON.parse(localStorage.getItem('currentUser'));
      setCurrentUser(currentUserId);
    }
  };

  render() {
    return (
      <GameSelectionScreen currentUser={this.props.currentUser} logoff={this.logoff} setGame={this.props.setGame} />
    );
  }
}

GameSelectionScreenContainer.propTypes = {
  setCurrentUser: PropTypes.func.isRequired,
  setGame: PropTypes.func.isRequired,
  currentUser: PropTypes.shape({
    token: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  })
};

GameSelectionScreenContainer.defaultProps = { currentUser: null };

const mapStateToProps = state => ({
  currentUser: state.currentUser
});

export default connect(
  mapStateToProps,
  { setGame, setCurrentUser }
)(GameSelectionScreenContainer);
