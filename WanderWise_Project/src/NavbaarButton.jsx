import './NavbaarButton.css';

const NavbaarButton = () => {
  const handleClick = (e) => {
    e.preventDefault();
    const section = document.getElementById('input-section');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.log('Section input-section not found');
    }
  };

  return (
    <button className="btn1" onClick={handleClick}>
      Start Planning
    </button>
  );
};

export default NavbaarButton;