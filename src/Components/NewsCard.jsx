const NewsCard = ({ article }) => {
  return (
    <div className="max-w-sm sm:max-w-sm lg:max-w-sm rounded overflow-hidden shadow-lg my-5 m-auto flex flex-col justify-around sm:mx-2">
      <img
        className="w-full h-48 object-cover"
        src={article.image}
        alt="News Article"
      />
      <div className="px-6 py-4">
        <div className="flex justify-between">
          <div className="mb-2 text-xl font-bold">
            {article.title.split(" ").slice(1, 20).join(" ")}
          </div>
        </div>
        <p className="text-gray-700 text-base">
          {article.description.split(" ").slice(1, 35).join(" ") + "..."}
        </p>
      </div>
      <div className="px-6 py-4 flex justify-between">
        <a
          className="mb-2 mr-2 inline-block rounded-full bg-gray-200 px-6 py-1 text-sm font-semibold text-slate-700 hover:bg-gray-300"
          href={article.source.url}
        >
          {" "}
          Learn More
        </a>
        <span className="w-28">{article.publishedAt.slice(0, 10)}</span>
      </div>
    </div>
  );
};

export default NewsCard;
