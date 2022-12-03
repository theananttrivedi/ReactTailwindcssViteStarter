function Home() {
  
  return (
    <div className="max-w-7xl mx-auto w-fit mt-4 px-4">
      <h1 className="text-black text-4xl font-extrabold">Welcome to React Tailwindcss Vite Boilerplate</h1>
      
      <section className="mt-4 border rounded-lg  px-4 py-2">
        <h2 className="text-gray-600 text-xl font-bold">To get Started, follow these steps:</h2>
        <ul className="flex flex-col gap-y-4 mt-4">
          <li className="bg-blue-600 text-white font-semibold w-fit px-2 py-1 rounded-lg">1. In the index.html file, change the title</li>
          <li className="bg-blue-600 text-white font-semibold w-fit px-2 py-1 rounded-lg">2. In the 
          App.jsx file, uncomment/add the routes and create necessary pages in the 'pages' folder</li>

        
        </ul>
    </section>

    <section className="mt-4 border rounded-lg  px-4 py-2">
      <h2 className="text-gray-600 text-xl font-bold">This includes some libraries such as</h2>
        <ul className="flex flex-col gap-y-4 mt-4">
          <li className="bg-blue-600 text-white font-semibold w-fit px-2 py-1 rounded-lg">1. Framer-Motion</li>
          <li className="bg-blue-600 text-white font-semibold w-fit px-2 py-1 rounded-lg">2. React Icons</li>
          <li className="bg-blue-600 text-white font-semibold w-fit px-2 py-1 rounded-lg">3. React Router Dom 
          </li>
        </ul>
      </section>
    </div>
  )
}

export default Home
