import { useState, useEffect } from 'react';

const usePhotoGrid = () => {
    const [photos, setPhotos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPhotos = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/photos?_limit=20');
                const data = await response.json();
                setPhotos(data);
            } catch (error) {
                console.error('Error fetching photos:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchPhotos();
    }, []);

    return { photos, loading };
}

export default usePhotoGrid;
