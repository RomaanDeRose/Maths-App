import { Link } from "react-router-dom";

const Box = ({ type }) => {
  return (
    <Link className="inline-block w-full" to={`/${type}`}>
      <div className="text-center my-1 p-3 rounded-xl shadow-lg bg-blue-500 cursor-pointer transition-all hover:scale-110 hover:bg-blue-700">
        <p className="text-lg capitalize text-zinc-900">{type}</p>
      </div>
    </Link>
  );
};

export default Box;
