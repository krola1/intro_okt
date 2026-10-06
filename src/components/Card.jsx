export default function Card({
  firstName,
  lastName,
  age,
  city,
  email,
  hobbies,
}) {
  return (
    <div style={{ border: "solid white" }}>
      <h1>Hei på deg</h1>
      <p>
        Navn: {firstName} {lastName}
      </p>
      <p>Alder: {age}</p>
      <p>By: {city}</p>
      <p>Mail: {email}</p>
      <p>Hobbyer:</p>
      {hobbies?.map((h) => (
        <p>{h}</p>
      ))}
    </div>
  );
}
