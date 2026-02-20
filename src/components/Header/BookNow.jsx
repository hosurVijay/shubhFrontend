function BookNow() {
  return (
    <button
      className="
        rounded-full
        bg-orange-600
        text-white
        font-semibold
        transition

        px-2 py-1.5 text-sm       
        md:px-6 md:py-2 md:text-base 

        hover:bg-orange-500 hover:scale-103 cursor-pointer
      "
    >
      <span className="md:hidden">Book Now</span>
      <span className="hidden md:inline">Book a Purohita Now</span>
    </button>
  );
}

export default BookNow;
