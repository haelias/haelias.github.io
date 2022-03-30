import RenderHomePage from './Pages/Home';
import {RecoilRoot} from 'recoil';
import {initializeApp} from 'firebase/app'
import {getFirestore, collection, getDocs} from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: "AIzaSyAKTO2p6rZ4prQHD2LcNrokeUm2Qu0tIVo",
  authDomain: "testing-project-55e9c.firebaseapp.com",
  projectId: "testing-project-55e9c",
  storageBucket: "testing-project-55e9c.appspot.com",
  messagingSenderId: "278070973064",
  appId: "1:278070973064:web:d1eeb0f7cbcd541408c53d",
  measurementId: "G-1MFYRTTXGN"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

function App() {
  return (
    <RecoilRoot>
    <RenderHomePage/>
    </RecoilRoot>
  );
}

export default App;
