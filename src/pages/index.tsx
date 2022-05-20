import { useState } from "react";

export default function Home() {
  const [val, setVal] = useState<number>(0);
  return (
    <>
      <a href="https://github.com/ysuzuki-bysystems/suzuki-examples/blob/main/src/pages/index.tsx">src</a>
      <input type="text" value={val} onChange={evt => setVal(Number(evt.target.value))} />
    </>
  );
}
