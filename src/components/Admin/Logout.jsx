// components/Admin/Logout.js
import { BiLogOut } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("jwtToken");
    navigate("/admin"); // Redirect to admin login
    window.location.reload(); // Refresh the page to clear local storage and force login again
  };

  return (
    <div>
      <button
        onClick={handleLogout}
        className="w-full text-left px-4 py-2 rounded-lg inline-flex items-center gap-4 bg-t-primary text-white hover:bg-t-primary/80 transition-all justify-between"
      >
        Logout
        <BiLogOut />
      </button>
    </div>
  );
};

export default Logout;
