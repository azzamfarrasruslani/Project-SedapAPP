export default function Alert({ tipe, pesan }) {
    return (
      <div className="mb-3">
        {tipe === "error" ? (
          <div className="mt-4 p-3 bg-red-100 border-l-4 border-red-500 text-red-700">
            <p className="font-semibold">{pesan}</p>
          </div>
        ) : tipe === "success" ? (
          <div className="mt-4 p-3 bg-blue-100 border-l-4 border-blue-500 text-blue-700">
            <p className="font-semibold">{pesan}</p>
          </div>
        ) : null}
      </div>
    );
  }
  