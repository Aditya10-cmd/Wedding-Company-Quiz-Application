export default function FinalScore({ score, total, restart }) {
  const percentage = Math.round((score / total) * 100);

  return (
    <div className="text-center">
      <div className="bg-white shadow px-4 py-1 rounded-xl text-xs mb-4 w-[240px] h-[45px] mx-auto flex items-center justify-center border border-[#b7e2ff] text-[#0d2a3f] font-semibold">
        Keep Learning!
      </div>

      <div className="text-[#15313D] text-4xl font-serif italic mb-4">
        Your Final score is
      </div>

      <div className="text-[#15313D] text-[120px] font-serif italic leading-none">
        {score}
        <span className="text-[70px] ml-1">/ {total}</span>
      </div>

      <div className="text-[#15313D] text-5xl font-serif italic mt-3">
        {percentage}%
      </div>

      <button
        onClick={restart}
        className="mt-8 px-8 py-3 bg-[#dff2ff] border border-[#b7e2ff] hover:bg-[#bfe4ff] transition rounded-xl font-semibold text-[#0d2a3f]"
      >
        Start Again
      </button>
    </div>
  );
}
