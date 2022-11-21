const TabButton = ({label, isActive, onClick}) => {
    return (
        <div className="relative" key={label}>
            <button
                className={`text-sm md:text-lg font-bold uppercase px-6 py-4 my-1 mx-2 border-b-2 ${
                    isActive
                        ? 'text-greenBtn border-greenBtn'
                        : 'border-transparent'
                } hover:text-greenBtn`}
                onClick={onClick}
            >
                {label}
            </button>
        </div>
    )
}

export default TabButton;