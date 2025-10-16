import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 p-8">
      <main className="max-w-4xl mx-auto">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Next.js OpenAPI Test App
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            A simple test application demonstrating OpenAPI integration with Next.js
          </p>

          <div className="space-y-6">
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
                Features
              </h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                <li>RESTful API endpoints with OpenAPI specification</li>
                <li>Interactive Swagger UI documentation</li>
                <li>Sample CRUD operations (Users endpoint)</li>
                <li>TypeScript support</li>
                <li>Modern Next.js 14+ App Router</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
                API Endpoints
              </h2>
              <div className="space-y-3">
                <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                      GET
                    </span>
                    <code className="text-sm font-mono">/api/hello</code>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Returns a simple hello message with timestamp
                  </p>
                </div>

                <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                      GET
                    </span>
                    <code className="text-sm font-mono">/api/users</code>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Retrieves a list of sample users
                  </p>
                </div>

                <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                      POST
                    </span>
                    <code className="text-sm font-mono">/api/users</code>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Creates a new user
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
                Quick Start
              </h2>
              <div className="flex gap-4 flex-wrap">
                <Link
                  href="/api-docs"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
                >
                  View API Documentation
                </Link>
                <a
                  href="/api/openapi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-600 hover:bg-gray-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
                >
                  View OpenAPI Spec
                </a>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
