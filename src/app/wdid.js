import { FaComputer } from "react-icons/fa6";
import { PiHeadCircuitLight } from "react-icons/pi";
import { FaSearchengin } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { MdOutlineEventAvailable } from "react-icons/md";
import { FaChalkboardTeacher } from "react-icons/fa";
import "./wdid.css";

export default function Wdid() {
  return (
    <div className="what-i-do-container">
      <h3>
        What I do
      </h3>
      <div className="wdid-body">
        <div>
          <FaComputer className="wdid-logo"/>
          <span>Web Sites<br></br> Development</span>
        </div>
        <div>
          <PiHeadCircuitLight className="wdid-logo"/>
          <span>Machine<br></br> Learning</span>
        </div>
        <div>
          <FaSearchengin className="wdid-logo"/>
          <span>Research and<br></br> Project Development</span>
        </div>
        <div>
          <FaShoppingCart className="wdid-logo"/>
          <span>Online<br></br> Shop</span>
        </div>
        <div>
          <MdOutlineEventAvailable className="wdid-logo"/>
          <span>Event<br></br> Management</span>
        </div>
        <div>
        <FaChalkboardTeacher className="wdid-logo"/>
        <span>Teaching</span>
        </div>
      </div>
    </div>
  );
}