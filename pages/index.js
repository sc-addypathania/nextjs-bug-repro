import { StateProvider } from "../context/GlobalState";
import { Demo1 } from "../components/Demo";

export default function Home({ user }) {
  return (
    <StateProvider value={user}>
      <Demo1 />
    </StateProvider>
  );
}

export const getServerSideProps = async () => {
  let response = await fetch("https://jsonplaceholder.typicode.com/posts");
  let user = await response.json();

  return {
    props: {
      user: user[1],
    },
  };
};
