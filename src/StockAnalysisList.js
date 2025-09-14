import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const StockAnalysisList = () => {
    const [dates, setDates] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // In a real implementation, you would fetch this list from your server
        // For now, we'll hardcode the available dates
        const availableDates = ['2025-09-07'];
        setDates(availableDates);
        setLoading(false);
    }, []);

    if (loading) {
        return <div className="cyberpunk-theme text-center pt-5"><div className="cyber-text">Loading analysis reports...</div></div>;
    }

    // Function to format date for display
    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    return (
        <div className="pt-4 cyberpunk-theme">
            <h4 className="fw-bold cyber-text text-center mb-4">Stock Analysis Reports</h4>
            <div className="container">
                {dates.length > 0 ? (
                    <div className="row justify-content-center">
                        {dates.map((date, index) => (
                            <div key={index} className="col-md-6 col-lg-4 mb-3">
                                <Link to={`/se/${date}`} className="text-decoration-none">
                                    <div className="p-3 h-100">
                                        <h5 className="cyber-text text-center mb-0">{formatDate(date)}</h5>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center">
                        <p className="cyber-text">No analysis reports available</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default StockAnalysisList;
