import React from "react";

export default function DynamicForm({ fields, formData, onChange, onSubmit }) {
  return (
    <form onSubmit={onSubmit} className="space-y-4">
      {fields.map((field) => (
        <div key={field.name}>
          <label className="block mb-1 font-medium">{field.label}</label>

          {field.type === "select" ? (
            <select
              name={field.name}
              value={formData[field.name] || ""}
              onChange={onChange}
              className="w-full p-2 border border-gray-300 rounded"
            >
              <option value="">-- Pilih --</option>
              {field.options.map((option, idx) => (
                <option key={idx} value={option}>
                  {option}
                </option>
              ))}
            </select>
          ) : (
            <input
              type={field.type}
              name={field.name}
              value={formData[field.name] || ""}
              onChange={onChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          )}
        </div>
      ))}

      <button
        type="submit"
        className="px-4 py-2 bg-hijau text-white rounded hover:bg-hijau"
      >
        Submit
      </button>
    </form>
  );
}
