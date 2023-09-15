import prismadb from "@/lib/prismadb";
import { CompanionForm } from "./components/companion-form";
import { auth, redirectToSignIn } from "@clerk/nextjs";
import SearchPage from "./components/ai-image";

interface CompanianIdPageProps {
  params: {
    companionId: string;
  };
}

const CompanianIdPage = async ({ params }: CompanianIdPageProps) => {
  // Check subscription
  const { userId } = auth();

  if (!userId) {
    return redirectToSignIn();
  }

  const companion = await prismadb.companion.findUnique({
    where: {
      id: params.companionId,
      userId,
    },
  });

  const categories = await prismadb.category.findMany();

  return <CompanionForm initialData={companion} categories={categories} />;

  // return <SearchPage />;
};

export default CompanianIdPage;
