import About from "@/components/about ";
import Banner from "@/components/banner";
import Footer from "@/components/footer";
import Partner from "@/components/partner";
import Services from "@/components/services";

export default function Home() {
  return (
    <>
      <Banner />
      <About />
      <Partner />
      <Services />
      <Footer />
    </>
  );
}
