import { useRouter } from 'next/router';

function ClientsProyectsPage() {
  const router = useRouter();

  //console.log(router.query);

  function loadProjectHandler() {
    /*//Load data
         router.push('/clients/max/projecta');*/
    router.push({
      pathname: '/clients/[id]/[clientprojectid]',
      query: { id: 'max', clientprojectid: 'projecta' },
    });
  }

  return (
    <div>
      <h1>The Project of a Given Client</h1>
      <button onClick={loadProjectHandler}>Load Proyect A</button>
    </div>
  );
}

export default ClientsProyectsPage;
