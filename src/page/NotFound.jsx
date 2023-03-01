import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div class="grid h-screen px-4 place-content-center">
      <div class="text-center">
        <h1 class="font-black text-gray-700 text-9xl">404</h1>

        <p class="text-2xl font-bold tracking-tight text-gray-300 sm:text-4xl">
          Uh-oh!
        </p>

        <p class="mt-4 text-gray-400">We can't find that page.</p>

        <Link
          to="/"
          class="inline-block px-5 py-3 mt-6 text-sm font-medium text-black bg-green-500 rounded-full hover:bg-green-700 focus:outline-none focus:ring"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
