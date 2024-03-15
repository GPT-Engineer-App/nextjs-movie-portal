# nextjs-movie-portal

/**
 * v0 by Vercel.
 * @see https://v0.dev/t/UFCDagLpSrO
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CardContent, Card } from "@/components/ui/card"

export default function Component() {
  return (
    <div className="bg-[#0c0e16] text-white">
      <nav className="flex justify-between px-4 py-2">
        <div className="flex items-center space-x-4">
          <MenuIcon className="text-white h-6 w-6" />
          <ul className="flex space-x-2">
            <li>
              <Link className="block px-2 py-1 hover:text-gray-300" href="#">
                ME
              </Link>
            </li>
            <li>
              <Link className="block px-2 py-1 hover:text-gray-300" href="#">
                MOVIES
              </Link>
            </li>
            <li>
              <Link className="block px-2 py-1 hover:text-gray-300" href="#">
                SOPLS
              </Link>
            </li>
            <li>
              <Link className="block px-2 py-1 hover:text-gray-300" href="#">
                PRODIES
              </Link>
            </li>
            <li>
              <Link className="block px-2 py-1 hover:text-gray-300" href="#">
                STOR
              </Link>
            </li>
            <li>
              <Link className="block px-2 py-1 hover:text-gray-300" href="#">
                SOCCER
              </Link>
            </li>
          </ul>
        </div>
        <FlagIcon className="h-8 w-8" />
      </nav>
      <main className="px-4 py-20">
        <section className="text-center">
          <h1 className="text-5xl font-bold">KIO CYR</h1>
          <p className="mt-4 text-lg">
            Some prose to be his actor.
            <br />
            Won the acting this asserting to be his acting.
          </p>
          <Button className="mt-8 bg-[#bd1e59] hover:bg-[#a31648]">SEE FILM CO</Button>
        </section>
        <section className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card className="bg-[#1a1c23] transform hover:scale-105 transition-transform duration-300">
            <CardContent>
              <img
                alt="Movie scene"
                className="h-[200px] w-full object-cover"
                height="200"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "200/200",
                  objectFit: "cover",
                }}
                width="200"
              />
              <h3 className="mt-4 text-xl font-semibold">SPOTER</h3>
            </CardContent>
          </Card>
          <Card className="bg-[#1a1c23] transform hover:scale-105 transition-transform duration-300">
            <CardContent>
              <img
                alt="Movie scene"
                className="h-[200px] w-full object-cover"
                height="200"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "200/200",
                  objectFit: "cover",
                }}
                width="200"
              />
              <h3 className="mt-4 text-xl font-semibold">INLENV BTES</h3>
            </CardContent>
          </Card>
          <Card className="bg-[#1a1c23] transform hover:scale-105 transition-transform duration-300">
            <CardContent>
              <img
                alt="Movie scene"
                className="h-[200px] w-full object-cover"
                height="200"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "200/200",
                  objectFit: "cover",
                }}
                width="200"
              />
              <h3 className="mt-4 text-xl font-semibold">SPOTER</h3>
            </CardContent>
          </Card>
          <Card className="bg-[#1a1c23] transform hover:scale-105 transition-transform duration-300">
            <CardContent>
              <img
                alt="Movie scene"
                className="h-[200px] w-full object-cover"
                height="200"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "200/200",
                  objectFit: "cover",
                }}
                width="200"
              />
              <h3 className="mt-4 text-xl font-semibold">INLENV BTES</h3>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  )
}

function FlagIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
      <line x1="4" x2="4" y1="22" y2="15" />
    </svg>
  )
}


function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}


BUILD THS SITE OUT IN FULL 


## Collaborate with GPT Engineer

This is a [gptengineer.app](https://gptengineer.app)-synced repository 🌟🤖

Changes made via gptengineer.app will be committed to this repo.

If you clone this repo and push changes, you will have them reflected in the GPT Engineer UI.

## Setup

```sh
git clone https://github.com/GPT-Engineer-App/nextjs-movie-portal.git
cd nextjs-movie-portal
npm i
```

```sh
npm run dev
```

This will run a dev server with auto reloading and an instant preview.

## Tech stack

- [Vite](https://vitejs.dev/)
- [React](https://react.dev/)
- [Chakra UI](https://chakra-ui.com/)

## Requirements

- Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
