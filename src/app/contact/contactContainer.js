import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import "../global.css";
import "./contact.css";

export default function ContacContainer() {

  let details;
  const [contactInfo, setContactInfo] = useState(null);
  const [conactForm, setContactForm] = useState(null);
  const router = useRouter();

  useEffect(() => {
    details = {
      mail: "yukichin638@gmail.com",
      facebook: "https://www.facebook.com/bipin.thapasingh/",
      github: "https://github.com/bipin-thapa01",
      linkedIn: "https://www.linkedin.com/in/bipin-thapa-990b5131b/",
    };

    setContactInfo(<>
      <div className="info info1">
        <div className="info-title">
          Write Me
        </div>
        <div className="info-desc">
          {details.mail}
        </div>
      </div>
      <div className="info">
        <div className="info-title">
          Follow Me
        </div>
        <div className="info-desc">
          <div className="link" onClick={() => { router.push(`${details.facebook}`) }}>
            Facebook.
          </div>
          <div className="link" onClick={() => { router.push(`${details.github}`) }}>
            Github.
          </div>
          <div className="link" onClick={() => { router.push(`${details.linkedIn}`) }}>
            LinkedIn.
          </div>
        </div>
      </div>
    </>);

    setContactForm(
      <>
        <div className="form-title">
          Or fill this form
        </div>
        <input type="text" placeholder="Name" autoComplete="off" name="Name" className="input" id="name"/>
        <input type="text" placeholder="Email" autoComplete="off" name="Email" className="input" id="email"/>
        <input type="text" placeholder="Organization" autoComplete="off" name="Organization" className="input" id="org"/>
        <textarea placeholder="Tell me something about you" autoComplete="off" name="description" className="desc" id="description"/>
        <button type="submit" className="submit">Send</button>
      </>
    );

  }, []);

  const handleSubmit = async (e) =>{
    e.preventDefault();
    const name = e.currentTarget.querySelector("#name").value;
    const email = e.currentTarget.querySelector('#email').value;
    const org = e.currentTarget.querySelector('#org').value;
    const desc = e.currentTarget.querySelector('#description').value;

    const sendObject = {
      name: name,
      email: email,
      org: org,
      desc: desc,
    };

    // const res = await fetch('',{
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(sendObject)
    // });
    // const data = await res.json();
  }

  return (
    <div className="main-container">
      <h3>
        GET IN TOUCH
      </h3>
      <div className="contact-container">
        <div className="contact-info">
          {contactInfo}
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          {conactForm}
        </form>
      </div>
    </div>
  );
}