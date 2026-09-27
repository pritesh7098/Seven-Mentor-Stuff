// second comp which only shows count only


import useCounter from "../Hooks/useCounter";

export default function OnlyCount() {
  const { count } = useCounter(0);

  return (
    <div>
      <h2>Only Count value is : {count}</h2>
    </div>
  );
}