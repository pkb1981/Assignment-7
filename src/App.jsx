import './App.css'
import Banner from './Components/Banner/Banner'
import Main from './Components/Main/Main'

function App() {


  return (
    <>

      {/* navbar section */}
      <section>
        <div class="navbar w-11/12 mx-auto bg-base-100 shadow-sm">
          <div class="flex-1">
            <a class="btn btn-ghost text-xl">CS — Ticket System</a>
          </div>
          <div class="flex-none">
            <ul class="menu menu-horizontal px-1">
              <li><a>Home</a></li>
              <li><a>FAQ</a></li>
              <li><a>Changelog</a></li>
              <li><a>Blog</a></li>
              <li><a>Download</a></li>
              <li><a>Contact</a></li>
              <li><button class="bg-[#9F62F2] text-[#FFFFFF]">+ New Ticket</button></li>
            </ul>
          </div>
        </div>
      </section>

      {/* Banner Section */}
      <Banner></Banner>

      {/* Main Section */}
      <Main></Main>
    </>
  )
}

export default App
