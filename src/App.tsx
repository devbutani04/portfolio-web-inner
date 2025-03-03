import './App.css';
import Desktop from './components/os/Desktop';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReportBugButton from './other/ReportBugButton';

function App() {
    return (
        <div className="App">
            <Desktop />
            <ReportBugButton />
        </div>
    );
}

export default App;
