import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const OperationContainer = () => {
  const [operation, setOperation] = useState("");
  const [answer, setAnswer] = useState(null);
  const [nextOperation, setNextOperation] = useState(1);
  const [inputAnswer, setInputAnswer] = useState("");

  const { typeOperation } = useParams();

  const correct = () =>
    toast.success("Correcto, vamos con otra!!", {
      style: {
        backgroundColor: "#6EE7B7",
        padding: "1rem",
        borderRadius: "15px",
        fontWeight: "500",
      },
    });

  const incorrect = () =>
    toast.error("Incorrecto, intenta de nuevo!!", {
      style: {
        backgroundColor: "#FCA5A5",
        padding: "1rem",
        borderRadius: "15px",
        fontWeight: "500",
      },
    });

  const simplifyParam = (param) => {
    if (param === "suma") {
      return "add";
    } else if (param === "resta") {
      return "sub";
    } else if (param === "multiplicación") {
      return "mul";
    } else if (param === "división") {
      return "div";
    }
  };

  const handleNextOperation = (e) => {
    e.preventDefault();
    setNextOperation(nextOperation + 1);
  };

  const handleInputChange = (e) => setInputAnswer(e.target.value);

  const operationResult = (e) => {
    e.preventDefault();
    if (answer === parseInt(inputAnswer)) {
      correct();
      handleNextOperation(e);
    } else {
      incorrect();
    }
    setInputAnswer("");
  };

  useEffect(() => {
    const URL = `https://x-math.herokuapp.com/api/${simplifyParam(
      typeOperation
    )}`;
    const API = fetch(URL);
    API.then((res) => res.json()).then((data) => {
      setOperation(data.expression);
      setAnswer(data.answer);
    });
  }, [nextOperation]);

  return (
    <div>
      <Link to="/">
        <FontAwesomeIcon
          className="absolute top-4 left-5 sm:top-6 sm:left-8 md:top-7 md:left-10 text-4xl"
          icon={faArrowLeft}
        />
      </Link>
      <h2 className="font-extrabold text-4xl md:text-6xl">
        A practicar la {typeOperation}
      </h2>
      {operation === "" ? (
        <div className="loader my-6 mx-auto"></div>
      ) : (
        <div className="mt-3">
          <div className="bg-blue-500 text-zinc-900 w-2/6 mt-7 mb-9 mx-auto p-2 rounded-3xl shadow-2xl shadow-blue-500/20">
            <h2 className="text-2xl font-extrabold my-1">{operation}</h2>
          </div>
          <form action="">
            <input
              type="number"
              value={inputAnswer}
              className="block w-28 text-lg font-bold bg-transparent mx-auto mt-2 mb-4 px-3 py-2 border-2 border-blue-500 rounded-lg focus:outline-none"
              onChange={handleInputChange}
              required
            />
            <button
              className="bg-blue-500 text-zinc-800 my-4 mx-2 py-3 px-4 rounded-xl shadow-lg transition-all hover:bg-blue-600 active:scale-95"
              onClick={(e) => operationResult(e)}
            >
              Revisar
            </button>
            <button
              className="bg-blue-500 text-zinc-800 my-4 mx-2 py-3 px-4 rounded-xl shadow-lg transition-all hover:bg-blue-600 active:scale-95"
              onClick={(e) => handleNextOperation(e)}
            >
              Omitir
            </button>
          </form>
        </div>
      )}
      <Toaster
        toastOptions={{
          duration: 1200,
        }}
      />
    </div>
  );
};

export default OperationContainer;
