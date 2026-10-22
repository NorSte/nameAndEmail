import "./App.css";

export default function App() {
  return (
    <div>
      <>
        <ContactButton value={0} name={"Taylor"} />
      </>
      <hr />
      <>
        <Input id="name" label="Name: " />
      </>
      <br />
      <>
        <Input id="email" label="Mail: " />
      </>
      <br />
      <>
        <button>Save</button>
        <button>Reset</button>
      </>
    </div>
  );
}

function ContactButton({ value, name }) {
  return <button value={value}>{name}</button>;
}

function Input({ id, label }) {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input id={id} data-testid={id}></input>
    </>
  );
}
