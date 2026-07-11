import "../../styles/DashboardCard.css";

export default function DashboardCard({

title,

value,

color

}){

return(

<div className="dashboard-card">

<p>{title}</p>

<h1 style={{color}}>{value}</h1>

</div>

);

}