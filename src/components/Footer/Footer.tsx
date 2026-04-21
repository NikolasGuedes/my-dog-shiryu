import "./Footer.css";

const footerIcons = [
  "/imgs/abstract_icon_01.svg",
  "/imgs/abstract_icon_02.svg",
  "/imgs/abstract_icon_03.svg",
];

export default function Footer() {
  return (
    <footer className="site-footer" aria-label="Credits">
      <div className="footer-icons" aria-hidden="true">
        {footerIcons.map((icon) => (
          <img className="footer-icon" src={icon} alt="" key={icon} />
        ))}
      </div>
      <img
        className="footer-signature"
        src="/imgs/MADE BY NIKOLAS GUEDES.svg"
        alt="Made by Nikolas Guedes"
      />
    </footer>
  );
}
