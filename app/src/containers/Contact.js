/**
 * Npm import
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
import Contact from 'src/components/Contact';

// Action Creators

/**
 * Code
 */
const mapStateToProps = state => ({
  errorConnect: state.user.errorConnect,
  errorSignUp: state.user.errorSignUp,
  inputConnectEmail: state.user.inputConnectEmail,
  inputSignFirstname: state.user.inputSignFirstname,
  inputSignLastname: state.user.inputSignLastname,
  inputSignNickname: state.user.inputSignNickname,
  inputSignEmail: state.user.inputSignEmail,
  user: state.user.user,
});

const mapDispatchToProps = {};

// Container
const Contact = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Contact);
/**
 * Export
 */
export default Contact;
