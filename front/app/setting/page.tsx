import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select"
import { Button } from "@/components/ui/button"

export default function config() {
    return (
      <main className="flex min-h-screen w-full flex-col items-center justify-center bg-gray-100 py-12 dark:bg-gray-950">
        <div className="container mx-auto max-w-4xl px-4 md:px-6">
          <div className="rounded-lg bg-white p-8 shadow-lg dark:bg-gray-800">
            <div className="mb-8">
              <h1 className="text-2xl font-bold">User Management</h1>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div className="flex flex-col items-center justify-center space-y-4">
                <Avatar className="h-24 w-24">
                  <AvatarImage alt="User Avatar" src="/placeholder-avatar.jpg" />
                  <AvatarFallback>JP</AvatarFallback>
                </Avatar>
                <div className="text-center">
                  <h2 className="text-xl font-semibold">John Doe</h2>
                  <p className="text-gray-500 dark:text-gray-400  justify-items-start flex">Idade: 35</p>
                  <p className="text-gray-500 dark:text-gray-400  justify-items-start flex"> Email: john.doe@example.com </p>
                  <p className="text-gray-500 dark:text-gray-400  justify-items-start flex"> Função: Admin</p>
                </div>
              </div>
              <div>
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input defaultValue="John Doe" id="name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="age">Age</Label>
                      <Input defaultValue={35} id="age" type="number" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input defaultValue="john.doe@example.com" id="email" type="email" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="role">Role</Label>
                    <Select defaultValue="admin">
                      <SelectTrigger>
                        <SelectValue placeholder="Select role" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="admin">Admin</SelectItem>
                        <SelectItem value="manager">Manager</SelectItem>
                        <SelectItem value="user">User</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <Input id="password" type="password" />
                  </div>
                  <div className="flex justify-end space-x-2">
                    <Button variant="outline">Change Photo</Button>
                    <Button type="submit">Save Changes</Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    )
  }