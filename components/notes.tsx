'use client';

import { useEffect, useState } from 'react';
import { createClient } from '../utils/supabase/client';

interface Note {
  id: string;
  created_at: string;
  note: string;
}

export function Notes() {
  const [data, setData] = useState<Note[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const supabase = createClient();
      const { data, error } = await supabase.from('notes').select('*');
      if (error) console.error(error);
      else setData(data || []);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Notes Data</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
