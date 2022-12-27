import { useState } from 'react'

const getNewUrl = async () =>{
  const response = await fetch("https://dog.ceo/api/breeds/image/random",{});
  const data = await response.json();
  return data.message;
}
export default function DogPics () {
  // API: https://dog.ceo/dog-api/
  const [imageSrc , changeSrc] = useState("https://images.dog.ceo/breeds/weimaraner/n02092339_93.jpg");
  return (
    <div className='dog-pics'>
      <img src={imageSrc} />
      <button onClick={(e)=>{
        e.preventDefault();
        let newUrl =  getNewUrl();
        newUrl.then(data => changeSrc(data));
        console.log(imageSrc)
      }}
      >🐶</button>
    </div>
  )
}
