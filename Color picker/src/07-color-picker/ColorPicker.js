import { useState } from 'react'
import Color from './Color'

const colors = [{
  hex: '#91A6FF',
  name: 'Cornflower Blue'
},
{
  hex: '#FF88DC',
  name: 'Persian Pink'
},
{
  hex: '#80FF72',
  name: 'Screamin Green'
},
{
  hex: '#FF5154',
  name: 'Tart Orange'
}]

export default function ColorPicker () {
  const [backgroundColor, setBackgroundColor] = useState('white')

  return (
    <div className='page' style={{ backgroundColor }} onClick={(e)=>{
      e.preventDefault();
      const colorReq = (e.target.textContent);
      colors.forEach((obj)=>{
        if(obj.name === colorReq)
        {
          setBackgroundColor(obj.hex)
          return true;
        }
      })
    }}>
      {
        colors.map(color => (
          <Color key={color.hex} hex={color.hex} name={color.name} />
        ))
      }
    </div>
  )
}
