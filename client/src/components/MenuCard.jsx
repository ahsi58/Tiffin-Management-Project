import "./MenuCard.css";
function MenuCard({ day, meal }) {
  return (
    <div className="menu-card">
      <h3>{day}</h3>

      <p>
        <strong>Sabzi:</strong> {meal.sabzi}
      </p>

      <p>
        <strong>Dal:</strong> {meal.dal}
      </p>

      <p>
        <strong>Roti:</strong> {meal.roti}
      </p>

      <p>
        <strong>Rice:</strong> {meal.rice}
      </p>

      <p>
        <strong>Extras:</strong> {meal.extras}
      </p>
    </div>
  );
}

export default MenuCard;