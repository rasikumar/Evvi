import { useState } from "react";
import List from "./List";
import Modal from "./Modal";

export default function Home() {
  const [selected, setSelected] = useState(null);
  return (
    <div>
      <List setSelected={setSelected}/>
      <Modal selected={selected} setSelected={setSelected} />
    </div>
  );
}
