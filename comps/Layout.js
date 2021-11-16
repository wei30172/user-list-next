import Footer from "./Footer";
import Navbar from "./Navbar";
import Head from 'next/head'

const Layout = ({children}) => {
  return (
	<>
		<Head>
      <title>Info List | { children.type.name }</title>
      <meta name="keywords" content="list"></meta>
    </Head>
    <div className="content">
			<Navbar />
			{children}
			<Footer />
		</div>
	</>
  );
}
 
export default Layout;