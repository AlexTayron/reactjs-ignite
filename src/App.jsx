import { Header} from './components/Header';
import { Post } from './Post';
import './global.css';

export function App() {
  return(
    <div>
     <Header/>
      <Post
        author="Alex Tayron"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nesciunt quod veniam deserunt voluptatum facilis quibusdam reiciendis, porro, temporibus corporis id minus ut nobis accusamus pariatur in non laboriosam ipsa."
      />
      <Post
        author="Jhon Doe"
        content="Texto Legal"
      />
    </div>
  )
}
