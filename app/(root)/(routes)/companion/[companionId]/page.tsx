import prismadb from "@/lib/prismadb";
import { CompanionForm } from "./components/companion-form";

interface CompanianIdPageProps {
  params: {
    companionId: string;
  };
}

const CompanianIdPage = async ({ params }: CompanianIdPageProps) => {
  // Check subscription

  const companion = await prismadb.companion.findUnique({
    where: {
      id: params.companionId,
    },
  });

  const categories = await prismadb.category.findMany();

  return <CompanionForm initialData={companion} categories={categories} />;
};

export default CompanianIdPage;
