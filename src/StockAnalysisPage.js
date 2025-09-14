import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const StockAnalysisPage = () => {
    const { date } = useParams();
    const [analysisData, setAnalysisData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await fetch(`/stock-data/${date}.json`);
                if (!response.ok) {
                    throw new Error(`Failed to fetch data for date: ${date}`);
                }
                const data = await response.json();
                setAnalysisData(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        if (date) {
            fetchData();
        }
    }, [date]);

    if (loading) {
        return <div className="cyberpunk-theme text-center pt-5"><div className="cyber-text">Loading analysis data...</div></div>;
    }

    if (error) {
        return <div className="cyberpunk-theme text-center pt-5"><div className="cyber-text-red">Error: {error}</div></div>;
    }

    if (!analysisData) {
        return <div className="cyberpunk-theme text-center pt-5"><div className="cyber-text">No data available</div></div>;
    }

    // Function to highlight company names in text
    const highlightCompanies = (text) => {
        if (!text) return text;

        let highlightedText = text;

        // Highlight company names from all sections
        const allCompanies = [
            ...analysisData.buy_stocks,
            ...analysisData.hold_stocks,
            ...analysisData.sell_stocks
        ];

        allCompanies.forEach(company => {
            const companyName = company.company;
            // Escape special regex characters in company names
            const escapedCompanyName = companyName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
            highlightedText = highlightedText.replace(
                new RegExp(`\\b${escapedCompanyName}\\b`, 'g'),
                `<span class="highlighted-company">${companyName}</span>`
            );
        });

        return highlightedText;
    };

    return (
        <div className="stock-analysis cyberpunk-theme pt-4">
            <div className="fs-5 fw-light">
                <h3 className="align left fw-bold cyber-text">TOP 100 INDIAN STOCKS ANALYSIS</h3>
                <div className="mt-1 mb-4 fw-lighter" style={{"color": "var(--text-tertiary)"}}>
                    <time dateTime={analysisData.analysis_date}>{analysisData.analysis_date}</time>
                    <span className="mx-2">•</span>
                    <span>Stock Analysis Report</span>
                </div>
            </div>

            <div className="mb-5 p-3">
                <h3 className="cyber-text border-bottom-cyber pb-2 header-consistent">MARKET TRENDS</h3>
                <p className="cyber-text-light" dangerouslySetInnerHTML={{
                    __html: highlightCompanies(analysisData.market_trends)
                }}></p>

                <h3 className="cyber-text border-bottom-cyber pb-2 mt-4 header-consistent">STRONG OPPORTUNITIES</h3>
                <p className="cyber-text-light" dangerouslySetInnerHTML={{
                    __html: highlightCompanies(analysisData.strong_opportunities)
                }}></p>

                <h3 className="cyber-text border-bottom-cyber pb-2 mt-4 header-consistent">HIGH CONFIDENCE NOTES</h3>
                <p className="cyber-text-light" dangerouslySetInnerHTML={{
                    __html: highlightCompanies(analysisData.high_confidence_notes)
                }}></p>

                <p className="cyber-text fw-bold mt-4 header-consistent">TOTAL COMPANIES ANALYZED: <span className="cyber-text">{analysisData.total_companies_analyzed}</span></p>
            </div>

            <div className="recommendations">
                <div className="mb-5">
                    <h3 className="cyber-text-green text-center pb-3 border-bottom-cyber-green header-consistent">BUY RECOMMENDATIONS</h3>
                    <div className="stocks-list">
                        {analysisData.buy_stocks.map((stock, index) => (
                            <div key={index} className="p-3 mb-3">
                                <h4 className="cyber-text-green company-name header-consistent">{stock.company}</h4>
                                <p className="cyber-text-light mb-0">{stock.rationale}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mb-5">
                    <h3 className="cyber-text-yellow text-center pb-3 border-bottom-cyber-yellow header-consistent">HOLD RECOMMENDATIONS</h3>
                    <div className="stocks-list">
                        {analysisData.hold_stocks.map((stock, index) => (
                            <div key={index} className="p-3 mb-3">
                                <h4 className="cyber-text-yellow company-name header-consistent">{stock.company}</h4>
                                <p className="cyber-text-light mb-0">{stock.rationale}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mb-5">
                    <h3 className="cyber-text-red text-center pb-3 border-bottom-cyber-red header-consistent">SELL RECOMMENDATIONS</h3>
                    <div className="stocks-list">
                        {analysisData.sell_stocks.map((stock, index) => (
                            <div key={index} className="p-3 mb-3">
                                <h4 className="cyber-text-red company-name header-consistent">{stock.company}</h4>
                                <p className="cyber-text-light mb-0">{stock.rationale}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StockAnalysisPage;
