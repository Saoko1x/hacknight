const Notification = ({ text, icon, className, style }) => {
  return (
    <div 
      className={`animate-notification bg-[#EEDFA1] rounded-full py-2 px-6 shadow-md text-center absolute left-1/2 -translate-x-1/2 ${className}`}
      style={style}
    >
      <div className="flex items-center gap-2 justify-center whitespace-nowrap">
        {icon && <span className="text-base md:text-lg">{icon}</span>}
        <span className="text-sm md:text-base font-medium text-gray-800">{text}</span>
      </div>
    </div>
  );
};

export default Notification; 