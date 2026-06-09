import MenuCard from "../../components/MenuCard";
import "./MenuPage.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer/Footer";

function DinnerMenu() {

  const dinnerMenu = [
    {
      day: "Monday",
      sabzi: "Paneer Bhurji",
      dal: "Dal Tadka",
      roti: "3 Phulka Rotis",
      rice: "Steamed Rice",
      extras: "Salad + Pickle"
    },
    {
      day: "Tuesday",
      sabzi: "Aloo Matar",
      dal: "Toor Dal",
      roti: "3 Phulka Rotis",
      rice: "Jeera Rice",
      extras: "Raita + Pickle"
    },
    {
      day: "Wednesday",
      sabzi: "Methi Paneer",
      dal: "Moong Dal",
      roti: "3 Phulka Rotis",
      rice: "Steamed Rice",
      extras: "Salad + Papad"
    },
    {
      day: "Thursday",
      sabzi: "Rajma Masala",
      dal: "Dal Fry",
      roti: "3 Phulka Rotis",
      rice: "Steamed Rice",
      extras: "Onion Salad + Pickle"
    },
    {
      day: "Friday",
      sabzi: "Kadai Paneer",
      dal: "Chana Dal",
      roti: "3 Phulka Rotis",
      rice: "Jeera Rice",
      extras: "Raita + Salad"
    },
    {
      day: "Saturday",
      sabzi: "Chole Masala",
      dal: "Dal Makhani",
      roti: "3 Phulka Rotis",
      rice: "Pulao",
      extras: "Sweet Dish"
    },
    {
      day: "Sunday",
      sabzi: "Veg Kofta",
      dal: "Dal Makhani",
      roti: "3 Phulka Rotis",
      rice: "Biryani Rice",
      extras: "Raita + Gulab Jamun"
    }
  ];

  return (
    <>
        <Navbar />
    <div className="menu-page">

      <h1>Weekly Dinner Menu</h1>

      <div className="menu-grid">
        {dinnerMenu.map((meal, index) => (
          <MenuCard
            key={index}
            day={meal.day}
            meal={meal}
          />
        ))}
      </div>

    </div>
    <Footer/>
    </>
  );
}

export default DinnerMenu;