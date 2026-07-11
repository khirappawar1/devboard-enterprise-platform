import DashboardCard from "../components/dashboard/DashboardCard";
import DeploymentTable from "../components/dashboard/DeploymentTable";
import ClusterHealth from "../components/dashboard/ClusterHealth";
import PodStatus from "../components/dashboard/PodStatus";
import ActivityLog from "../components/dashboard/ActivityLog";

export default function Dashboard(){

return(

<>

<h1>Enterprise Dashboard</h1>

<br/>

<div className="cards">

<DashboardCard title="Nodes" value="4" color="#2563eb"/>

<DashboardCard title="Pods" value="23" color="#16a34a"/>

<DashboardCard title="Deployments" value="8" color="#f59e0b"/>

<DashboardCard title="CPU" value="34%" color="#dc2626"/>

</div>

<br/>

<DeploymentTable/>

<br/>

<PodStatus/>

<br/>

<ClusterHealth/>

<br/>

<ActivityLog/>

</>

);

}