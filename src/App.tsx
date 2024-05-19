import Button from "./components/Button";
import Heading from "./components/Heading";
import Input from "./components/Input";
import Text from "./components/Text";

const App = () => {
  return (
    <div className=" flex flex-col justify-center items-center h-screen gap-5">
      <Heading>Login Form</Heading>
        <Text variantColor="primary">Thank You</Text>
      <div className=" flex gap-3">
        <label htmlFor="">Name: </label>
        <Input/>
      </div>
      <div className=" flex gap-3">
        <label htmlFor="">Email: </label>
        <Input inputType="email" />
      </div>
      <Button className=" px-20">Login</Button>
      <Button variant="outline">Press</Button>
    </div>
  );
};

export default App;
