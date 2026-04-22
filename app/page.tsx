// app/page.tsx
import Navbar from './components/Navbar';
import Footer from './components/WavyFooter';
import AboutUs from './pages/about-us';
import ContactUs from './pages/contact-us';
import Documents from './pages/documents';
import Home from './pages/home';
import LiteratureSurvey from './pages/literature-survey';
import Methodology from './pages/methodology';
import Milestones from './pages/milestones';
import ResearchGap from './pages/research-gap';
import ResearchObjectives from './pages/research-objectives';
import ResearchProblem from './pages/research-problem';
import TechnologiesUsed from './pages/technologies-used';

const Page = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Home />
        <LiteratureSurvey />
        <ResearchGap />
        <ResearchProblem />
        <ResearchObjectives />
        <Methodology />
        <TechnologiesUsed />
        <Milestones />
        <Documents />
        <AboutUs />
        <ContactUs />
      </main>
      <Footer />
    </div>
  );
};

export default Page;
