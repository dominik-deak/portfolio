import Availability from "@/components/Availability";
import ConnectWithMe from "@/components/ConnectWithMe";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const ContactPage = () => {
  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />

      <div className="flex-1">
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Get In Touch
            </h1>
            <p className="text-lg text-slate-300 mb-12 max-w-3xl">
              Have a project in mind or just want to connect? Feel free to reach
              out using the form below or through my social channels.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <ContactForm />
              </div>

              <div className="space-y-8">
                <Availability />
                <ConnectWithMe />
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
};

export default ContactPage;
