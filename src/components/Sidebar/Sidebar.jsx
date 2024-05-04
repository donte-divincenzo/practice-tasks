import styles from './Sidebar.module.scss'
// import SkillBar from 'react-skillbars';

// const skills = [
//   { type: 'Java', level: 85 },
//   { type: 'Javascript', level: 75 },
// ];

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A obcaecati veritatis nostrum!</p>
      {/* <SkillBar className={styles.bar} skills={skills} height={10} /> */}
    </div>
  )
}

export default Sidebar