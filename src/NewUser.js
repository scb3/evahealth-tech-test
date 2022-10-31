import "./NewUser.css";
import { useState } from "react";

const NewUser = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");  
  const [age, setAge] = useState("");
  const [message, setMessage] = useState("");

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch(
        "https://mockend.com/AdamClements/coding-test/users",
        {
          method: "POST",
          body: JSON.stringify({
            firstName: firstName,
            lastName: lastName,
            email: email,
            age: age,
          }),
        }
      );
      let resJson = await res.json();
      if (res.status === 201) {
        setFirstName("");
        setLastName("");
        setEmail("");
        setAge("");
        setMessage("User created successfully");
      } else {
        setMessage("Some error occurred");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={firstName}
          placeholder="first name"
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          type="text"
          value={lastName}
          placeholder="last name"
          onChange={(e) => setLastName(e.target.value)}
        />
        <input
          type="text"
          value={email}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          value={age}
          placeholder="Age"
          onChange={(e) => setAge(e.target.value)}
        />

        <button type="submit">Create</button>

        <div className="message">{message ? <p>{message}</p> : null}</div>
      </form>
    </div>
  );
};

export default NewUser;
