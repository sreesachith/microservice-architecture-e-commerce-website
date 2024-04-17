import React, { useRef } from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";

export default function Desktop ()  {
  const section = useRef();
  const scrollHandler = (elmRef) => {
    console.log(elmRef)
    window.scrollTo({top:elmRef.current.offsetTop,behavior:"smooth"});
  }
  const navigate = useNavigate()
  return (
    <div className="desktop">
      <div className="div">
        <div className="overlap-group">
          <button className="button-open-links" onClick={() => navigate('home')} >
          <img className="img" alt="Button open links" src="home.jpeg" />
          </button>
          <button className="button-open-links" type="button" onClick={() => scrollHandler(section)}>
          <img className="img" alt="Button open links" src="contact.jpeg" />
          </button>
          <button className="button-open-links" type="button" onClick={() => navigate('about')} >
          <img className="img" alt="Button open links" src="about.jpeg" />
          </button>

          <button className="button-open-links_1" type="button" onClick={() => navigate('Register')} >
            Register
          </button>
          <button className="button-open-links_1" type="button" onClick={() => navigate("Login")}>
            Login  
          </button>
        </div>
        <div className="overlap">
          <p className="step-into-a-world-of">
            <span className="text-wrapper">
              <br />
            </span>
            <span className="span">
              <br />
              Step into a world of creativity and artistry, where every piece tells a unique story. Our passion for
              handicrafts drives us to curate a collection that celebrates the beauty of handcrafted items. From
              intricately woven textiles to meticulously carved wooden treasures, our store is a treasure trove of
              exquisite craftsmanship.
            </span>
            <div  className="abc">
            <img src="footer.jpeg" alt="footer"/>
          </div>
          <div ref={section}></div>
          </p>
          
          <div className="text-wrapper-2">WELCOME</div>
          
        </div>
        
      </div>
    </div>
  );
};
<script>
function myfunction() {
    console.log("CLICKED")}
</script>
