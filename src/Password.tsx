import { SetStateAction, useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import "react-toastify/dist/ReactToastify.css";
interface PassProtectProps {
  children: React.ReactNode;
  password: string;
}

function PassProtect({ children, password }: PassProtectProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [enteredPassword, setEnteredPassword] = useState("");
  const [showPasswordPrompt, setShowPasswordPrompt] = useState(true);

  const handlePasswordSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    if (enteredPassword === password) {
      setIsAuthenticated(true);
      setShowPasswordPrompt(false);
    } else {
      toast.error("Incorrect password. Please try again.");
    }
  };

  const handlePasswordChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setEnteredPassword(event.target.value);
  };

  if (isAuthenticated) {
    return children;
  }

  if (showPasswordPrompt) {
    return (
      <div>
        <div
          className="
        bg-amber-200 border-2 border-amber-900 rounded-3xl shadow-md shadow-amber-900 text-amber-900 inline-block 
        px-8 md:px-10 py-6 md:min-w-[120px] select-none "
        >
          <h1 className="text-amber-900 font-bold text-3xl mb-5">
            Password Required
          </h1>
          <form
            onSubmit={handlePasswordSubmit}
            className="flex flex-col items-center"
          >
            <input
              className="border-2 border-amber-900 bg-amber-100 p-2 rounded-lg my-2"
              type="password"
              value={enteredPassword}
              onChange={handlePasswordChange}
            />
            <br />
            <button
              type="submit"
              className="bg-amber-100 border-2 border-amber-900 rounded-full shadow-md shadow-amber-900 text-amber-900 cursor-pointer inline-block font-semibold text-lg px-4 md:px-6 py-2 md:min-w-[120px] text-center no-underline select-none active:shadow-sm active:translate-x-px active:translate-y-px hover:bg-white"
            >
              Enter
            </button>
          </form>
          <Toaster position="top-center" reverseOrder={false} />
        </div>
      </div>
    );
  }

  return null;
}

export default PassProtect;
