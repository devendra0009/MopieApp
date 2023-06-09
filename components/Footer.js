import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import movieIcon from '../public/—Pngtree—movie icon_5326849.png';

function Footer() {
  return (
    <div>
      <footer class=" rounded-lg  dark:bg-[#06202A] m-4">
        <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div class="sm:flex sm:items-center sm:justify-between">
            <Link href="/" class="flex items-center mb-4 sm:mb-0">
              <Image src={movieIcon} width={80} height={80} />
              <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                Mopie
              </span>
            </Link>
            <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
              <li>
                <a href="#" class="mr-4 hover:underline md:mr-6 ">
                  About
                </a>
              </li>
              <li>
                <a href="#" class="mr-4 hover:underline md:mr-6">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" class="mr-4 hover:underline md:mr-6 ">
                  Licensing
                </a>
              </li>
              <li>
                <a href="#" class="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023{' '}
            <a href="/" class="hover:underline">
              Mopie™
            </a>
            . All Rights Reserved. <a href="https://github.com/devendra0009" target='_blank' className='text-blue-300'>Created By Davendra Bedwal</a> 
          </span>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
