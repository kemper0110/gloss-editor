import './App.scss'
import CanvasContainer from "./canvas/CanvasContainer.tsx";
import Sidebar from "./sidebar/Sidebar.tsx";
function App() {
    return (
        <div className={'content'}>
            <CanvasContainer/>
            <Sidebar/>
        </div>
    );
}

export default App
