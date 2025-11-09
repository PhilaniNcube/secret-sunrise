import Conferences from "@/components/conferences";
import Hero from "@/components/hero";
import Session from "@/components/session";
import TeamBuilding from "@/components/team-building";


export default function Home() {
  return <main>
    <Hero />
    <Conferences />
    <TeamBuilding />
    <Session />
  </main>;
}
