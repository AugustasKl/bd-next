import { FC } from "react";
import { Avatar, NameDetails } from "./Avatar";
import { useSession } from "next-auth/react";

interface Params {
  name?: NameDetails;
}

export const UserDetails: FC<Params> = ({
  name = { firstName: "Moncius", lastName: "R" },
}) => {
  const { data } = useSession();
  
  return (
    <div className="border-t border-divider">
      <div className="flex gap-3 items-center px-3 pt-4">
        <Avatar name={name} />
        <div className="min-w-0">
          <p className="card-label font-semibold truncate">
            {name.firstName} {name.lastName}
          </p>
          <p className="card-label text-neutral-500 truncate">{data?.user?.email}</p>
        </div>
      </div>
    </div>
  );
};
