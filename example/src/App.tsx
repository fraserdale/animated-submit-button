import React from "react";
import { SubmitButton } from "../../src";
import { useState } from "react";

export default function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = () => {
    // Simulate API call
    console.log("Submitting form data:", formData);
  };

  return (
    <div
      style={{
        fontFamily: "Inter, sans-serif",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "60px 20px",
        background: "#fafafa",
      }}
    >
      <h1
        style={{
          fontSize: "24px",
          fontWeight: "bold",
          marginBottom: "40px",
          color: "#151515",
        }}
      >
        Contact Form Demo
      </h1>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "24px",
          width: "100%",
          maxWidth: "400px",
          background: "white",
          padding: "32px",
          borderRadius: "16px",
          boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.05)",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <label
            htmlFor="name"
            style={{ fontSize: "14px", fontWeight: "500", color: "#374151" }}
          >
            Name
          </label>
          <input
            id="name"
            type="text"
            value={formData.name}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, name: e.target.value }))
            }
            style={{
              padding: "8px 12px",
              borderRadius: "8px",
              border: "1px solid #e5e7eb",
              fontSize: "16px",
              outline: "none",
              transition: "border-color 0.2s ease",
            }}
            placeholder="John Doe"
          />
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <label
            htmlFor="email"
            style={{ fontSize: "14px", fontWeight: "500", color: "#374151" }}
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, email: e.target.value }))
            }
            style={{
              padding: "8px 12px",
              borderRadius: "8px",
              border: "1px solid #e5e7eb",
              fontSize: "16px",
              outline: "none",
              transition: "border-color 0.2s ease",
            }}
            placeholder="john@example.com"
          />
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <label
            htmlFor="message"
            style={{ fontSize: "14px", fontWeight: "500", color: "#374151" }}
          >
            Message
          </label>
          <textarea
            id="message"
            value={formData.message}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, message: e.target.value }))
            }
            style={{
              padding: "8px 12px",
              borderRadius: "8px",
              border: "1px solid #e5e7eb",
              fontSize: "16px",
              outline: "none",
              transition: "border-color 0.2s ease",
              minHeight: "100px",
              resize: "vertical",
              fontFamily: "Inter, sans-serif",
            }}
            placeholder="Your message here..."
          />
        </div>

        <div style={{ marginTop: "8px" }}>
          <SubmitButton onClick={handleSubmit} />
        </div>
      </div>
    </div>
  );
}
