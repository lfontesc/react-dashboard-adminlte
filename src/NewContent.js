import React from 'react';


function Content() {
  return (
<div className="content-wrapper">
  {/* Content Header (Page header) */}
  <section className="content-header">
    <h1>
      Dashboard
      <small>Control panel</small>
    </h1>
    <ol className="breadcrumb">
      <li><a href="#"><i className="fa fa-dashboard" /> Home</a></li>
      <li className="active">Dashboard</li>
    </ol>
  </section>
  {/* Main content */}
  <section className="content">
    {/* Small boxes (Stat box) */}
    <div className="row">

    </div>
    {/* /.row */}
    {/* Main row */}
    {/* /.row (main row) */}
  </section>
  {/* /.content */}
</div>

  );
}

export default Content;
