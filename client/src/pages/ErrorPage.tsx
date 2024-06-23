import { useNavigate } from "react-router-dom"
import error404 from "../assets/error404.svg";

// Component template link: https://flowbite.com/application-ui/demo/pages/404/
export default function ErrorPage(): JSX.Element  {
  const navigate = useNavigate();

  return (
    <main className="bg-muted-foreground min-h-screen flex items-center justify-center relative">
      <section className="text-center">
        <img src={error404} alt="Imagem de error 404" className="mx-auto mb-8 w-full max-w-lg"></img>
        <h1 className="text-3xl text-primary font-bold mb-4">Página não encontrada</h1>
        <p className="text-lg text-primary mb-5">Ops... parece que o link não existe.</p>
        <button 
          className="rounded-full h-10 w-min-fit px-4 py-2 bg-primary hover:bg-primary/90" 
          onClick={() => navigate("/")}
        >
          {"Voltar à página inicial"}
        </button>
      </section>
    </main>
  );
};
