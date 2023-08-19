import { useRouter } from "next/router";
export default function blogerrname() {
  const router = useRouter();
  const {blogerrname} = router.query;
  return (
    <div>
      <h1>All from{blogerrname}</h1>
    </div>
  );
}
