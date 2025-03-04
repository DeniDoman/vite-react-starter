import { useEffect, useState } from 'react';

export default function App() {
  const [name, setName] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('.data/me');

        if (!response.ok) {
          throw new Error('Failed to fetch name');
        }

        const data = await response.json();
        setName(data.name);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An unknown error occurred');
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!name) {
    return <p>Loading...</p>;
  }

  return <p>Hello, {name}</p>;
}