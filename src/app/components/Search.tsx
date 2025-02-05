import { CiSearch } from "react-icons/ci";

export default function Search() {
    return(
        <>
        <div className="w-[1000px] h-10 rounded-full m-3 border-gray-400 border-2 p-2">
        <div className="flex flex-row">
            <div>
                <CiSearch/>
            </div>
            <div className="font-extralight">
                Search
            </div>
        </div>
        </div>
        </>
    )
}