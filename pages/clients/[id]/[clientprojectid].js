import { useRouter } from 'next/router';

function SelectedClientProyectPage() {
  const router = useRouter();

  /* console.log(router.pathname);
  console.log(router.query);
 */
  return (
    <div>
      <h1>The Proyect Page for a Specific Project for a Selected Client</h1>
    </div>
  );
}

export default SelectedClientProyectPage;
