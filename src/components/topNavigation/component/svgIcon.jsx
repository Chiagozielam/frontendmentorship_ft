import './svg.css';
const SVG = ({ drawerVisible, toggleDrawer }) => {
  return (
    <svg
      width='23'
      height='23'
      viewBox='0 0 23 23'
      class='menu_button'
      onClick={toggleDrawer}
      className={`hamburger-icon  ${drawerVisible ? 'close' : ' '}`}
    >
      <path
        fill='transparent'
        stroke-width='3'
        stroke='hsl(0, 0%, 18%)'
        stroke-linecap='round'
        d='M 2 2.5 L 20 2.5'
      ></path>
      <path
        fill='transparent'
        stroke-width='3'
        stroke='hsl(0, 0%, 18%)'
        stroke-linecap='round'
        d='M 2 9.423 L 20 9.423'
        opacity='1'
      ></path>
      <path
        fill='transparent'
        stroke-width='3'
        stroke='hsl(0, 0%, 18%)'
        stroke-linecap='round'
        d='M 2 16.346 L 20 16.346'
      ></path>
    </svg>
  );
};

export default SVG;
