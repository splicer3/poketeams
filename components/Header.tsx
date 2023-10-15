"use client";
import useAuthModal from "@/hooks/useAuthModal";
import { useUser } from "@/hooks/useUser";
import { links } from "@/lib/data";
import clsx from "clsx";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";

const Header = () => {
  const pathname = usePathname();
  const { user } = useUser();
  const authModal = useAuthModal();

  const handleLogIn = () => {
    if (!user) {
      return authModal.onOpen();
    }
  };

  useEffect(() => {
    console.log(pathname);
  }, [pathname]);
  return (
    <header className="z-[99] relative">
      <motion.div
        className="
                    fixed
                    top-0
                    left-1/2
                    h-[6.5rem]
                    w-full
                    border
                    border-white
                    border-opacity-40
                    bg-white/80
                    dark:bg-gray-900/80
                    dark:border-gray-800/40
                    shadow-lg
                    shadow-black/[0.03]
                    backdrop-blur-[0.5rem]
                    sm:top-6
                    sm:h-[3.25rem]
                    sm:w-[40rem]
                    sm:rounded-full
                    "
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      ></motion.div>
      <nav
        className="
                            flex
                            flex-col
                            items-center
                            justify-between
                            gap-1
                            sm:gap-0
                            sm:flex-row
                            fixed
                            sm:w-[37rem]
                            top-[0.15rem]
                            left-1/2
                            h-12
                            -translate-x-1/2
                            py-2
                            sm:top-[1.7rem]
                            sm:h-[initial]
                            sm:py-0
                            "
      >
        <motion.div
          className="flex gap-2"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          <Image
            src={
              "https://upload.wikimedia.org/wikipedia/commons/5/53/Pok%C3%A9_Ball_icon.svg"
            }
            alt="Pokeball"
            width={40}
            height={40}
          />
          <h1 className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            PokeTeams
          </h1>
        </motion.div>
        <ul
          className="
                                    flex
                                    w-[22rem]
                                    flex-wrap
                                    items-center
                                    justify-center
                                    gap-y-1
                                    text-[0.9rem]
                                    font-medium
                                    text-gray-500
                                    sm:w-[initial]
                                    sm:flex-nowrap
                                    sm:gap-5
                                    "
        >
          {links.map((link) => {
            if (link.url === "/teams" && !user) {
              return (
                <motion.li
                  className="h-3/4 flex items-center justify-center relative"
                  key={link.url}
                  initial={{ y: -100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                >
                  <button
                    className={clsx(
                      "flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:hover:text-gray-300",
                      {
                        "text-gray-950 dark:text-gray-200":
                          pathname === link.url,
                      },
                    )}
                    onClick={handleLogIn}
                  >
                    Log in
                    {pathname === link.url && (
                      <motion.span
                        className="bg-gray-100/70 dark:bg-gray-800/70 rounded-full absolute inset-0 -z-10"
                        layoutId="activeSection"
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30,
                        }}
                      ></motion.span>
                    )}
                  </button>
                </motion.li>
              );
            } else {
              return (
                <motion.li
                  className="h-3/4 flex items-center justify-center relative"
                  key={link.url}
                  initial={{ y: -100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                >
                  <Link
                    className={clsx(
                      "flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:hover:text-gray-300",
                      {
                        "text-gray-950 dark:text-gray-200":
                          pathname === link.url,
                      },
                    )}
                    href={link.url}
                  >
                    {link.name}
                    {pathname === link.url && (
                      <motion.span
                        className="bg-gray-100/70 dark:bg-gray-800/70 rounded-full absolute inset-0 -z-10"
                        layoutId="activeSection"
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30,
                        }}
                      ></motion.span>
                    )}
                  </Link>
                </motion.li>
              );
            }
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
