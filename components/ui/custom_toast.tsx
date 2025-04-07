"use client";

import { useState } from "react";
import { X } from "lucide-react"; // Import close icon

// Toast component
const Toast2 = ({ message, type, onClose }: {
    message: string;
    type: "success" | "error" | "info";
    onClose: () => void;
}) => {
    const bgColor = {
        success: "bg-green-500",
        error: "bg-red-500",
        info: "bg-blue-500"
    }[type];

    return (
        <div className={`fixed bottom-4 right-4 p-4 rounded-md shadow-lg text-white ${bgColor} flex items-center justify-between min-w-[300px]`}>
            <div>{message}</div>
            <button
                onClick={onClose}
                className="ml-4 p-1 rounded-full hover:bg-white/20 transition-colors"
            >
                <X className="h-4 w-4" />
            </button>
        </div>
    );
};

export default Toast2;

// Usage in your component
// export default function SignUpForm() {
//     const [toastMessage, setToastMessage] = useState("");
//     const [toastOpen, setToastOpen] = useState(false);
//     const [toastType, setToastType] = useState<"success" | "error" | "info">("info");

//     const showToast = (message: string, type: "success" | "error" | "info") => {
//         setToastMessage(message);
//         setToastType(type);
//         setToastOpen(true);

//         // Auto-hide after 5 seconds
//         setTimeout(() => {
//             setToastOpen(false);
//         }, 5000);
//     };

//     const handleSubmit = async (e: React.FormEvent) => {
//         e.preventDefault();

//         try {
//             // Your signup logic here
//             await signUpUser({ name, email, password });

//             showToast("Account created successfully!", "success");
//         } catch (error) {
//             showToast(error.message || "Signup failed. Please try again.", "error");
//         }
//     };

//     return (
//         <div className="flex min-h-screen bg-[#f5f5f5]">
//             {/* Your existing form code */}

//             {toastOpen && (
//                 <Toast
//                     message={toastMessage}
//                     type={toastType}
//                     onClose={() => setToastOpen(false)}
//                 />
//             )}
//         </div>
//     );
// }