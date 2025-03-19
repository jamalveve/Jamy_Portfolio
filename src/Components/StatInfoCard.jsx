
const StatInfoCard = ({ count, label }) => {
    return (
        <div className="flex-1 flex gap-3 md:gap-5 bg-gradient-to-r from-blue-300 to-purple-300  text-transparent rounded-[14px] p-5">

            <h4 className="text-4xl md:text-5xl font-medium text-blue-700">{count}</h4>
            {/* leading-6 doubt */}
            <p className="text-sm md:text-[18px] font-normal text-black leading-6 whitespace-pre-line">{label}</p>
        </div>
    );
};

export default StatInfoCard;
