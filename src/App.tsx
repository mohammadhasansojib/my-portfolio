import { Routes, Route } from "react-router-dom"
import { ScrollToTop } from "@/components/ScrollToTop"
import HomePage from "@/pages/HomePage"
import ProjectDetailPage from "@/pages/ProjectDetailPage"

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects/:slug" element={<ProjectDetailPage />} />
      </Routes>
    </>
  )
}