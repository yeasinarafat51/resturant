
import  { useState } from 'react';
const Exprience = () => {
  const items = [
    {
      image: 'https://via.placeholder.com/800x400?text=Slide+1',
      title: 'Slide 1',
      description: 'Description for Slide 1',
    },
    {
      image: 'https://via.placeholder.com/800x400?text=Slide+2',
      title: 'Slide 2',
      description: 'Description for Slide 2',
    },
    {
      image: 'https://via.placeholder.com/800x400?text=Slide+3',
      title: 'Slide 3',
      description: 'Description for Slide 3',
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex - 1 + items.length) % items.length
    );
  };

  return (
    <div className="relative w-full overflow-hidden">
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {items.map((item, index) => (
          <div key={index} className="min-w-full">
            <img src={item.image} alt={item.alt} className="w-full h-auto" />
            <div className="p-4 text-center">
              <h2 className="text-xl font-bold">{item.title}</h2>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg"
      >
        &#10094;
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg"
      >
        &#10095;
      </button>
    </div>
  )
}

export default Exprience
