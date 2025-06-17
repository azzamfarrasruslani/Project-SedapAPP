import { FaPlus } from "react-icons/fa6";
import { Link, NavLink } from "react-router-dom";
export default function PageHeaderBaru({
  title,
  breadcrumb,
  children,
  onAddClick,
}) {
  const renderBreadcrumb = () => {
    if (!breadcrumb) return null;

    if (typeof breadcrumb === "string") {
      return <span className="text-gray-500">{breadcrumb}</span>;
    }

    if (Array.isArray(breadcrumb)) {
      return breadcrumb.map((item, index) => (
        <div key={index} className="flex items-center space-x-2">
          {index > 0 && <span className="text-gray-500">/</span>}
          <span className="text-gray-500 capitalize">
            <Link to={index === 0 ? "/" : `/${item}`}>{item}</Link>
          </span>
        </div>
      ));
    }

    return null;
  };

  return (
    <div
      id="pageheader-container"
      className="flex items-center justify-between p-4"
    >
      <div id="pageheader-left" className="flex flex-col">
        {title && (
          <span id="page-title" className="text-3xl font-semibold">
            {title}
          </span>
        )}
       <div className="breadcrumbs text-sm">
  <ul>
    <li>
      <a>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="h-4 w-4 stroke-current">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path>
        </svg>
        Home
      </a>
    </li>
    <li>
      <a>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="h-4 w-4 stroke-current">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path>
        </svg>
        Documents
      </a>
    </li>
    <li>
      <span className="inline-flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="h-4 w-4 stroke-current">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
        </svg>
        Add Document
      </span>
    </li>
  </ul>
</div>
      </div>
      <div className="flex gap-2 items-center">
        {children}
        <button
          onClick={onAddClick}
          className="flex items-center gap-2 bg-hijau text-white px-4 py-2 rounded-lg"
        >
          <FaPlus />
          Add Button
        </button>
      </div>
    </div>
  );
}
