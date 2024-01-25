import { Skeleton } from "@/components/ui/skeleton";

type Props = {
  className?: string;
};

const SearchResultsLoader = ({ className = "" }: Props) => {
  return (
    <div className={`flex flex-col gap-5 ${className}`}>
      <Skeleton className="h-4 w-[250px]" />
      <div>
        <div className="flex flex-col gap-3 border-t py-5">
          <Skeleton className="h-4 w-[150px]" />
          <Skeleton className="h-4 w-[250px]" />
        </div>
        <div className="flex flex-col gap-3 border-t py-5">
          <Skeleton className="h-4 w-[150px]" />
          <Skeleton className="h-4 w-[250px]" />
        </div>
        <div className="flex flex-col gap-3 border-t py-5">
          <Skeleton className="h-4 w-[150px]" />
          <Skeleton className="h-4 w-[250px]" />
        </div>
      </div>
    </div>
  );
};

export default SearchResultsLoader;
