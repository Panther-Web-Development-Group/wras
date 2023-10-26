function LiveIndicator({ active = false }) {
    return (
        <div 
            className="live-indicator"
            id="live-indicator"
            data-status={active ? "active" : "inactive"}>
                {active ? "Live" : "Not Live"}
            </div>
    )
}

export default LiveIndicator;