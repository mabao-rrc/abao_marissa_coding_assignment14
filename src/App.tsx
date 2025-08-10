import React from 'react';
import './App.css';
import BasicInfo from './components/BasicInfo';
import WorkList from './components/WorkList';
import Skills from './components/Skills';
import Resources from './components/Resources';
import { basicInfo, workItems, skills, resources } from './data';

function App() {
  return (
    <main className="App" style={{ maxWidth: 960, margin: '0 auto', padding: '2rem' }}>
      <BasicInfo {...basicInfo} />

      <section>
        <h2>Work</h2>
        <WorkList items={workItems} />
      </section>

      <section>
        <h2>Skills</h2>
        <Skills {...skills} />
      </section>

      <section>
        <h2>Resources</h2>
        <Resources items={resources} />
      </section>
    </main>
  );
}

export default App;
