function NotFound() {
  return (
    <section className="w-full h-screen px-4 py-32 mx-auto max-w-7xl">
      <div className="w-full mx-auto lg:w-1/3">
        <p className="mt-5 mb-3 text-xl font-bold text-gray-300 md:text-2xl">
          Página no encontrada (404)
        </p>
        <p className="mb-3 text-base font-medium text-gray-700">
          Es posible que la página que está buscando se haya movido o ya no
          exista. Regrese a nuestra{" "}
          <a href="/" className="underline text-green-500">
            página de inicio
          </a>
          , o eche un vistazo a una de las secciones a continuación.
        </p>
      </div>
    </section>
  );
}

export default NotFound;
