import "./Footer.css";

const Footer: React.FC = () => {
  return (
    <footer>
      &copy; {new Date().getFullYear()}, made by{" "}
      <a href="https://github.com/ktsolkas">
        ktsolkas<i className="fa-brands fa-github"></i>
      </a>
    </footer>
  );
};

export default Footer;
