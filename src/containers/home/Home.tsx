import { LocaleSwitcher } from "@/components";
import {
  Hero,
  HomeCTA,
  OurClientSay,
  OurClients,
  OurProcess,
  OurRecentWorks,
  OurServices,
} from "./sections";

export const Home = () => {
  return (
    <>
      <Hero />
      <OurClients />
      <OurServices />
      <OurProcess />
      <OurRecentWorks />
      <OurClientSay />
      <HomeCTA />
    </>
  );
};
