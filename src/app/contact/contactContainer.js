import { useState, useEffect } from "react";
import "../global.css";
import "./contact.css";

export default function ContacContainer() {

  const [detailsHtml, setDetailsHtml] = useState(null);

  useEffect(() => {
    const updateDetails = async () => {
      const det = await {
        mail: "yukichin638@gmail.com",
        facebook: "https://www.facebook.com/bipin.thapasingh/",
        github: "https://github.com/bipin-thapa01",
        linkedIn: "https://www.linkedin.com/in/bipin-thapa-990b5131b/",
      };

      setDetailsHtml(
        Object.entries(det).map((item, index) => {
          <div className={`item`}>
            <div className="mail">
              Mail Me
            </div>
            <div>

            </div>
          </div>
        })
      );
    }

    updateDetails();

  }, []);

  return (
    <div className="main-container">
      <h3>
        GEI IN TOUCH
      </h3>
      <div className="contact-container">
        <div className="contact-info">

        </div>
        <div>

        </div>
      </div>
    </div>
  );
}