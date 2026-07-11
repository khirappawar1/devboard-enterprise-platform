export default function ActivityLog(){

const logs=[

"Frontend deployed successfully",

"Backend restarted",

"ArgoCD synchronized application",

"Prometheus scraped metrics",

"Grafana dashboard updated"

];

return(

<div className="card">

<h2>Recent Activity</h2>

<br/>

<ul>

{

logs.map((log,index)=>(

<li key={index}>{log}</li>

))

}

</ul>

</div>

);

}