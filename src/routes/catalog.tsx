import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Catalog() {
  return (
    <>
      <nav className="grid-cols-3">
        <a
          href="https://images.pexels.com/photos/16738854/pexels-photo-16738854/free-photo-of-cidade-meio-urbano-construcao-predio.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          style="background-image: url(`https://images.pexels.com/photos/16738854/pexels-photo-16738854/free-photo-of-cidade-meio-urbano-construcao-predio.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`)"
        />
        <div className="relative ml-auto flex-1 md:grow-0">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search..."
            className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[320px]"
          />
        </div>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </nav>
    </>
  );
}
