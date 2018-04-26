/**
 * Npm import
 */
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

/**
 * Local import
 */
import Connect from 'src/components/Connect';
import { testConnectUser } from 'src/store/userMiddleware';


// Action Creators

/**
 * Code
 */
const mapStateToProps = null;


const mapDispatchToProps = dispatch => (
  bindActionCreators(
    {
      testConnectUser,
    },
    dispatch,
  )
);

// Container
export default connect(mapStateToProps, mapDispatchToProps)(Connect);


/**
 * Export
 */
