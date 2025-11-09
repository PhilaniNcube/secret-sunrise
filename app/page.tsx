import Conferences from "@/components/conferences";
import FAQS from "@/components/faqs";
import Hero from "@/components/hero";
import SchoolEvents from "@/components/school-events";
import Session from "@/components/session";
import TeamBuilding from "@/components/team-building";
import TeamWellness from "@/components/team-wellnes";
import Testimonials from "@/components/testimonials";


export default function Home() {
  return <main>
    <Hero />
    <Conferences />
    <TeamBuilding />
    <Session />
    <TeamWellness />
    <SchoolEvents />
    <Testimonials />
    <FAQS />
  </main>;
}
