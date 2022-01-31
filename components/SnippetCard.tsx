import Link from "next/link";

const SnippetCard = () => {
  return (
    <Link href="/snippets/one-snippet" passHref>
      <a>
        <div className="flex flex-col cursor-pointer bg-gray-100 p-5 hover:scale-105 transition-transform">
          <h2 className="text-xl font-bold tracking-wide">Title of Snippet</h2>
          <p className="text-gray-600">This snippet will create a new site</p>
          <ul className="flex gap-1 text-sm">
            <li>
              <Link href="snippets/tags/react">
                <a className="bg-purple-400 text-white p-0.5 rounded-sm">
                  #react
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </a>
    </Link>
  );
};

export default SnippetCard;
