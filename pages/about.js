import Image from "next/image";
import Footer from '../components/Footer'

export default function AboutPage() {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
        className="foto-profile"
      >
        <Image src="/Foto Profil.jpg" width="300" height="300" />
      </div>
      <div className='card card-page post-body'>
            <h2>Hello Everyone!</h2>
            <p>Hello, I'm Eric Julianto. Currently studying Hospitality and Tourism (third-year) at Universitas Bunda Mulia Ancol. I extremely motivated to constantly develop my skills and grow.</p> 
            <p>Currently I'm studying about technologies such as web development, cross-platform development, artificial intelligence, internet of things, and many more. I dedicated this blog to put all my projects I've done and some writing that comes from my mind randomly.</p>
            <p>If you have any question about my project or even about me, don't hesitate to ask me. You can contact me through <strong><a href="https://www.linkedin.com/in/ericjulianto/">my LinkedIn.</a></strong> Thank you 🙏</p>
        </div>
      <Footer />
    </>
  );
}