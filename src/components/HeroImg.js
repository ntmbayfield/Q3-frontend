import React from 'react';
import Image from 'react-render-image';


const HeroImg = () => {
return (
  <div>
    <Image src={`https://imgur.com/a/UfR3ZvV`} loading="🔄" loaded="✅" errored="❌"/>

    <Image src={src} loading="🔄" errored="❌">
      {({image, loaded, errored}) => {
        return <img src={image.src} width={image.width} height={image.height}/>;
      }}
    </Image>
  <div>
  )
}

export default HeroImg;
