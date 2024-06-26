import "./index.css";
import { IoPersonSharp } from "react-icons/io5";
import { GiCarDoor } from "react-icons/gi";
import { BsFuelPumpFill } from "react-icons/bs";
import { useState } from "react";
const economyCars = [
  {
    make: "Toyota Corolla Fielder",
    year: 2022,
    passengers: 5,
    doors: 5,
    consumption: "6.9L/100km",
    price: 25000,
    available: true,
    image:
      "https://demo.crocoblock.com/rentgo-new/wp-content/uploads/2020/03/car6.jpg",
  },
  {
    make: "Honda Accord Hybrid",
    year: 2022,
    passengers: 5,
    doors: 4,
    consumption: "7.5L/100km",
    price: 28000,
    available: true,
    image:
      "https://demo.crocoblock.com/rentgo-new/wp-content/uploads/2020/03/car2.jpg",
  },
  {
    make: "Mitsubishi Outlander",
    year: 2022,
    passengers: 5,
    doors: 4,
    consumption: "7.5L/100km",
    price: 28000,
    available: true,
    image:
      "https://demo.crocoblock.com/rentgo-new/wp-content/uploads/2020/04/full_size_suv-6.jpg",
  },
  {
    make: "Toyota Rav4 Hybrid",
    year: 2022,
    passengers: 5,
    doors: 4,
    consumption: "7.5L/100km",
    price: 28000,
    available: true,
    image:
      "https://demo.crocoblock.com/rentgo-new/wp-content/uploads/2020/03/car12-1.jpg",
  },
  {
    make: "Kia Sedoa",
    year: 2022,
    passengers: 5,
    doors: 4,
    consumption: "7.5L/100km",
    price: 28000,
    available: true,
    image:
      "https://demo.crocoblock.com/rentgo-new/wp-content/uploads/2020/04/Minivan-1.jpg",
  },
  {
    make: "Maxda Cx-5",
    year: 2022,
    passengers: 5,
    doors: 4,
    consumption: "7.5L/100km",
    price: 28000,
    available: true,
    image:
      "https://demo.crocoblock.com/rentgo-new/wp-content/uploads/2020/03/car11-1.jpg",
  },
  {
    make: "Infiniti Skylie Hybrid",
    year: 2022,
    passengers: 5,
    doors: 4,
    consumption: "7.5L/100km",
    price: 28000,
    available: true,
    image:
      "https://demo.crocoblock.com/rentgo-new/wp-content/uploads/2020/04/luxury-10.jpg",
  },
  {
    make: "Honda Ossey Hybrid",
    year: 2022,
    passengers: 5,
    doors: 4,
    consumption: "7.5L/100km",
    price: 28000,
    available: true,
    image:
      "https://demo.crocoblock.com/rentgo-new/wp-content/uploads/2020/03/4.jpg",
  },
  {
    make: "Toyota Corolla Axio",
    year: 2023,
    passengers: 5,
    doors: 4,
    consumption: "7.2L/100km",
    price: 27000,
    available: false,
    image:
      "https://demo.crocoblock.com/rentgo-new/wp-content/uploads/2020/03/car5.jpg",
  },
];

function App() {
  return (
    <div className="parent">
      <PopMessage />
      <div className="container">
        <Header />
        <Cars />
      </div>
    </div>
  );
}

const Modal = () => {
  const [step, setStep] = useState(1);
  const messages = [
    "Visit Our Yard 🧍‍♂️",
    "Choose your desired car 🛻",
    "Drive Off 💨",
  ];

  const handlePrevious = () => {
    if (step > 1) setStep((s) => s - 1);
  };
  const handleNext = () => {
    if (step < 3) setStep((s) => s + 1);
  };
  return (
    <div className="steps">
      <div className="numbers">
        <div className={step >= 1 ? "active" : ""}>1</div>
        <div className={step >= 2 ? "active" : ""}>2</div>
        <div className={step >= 3 ? "active" : ""}>3</div>
      </div>
      <p className="message2">
        Step {step}: {messages[step - 1]}
      </p>
      <div className="buttons">
        <button
          style={{ backgroundColor: "#051937", color: "#fff" }}
          onClick={handlePrevious}
        >
          ←
        </button>
        <button
          style={{ backgroundColor: "#051937", color: "#fff" }}
          onClick={handleNext}
        >
          →
        </button>
      </div>
    </div>
  );
};

const PopMessage = () => {
  const hour = new Date().getHours();
  console.log(hour);
  const openHour = 8;
  const closeHour = 19;

  const isOpen = hour >= openHour && hour <= closeHour;
  return (
    <div className="message">
      {isOpen ? (
        <p>
          We're Now open, Come and rent a car! Yard closes at {closeHour}:00
        </p>
      ) : (
        <p>Sorry, We're currently Closed. Yard opens tomorrow {openHour}:00</p>
      )}
    </div>
  );
};
const Header = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <header className="header">
      <button className="close" onClick={() => setIsOpen((is) => !is)}>
        {isOpen ? "↑" : "↓"}
      </button>
      {isOpen && <Modal />}

      <h2>Car MaX Rentals</h2>
    </header>
  );
};

const Cars = () => {
  const cars = economyCars;
  const carsNum = cars.length;
  return (
    <main className="cars_collection">
      <ul className="cars">
        {carsNum > 0 ? (
          cars.map((car) => <Car carObj={car} key={car.make} />)
        ) : (
          <p>No available cars to show</p>
        )}
      </ul>
    </main>
  );
};
const Car = ({ carObj }) => {
  return (
    <li className={`card ${carObj.available ? "" : "unavailable"}`}>
      <img src={carObj.image} alt={carObj.make} />
      <div className="card_data">
        <h3>{carObj.make}</h3>
        <p>{carObj.year}</p>
        <p>
          <span>✓ Free Cancellation up </span>to 48h before pick-up time
        </p>
        <div className="icons">
          <div>
            <IoPersonSharp />
            {carObj.passengers}
          </div>
          <div>
            <GiCarDoor /> {carObj.doors}
          </div>
          <div>
            <BsFuelPumpFill /> {carObj.consumption}
          </div>
        </div>
        <div className="checkout">
          <h3 className={`${carObj.available ? "" : "unavailable"}`}>
            ${carObj.price} <span>/day</span>
          </h3>
          <button className={`${carObj.available ? "" : "unavailablebtn"}`}>
            Rent Now
          </button>
        </div>
      </div>
    </li>
  );
};
export default App;
