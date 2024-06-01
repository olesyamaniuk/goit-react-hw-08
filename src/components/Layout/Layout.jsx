import { Suspense } from "react";
import AppBar from "../AppBar/AppBar";
import Loading from "../Loading/Loading";
import { Toaster } from "react-hot-toast";

export default function Layout({ children }) {
  return (
    <div>
      <AppBar />
      <Toaster position="top-center" reverseOrder={false} />
      <Suspense fallback={<Loading />}>{children}</Suspense>
    </div>
  );
}