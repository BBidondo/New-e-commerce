import {React} from "react";
import logo from "../../components/assets/images/logo.png";
import { Link } from "react-router-dom";
import { LoginButton } from "../../components/Auth0/Login.js";
import { LogoutButton } from "../../components/Auth0/Logout.js";
import { useAuth0 } from "@auth0/auth0-react";


const Search = ({ CartItem }) => {
  // fixed Header
  window.addEventListener("scroll", function () {
    const search = document.querySelector(".search");
    search.classList.toggle("active", window.scrollY > 100);
  });

  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();
 


  return (
    <>
      <section className="search">
        <div className="container c_flex">
          <div className="logo width ">
            <img src={logo} alt="" />
          </div>

          <div className="search-box f_flex">
            <i className="fa fa-search"></i>
            <input type="text" placeholder="Busca y presiona enter..." />
            <span>Productos</span>
          </div>

          <div className="icon f_flex width">
        {isAuthenticated ? (
          <LogoutButton />
        ) : (
          <i className="fa fa-user icon-circle" onClick={() => loginWithRedirect()}></i>
        )}

            <div className="cart">
              <Link to="/cart">
                <i className="fa fa-shopping-bag icon-circle"></i>
                <span>{CartItem.length === 0 ? "" : CartItem.length}</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Search;
