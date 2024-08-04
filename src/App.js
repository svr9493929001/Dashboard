import './App.css';
import SideBar from './components/sideBar';
import PrimarySearchAppBar from './components/toolBar';
import Dashboardcomponent from './components/dashBoardComponent';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: "dark"
  },
});
function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <SideBar />
        <PrimarySearchAppBar />
        <Dashboardcomponent />
      </ThemeProvider>
    </div>
  );
}

export default App;
