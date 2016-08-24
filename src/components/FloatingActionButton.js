import { MKButton } from 'react-native-material-kit';

const FloatingActionButton = MKButton.coloredFab()
  .withAccent(true)
  .withOnPress(() => {
    console.log("Hi, it's a colored button!");
  })
  .build();

export default FloatingActionButton;
