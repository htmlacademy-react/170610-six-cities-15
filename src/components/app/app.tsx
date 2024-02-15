import MainScreen from '../../pages/main-screen/main-screen';

type AppScreenProps = {
  favoriteCount: number;
}

function App({favoriteCount}: AppScreenProps): JSX.Element {
  return (
    <MainScreen favoriteCount={favoriteCount} />
  );
}

export default App;
