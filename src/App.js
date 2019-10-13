import React from 'react';
import Header from './Header'
import Sidebar from './Sidebar';
import Content from './Content';
import Footer from './Footer';
import ControlSidebar from './ControlSidebar'
import NewContent from './NewContent'

function App() {
  return (
    <div className="wrapper">
      <Header/>
      <Sidebar />
      <NewContent />
      <Footer />
      <ControlSidebar />
    </div>
  );
}

export default App;
