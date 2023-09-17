import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import movieIcon from '../public/—Pngtree—movie icon_5326849.png';
import HeaderItem from './HeaderItem';
import { AiOutlineHome } from 'react-icons/ai';
import { BiTrendingUp, BiSearchAlt2, BiLogInCircle } from 'react-icons/bi';
import { MdOutlineVerified } from 'react-icons/md';
import { FiUserPlus } from 'react-icons/fi';
import { BsCollectionPlay } from 'react-icons/bs';
import { CgProfile } from 'react-icons/cg';
import Link from 'next/link';

function Header() {
  const [isUser, setIsUser] = useState(false);
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if(user) setIsUser(true);
  },[]);
  return (
    <header className="m-5 flex flex-col items-center sm:flex-row sm:justify-evenly sm:items-center">
      <div className="flex justify-evenly  ">
        <Link href="/">
          <HeaderItem title="HOME" Icon={AiOutlineHome} />
        </Link>
        <Link href="/trending">
          <HeaderItem title="TRENDING" Icon={BiTrendingUp} />
        </Link>
        {/* <Link href="/verified"><HeaderItem title="VERIFIED" Icon={MdOutlineVerified} /></Link> */}
        <Link href="/collections">
          <HeaderItem title="WATCH LATER" Icon={BsCollectionPlay} />
        </Link>
        <Link href="/search">
          <HeaderItem title="SEARCH" Icon={BiSearchAlt2} />
        </Link>
        {isUser ? (
          <Link href="/profile">
            <HeaderItem title="PROFILE" Icon={CgProfile} />
          </Link>
        ) : (
          <>
          <Link href="/account/login">
            <HeaderItem title="LOGIN" Icon={BiLogInCircle} />
          </Link>
          <Link href="/account/register">
            <HeaderItem title="REGISTER" Icon={FiUserPlus} />
          </Link>
          </>
        )}
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
