import { Button } from "@/components/ui/button"
import { CardContent, Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import WhatsAppButton from "./whatsapp"

export default function Component() {
  return (
    <div className="max-w-screen-lg mx-auto">
      <nav className="flex justify-between items-center py-4">
        <div className="flex items-center space-x-4">
          <a className="text-sm" href="#Home" id="Home">
            Home
          </a>
          <div className="App">
      <WhatsAppButton />
    </div>
          <a className="text-sm" href="#About-Us">
            About Us
          </a>
          <a className="text-sm" href="#">
            Services
          </a>
          <a className="text-sm" href="#">
            Contact
          </a>
        </div>
      </nav>
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor
          sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus
          et magnis dis parturient montes.
        </p>
        <Button variant="outline">Contact Us</Button>
      </section>
      <div className="grid grid-cols-3 gap-4 my-6">
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
  )
}