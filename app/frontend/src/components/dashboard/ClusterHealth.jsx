export default function ClusterHealth(){

return(

<div className="card">

<h2>Cluster Health</h2>

<br/>

<table>

<tbody>

<tr>

<td>API Server</td>

<td style={{color:"green"}}>Healthy</td>

</tr>

<tr>

<td>Scheduler</td>

<td style={{color:"green"}}>Healthy</td>

</tr>

<tr>

<td>Controller Manager</td>

<td style={{color:"green"}}>Healthy</td>

</tr>

<tr>

<td>CoreDNS</td>

<td style={{color:"green"}}>Running</td>

</tr>

</tbody>

</table>

</div>

);

}