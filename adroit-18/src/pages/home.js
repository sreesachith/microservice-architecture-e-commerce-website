import React from "react";
import Header from "./../components/Header.js";
import './home.css';
import { useNavigate } from "react-router-dom";
export default function Home(){
  const navigate = useNavigate()
    return(
        <div>
        <div>
            <Header/>
        </div>
         <div>
         <img width='1550px' src="net.png" alt="net"></img>
         </div>
  <div class="row">
  <div class="column">
    <button onClick={() => navigate('info')}>
    <img src="elephant.png" alt="Snow" width={'250px'}  />
    <p>Rs.6570</p>
    </button>
  </div>
  <div class="column">
    <button>
    <img src="mask.jpeg" alt="Forest" />
    <p>Rs.4230</p>
    </button>
  </div>
  <div class="column">
    <button>
    <img src="men.jpeg " alt="Mountains" />
    <p>Rs.1000</p>
    </button>
  </div>
</div>

<div class="row">
  <div class="column">
    <button>
    <img src="voodo.jpeg" alt="Snow"  />
    <p>Rs.2799</p>
    </button>
  </div>
  <div class="column">
    <button>
    <img src="couple.jpeg" alt="Forest" />
    <p>Rs.2000</p>
    </button>
  </div>
  <div class="column">
    <button>
    <img src="ganesha.jpeg " alt="Mountains" />
    <p>Rs.499</p>
    </button>
  </div>
</div>
         </div>
         
    );
};