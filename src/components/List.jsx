import Card from "./Card";

export default function List({ people }) {
  return (
    <>
      {people.map((person, i) => (
        <Card key={i} {...person} />
      ))}
    </>
  );
}
