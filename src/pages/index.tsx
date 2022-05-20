import { useState } from "react";

export default function Home() {
  const [val, setVal] = useState<number>(0);
  return (
    <input type="text" value={val} onChange={evt => setVal(Number(evt.target.value))} />
  );
}
