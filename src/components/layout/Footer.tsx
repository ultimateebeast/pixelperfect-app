import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-neutral-900 py-8 text-center text-sm text-gray-600 dark:text-gray-400 border-t border-gray-200 dark:border-neutral-700">
      <div className="mb-4 space-x-6">
        <Link
          href="/"
          className="hover:text-black dark:hover:text-white transition-colors duration-200">
          Home
        </Link>
        <Link
          href="/landing"
          className="hover:text-black dark:hover:text-white transition-colors duration-200">
          About
        </Link>
        <Link
          href="/privacy"
          className="hover:text-black dark:hover:text-white transition-colors duration-200">
          Privacy
        </Link>
      </div>
      <p className="text-xs text-gray-500 dark:text-gray-500">
        © {new Date().getFullYear()}{" "}
        <span className="font-semibold text-gray-700 dark:text-white">
          PixelPerfect
        </span>
        . All rights reserved.
      </p>
    </footer>
  );
}
