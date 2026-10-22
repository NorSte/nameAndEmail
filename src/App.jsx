import "./App.css";

export default function App() {
  return (
    <div>
      <h1>Name and Email Practice</h1>
      <>
        <ContactButton name={"Taylor"} />
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

function ContactButton({ name }) {
  return <button>{name}</button>;
}

function Input({ id, label }) {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input id={id} data-testid={id}></input>
    </>
  );
}
