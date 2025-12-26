import { useEffect } from "react";
import logo from "/logo.svg";

export default function AppLaunchPrompt() {
  const userAgent = navigator.userAgent || navigator.vendor || "";
  const isIOS = /iPad|iPhone|iPod/.test(userAgent);

  const playStoreUrl =
    "https://play.google.com/store/apps/details?id=com.smatchy.app";
  const appStoreUrl = "https://apps.apple.com/us/app/smatchy/id6473653332";

  const handleDownloadClick = () => {
    let storeUrl = playStoreUrl;
    if (isIOS) {
      storeUrl = appStoreUrl;
    }
    window.location.href = storeUrl;
  };

  useEffect(() => {
    const fullPath = window.location.pathname + window.location.search;
    const customScheme =
      "smatchy://" + fullPath.replace(/^\//, "").replace(/^open\//, "");
    const iframe = document.createElement("iframe");
    iframe.style.display = "none";
    iframe.src = customScheme;
    document.body.appendChild(iframe);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4 py-8">
      <div className="max-w-md w-full flex flex-col items-center text-center gap-3">
        <div className="flex justify-center items-center w-full">
          <img src={logo} alt="Smatchy" className="h-[128px] w-auto" />
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 ">
          Launching
          <br />
          <span className="text-blue-600">Smatchy</span>
        </h1>

        <div className="w-full space-y-4">
          <div className="space-y-2">
            <p className="text-gray-600 text-sm">Don't have the app yet?</p>
            <button
              onClick={handleDownloadClick}
              className="w-full flex items-center justify-center gap-3 px-6 py-3 bg-gray-900 hover:bg-gray-800 text-white rounded-lg transition-colors duration-200 font-semibold"
            >
              Download Smatchy App
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
