// import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UploadPage from "./pages/upload";
import DownloadPage from "./pages/download";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UploadPage />} />
          <Route path="/download" element={<DownloadPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
