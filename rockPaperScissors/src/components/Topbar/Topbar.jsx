import "./Topbar.css";

const Topbar = () => {

  function handleChangeMode(e){
    const checked = e.target.checked;
    if(checked){
      document.querySelector('html').dataset.theme = 'dark'
    }else{
      document.querySelector('html').dataset.theme = 'light'
    }
  }

  return (
    <header>
      <div className="logo">
        <a href="#">
        <img
          src="https://cdn-icons-png.flaticon.com/512/6729/6729732.png"
          alt="logo"
        />
        </a>
      </div>
      <div>
        <label className="ui-switch">
          <input type="checkbox" onChange={handleChangeMode} />
          <div className="slider">
            <div className="circle"></div>
          </div>
        </label>
      </div>
    </header>
  );
};

export default Topbar;
