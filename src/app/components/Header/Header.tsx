import "./Header.css";

const Header: React.FC = () => {
  return (
    <header>
      <h1>
        ReactJS implementation of{" "}
        <a href="https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life">
          John Conway's Game of Life
        </a>
      </h1>
    </header>
  );
};

export default Header;
