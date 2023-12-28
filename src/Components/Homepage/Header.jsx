import React, { useContext, useState, useEffect } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { ThemeContext } from "../GlobalComponents/ThemeProvider";
import { BiSun, BiMoon, BiCart } from "react-icons/bi";
// import { VscAccount } from 'react-icons/vsc';
import { Col, InputGroup, FormControl } from "react-bootstrap";
import { Link } from "react-router-dom";
// import { useCart } from "react-use-cart";
import Logo from "../images/Traceworks Trademarked Logo 1 (1).png";
import Logo2 from "../images/Traceworks.png";
import { BiSearch } from "react-icons/bi";
import { GoHeart } from "react-icons/go";
import { SlHandbag } from "react-icons/sl";
import { TbSunMoon } from "react-icons/tb";

const Header = () => {
  const { theme, setThemeMode } = useContext(ThemeContext);
  const [darkMode, setDarkMode] = useState(theme);
  const [searchInput, setSearchInput] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    setThemeMode(darkMode);
    console.log(darkMode);
  }, [darkMode]);

  // const {
  //     isEmpty,
  //     totalItems,
  // } = useCart();

  return (
    <>
      <div className="flex justify-around items-center m-6 w-[95%]">
        <img src={Logo2} className="w-[300px]" />
        <div className="flex border-2 items-center rounded-lg">
          <BiSearch className="text-2xl ml-2 mt-0.5" />
          <input type="text" className="px-2 w-64" placeholder="Search..." />
          <button className="bg-[#FF6316] text-white px-6 py-2 rounded-r-lg text-sm font-bold">
            Search
          </button>
        </div>
        <div className="flex gap-4">
          <TbSunMoon className="text-2xl" />
          <span className="border-r-2"></span>
          <GoHeart className="text-2xl" />
          <span className="border-r-2"></span>
          <span className="relative">
            <SlHandbag className="text-2xl absolute" />
            <span className=" bg-[#FF6316] px-2 py-0.5 text-white rounded-full absolute -mt-5 ml-3 text-sm">
              {count}
            </span>
          </span>
          <div className="ml-6 -mt-3">
            <p className="text-[#4D5D4D] text-base">Shopping cart</p>
            <p className="text-sm font-medium">$100.00</p>
          </div>
        </div>
      </div>
      {/* <Navbar
        collapseOnSelect
        expand="md"
        variant={darkMode ? "dark" : "light"}
        className={
          darkMode ? "bg-light-black border-bottom" : "bg-light border-bottom"
        }
        style={{ width: "100%", zIndex: 100 }}
      >
        <Container className="flex mt-8">
          <Link to="/">
            <Navbar.Brand
              className={darkMode ? "text-dark-primary" : "text-light-primary"}
            >
              <img
                src={darkMode ? Logo : Logo2}
                style={{ width: "230px", height: "40px" }}
              />
            </Navbar.Brand>
          </Link>
          <Col
            xs={10}
            md={7}
            lg={6}
            xl={4}
            className="mb-3 mx-auto text-center"
          >
            <InputGroup className="mb-3" style={{ top: "20px", display:"flex", gap:"1rem" }}>
              <InputGroup.Text
                className={
                  theme
                    ? "bg-black text-dark-primary"
                    : "bg-light text-light-primary"
                }
              >
                <BiSearch size="2rem" />
              </InputGroup.Text>
              <FormControl
                placeholder="Search"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                className={`${
                  theme ? "bg-light-black text-light" : "bg-light text-black"
                } border-2 rounded-sm`}
              />
            </InputGroup>
          </Col>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Link
                to="sign-in"
                className={`nav-link ${
                  darkMode ? "text-dark-primary" : "text-light-primary"
                }`}
              >
                Sign in/ Sign Up
              </Link>
              <Nav.Link
                className={
                  darkMode ? "text-dark-primary" : "text-light-primary"
                }
                onClick={() => setDarkMode(!darkMode)}
              >
                {darkMode ? <BiSun size="1.7rem" /> : <BiMoon size="1.7rem" />}
              </Nav.Link>
              <Link
                to="/cart"
                className={`${
                  darkMode ? "text-dark-primary" : "text-light-primary"
                } d-flex align-items-center`}
              >
                <BiCart size="2rem" />
                <h6>Shoping cart</h6>
                {!isEmpty && <span style={{ position: 'relative', left: '-21px', top: '-18px'}}>{totalItems}</span>}
                <span style={{ marginLeft: !isEmpty ? '-13px': 0, fontSize:'10px',}}></span>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar> */}
    </>
  );
};

export default Header;