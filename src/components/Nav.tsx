import { component$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';

import { MenuIcon, ChevronDownIcon } from "qwik-feather-icons";

// @ts-ignore
import logoAVIF from "~/images/logo.png?avif";
// @ts-ignore
import logoWEBP from "~/images/logo.png?webp";
// @ts-ignore
import { src as logoPlaceholder } from "~/images/logo.png?metadata";

export default component$(() => {
  return (
    <nav class="z-20 fixed top-0 w-screen my-3 pointer-events-none drop-shadow-lg">
      <div class="mx-auto max-w-7xl px-4 lg:px-6">
        <div class="relative flex h-16 items-center justify-between">
          <div class="flex flex-1 items-center justify-start">
            <Link href="/" class="transition duration-200 pointer-events-auto text-gray-300 bg-gray-900 hover:bg-gray-800 hover:text-white hover:drop-shadow-2xl border-2 border-gray-900 hover:border-gray-700 px-3 pt-2 pb-1 rounded-lg text-lg flex items-center whitespace-nowrap">
              <picture>
                <source srcSet={logoAVIF} type="image/avif" />
                <source srcSet={logoWEBP} type="image/webp" />
                <img
                  src={logoPlaceholder}
                  class="h-8"
                  alt="SimplyMC Logo"
                  loading="eager"
                  decoding="async"
                />
              </picture>
            </Link>
          </div>
          <div class="flex flex-1 items-center justify-end">
            <div class="pointer-events-auto flex gap-2 text-gray-300 whitespace-nowrap">
              <button class="cursor-pointer transition duration-200 hidden sm:flex bg-gray-900 hover:bg-gray-800 hover:text-white hover:drop-shadow-2xl border-2 border-gray-900 hover:border-gray-700 group rounded-lg text-md font-bold items-center gap-4">
                <div class="px-4 py-3 flex gap-4 items-center">
                  Gradients
                  <ChevronDownIcon class="transform group-hover:-rotate-180 transition duration-300 ease-in-out" />
                </div>
                <div class="absolute top-0 left-0 z-10 hidden group-hover:flex pt-16">
                  <div class="bg-black/50 rounded-xl px-3 py-4 flex flex-col space-y-2 font-medium whitespace-nowrap overflow-y-auto max-h-[calc(100svh-128px)]">
                    <Link href="/Gradients" class="transition duration-200 bg-gray-900 hover:bg-gray-800 hover:text-white hover:drop-shadow-2xl border-2 border-gray-900 hover:border-gray-700 px-4 py-2 rounded-lg text-md font-bold flex items-center gap-4">
                      Hex Gradients
                    </Link>
                    <Link href="/AnimTab" class="transition duration-200 bg-gray-900 hover:bg-gray-800 hover:text-white hover:drop-shadow-2xl border-2 border-gray-900 hover:border-gray-700 px-4 py-2 rounded-lg text-md font-bold flex items-center gap-4">
                      Animated TAB
                    </Link>
                    <Link href="/Presets" class="transition duration-200 bg-gray-900 hover:bg-gray-800 hover:text-white hover:drop-shadow-2xl border-2 border-gray-900 hover:border-gray-700 px-4 py-2 rounded-lg text-md font-bold flex items-center gap-4">
                      Presets
                    </Link>
                  </div>
                </div>
              </button>
              <button class="cursor-pointer transition duration-200 hidden sm:flex bg-gray-900 hover:bg-gray-800 hover:text-white hover:drop-shadow-2xl border-2 border-gray-900 hover:border-gray-700 group rounded-lg text-md font-bold items-center gap-4">
                <div class="px-4 py-3 flex gap-4 items-center">
                  Analysis
                  <ChevronDownIcon class="transform group-hover:-rotate-180 transition duration-300 ease-in-out" />
                </div>
                <div class="absolute top-0 left-0 z-10 hidden group-hover:flex pt-16">
                  <div class="bg-black/50 rounded-xl px-3 py-4 flex flex-col space-y-2 font-medium whitespace-nowrap overflow-y-auto max-h-[calc(100svh-128px)]">
                    <Link href="/SparkProfile" class="transition duration-200 bg-gray-900 hover:bg-gray-800 hover:text-white hover:drop-shadow-2xl border-2 border-gray-900 hover:border-gray-700 px-4 py-2 rounded-lg text-md font-bold flex items-center gap-4">
                      Spark Profile
                    </Link>
                    <Link href="/PaperTimings" class="transition duration-200 bg-gray-900 hover:bg-gray-800 hover:text-white hover:drop-shadow-2xl border-2 border-gray-900 hover:border-gray-700 px-4 py-2 rounded-lg text-md font-bold flex items-center gap-4">
                      Paper Timings
                    </Link>
                  </div>
                </div>
              </button>
              <Link href="/AnimTexture" class="transition duration-200 hidden bg-gray-900 hover:bg-gray-800 hover:text-white hover:drop-shadow-2xl border-2 border-gray-900 hover:border-gray-700 px-4 py-2 rounded-lg text-md font-bold md:flex items-center gap-4">
                Animated Textures
              </Link>
              <Link href="/MiscTools" class="transition duration-200 hidden bg-gray-900 hover:bg-gray-800 hover:text-white hover:drop-shadow-2xl border-2 border-gray-900 hover:border-gray-700 px-4 py-2 rounded-lg text-md font-bold lg:flex items-center gap-4">
                Misc Tools
              </Link>
              <Link href="/Privacy" class="transition duration-200 hidden bg-gray-900 hover:bg-gray-800 hover:text-white hover:drop-shadow-2xl border-2 border-gray-900 hover:border-gray-700 px-4 py-2 rounded-lg text-md font-bold lg:flex items-center gap-4">
                Privacy Policy
              </Link>
              <a href="https://github.com/AkiraDevelopment/SimplyMC" class="transition duration-200 hidden bg-gray-900 hover:bg-gray-800 hover:text-white hover:drop-shadow-2xl border-2 border-gray-900 hover:border-gray-700 px-4 py-2 rounded-lg text-md font-bold xl:flex items-center gap-4">
                GitHub
              </a>
              <a href="https://discord.simplymc.art/" class="transition duration-200 hidden bg-gray-900 hover:bg-gray-800 hover:text-white hover:drop-shadow-2xl border-2 border-gray-900 hover:border-gray-700 px-4 py-2 rounded-lg text-md font-bold xl:flex items-center gap-4">
                Discord
              </a>
              <button id="mobile-menu-button" onClick$={() => document.getElementById('mobile-menu')?.classList.toggle("hidden")} class="transition duration-200 bg-gray-900 hover:bg-gray-800 hover:text-white hover:drop-shadow-2xl border-2 border-gray-900 hover:border-gray-700 px-4 py-2 rounded-lg text-md font-bold flex xl:hidden items-center gap-4">
                <MenuIcon/>
              </button>
            </div>
          </div>
        </div>

        <div id="mobile-menu" class="pointer-events-auto space-y-4 py-4 px-3 justify-center items-center bg-black/50 rounded-lg mt-2 hidden">
          <Link href="/AnimTab" class="transition duration-200 bg-gray-900 hover:bg-gray-800 hover:text-white hover:drop-shadow-2xl border-2 border-gray-900 hover:border-gray-700 px-4 py-2 rounded-lg text-md font-bold flex sm:hidden items-center gap-4">
            Hex Gradients
          </Link>
          <Link href="/AnimTab" class="transition duration-200 bg-gray-900 hover:bg-gray-800 hover:text-white hover:drop-shadow-2xl border-2 border-gray-900 hover:border-gray-700 px-4 py-2 rounded-lg text-md font-bold flex sm:hidden items-center gap-4">
            Animated TAB Gradients
          </Link>
          <Link href="/Presets" class="transition duration-200 bg-gray-900 hover:bg-gray-800 hover:text-white hover:drop-shadow-2xl border-2 border-gray-900 hover:border-gray-700 px-4 py-2 rounded-lg text-md font-bold flex sm:hidden items-center gap-4">
            Gradient Presets
          </Link>
          <Link href="/SparkProfile" class="transition duration-200 bg-gray-900 hover:bg-gray-800 hover:text-white hover:drop-shadow-2xl border-2 border-gray-900 hover:border-gray-700 px-4 py-2 rounded-lg text-md font-bold flex sm:hidden items-center gap-4">
            Spark Profile Analysis
          </Link>
          <Link href="/PaperTimings" class="transition duration-200 bg-gray-900 hover:bg-gray-800 hover:text-white hover:drop-shadow-2xl border-2 border-gray-900 hover:border-gray-700 px-4 py-2 rounded-lg text-md font-bold flex sm:hidden items-center gap-4">
            Paper Timings Analysis
          </Link>
          <Link href="/AnimTexture" class="transition duration-200 bg-gray-900 hover:bg-gray-800 hover:text-white hover:drop-shadow-2xl border-2 border-gray-900 hover:border-gray-700 px-4 py-2 rounded-lg text-md font-bold flex md:hidden items-center gap-4">
            Animated Textures
          </Link>
          <Link href="/MiscTools" class="transition duration-200 bg-gray-900 hover:bg-gray-800 hover:text-white hover:drop-shadow-2xl border-2 border-gray-900 hover:border-gray-700 px-4 py-2 rounded-lg text-md font-bold flex lg:hidden items-center gap-4">
            Misc Tools
          </Link>
          <Link href="/Privacy" class="transition duration-200 bg-gray-900 hover:bg-gray-800 hover:text-white hover:drop-shadow-2xl border-2 border-gray-900 hover:border-gray-700 px-4 py-2 rounded-lg text-md font-bold flex lg:hidden items-center gap-4">
            Privacy Policy
          </Link>
          <a href="https://github.com/AkiraDevelopment/SimplyMC" class="transition duration-200 bg-gray-900 hover:bg-gray-800 hover:text-white hover:drop-shadow-2xl border-2 border-gray-900 hover:border-gray-700 px-4 py-2 rounded-lg text-md font-bold flex xl:hidden items-center gap-4">
            GitHub
          </a>
          <a href="https://discord.simplymc.art/" class="transition duration-200 bg-gray-900 hover:bg-gray-800 hover:text-white hover:drop-shadow-2xl border-2 border-gray-900 hover:border-gray-700 px-4 py-2 rounded-lg text-md font-bold flex xl:hidden items-center gap-4">
            Discord
          </a>
        </div>
      </div>
    </nav>
  );
});