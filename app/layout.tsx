import Navbar from "./components/Navbar";
import './globals.css'
const layout = ({children}) => {
  return (
    <div>
      <html>
      <body>
        <Navbar/>
        {children}
      </body>
      </html>
    </div>
  )
}
export default layout