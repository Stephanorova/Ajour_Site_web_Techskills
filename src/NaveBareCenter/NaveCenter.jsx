import"./index.css";



const Navbar = () => {
  
   
  return (
    <nav className='nav'>
      <div className='container'>
        <div className='topBar'>
          <div className='logo'>
            <span className='groupText'></span>
          </div>
          <div className='topBarRight'>
            <div className='socialIcons'>
             <span><i class="fa fa-phone" ></i>(261) 38 46  503 32</span>
              <span><i class="fa fa-envelope" ></i>administration@tech-skills.co</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
