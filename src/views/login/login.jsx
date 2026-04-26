import { useState } from "react";
import "./login.css";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });