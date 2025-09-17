import AccordionComp from "./shadcn/AccordionComp";
import AlertComp from "./shadcn/AlertComp";


export default function Home() {
  return (
    <div className="bg-blue-500 flex flex-col gap-4 px-6 py-4 items-center justify-center min-h-screen">
        <AccordionComp />
        <AlertComp />
    </div>
  );
}
