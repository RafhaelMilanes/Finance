import { auth } from "@clerk/nextjs/server";
import Navbar from "../_components/navebar";
import { redirect } from "next/navigation";

const SubscriptionsPage = async () => {
  const { userId } = await auth();
  if (!userId) {
    redirect("/login");
  }
  return <Navbar />;
};
export default SubscriptionsPage;
