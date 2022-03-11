import Box from "./Box";

const Home = () => {
  return (
    <>
      <h1 className="font-black text-5xl mb-4">Maths App</h1>
      <p className="font-ligth text-2xl mb-5">Que querés practicar?</p>
      <div className="w-4/6 max-w-xs mx-auto flex flex-col items-center justify-center gap-4">
        <Box type="suma" />
        <Box type="resta" />
        <Box type="multiplicación" />
        <Box type="división" />
      </div>
    </>
  );
};

export default Home;
