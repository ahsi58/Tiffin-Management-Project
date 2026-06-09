import MenuCard from "../../components/MenuCard";
import "./MenuPage.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer/Footer";

function LunchMenu() {

  const lunchMenu = [
    {
      day: "Monday",
      sabzi: "Aloo Gobi",
      dal: "Masoor Dal",
      roti: "3 Phulka Rotis",
      rice: "Steamed Rice",
      extras: "Salad + Pickle"
    },
    {
      day: "Tuesday",
      sabzi: "Palak Paneer",
      dal: "Toor Dal Tadka",
      roti: "3 Phulka Rotis",
      rice: "Jeera Rice",
      extras: "Raita + Pickle"
    },
    {
      day: "Wednesday",
      sabzi: "Bhindi Masala",
      dal: "Chana Dal",
      roti: "3 Phulka Rotis",
      rice: "Steamed Rice",
      extras: "Salad + Papad"
    },
    {
      day: "Thursday",
      sabzi: "Mix Veg Curry",
      dal: "Moong Dal",
      roti: "3 Phulka Rotis",
      rice: "Steamed Rice",
      extras: "Buttermilk + Pickle"
    },
    {
      day: "Friday",
      sabzi: "Matar Paneer",
      dal: "Dal Tadka",
      roti: "3 Phulka Rotis",
      rice: "Jeera Rice",
      extras: "Raita + Salad"
    },
    {
      day: "Saturday",
      sabzi: "Dum Aloo",
      dal: "Dal Makhani",
      roti: "3 Phulka Rotis",
      rice: "Steamed Rice",
      extras: "Sweet Dish"
    },
    {
      day: "Sunday",
      sabzi: "Shahi Paneer",
      dal: "Dal Makhani",
      roti: "3 Phulka Rotis",
      rice: "Pulao",
      extras: "Raita + Dessert"
    }
  ];

  return (
    <>
    <Navbar />
    <div className="menu-page">

      <h1>Weekly Lunch Menu</h1>

      <div className="menu-grid">
        {lunchMenu.map((meal, index) => (
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

export default LunchMenu;