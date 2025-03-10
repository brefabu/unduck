import React, { useState } from 'react';

import { bangs } from '../../components/Bang';

const LS_DEFAULT_BANG = localStorage.getItem('default-bang') ?? 'g';
const defaultBang = bangs.find(b => b.t === LS_DEFAULT_BANG);

const Unduck = () => {
  const [query, setQuery] = useState('');

  const search = () => {
    getBangRedirectUrl(query);
  };

  const getBangRedirectUrl = (searchQuery: any) => {
    const match = searchQuery.match(/!(\S+)/i);
    const bangCandidate = match?.[1]?.toLowerCase();
    const selectedBang = bangs.find(b => b.t === bangCandidate) ?? defaultBang;

    const cleanQuery = searchQuery.replace(/!\S+\s*/i, '').trim();
    const searchUrl = selectedBang?.u.replace('{{{s}}}', encodeURIComponent(cleanQuery).replace(/%2F/g, '/'));

    window.location.href = String(searchUrl);
  };

    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '60vh' }}>
        <div className="content-container">
          <h1>Search with us!</h1>
          <p>
            Use <strong>!</strong> to search with your favorite search engine.
          </p>
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: "1rem"}}>
            <input
              type="text"
              className="url-input"
              placeholder="Search something with !g"
              onChange={(e) => setQuery(e.target.value)}
              value={query}
            />
            <div className="button" onClick={search}>Search</div>
          </div>
        </div>
      </div>
    );
};

export default Unduck;
