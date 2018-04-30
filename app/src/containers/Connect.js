/**
 * Npm import
 */
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

/**
 * Local import
 */
import Connect from 'src/components/Connect';
import { testConnectUser, testSignUser } from 'src/store/userMiddleware';
import {
  resetFormError,
  changeInputConnectEmail,
  changeInputSignFirstname,
  changeInputSignLastname,
  changeInputSignNickname,
  changeInputSignEmail,
} from 'src/store/user';

// Action Creators

/**
 * Code
 */
const mapStateToProps = state => ({
  errorConnect: state.user.errorConnect,
  errorSignUp: state.user.errorSignUp,
  inputConnectEmail: state.user.inputConnectEmail,
  inputSignFistname: state.user.inputSignFistname,
  inputSignLastName: state.user.inputSignLastName,
  inputSignNickname: state.user.inputSignNickname,
  inputSignEmail: state.user.inputSignEmail,
});


const mapDispatchToProps = dispatch => (
  bindActionCreators(
    {
      testConnectUser,
      testSignUser,
      resetFormError,
      changeInputConnectEmail,
      changeInputSignFirstname,
      changeInputSignLastname,
      changeInputSignNickname,
      changeInputSignEmail,
    },
    dispatch,
  )
);

// Container
export default connect(mapStateToProps, mapDispatchToProps)(Connect);


/**
 * Export
 */
