import './App.css';
import usePhotoGrid from './hooks/usePhotoGrid';
import PhotoGrid from './components/PhotoGrid.jsx';

function App() {
  const { photos, loading } = usePhotoGrid();

  return (
    <div className="App">
      {loading ? <p>Loading photos...</p> :
        <PhotoGrid photos={photos} />
      }
    </div>
  )
}

export default App;
