import { ModeToggle } from "@/components/mode-toggle";
import { UserButton } from "@clerk/nextjs";

type Props = {};

const page = (props: Props) => {
  return (
    <div>
      <UserButton afterSignOutUrl="/" />
      <ModeToggle />
    </div>
  );
};

export default page;
