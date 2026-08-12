/*function DashboardCard({
  title,
  value,
  color
}) {

  return (

    <div className="col-md-3">

      <div
        className="card shadow border-0 p-3"
        style={{
          borderLeft: `5px solid ${color}`
        }}
      >

        <h6>{title}</h6>

        <h3>{value}</h3>

      </div>

    </div>
  );
}

export default DashboardCard;*/

function DashboardCard({
  title,
  value,
  icon
}) {

  return (

    <div
      className="glass-card p-4 shadow-sm"
      style={{
        borderLeft: "4px solid #FBBF24",
        transition: "0.3s"
      }}
    >

      <div
        className="d-flex justify-content-between align-items-center"
      >

        <div>

          <h5
            className="text-muted"
          >
            {title}
          </h5>

          <h2
            className="fw-bold"
          >
            {value}
          </h2>

        </div>

        <div
          style={{
            fontSize: "35px",
            color: "#FBBF24"
          }}
        >
          {icon}
        </div>

      </div>

    </div>
  );
}

export default DashboardCard;