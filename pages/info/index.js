import style from '../../styles/Info.module.css'
import Link from 'next/link';

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();

  return {
    props: { info: data }
  }
}
const List = ({ info }) => {
  return (
    <div>
      <h1>List</h1>
      { info.map(user => (
        <Link href={`/info/${user.id}`} key={user.id}>
          <a className={style.info}>
            <h3>{ user.name }</h3>
          </a>
        </Link>
      )) }
    </div>
  );
}
 
export default List;