export default function PodStatus() {

const pods=[

{
name:"frontend-5d7fd",
namespace:"devboard",
status:"Running"
},

{
name:"backend-4hj89",
namespace:"devboard",
status:"Running"
},

{
name:"postgres-0",
namespace:"database",
status:"Running"
},

{
name:"grafana-85d",
namespace:"monitoring",
status:"Running"
}

];

return(

<div className="card">

<h2>Pod Status</h2>

<br/>

<table width="100%">

<thead>

<tr>

<th>Pod</th>

<th>Namespace</th>

<th>Status</th>

</tr>

</thead>

<tbody>

{

pods.map((pod)=>(

<tr key={pod.name}>

<td>{pod.name}</td>

<td>{pod.namespace}</td>

<td style={{color:"green"}}>{pod.status}</td>

</tr>

))

}

</tbody>

</table>

</div>

);

}