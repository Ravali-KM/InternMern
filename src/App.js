import './App.css';
//import {useMediaQuery} from 'react-responsive';
import img2 from "./images/img2.png";
import img1 from"./images/img1.png";
// const Example = () => {
//   const isDesktopOrLaptop = useMediaQuery({
//   query: '(min-width: 1224px)'
//   })
//   const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
//   const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
//   const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
//   const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })
// }
function App() {
  return (
    <div className="App" >
      <div class="flex-container">
        <div class="flex-child">
        <div class="info1">
            <h3>CHOOSE FROM DIFFERENT STORES</h3>
            <h1>Laundry Stores Near You</h1>
            <dl>
              <dt>FEATURE NAME</dt>
              <dd>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</dd>
              <dt>FEATURE NAME</dt>
              <dd>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</dd>
              <dt>FEATURE NAME</dt>
              <dd>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</dd>
            </dl>
          </div>
        </div>
        <div class="flex-child">
          <div class="img1">
            <img src={img1}  alt="phone app with visa card"></img>
          </div>
        </div>
      </div>
      <div class="flex-container">
        <div class="flex-child">
          <div class="img2">
            <img src={img2}  alt="phone app with visa card"></img>
          </div>
        </div>
        <div class="flex-child">
          <div class="info2">
            <h3>PAYMENT</h3>
            <h2>Quick Payment</h2>
            <h4>Easy payment mode</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            <ul>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
            </ul>
          </div>
        </div>
        </div>
    </div>
  );
}

export default App;
