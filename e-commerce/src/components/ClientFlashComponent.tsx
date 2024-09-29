"use client";

import { useSearchParams } from "next/navigation";

const ClientFlashComponent = () => {
  const searchParams = useSearchParams();
  const errorMessage = searchParams.get("error");
  return (
    <div>
      {errorMessage && (
        <p className="animate-fade-slide rounded bg-red-600 px-4 py-2 text-center text-white">
          {errorMessage}
        </p>
      )}
    </div>
  );
};

export default ClientFlashComponent;
