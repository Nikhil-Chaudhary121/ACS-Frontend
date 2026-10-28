import { Search } from "lucide-react"


const SearchBox = () => {
  return (
    <div className="w-full">
                <form className=" px-8 mx-auto">   
                <label  className="block mb-2.5 text-xl font-medium text-heading sr-only ">Search with name</label>
                <div className="w-full relative">
                    <div className="absolute  inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <Search color="#F7C52C"/>
                        {/* <svg className="w-4 h-4 text-body" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"/></svg> */}
                    </div>
                    <input type="search" id="search" className="block w-full p-4 ps-12 bg-white rounded-full  border-none text-heading text-xl placeholder:text-body" placeholder="Search with name" required />
                </div>
            </form>
            </div>
  )
}

export default SearchBox