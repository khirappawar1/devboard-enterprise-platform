const deployments=[

{

name:"frontend",

status:"Running",

replicas:2

},

{

name:"backend",

status:"Running",

replicas:2

},

{

name:"postgres",

status:"Running",

replicas:1

}

];

export default function DeploymentTable(){

return(

<div className="card">

<h2>Recent Deployments</h2>

<br/>

<table width="100%">

<thead>

<tr>

<th>Name</th>

<th>Status</th>

<th>Replicas</th>

</tr>

</thead>

<tbody>

{

deployments.map((app)=>(

<tr key={app.name}>

<td>{app.name}</td>

<td style={{color:"green"}}>{app.status}</td>

<td>{app.replicas}</td>

</tr>

))

}

</tbody>

</table>

</div>

);

}