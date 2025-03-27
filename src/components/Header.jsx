import GithubIcon from "./icons/GithubIcon";

function Header() {
  return (
    <header id='header' className='flex flex-row items-center justify-between'>
      <a
        className='px-2 py-1 font-semibold text-white/90 bg-blue-500 dark:bg-blue-600 rounded-md'
        href='/'
      >
        Reddit Client
      </a>
      <button className='rounded-full hover:opacity-70'>
        <GithubIcon />
      </button>
    </header>
  );
}
export default Header;
