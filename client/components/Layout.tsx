import { Outlet } from "react-router-dom"

function Layout() {
  return (
    <>
      <div className="title">
      </div>
      <div className="main">
        <Outlet />
      </div>
    </>
  )
}

export default Layout