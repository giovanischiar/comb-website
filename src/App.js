import logo from './logo.svg';
import indexPageScrollingIos from './res/gifs/index-page-scrolling-ios.gif';
import indexPageAndroid from './res/index-page-android.png'
import indexScreenScrollingAndroid from './res/gifs/index-screen-scrolling-android.gif'
import './App.css';
import {
  indexScreenLoggedDrawerDialogOpenedIos,
  indexScreenLoggedIos,
  indexScreenDrawerDialogOpenedIos,
  indexScreenIos,
  referAEstablishmentScreenIos,
  loginScreenIos,
  loginWithVerifierCodeIos,
  myDataScreenIos,
  onBoardingFifthScreenIos,
  onBoardingFourthScreenIos,
  onBoardingScreenIos,
  onBoardingSecondScreenIos,
  onBoardingThirdScreenIos,
  privacyPolicyScreenIos,
  profileScreenIos,
  recoverPasswordIos,
  recoverVerifierCodeIos,
  registerScreenIos,
  storeScreenAboutTabIos,
  storeScreenCashbackDialogOpenedIos,
  storeScreenContactTabIos,
  storeScreenHowToEarnCashbackDialogOpenedIos,
  storeScreenLocationTabIos,
  storeScreenScheduleDialogOpenedIos,
  walletScreenBalanceTabIos,
  walletScreenPreviousPurchasesTabIos,
  campaignStoresScreenOrderDialogOpenedIos,
  campaignStoresScreen,
  storesScreenIos,
  storesScreenOrderDialogOpenedIos,
  productScreenIos,
  productScreenHowToBuyDialogOpenedIos,
  indexScreenLocationPermissionDialogOpenedIos,
  splashScreenIos,
  referralRegulationScreenIos,
  referAStoreScreenReferralRegisteredIos,
  confirmYourAccountScreenIos
} from './res/screenshots';
import { Screenshots } from './Screenshots'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div class="title">
          <img id="comb-logo" src={ logo } width="232.05" alt="comb" />
        </div>
        <span id="description">
          <p>Comb is a cashback app that allows users to earn a percentage of their purchases back when they shop at registered stores. Users simply provide their phone number at the time of purchase to receive cashback. The accumulated credit can then be used to make purchases at other registered stores.</p>
          <p>This app was available on both iOS and Android platforms from 2019 to 2020.</p>
          <p>All images, store information, and user data are created solely to demonstrate the app's functionality.</p>
          <p>The app has been fully translated and localized into English.</p>
        </span>
      </header>
      <div id="content">
        <img src={ indexPageScrollingIos } alt="app index ios screenshot" width="232.05" height="490.8" />
        <div id="tables">
          <h1>Technologies</h1>
          <table class="fl-table">
            <tr>
              <th>Technology</th>
              <th>Purpose</th>
            </tr>
            <tr>
              <td><a href="https://www.typescriptlang.org/">Typescript</a></td>
              <td>To have type safety while coding.</td>
            </tr>
            <tr>
              <td><a href="https://reactnative.dev/">React Native</a></td>
              <td>To write one code and generate both Android and iOS apps.</td>
            </tr>
            <tr>
              <td><a href="https://redux.js.org/">Redux</a></td>
              <td>Project architecture.</td>
            </tr>
            <tr>
              <td><a href="https://github.com/reduxjs/redux-thunk/">Redux Thunk</a></td>
              <td>Redux asynchronous middleware.</td>
            </tr>
            <tr>
              <td><a href="https://reactnative.dev/docs/asyncstorage">AsyncStorage</a></td>
              <td>Store user info such as token to access the API.</td>
            </tr>
            <tr>
              <td><a href="https://github.com/michalchudziak/react-native-geolocation">GeoLocation</a></td>
              <td>Show the location of stores.</td>
            </tr>
            <tr>
              <td><a href="https://firebase.google.com/">Firebase</a></td>
              <td>App internal distribution and crash analytics.</td>
            </tr>
            <tr>
              <td><a href="https://firebase.google.com/docs/cloud-messaging">Firebase Messaging</a></td>
              <td>Send to user push notification.</td>
            </tr>
            <tr>
              <td><a href="https://github.com/DylanVann/react-native-fast-image">Fast Image</a></td>
              <td>Performant React Native image component.</td>
            </tr>
            <tr>
              <td><a href="https://github.com/wix/react-native-navigation">React Native Navigation</a></td>
              <td>A 100% native platform navigation.</td>
            </tr>
          </table> 
          <div class='title'>
            <h1>Statistics</h1>
          </div>
          <table class="fl-table">
            <tr>
              <td>Number of users at its peak</td>
              <td>300</td>
            </tr>
            <tr>
              <td>Number of establishments at its peak</td>
              <td>40</td>
            </tr>
            <tr>
              <td>Number of screens</td>
              <td>19</td>
            </tr>
          </table> 
        </div>
        <img src={ indexScreenScrollingAndroid } alt="app index android screenshot" width="232.05" height="490.8" />
      </div>
      <div class='title'>
        <h1>Screen Screenshots</h1>
      </div>
      <div class='screens'>
        <Screenshots title="Splash"                   imgSrcs={[splashScreenIos]} />
        <Screenshots title="On Boarding"              imgSrcs={[onBoardingScreenIos, onBoardingSecondScreenIos, onBoardingThirdScreenIos, onBoardingFourthScreenIos, onBoardingFifthScreenIos]} />
        <Screenshots title="Index"                    imgSrcs={[indexScreenIos, indexScreenDrawerDialogOpenedIos, indexScreenLoggedIos, indexScreenLoggedDrawerDialogOpenedIos, indexScreenLocationPermissionDialogOpenedIos]} />
        <Screenshots title="Campaign Stores"          imgSrcs={[campaignStoresScreen, campaignStoresScreenOrderDialogOpenedIos]} />
        <Screenshots title="Stores"                   imgSrcs={[storesScreenIos, storesScreenOrderDialogOpenedIos]} />
        <Screenshots title="Store"                    imgSrcs={[storeScreenAboutTabIos, storeScreenLocationTabIos, storeScreenContactTabIos, storeScreenScheduleDialogOpenedIos, storeScreenCashbackDialogOpenedIos, storeScreenHowToEarnCashbackDialogOpenedIos]} />
        <Screenshots title="Product"                  imgSrcs={[productScreenIos, productScreenHowToBuyDialogOpenedIos]} />
        <Screenshots title="Profile"                  imgSrcs={[profileScreenIos]} />
        <Screenshots title="My Data"                  imgSrcs={[myDataScreenIos]} />
        <Screenshots title="Wallet"                   imgSrcs={[walletScreenBalanceTabIos, walletScreenPreviousPurchasesTabIos]} />
        <Screenshots title="Refer a Store"            imgSrcs={[referAEstablishmentScreenIos, referAStoreScreenReferralRegisteredIos]} />
        <Screenshots title="Referral regulation"      imgSrcs={[referralRegulationScreenIos]} />
        <Screenshots title="Login"                    imgSrcs={[loginScreenIos]} />
        <Screenshots title="Recover Password"         imgSrcs={[recoverPasswordIos]} />
        <Screenshots title="Login With Verifier Code" imgSrcs={[loginWithVerifierCodeIos]} />
        <Screenshots title="Recover Verifier Code"    imgSrcs={[recoverVerifierCodeIos]} />
        <Screenshots title="Register"                 imgSrcs={[registerScreenIos]} />
        <Screenshots title="Confirm Your Phone"       imgSrcs={[confirmYourAccountScreenIos]} />
        <Screenshots title="Privacy Policy"           imgSrcs={[privacyPolicyScreenIos]} />
      </div>
    </div>
  );
}

export default App;
