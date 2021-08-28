import Main from './component/main.js'
import styled from 'styled-components';
const AppStyle = styled.div`

background-color:rgb(7, 108, 110);




`;
function App() {
  return (
    <AppStyle>
    <div className="App">
     <Main />
    </div>
    </AppStyle>
  );
}

export default App;
