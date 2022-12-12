import React from 'react';

import { Search, Status } from './components';

export default function Home() {
  return (
    <main>
      <h1 className="bg-gradient-to-r from-indigo-900 to-rose-500 bg-clip-text text-8xl font-extrabold text-transparent">
        Discover the <br />
        Casper Blockchain.
      </h1>
      <Search />
      <div className="grid grid-flow-col grid-rows-2">
        <Status />
        <Status />
        <Status />
        <Status />
      </div>
    </main>
  );
}
