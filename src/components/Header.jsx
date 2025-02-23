import GithubIcon from "./icons/GithubIcon";

function Header() {
  return (
    <header id="header" className="flex flex-row items-center justify-between">
      <a
        className="px-2 py-1 font-semibold text-white bg-orange-400 rounded-md"
        href="/"
      >
        Reddit Client
      </a>
      <button className="rounded-full hover:bg-gray-200">
        <GithubIcon />
      </button>
    </header>
  );
}
export default Header;
