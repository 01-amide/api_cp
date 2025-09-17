import axios from "axios";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      setUsers(res.data);
    });
  }, []);

  return (
    <div className="app-container">
      <header className="app-header">
        <h1 className="app-title">Name List</h1>
        <p className="app-subtitle">Clean cards • Responsive grid • Smooth hover</p>
      </header>

      <main className="grid-container">
        {users.map((item) => (
          <article key={item.id} className="card">
            <div className="avatar" aria-hidden="true">
              {item.name?.charAt(0)}
            </div>
            <h2 className="card-title">{item.name}</h2>
            <ul className="card-meta">
              <li>{item.email}</li>
              <li>{item.phone}</li>
              <li>
                <a className="card-link" href={`https://${item.website}`} target="_blank" rel="noreferrer">
                  {item.website}
                </a>
              </li>
            </ul>
            {item.company && (
              <div className="company">
                <span className="company-name">{item.company.name}</span>
                <span className="company-tag">{item.company.bs}</span>
              </div>
            )}
          </article>
        ))}
      </main>
    </div>
  );
}

export default App;
