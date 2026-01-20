import ImageCard from "./ImageCard";

const PhotoGrid = ({ photos }) => {
    return (
        <>
            <h1>Photo Grid</h1>
            <div id="photo-grid-container" className='grid'>
                {photos.map(photo => (
                    <ImageCard key={photo.id} photo={photo} />
                ))}
            </div>
        </>
    );
}

export default PhotoGrid;
