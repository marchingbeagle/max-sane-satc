import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { CardTitle, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select"
import Link from "next/link"
import { ArrowBottomLeftIcon, ArrowLeftIcon } from "@radix-ui/react-icons"

export default function config() {
  return (

    <div className="container mx-auto py-8 px-4 md:px-6">
          <div className="flex items-center mb-6">
      <Link className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-700" href="./setting">
        <ArrowLeftIcon className="h-5 w-5" />
        Back
      </Link>
      <h1 className="text-3xl font-bold ml-auto">Usuários</h1>
    </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-gray-950 rounded-lg p-6">
          <div className="flex items-center gap-4">
            <Avatar className="h-16 w-16">
              <AvatarImage alt="User Avatar" src="/placeholder-avatar.jpg" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div>
              <h2 className="text-xl font-bold">John Doe</h2>
              <p className="text-gray-500 dark:text-gray-400">Software Engineer</p>
            </div>
          </div>
          <div className="mt-6 space-y-4">
            <label className="font-bold text-gray-950">
              Informações de contato
            </label>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-400 ">Email</label>
                <p className="text-gray-500 dark:text-gray-400">john.doe@example.com</p>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-400">Telefone</label>
                <p className="text-gray-500 dark:text-gray-400">12 34567-8910</p>
              </div>
              <div>
                <label className="font-bold text-gray-950">
                  Informações Pessoais
                </label>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-400">CPF</label>
                <p className="text-gray-500 dark:text-gray-400">123.456.789.10</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-400">Função</label>
                <p className="text-gray-500 dark:text-gray-400">Software Engineer</p>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Atualizar Senha</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div>
                  <Label htmlFor="current-password"> Senha Atual</Label>
                  <Input id="current-password" type="password" />
                </div>
                <div>
                  <Label htmlFor="new-password">Nova Senha</Label>
                  <Input id="new-password" type="password" />
                </div>
                <div>
                  <Label htmlFor="confirm-password">Confirmar Senha</Label>
                  <Input id="confirm-password" type="password" />
                </div>
              </form>
            </CardContent>
            <CardFooter>
              <Button className="ml-auto">Atualizar Password</Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Atualizar foto de Perfil</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div>
                  <Label htmlFor="profile-photo">Foto de Perfil</Label>
                  <Input id="profile-photo" type="file" />
                </div>
              </form>
            </CardContent>
            <CardFooter>
              <Button className="ml-auto">Atualizar Foto</Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Atualizar detalhes pessoais</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div>
                  <Label htmlFor="name">Nome</Label>
                  <Input defaultValue="John Doe" id="name" />
                </div>

                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input defaultValue="john.doe@example.com" id="email" type="email" />
                </div>
                <div>
                  <Label htmlFor="phone">Telefone</Label>
                  <Input defaultValue={"12 3 4567-8910"} id="phone" type="tel" />
                </div>
                <div>
                  <Label htmlFor="role">Função</Label>
                  <Select defaultValue="software-engineer" >
                    <SelectTrigger>
                      <SelectValue placeholder="Select Role" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="software-engineer">Software Engineer</SelectItem>
                      <SelectItem value="product-manager">Product Manager</SelectItem>
                      <SelectItem value="designer">Designer</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </form>
            </CardContent>
            <CardFooter>
              <Button className="ml-auto">Atualizar detalhes</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}