import { fetchData } from "@/lib/data";
import { Suspense } from "react";

export default async function DataDisplay({
  id,
  include,
}: {
  id: string | undefined;
  include: string | undefined;
}) {
  const data = await fetchData(id, include);
  return <div>{JSON.stringify(data, undefined, 2)}</div>;
}
