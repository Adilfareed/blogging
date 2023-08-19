import Blog from "./components/Blog";
import Inziblog from "./components/Inziblog";
import Inziblog2 from "./components/Inziblog2";

export default function main() {
  return (
    <>
      <div>
        <div className="personal">
          <h1 className="text">Personal Blogging App</h1>
          <a className="login" href="./login">Sign in</a>
        </div>
        <h1 className="morning"> GOOD MORNING READERS! </h1>
        <h2 className="morning">All Bolgs </h2>
        <Blog />
        <a  className= "link" href="./elon"> see all from this user</a>
        <Inziblog />
        <a className= "link" href="./inzi"> see all from this user</a>
        <Inziblog2 />
        <a className= "link" href="./inzi"> see all from this user</a>
      </div>
    </>
  );
}
