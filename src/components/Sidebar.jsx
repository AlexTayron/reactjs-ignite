import styles from './Sidebar.module.css'

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
        <img 
            className={styles.cover} 
            src="https://images.unsplash.com/photo-1605379399642-870262d3d051?q=80&w=1806&auto=format&fit=crop&w=500&q=50" 
        />
        <div className={styles.profile}>
    <strong>Alex Tayron</strong>
    <span>Web developer</span>
        </div>
        <footer>
            <a href="#">
                Editar seu perfil
            </a>
        </footer>
    </aside>
  );
}