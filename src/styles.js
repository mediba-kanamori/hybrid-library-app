import { StyleSheet } from 'react-native';
import {
  getTheme,
  MKColor
} from 'react-native-material-kit';

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  listView: {
    flex: 1
  },
  liContainer: {
    flex: 2,
  },
  appBar: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: .28,
    shadowColor: 'black',
    elevation: 3,
  },
  navBar: {
    backgroundColor: getTheme().primaryColor,
    alignItems: 'center',
    justifyContent: 'center',
    height: 48,
    flexDirection: 'row',
  },
  navBarIcon: {
    marginRight: 5,
    color: 'white',
  },
  navBarTitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500'
  },
  statusBar: {
    backgroundColor: getTheme().primaryColor,
    height: 22
  },
});

export default styles;