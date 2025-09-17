// App: Fetches users and renders a responsive grid of modern cards
import axios from "axios";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  // Local state for fetched users
  const [users, setUsers] = useState([]);

  // Fetch once on mount
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      setUsers(res.data);
    });
  }, []);

  return (
    <div className="app-container">
      {/* Page header */}
      <header className="app-header">
        <h1 className="app-title">Name List</h1>
        <p className="app-subtitle">Clean cards • Responsive grid • Smooth hover</p>
      </header>

      {/* Responsive grid of user cards */}
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
