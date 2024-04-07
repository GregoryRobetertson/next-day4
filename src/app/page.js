import Link from 'next/link';
import UserData from "./components/UserData";


export default function Home() {
  return (
    <main>
  <UserData/>
  <Link href="/profile">Profile</Link>
    </main>
  );
}
