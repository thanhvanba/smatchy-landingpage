import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import logo from "/footer-logo.svg";

export default function StripeConnectRedirect() {
  const location = useLocation();

  useEffect(() => {
    // Extract query parameters from current URL
    const urlParams = new URLSearchParams(location.search);
    const accountId = urlParams.get("account_id");

    // Determine if this is a return or refresh URL
    const isRefresh = location.pathname.includes("/refresh");
    const path = isRefresh ? "refresh" : "return";

    // Build custom URL scheme
    const customScheme = "smatchy://stripe-connect/" + path;
    const redirectUrl = accountId
      ? customScheme + "?account_id=" + encodeURIComponent(accountId)
      : customScheme;

    // Try to redirect to custom scheme
    window.location.href = redirectUrl;
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4 py-8">
      <div className="max-w-md w-full flex flex-col items-center text-center gap-3">
        <div className="flex justify-center items-center w-full">
          <img src={logo} alt="Smatchy" className="h-[128px] w-auto" />
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Redirection vers
          <br />
          <span className="text-blue-600">Smatchy</span>
        </h1>

        <p className="text-gray-600 text-sm">
          Veuillez patienter pendant que nous ouvrons l'application...
        </p>
      </div>
    </div>
  );
}