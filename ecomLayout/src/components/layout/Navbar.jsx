import './Navbar.css'

 let Navbar = () => {
    return(
 <header className="header">
  <span>
    <h1>AL</h1>
  </span>
  <nav>
    <ul id="set">
      <li>
        <a href="#home">Home</a>
      </li>
      <li>
        <a href="#About">About</a>
      </li>
      <li>
        <a href="">Services</a>
      </li>
      <li>
        <a href="">Contact</a>
      </li>
      <li className="btn">
        <a href="web_login.html">Login</a>{" "}
      </li>
    </ul>
  </nav>
</header> 
    )
}


export default Navbar;