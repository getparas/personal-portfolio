export const validateName = (name: string): string => {
  if (!name.trim()) {
    return "Name is required";
  }
  if (!/^[a-zA-Z\s]+$/.test(name)) {
    return "Name should only contain letters and spaces";
  }
  return "";
};

export const validateEmail = (email: string): string => {
  if (!email.trim()) {
    return "Email is required";
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return "Invalid email format";
  }
  return "";
};

export const validateMessage = (message: string): string => {
  if (!message.trim()) {
    return "Message is required";
  }
  return "";
};
