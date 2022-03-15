import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Provider } from 'react-redux'
import configureStore  from './redux/store';
import {Container, Row, Col} from 'react-bootstrap';
import  MapComponent from './component/MapComponent';

function App() {
  return (
    <Provider store={configureStore}>
      <Container>
        <MapComponent />
      </Container>
    </Provider>
  );
}

export default App;
