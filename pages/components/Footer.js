import React from "react";
import Link from "next/link";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className="bg-gray-100 dark:bg-slate-900">
      <div className="hidden"></div>

      <footer className="text-gray-600 body-font dark:text-white">
        <div className="container px-5 py-12 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900 dark:text-gray-50">
              <img
                className="w-6"
                src="/clueless_logo.png"
                alt="clueless logo"
              />
              <span className="ml-3 text-xl"><a href="https://clueless.vercel.app/">ClueLess</a></span>
            </a>
            <p className="mt-2 text-sm dark:text-gray-50">
              ClueLess Community, Learn. Grow.
            </p>
          </div>
          <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 dark:text-gray-50 tracking-widest text-sm mb-3">
                Resources
              </h2>
              <nav className="list-none mb-10 space-y-2">
                <li>
                  <a
                    href="https://github.com/HITK-2025/first-contribution"
                    target="_blank"
                    className={styles.underline}
                  >
                    First Contribution
                  </a>
                </li>
                <li>
                  <Link href="/whattodo/basic-github-commands" className={styles.underline}>
                    <a>Basic GitHub Commands</a>
                  </Link>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 dark:text-gray-50 tracking-widest text-sm mb-3">
                Pages
              </h2>
              <nav className="list-none mb-10 space-y-2">
                <li>
                  <Link href="/">
                    <a className={styles.underline}>Home</a>
                  </Link>
                </li>
                <li>
                  <Link href="/allcontributors">
                    <a className={styles.underline}>All Contibutors</a>
                  </Link>
                </li>
                <li>
                  <Link href="/whattodo">
                    <a className={styles.underline}>What to do?</a>
                  </Link>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 dark:text-gray-50 tracking-widest text-sm mb-3 ">
                Community Link
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <Link href="https://discord.gg/r5uKBGxT9T">
                    <a className={styles.underline}>Discord</a>
                  </Link>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 dark:text-gray-50 tracking-widest text-sm mb-3 ">
                Socials
              </h2>
              <nav className="list-none mb-10 space-y-2">
                <li>
                  <Link href="https://twitter.com/by_clueless">
                    <a className={styles.underline}>Twitter</a>
                  </Link>
                </li>
                <li>
                  <Link href="https://github.com/Clueless-Community">
                    <a className={styles.underline}>GitHub</a>
                  </Link>
                </li>
                <li>
                  <Link href="https://www.linkedin.com/company/clueless-tech/">
                    <a className={styles.underline}>LinkedIn</a>
                  </Link>
                </li>
              </nav>
            </div>
          </div>
        </div>
        <div className="bg-blue-500 dark:bg-slate-800">
          <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p className="text-gray-50 text-sm text-center sm:text-left">
              © 2022 ClueLess
            </p>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
              <a className="text-gray-50">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="20"
                  height="20"
                >
                  <path d="M 48.707031 16 C 48.320313 16.007813 47.976563 16.234375 47.816406 16.585938 C 47.816406 16.585938 47.257813 17.816406 46.957031 19.503906 C 43.953125 19 41.410156 18.875 40 18.875 C 38.589844 18.875 36.046875 19 33.042969 19.503906 C 32.742188 17.816406 32.183594 16.585938 32.183594 16.585938 C 32.011719 16.210938 31.628906 15.980469 31.21875 16 C 31.207031 16.003906 31.199219 16.003906 31.191406 16.003906 C 31.191406 16.003906 21.992188 16.640625 16.105469 21.316406 C 16.089844 21.332031 16.070313 21.34375 16.054688 21.359375 C 15.121094 22.210938 14.296875 23.699219 13.328125 25.8125 C 12.363281 27.929688 11.34375 30.628906 10.40625 33.6875 C 8.535156 39.804688 7 47.335938 7 54.375 C 7 54.550781 7.046875 54.722656 7.132813 54.875 C 9.179688 58.425781 12.976563 60.632813 16.574219 62.015625 C 20.167969 63.394531 23.539063 63.949219 25.152344 64 C 25.480469 64.011719 25.792969 63.859375 25.984375 63.59375 L 29.730469 58.511719 C 32.617188 59.203125 36.027344 59.6875 40 59.6875 C 43.972656 59.6875 47.382813 59.203125 50.269531 58.511719 L 54.015625 63.59375 C 54.207031 63.859375 54.519531 64.011719 54.847656 64 C 56.464844 63.949219 59.832031 63.394531 63.425781 62.015625 C 67.023438 60.632813 70.820313 58.425781 72.867188 54.875 C 72.953125 54.722656 73 54.550781 73 54.375 C 73 47.335938 71.464844 39.804688 69.59375 33.6875 C 68.65625 30.628906 67.636719 27.929688 66.671875 25.8125 C 65.703125 23.699219 64.878906 22.210938 63.949219 21.359375 C 63.929688 21.347656 63.914063 21.332031 63.894531 21.316406 C 58.007813 16.640625 48.808594 16.003906 48.808594 16.003906 C 48.773438 16 48.742188 16 48.707031 16 Z M 30.546875 18.140625 C 30.691406 18.503906 30.917969 19.003906 31.074219 19.867188 C 27.707031 20.59375 23.945313 21.835938 20.496094 23.953125 C 20.179688 24.132813 19.992188 24.472656 20 24.832031 C 20.007813 25.195313 20.207031 25.527344 20.527344 25.695313 C 20.847656 25.867188 21.234375 25.851563 21.539063 25.65625 C 28.402344 21.449219 37.03125 20.875 40 20.875 C 42.96875 20.875 51.597656 21.449219 58.460938 25.65625 C 58.765625 25.851563 59.152344 25.867188 59.472656 25.695313 C 59.792969 25.527344 59.992188 25.195313 60 24.832031 C 60.007813 24.472656 59.820313 24.132813 59.503906 23.953125 C 56.050781 21.835938 52.289063 20.59375 48.921875 19.867188 C 49.082031 19.007813 49.308594 18.503906 49.453125 18.140625 C 50.667969 18.273438 57.878906 19.125 62.613281 22.859375 C 63.019531 23.238281 63.9375 24.648438 64.851563 26.644531 C 65.769531 28.65625 66.765625 31.289063 67.679688 34.269531 C 69.480469 40.15625 70.929688 47.414063 70.972656 54.082031 C 69.25 56.882813 65.984375 58.886719 62.710938 60.144531 C 59.609375 61.339844 56.679688 61.824219 55.273438 61.929688 L 52.34375 57.953125 C 53.800781 57.515625 55.105469 57.039063 56.21875 56.558594 C 59.835938 54.984375 61.730469 53.34375 61.730469 53.34375 C 62.003906 53.109375 62.128906 52.746094 62.058594 52.394531 C 61.992188 52.042969 61.738281 51.753906 61.398438 51.636719 C 61.058594 51.523438 60.683594 51.597656 60.414063 51.839844 C 60.414063 51.839844 58.816406 53.246094 55.421875 54.722656 C 52.027344 56.199219 46.902344 57.6875 40 57.6875 C 33.097656 57.6875 27.972656 56.199219 24.578125 54.722656 C 21.183594 53.246094 19.585938 51.839844 19.585938 51.839844 C 19.410156 51.679688 19.183594 51.589844 18.949219 51.582031 C 18.523438 51.570313 18.136719 51.824219 17.984375 52.222656 C 17.832031 52.617188 17.945313 53.070313 18.269531 53.34375 C 18.269531 53.34375 20.164063 54.984375 23.78125 56.558594 C 24.894531 57.039063 26.199219 57.515625 27.65625 57.953125 L 24.726563 61.929688 C 23.320313 61.824219 20.390625 61.339844 17.292969 60.144531 C 14.019531 58.886719 10.75 56.882813 9.027344 54.082031 C 9.070313 47.414063 10.519531 40.15625 12.320313 34.269531 C 13.234375 31.289063 14.230469 28.65625 15.148438 26.644531 C 16.0625 24.648438 16.984375 23.234375 17.390625 22.859375 C 22.121094 19.125 29.332031 18.273438 30.546875 18.140625 Z M 17.78125 28.429688 L 16.957031 28.78125 L 16.78125 29.082031 L 16.746094 29.175781 L 16.847656 30.066406 L 17.621094 30.519531 L 18.449219 30.171875 L 18.625 29.863281 L 18.65625 29.769531 L 18.558594 28.878906 Z M 62.566406 28.46875 L 61.683594 28.625 L 61.28125 29.421875 L 61.34375 29.769531 L 61.375 29.863281 L 62.027344 30.480469 L 62.910156 30.324219 L 63.3125 29.523438 L 63.253906 29.175781 L 63.21875 29.082031 Z M 16.390625 32.292969 L 15.574219 32.660156 L 15.40625 32.96875 L 15.371094 33.0625 L 15.496094 33.953125 L 16.277344 34.386719 L 17.09375 34.015625 L 17.265625 33.707031 L 17.296875 33.613281 L 17.171875 32.722656 Z M 63.957031 32.339844 L 63.074219 32.472656 L 62.652344 33.265625 L 62.703125 33.613281 L 62.734375 33.707031 L 63.375 34.339844 L 64.261719 34.203125 L 64.683594 33.410156 L 64.628906 33.0625 L 64.59375 32.96875 Z M 30 36 C 26.644531 36 24 38.972656 24 42.5 C 24 46.027344 26.644531 49 30 49 C 33.355469 49 36 46.027344 36 42.5 C 36 38.972656 33.355469 36 30 36 Z M 50 36 C 46.644531 36 44 38.972656 44 42.5 C 44 46.027344 46.644531 49 50 49 C 53.355469 49 56 46.027344 56 42.5 C 56 38.972656 53.355469 36 50 36 Z M 15.105469 36.203125 L 14.3125 36.613281 L 14.15625 36.933594 L 14.128906 37.03125 L 14.300781 37.90625 L 15.109375 38.296875 L 15.90625 37.886719 L 16.058594 37.566406 L 16.082031 37.46875 L 15.914063 36.59375 Z M 65.238281 36.269531 L 64.347656 36.355469 L 63.882813 37.121094 L 63.917969 37.46875 L 63.941406 37.566406 L 64.546875 38.230469 L 65.4375 38.144531 L 65.902344 37.378906 L 65.871094 37.03125 L 65.84375 36.933594 Z M 30 38 C 32.167969 38 34 39.953125 34 42.5 C 34 45.046875 32.167969 47 30 47 C 27.832031 47 26 45.046875 26 42.5 C 26 39.953125 27.832031 38 30 38 Z M 50 38 C 52.167969 38 54 39.953125 54 42.5 C 54 45.046875 52.167969 47 50 47 C 47.832031 47 46 45.046875 46 42.5 C 46 39.953125 47.832031 38 50 38 Z M 14 40.160156 L 13.21875 40.609375 L 13.082031 40.929688 L 13.058594 41.027344 L 13.265625 41.902344 L 14.085938 42.253906 L 14.863281 41.8125 L 15.003906 41.488281 L 15.027344 41.390625 L 14.820313 40.515625 Z M 66.34375 40.242188 L 65.449219 40.292969 L 64.953125 41.039063 L 64.972656 41.390625 L 64.996094 41.488281 L 65.570313 42.175781 L 66.464844 42.125 L 66.960938 41.378906 L 66.941406 41.027344 L 66.917969 40.929688 Z M 13.066406 44.167969 L 12.308594 44.640625 L 12.179688 44.96875 L 12.160156 45.066406 L 12.402344 45.933594 L 13.234375 46.253906 L 13.996094 45.78125 L 14.125 45.453125 L 14.140625 45.355469 L 13.902344 44.488281 Z M 67.269531 44.261719 L 66.375 44.277344 L 65.851563 45 L 65.859375 45.355469 L 65.875 45.453125 L 66.421875 46.160156 L 67.320313 46.144531 L 67.84375 45.421875 L 67.839844 45.066406 L 67.820313 44.96875 Z M 12.386719 48.230469 L 11.660156 48.753906 L 11.558594 49.09375 L 11.546875 49.191406 L 11.847656 50.035156 L 12.703125 50.300781 L 13.425781 49.769531 L 13.53125 49.4375 L 13.546875 49.335938 L 13.242188 48.492188 Z M 67.050781 48.296875 L 66.472656 48.984375 L 66.453125 49.335938 L 66.46875 49.4375 L 66.964844 50.183594 L 67.859375 50.230469 L 68.433594 49.546875 L 68.453125 49.191406 L 68.441406 49.09375 L 67.945313 48.34375 Z"></path>
                </svg>
              </a>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
