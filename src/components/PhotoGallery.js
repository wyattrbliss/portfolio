import React, { useState, useEffect, Fragment, Component } from 'react';
import {Image, Video, Transformation, CloudinaryContext} from 'cloudinary-react';
import { useLoading, Audio } from '@agney/react-loading';
import _ from 'lodash';
import LoadingIndicator from './LoadingIndicator';
import { getPhotos } from '../state/services/PhotoService';


function PhotoGallery(props) {


  const photoIds = ['bottle_woni83', 'green-bench_llebn1']

  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading]= useState(false);

  const handleScroll = (() => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    console.log('statement');
    if (clientHeight + scrollTop >= scrollHeight - 5) {
        // show the loading animation
        setLoading(true);
        setPhotos(photoIds);
        console.log(getPhotos());
        setPage(page + 1);
    }
  })

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  })

  return (
    <div>
      <div>
        {photos.map(photo => {
          return (
            <div className='photo-container' key={photo.id}>
              <Image cloudName="dvtljlyii"
              publicId={`photography-portfolio/${photo}`}
              width="500"
              crop="scale"/>
            </div>
          );
        })}
      </div>
        {loading &&
          <div className="loading-container">
            <LoadingIndicator />
          </div>
        }
    </div>
    );
  }

export default PhotoGallery;
