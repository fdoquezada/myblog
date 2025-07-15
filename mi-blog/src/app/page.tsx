import Link from 'next/link';
import { getSortedPostsData } from '../lib/post';

export default async function HomePage() {
  const allPostsData = await getSortedPostsData();

  return (
    <main>
      <h1>Bienvenido a mi blog</h1>
      <ul>
        {allPostsData.map(({ id, title, date }) => (
          <li key={id}>
            <Link href={`/posts/${id}`}>{title}</Link>
            <br />
            <small>{date}</small>
          </li>
        ))}
      </ul>
    </main>
  );
}
