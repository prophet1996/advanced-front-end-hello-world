import { useRouter } from "next/router";

function FooId() {
  const {
    query: { id },
  } = useRouter();
  // i got this from next!!!!
  return <>{id}</>;
}

export default FooId;
