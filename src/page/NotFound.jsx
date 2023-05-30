import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div class="h-screen grid place-content-center px-4">
      <div class="text-center">
        <h1 class="font-black text-gray-600 text-9xl">404</h1>
        <p class="text-2xl font-bold tracking-tight text-gray-300 sm:text-4xl">
          Oops! no encontramos lo que buscas
        </p>
        <Link
          to="/"
          class="inline-block px-5 py-3 mt-6 text-sm font-medium text-black bg-[#09e507] rounded-full hover:bg-[#09e507]/50 focus:outline-none focus:ring"
        >
          Volver a Inicio
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
