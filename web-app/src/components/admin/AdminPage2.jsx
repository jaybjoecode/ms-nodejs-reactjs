import { useEffect, useState } from 'react';
import axios from 'axios';

export default function AdminPage2() {
  const [isAdmin, setIsAdmin] = useState(false);

  return (
    <div>
      <h2>Admin2 SubPage</h2>
      {true ? <p>Welcome, to ADMIN 2</p> : <p>Access denied. You do not have ADMIN permissions.</p>}
    </div>
  );
}
