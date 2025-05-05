import React from 'react';

function DesignBuildTemplate({ data }) {
  return (
    <div className="container my-5">
      <header className="text-center mb-5">
        <h1 className="display-4 fw-bold text-success">{data?.title}</h1>
        <h2 className="text-muted">{data?.subtitle}</h2>
      </header>

      <div className="row mb-5">
        <div className="col-md-6 my-auto">
          <div style={{ height: '400px', overflow: 'hidden' }} className=" shadow-lg">
            <img
              src={data?.mainImage}
              alt="Main Content"
              className="img-fluid rounded shadow w-100 h-100"
            />
          </div>
        </div>
        <div className="col-md-6 my-auto">
          <div className="card h-100 border-success shadow-lg">
            <div className="card-body">
              <h3 className="card-title text-success">Key Features</h3>
              <ul className="list-group list-group-flush">
                {data?.features.map((feature, index) => (
                  <li key={index} className="list-group-item">
                    <strong className="text-success">{feature.title}</strong> {feature.description}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="row mb-5">
        <div className="col-12">
          <div className="card border-success">
            <div className="card-header bg-success text-white">
              <h3 className="mb-0">Cost Comparison</h3>
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-striped table-hover">
                  <thead className="table-success">
                    <tr>
                      <th>Type</th>
                      <th>Approx. Cost (INR per sq. ft.)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data?.costComparison.map((item, index) => (
                      <tr key={index}>
                        <td>{item.type}</td>
                        <td>{item.cost}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesignBuildTemplate;