function LiveIndicator({ active = false }) {
    return (
        <div 
            className="live-indicator"
            data-status={active ? "active" : "inactive"}></div>
    )
}

export default LiveIndicator;