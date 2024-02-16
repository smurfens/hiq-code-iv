import {
  useParams,
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { useCallback } from "react";

export default function Filter({ selectedId }: { selectedId: string }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );
  return (
    <div className="flex gap-4 mb-8 ">
      <div className="flex gap-4 flex-wrap ">
        <button
          className={`px-4 py-2 rounded   ${
            selectedId === "javascript" ? "bg-sky-200 " : "hover:bg-slate-100"
          }`}
          onClick={() => router.push("/category/javascript")}
        >
          Javascript
        </button>
        <button
          className={`px-4 py-2 rounded  ${
            selectedId === "python" ? "bg-sky-200 " : "hover:bg-slate-100"
          }`}
          onClick={() => router.push("/category/python")}
        >
          Python
        </button>
        <button
          className={`px-4 py-2 rounded  ${
            selectedId === "java" ? "bg-sky-200 " : "hover:bg-slate-100"
          }`}
          onClick={() => router.push("/category/java")}
        >
          Java
        </button>
        <button
          className={`px-4 py-2 rounded  ${
            selectedId === "ruby" ? "bg-sky-200 " : "hover:bg-slate-100"
          }`}
          onClick={() => router.push("/category/ruby")}
        >
          Ruby
        </button>
        <button
          className={`px-4 py-2 rounded  ${
            selectedId === "giraffe" ? "bg-sky-200 " : "hover:bg-slate-100"
          }`}
          onClick={() => router.push("/category/giraffe")}
        >
          Giraffe
        </button>
        <button
          className={`px-4 py-2 rounded  ${
            selectedId === "skiing" ? "bg-sky-200 " : "hover:bg-slate-100"
          }`}
          onClick={() => router.push("/category/skiing")}
        >
          Skiing
        </button>
      </div>
      <Select
        defaultValue="8"
        onValueChange={(e) =>
          router.push(pathname + "?" + createQueryString("limit", e))
        }
      >
        <SelectTrigger className="w-[70px]">
          <SelectValue placeholder="Amount" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="3">5</SelectItem>
          <SelectItem value="8">10</SelectItem>
          <SelectItem value="13">15</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
