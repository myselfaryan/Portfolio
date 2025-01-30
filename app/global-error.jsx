"use client";

import Error from "next/error";

export default function GlobalError({ error }) {
  return (
    <html>
      <body>
        <div className="flex min-h-screen flex-col items-center justify-center p-4">
          <h1 className="text-2xl font-bold mb-4">Something went wrong!</h1>
          <p className="text-gray-600 mb-4">{error.message}</p>
          <button
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}
