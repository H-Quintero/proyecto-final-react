import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home">
      <Link to="people" className="link-home link-home--backp">
        <h1 className="home__link">People</h1>
      </Link>
      <Link to="planets" className="link-home link-home--backpa">
        <h1 className="home__link">Planets</h1>
      </Link>
      <Link to="species" className="link-home link-home--backsp">
        <h1 className="home__link">Species</h1>
      </Link>
      <Link to="starships" className="link-home link-home--backst">
        <h1 className="home__link">Starships</h1>
      </Link>
      <Link to="vehicles" className="link-home link-home--backvh">
        <h1 className="home__link">Vehicles</h1>
      </Link>
      <Link to="films" className="link-home link-home--backf">
        <h1 className="home__link">Films</h1>
      </Link>
    </div>
  );
}
