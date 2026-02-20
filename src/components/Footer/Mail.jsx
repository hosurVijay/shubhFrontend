function Mail() {
  const email = "shubhakaryateam@gmail.com"; // 👈 replace with your real email

  return (
    <a href={`mailto:${email}`}>
      <button className="p-2 rounded-full hover:bg-orange-100 transition">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-6 h-6 text-black transition-transform duration-200 hover:scale-110 cursor-pointer"
        >
          <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
          <rect x="2" y="4" width="20" height="16" rx="2" />
        </svg>
      </button>
    </a>
  );
}

export default Mail;
