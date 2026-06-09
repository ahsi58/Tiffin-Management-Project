import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-section">
          <h2>TiffinHub</h2>
          <p>
            Fresh, healthy, and affordable meals delivered
            right to your doorstep.
          </p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>

          <ul>
            <li>Home</li>
            <li>Weekly Menu</li>
            <li>Subscription</li>
            <li>Login</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact</h3>

          <p>Email: support@tiffinhub.com</p>
          <p>Phone: +91 9876543210</p>
          <p>Pune, Maharashtra</p>
        </div>

      </div>

      <div className="footer-bottom">
        © 2026 TiffinHub. All Rights Reserved.
      </div>

    </footer>
  );
}

export default Footer;