"use client";
import { LuShare2 } from "react-icons/lu";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useEffect, useState } from "react";

export default function ShareButton() {
  const [url, setUrl] = useState<string>("");

  useEffect(() => {
    setUrl(window.location.href);
  }, []);

  return (
    <CopyToClipboard text={url}>
      <div className="flex justify-center">
        <button className="flex items-center gap-x-2">
          <LuShare2 className="text-blue-800" />
          اشتراک گذاری
        </button>
      </div>
    </CopyToClipboard>
  );
}
