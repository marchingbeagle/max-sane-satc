/* eslint-disable @next/next/no-img-element */
'use client'
import { Button } from "@/components/ui/button"
import { CardContent, Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import WhatsAppButton from "./whatsapp"
import Link from "next/link"
import { NavigationMenu, NavigationMenuLink, NavigationMenuList } from "@radix-ui/react-navigation-menu"

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

function MountainIcon(props: any) {
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
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}

export default function Index() {
  return (
    <html className="scroll-smooth">
      <div className="max-w-screen-lg mx-auto">
        <header className="flex h-20 w-full shrink-0 items-center px-4 md:px-6 bg-gray-900 text-white">
          <div className="w-[150px]">
            <Link className="flex items-center" href="#">
              <MountainIcon className="h-6 w-6" />
              <span className="sr-only">Acme Inc</span>
            </Link>
          </div>
          <nav className="flex-1 hidden lg:flex justify-center">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuLink asChild>
                  <Link
                    className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-800 hover:text-gray-50 focus:bg-gray-800 focus:text-gray-50 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-800/50 data-[state=open]:bg-gray-800/50"
                    href="#"
                  >
                    Home
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link
                    className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-800 hover:text-gray-50 focus:bg-gray-800 focus:text-gray-50 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-800/50 data-[state=open]:bg-gray-800/50"
                    href="#"
                  >
                    Sobre nós
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link
                    className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-800 hover:text-gray-50 focus:bg-gray-800 focus:text-gray-50 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-800/50 data-[state=open]:bg-gray-800/50"
                    href="#"
                  >
                    Serviços
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link
                    className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-800 hover:text-gray-50 focus:bg-gray-800 focus:text-gray-50 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-800/50 data-[state=open]:bg-gray-800/50"
                    href="#"
                  >
                    Contato
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuList>
            </NavigationMenu>
          </nav>
          <div className="ml-auto w-[150px]">
            <Button className="text-white" variant="outline">
              Entrar
            </Button>
          </div>
        </header>
        <WhatsAppButton />
        <div className="my-6">
          <img
            alt="Banner"
            className="w-full h-auto"
            height="200"
            src="/placeholder.svg"
            style={{
              aspectRatio: "800/200",
              objectFit: "cover",
            }}
            width="800"
          />
        </div>
        <section className="my-6">
          <h2 className="text-2xl font-semibold mb-3" id="About-Us">Quem Somos?</h2>
          <p className="mb-4">
            A Maxsane desenvolve, fabrica e comercializa produtos de qualidade destinados ao mercado de higiene e limpeza.
            Dispõe de uma grande variedade de produtos e sistemas, oferecendo aos clientes aqueles que melhor se ajustem às suas necessidades.
            Atendemos em todo o território nacional
          </p>
          <Button variant="outline">Entre em contato</Button>
        </section>
        <h2 className="text-2xl font-semibold mb-3" id="Serviços">Áreas de Atuação</h2>
        <div className="grid grid-cols-3 gap-6 my-6">
          <Card className="w-full">
            <CardContent>
              <img
                alt="Placeholder"
                className="w-full h-auto mb-4"
                height="100"
                src="/img1.jpg"
                style={{
                  aspectRatio: "100/100",
                  objectFit: "cover",
                }}
                width="100"
              />
              <h3 className="text-lg font-semibold mb-2">Card Title</h3>
              <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </CardContent>
          </Card>
          <Card className="w-full">
            <CardContent>
              <img
                alt="Placeholder"
                className="w-full h-auto mb-4"
                height="100"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "100/100",
                  objectFit: "cover",
                }}
                width="100"
              />
              <h3 className="text-lg font-semibold mb-2">Card Title</h3>
              <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </CardContent>
          </Card>
          <Card className="w-full">
            <CardContent>
              <img
                alt="Placeholder"
                className="w-full h-auto mb-4"
                height="100"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "100/100",
                  objectFit: "cover",
                }}
                width="100"
              />
              <h3 className="text-lg font-semibold mb-2">Card Title</h3>
              <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </CardContent>
          </Card>
        </div>
        <div className="my-6">
          <img
            alt="Map"
            className="w-full h-auto"
            height="300"
            src="/placeholder.svg"
            style={{
              aspectRatio: "800/300",
              objectFit: "cover",
            }}
            width="800"
          />
        </div>
        <section className="my-6">
          <h2 className="text-2xl font-semibold mb-3">Nossos Parceiros</h2>
          <div className="grid grid-cols-2 gap-4 mb-6">
            <img
              alt="Partner"
              className="w-full h-auto"
              height="100"
              src="/placeholder.svg"
              style={{
                aspectRatio: "300/100",
                objectFit: "cover",
              }}
              width="300"
            />
            <img
              alt="Partner"
              className="w-full h-auto"
              height="100"
              src="/placeholder.svg"
              style={{
                aspectRatio: "300/100",
                objectFit: "cover",
              }}
              width="300"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">História da empresa</h3>
              <p className="text-sm mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <img
                alt="Company History"
                className="w-full h-auto"
                height="200"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "300/200",
                  objectFit: "cover",
                }}
                width="300"
              />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Contato</h3>
              <form className="space-y-4">
                <Input placeholder="Nome" />
                <Input placeholder="Mensagem" />
                <Input placeholder="Email" />
                <Button>Send</Button>
              </form>
            </div>
          </div>
        </section>
        <footer className="py-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm">
                Rua 123, Bairro Industrial
                <br />
                CEP 12345-678
                <br />
                Cidade - Estado
              </p>
            </div>
            <div>
              <p className="text-sm">
                contato@empresa.com
                <br />
                (11) 1234-5678
                <br />
                (11) 91234-5678
              </p>
            </div>
          </div>
        </footer>
      </div>
    </html>
  );
}
