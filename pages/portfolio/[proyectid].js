import { useRouter } from "next/router";

function PorfolioProjectPage() {
  const router = useRouter();

  console.log(router.pathname);
  console.log(router.query);

  /*enviar una solicitud a algún servidor backend
para recuperar el dato con un id de*/
    return (
        <div>
            <h1>The Porfolio Proyect Page</h1>
        </div>
    );
}

export default PorfolioProjectPage;