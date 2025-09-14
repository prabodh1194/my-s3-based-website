import React from 'react';
import { Link } from 'react-router-dom';

const StockAnalysisList = () => {
    // Simple list of available stock analysis dates
    const dates = [
        '2025-09-14',
        '2025-09-07'
    ];

    // Function to format date for display
    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    return (
        <div className="pt-4 cyberpunk-theme">
            <h4 className="fw-bold cyber-text text-center mb-4">Stock Analysis Reports</h4>
            <div className="container">
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
            </div>
        </div>
    );
};

export default StockAnalysisList;
