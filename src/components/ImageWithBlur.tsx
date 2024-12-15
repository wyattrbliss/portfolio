import { useState, useEffect } from 'react';
import { Blurhash } from 'react-blurhash';
import './ImageWithBlur.less';

interface ImageWithBlurProps {
    src: string;
    hash: string;
    alt: string; 
    className: string;
}

export function ImageWithBlur({src, hash, alt, className}: ImageWithBlurProps) {
    const [imageLoaded, setImageLoaded] = useState(false);

	useEffect(() => {
		const image = new Image();
		image.onload = () => {
            setImageLoaded(true)
		};
        image.src = src;
	}, [src]);

    return ( 
        <>
            <div className='blurred-image'>
                {!imageLoaded && (
                    <Blurhash 
                        hash={hash}
                        width={1920}
                        height={1080}
                        resolutionX={32}
                        resolutionY={32}
                        punch={1}
                    />

                )}
            </div>
            {imageLoaded && (
                <img onLoad={() => setImageLoaded(true)} src={src} alt={alt} className={`${className}`}/>
            )}
        </>
        
    );
}
