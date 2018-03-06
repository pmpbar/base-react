import { connect } from 'react-redux';
import { setThing } from 'redux/actions';
import App from 'main/view';

const mapStateToProps = state => ({
  thing: state.thing,
});
const mapDispatchToProps = dispatch => ({
  setThing: (thing) => {
    dispatch(setThing(thing));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
