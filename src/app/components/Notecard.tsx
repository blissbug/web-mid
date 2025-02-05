import * as React from "react"
import { FaRegCopy } from "react-icons/fa";
import { MdMenu } from "react-icons/md";

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"



export function NoteCard() {

  /*function display(){
    return(
      <>
      <div className="w-screen h-screen">
        <div>Engineering Assignment Audio</div>
        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat quibusdam molestiae nisi aliquid culpa tempore voluptatum officia facilis qui vero expedita aut quam accusamus vitae, minus vel doloribus asperiores veniam.</div>
      </div>
      </>
    )

  }*/


  return (
    <div>
    <Card className="w-[350px] m-5">
      <CardHeader>
        <CardTitle></CardTitle>
        <CardDescription>Engineering Assignment Audio</CardDescription>
      </CardHeader>
      <CardContent>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni, cumque aut ab distinctio est ut? Non, libero saepe, dolores quia odio quidem vero adipisci delectus tempora error pariatur deleniti dolore.
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline"><FaRegCopy /></Button>
        <Button><MdMenu /></Button>
      </CardFooter>
    </Card>
    </div>
  )
}
