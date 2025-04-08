import React, { useState } from "react";
import { createUrl } from "../../api/urlApi";

export default function AddUrlModal({ onClose }) {
  const [urlForm, setUrlForm] = useState({
    name: "",
    url: "",
    checkInterval: 21600,
  });

  const handleChange = (ev) => {
    setUrlForm({ ...urlForm, [ev.target.name]: ev.target.value });
  };

  const handleSubmit = async () => {
    try {
      await createUrl({
        ...urlForm,
        checkInterval: Number(urlForm.checkInterval),
      });

      alert("URL이 추가되었습니다.");

      onClose();
      setUrlForm({ name: "", url: "", checkInterval: 21600 });
    } catch (e) {
      alert("에러가 발생했습니다.");
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-96">
        <h2 className="text-lg font-bold mb-4">URL 추가</h2>
        <input
          type="text"
          name="name"
          placeholder="이름"
          className="w-full mb-2 p-2 border rounded"
          value={urlForm.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="url"
          placeholder="https://example.com"
          className="w-full mb-2 p-2 border rounded"
          value={urlForm.url}
          onChange={handleChange}
        />
        <select
          name="checkInterval"
          className="w-full mb-4 p-2 border rounded"
          value={urlForm.checkInterval}
          onChange={handleChange}
        >
          <option value={21600}>6시간</option>
          <option value={86400}>1일</option>
          <option value={259200}>3일</option>
          <option value={604800}>7일</option>
        </select>
        <div className="flex justify-end gap-2">
          <button
            className="text-sm px-3 py-1 border rounded"
            onClick={onClose}
          >
            닫기
          </button>
          <button
            className="text-sm px-3 py-1 bg-indigo-600 text-white rounded"
            onClick={handleSubmit}
          >
            추가
          </button>
        </div>
      </div>
    </div>
  );
}
