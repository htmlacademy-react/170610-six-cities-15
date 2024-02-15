import MainScreen from '../../pages/main-screen/main-screen';

type AppScreenProps = {
  rentalPlacesCount: number;
};

function App({ rentalPlacesCount }: AppScreenProps): JSX.Element {
  return <MainScreen rentalPlacesCount={rentalPlacesCount} />;
}

export default App;
