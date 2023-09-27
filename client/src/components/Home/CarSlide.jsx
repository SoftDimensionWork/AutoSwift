import React from 'react'
import Button from '../Button'
import ButtonTransparent from '../ButtonTransparent'

function CarSlide({name, year, price}) {
  return (
    <div className="flex items-center pt-36">
        <div className="w-[40rem] bg-white">
          <p className="text-2xl font-thin ">Find Your Dream Car</p>
          <h1 className="text-6xl">{year} {name}</h1>
          <h2 className="text-3xl font-thin py-4">Model: {year}, Price: {price}k</h2>
          <div className="flex gap-4 pt-5">
            <Button text={`Order Now`} />
            <ButtonTransparent text={`Test Drive`} />
          </div>
        </div>
        <div className="flex justify-center items-center absolute w-[35rem] h-[30rem] rounded-xl bg-gray-100 z-0 ml-[38rem]">
          <img src={`Toyota/${name}.png`} alt={`${name}`} />
        </div>
      </div>
  )
}

export default CarSlide