export const Header = () => {
     return (
       <header className="bg-green-600 text-white py-4 shadow-md">
         <div className="container mx-auto flex justify-between items-center px-4">
           <h1 className="text-2xl font-bold">Matrix</h1>
           <nav>
             <ul className="flex space-x-4">
               <li><a href="#" className="hover:text-gray-300">Home</a></li>
               <li><a href="#" className="hover:text-gray-300">About</a></li>
               <li><a href="#" className="hover:text-gray-300">Services</a></li>
               <li><a href="#" className="hover:text-gray-300">Contact</a></li>
             </ul>
           </nav>
         </div>
       </header>
     );
   };

   