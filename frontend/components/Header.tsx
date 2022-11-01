import { useRouter } from 'next/router';
export const Header = () => {
  const router = useRouter()
  return (
    <header>
    <nav className="bg-white border-gray-200  py-2.5 ">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <a onClick={() => router.push('/')} className="flex items-center">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" className="mr-3 h-6 sm:h-9" alt="" />
                <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">React</span>
            </a>
            <div className="flex items-center lg:order-2">
                <a onClick={() => router.push('loginPage')} className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">Нэвтрэх/Бүртгүүлэх</a>
                <button data-collapse-toggle="mobile-menu-2" type="button" className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
                </button>
                <a onClick={() => router.push('profile')} className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">Миний хэсэг</a>
            </div>
        </div>
    </nav>
</header>
  );
}