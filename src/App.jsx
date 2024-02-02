import { Header} from './components/Header';
import { Post } from './Post';
import styles from './App.module.css';
import './global.css';
import { Sidebar } from './components/Sidebar';

export function App() {
  return(
    <div>
     <Header/>

     <div className={styles.wrapper}>
      <Sidebar/>
      <main>
        <Post
          author="Lucas Bittencourt"
          content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac libero nec nunc tincidunt aliquam'
        />
        <Post
          author="Lucas Bittencourt"
          content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac libero nec nunc tincidunt aliquam'
        />
      </main>
     </div>
      
    </div>
  )
}
