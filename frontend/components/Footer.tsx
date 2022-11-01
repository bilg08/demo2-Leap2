export const Footer = () => {
  return (
    <footer className="p-4 bg-white rounded-lg ">
    <div className="sm:flex sm:items-center sm:justify-between shadow-md:px md:py-8 ">
        <a className="flex items-center">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" className="mr-3 h-8" alt="" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">React</span>
        </a>
    </div>
    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
    <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <a href="https://flowbite.com/" className="hover:underline">React</a>. React HelloWorld.
    </span>
</footer>
  )
};
