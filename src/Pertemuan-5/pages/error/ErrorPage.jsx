import { useParams, Link } from "react-router-dom";
import Icon from "../../components/Icon";

export default function ErrorPage() {
  const { errorCode } = useParams(); // ambil parameter dari URL

  const listError = [
    {
      code: "404",
      title: "Error 404",
      description: "The page you are looking for doesn’t exist or might have been removed.",
      picture: "/img/404.png",
    },
    {
      code: "403",
      title: "Error 403",
      description: "Access denied. You do not have permission to view this page.",
      picture: "/img/403.png",
    },
    {
      code: "405",
      title: "Error 405",
      description: "Method Not Allowed. The request method is not supported by this server.",
      picture: "/img/405.png",
    },
    {
      code: "401",
      title: "Error 401",
      description: "Unauthorized access. Please log in to continue.",
      picture: "/img/401.png",
    },
  ];

  // cari error yang cocok
  const currentError = listError.find((err) => err.code === errorCode);

  // fallback jika tidak ditemukan
  const errorData = currentError || listError[0];

  return (
    <div className="flex flex-col md:flex-row items-center justify-center rounded-xl min-h-screen bg-white px-4 md:px-20">
      <div className="w-full md:w-1/2 text-center md:text-left space-y-4">
        <h1 className="text-4xl font-bold text-black">Oops....</h1>
        <div className="text-5xl font-bold text-black">{errorData.title}</div>
        <p className="text-gray-600 max-w-md">
          {errorData.description} <br />
          We suggest you go back to dashboard.
        </p>
        <Link
          to="/"
          className="bg-hijau text-white inline-flex items-center font-bold px-5 py-3 rounded-lg hover:bg-green-700 transition"
        >
          <Icon name="leftArrow" className="text-xl mr-2" />
          Back to dashboard
        </Link>
      </div>

      <div className="w-full md:w-1/2 mt-10 md:mt-0 flex justify-center">
        <div className="relative">
          <img
            src={errorData.picture}
            alt={errorData.title}
            className="max-w-[300px] md:max-w-[400px]"
          />
        </div>
      </div>
    </div>
  );
}
