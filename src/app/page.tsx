import Image from "next/image";
import CustomSidebar from "./components/CustomSidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import Search from "./components/Search";
import { NoteCard } from "./components/Notecard";
import { NewNote } from "./components/NewNote";

export default function Home() {
  return (
    <>
    <div className="flex flex-row">
      <div>
      <SidebarProvider>
      <CustomSidebar/>
      </SidebarProvider>
      </div>
      <div>
      <Search/>
      <div className="flex flex-row">
      <NoteCard/>
      <NoteCard/>
      </div>
      <div>
        <NewNote/>
      </div>
      </div>
    </div>
    
    </>
  );
}
