import Image from 'next/image';
import React from 'react';
import movieIcon from '../public/—Pngtree—movie icon_5326849.png';
import HeaderItem from './HeaderItem';
import { AiOutlineHome } from 'react-icons/ai';
import { BiTrendingUp, BiSearchAlt2 } from 'react-icons/bi';
import { MdOutlineVerified } from 'react-icons/md';
import { BsCollectionPlay } from 'react-icons/bs';
import { CgProfile } from 'react-icons/cg';
import Link from 'next/link';

function Header() {
  return (
    <header className="m-5 flex flex-col items-center sm:flex-row sm:justify-evenly sm:items-center">
      <div className="flex justify-evenly ">
        <Link href="/"><HeaderItem title="HOME" Icon={AiOutlineHome} /></Link>
        <Link href="/trending"><HeaderItem title="TRENDING" Icon={BiTrendingUp} /></Link>
        <Link href="/verified"><HeaderItem title="VERIFIED" Icon={MdOutlineVerified} /></Link>
        <Link href="/collections"><HeaderItem title="COLLECTIONS" Icon={BsCollectionPlay} /></Link>
        <Link href="/search"><HeaderItem title="SEARCH" Icon={BiSearchAlt2} /></Link>
        <Link href="/account"><HeaderItem title="ACCOUNT" Icon={CgProfile} /></Link>
      </div>
      <div>
      <Link href="/">
        <Image src={movieIcon} width={80} height={80} />
        </Link>
      </div>
    </header>
  );
}

export default Header;
