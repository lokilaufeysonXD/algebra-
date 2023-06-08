

const NavpageBak = () => {

  return (
    <>
      <div class="navbar navbar-dark bg-dark shadow-sm" id="NavBarShade" > 
        <div class="container">
          <a href="/" class="navbar-brand d-flex align-items-center">
            <strong>ALGEBRA</strong>
          </a>
          <h4>
            {/* <a class="nav-link fw-bold py-1 px-0 active" aria-current="page" href="../index.php">atras</a> */}
            <a class=" fw-bold py-1 px-0 active" aria-current="page" href="javascript:history.back()">atras</a>
          </h4>
        </div>
      </div>
    </>

  );

}

export default NavpageBak;
