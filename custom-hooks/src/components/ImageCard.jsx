const ImageCard = ({ photo }) => {
    return (
        <div className="image-card">
            <img src="https://images.pexels.com/photos/29459444/pexels-photo-29459444.jpeg" alt={photo.title} />
            <p style={{
                padding: '0.5em',
                justifyContent: 'center',
                textAlign: 'bottom'
            }}>{photo.title}</p>
        </div>
    );
}

export default ImageCard;
