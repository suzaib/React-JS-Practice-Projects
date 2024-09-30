import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import { useState } from "react";
import { Outlet } from "react-router-dom"
import PostListProvider from "../store/post-list-store";
import "./App.css";


function App() {

  const [selectedTab,setSelectedTab]=useState("Home");

  return (
    <>
    <PostListProvider>
      <div className="appContainer">
        <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab}/>
        <div className="content">
          <Header/>
          <Outlet/>
          <Footer/>
        </div>
      </div>
    </PostListProvider>
    </>
  )
}

export default App
