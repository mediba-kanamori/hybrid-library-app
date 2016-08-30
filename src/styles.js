import { StyleSheet } from 'react-native';
import {
  getTheme,
} from 'react-native-material-kit';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  item: {
    position: 'relative',
    flex: 1,
    width: 156,
    height: 252,
    margin: 2,
  },
  itemImage: {
    height: 252,
    resizeMode: 'cover',
    borderRadius: 2,
  },
  appBar: {
    alignSelf: 'stretch',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: .28,
    shadowColor: 'black',
    elevation: 3,
    zIndex: 100,
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
