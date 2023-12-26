import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Error404 from "./pages/Error404";
import Error403 from "./pages/Error403";
import Error401 from "./pages/Error401";
import Home from "./pages/Home";
import Items from "./pages/Items";
import Profile from "./pages/Profile";
import ItemsByGame from "./pages/ItemsByGame";
import ItemInfo from "./pages/ItemInfo";
import ItemsByCategory from "./pages/ItemsByCategory";
import AddItems from "./pages/AddItems";
import Chats from "./pages/Chats";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} caseSensitive />
      <Route path="/items" element={<Items />} />
      <Route path="/items/:game" element={<ItemsByGame />} />
      <Route path="/items/:game/:category" element={<ItemsByCategory />} />
      <Route path="/item/:id" element={<ItemInfo />} />
      <Route path="/items/add" element={<AddItems />} />
      <Route path="/chats" element={<Chats />} />
      <Route path="/search" element={<Error403 />} />
      <Route path="/search/*" element={<Error403 />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/wallet" element={<Error403 />} />
      <Route path="/support" element={<Error403 />} />
      <Route path="/admin" element={<Error401 />} />
      <Route path="/*" element={<Error404 />} />
    </Routes>
  );
}

export default App;
