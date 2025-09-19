import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CalendarView = () => {
    // Hardcoded list of available stock analysis dates
    const availableDates = [
        '2025-09-19',
        '2025-09-16',
        '2025-09-15',
        '2025-09-14',
        '2025-09-07'
    ];

    const [currentDate, setCurrentDate] = useState(new Date());

    // Extract available years and months
    const availableYears = [...new Set(availableDates.map(date => date.split('-')[0]))].sort().reverse();
    const availableYearMonths = [...new Set(availableDates.map(date => date.substring(0, 7)))].sort().reverse();

    // Function to get days in month
    const getDaysInMonth = (year, month) => {
        return new Date(year, month + 1, 0).getDate();
    };

    // Function to get first day of month (0 = Sunday, 1 = Monday, etc.)
    const getFirstDayOfMonth = (year, month) => {
        return new Date(year, month, 1).getDay();
    };

    // Function to format date as YYYY-MM-DD
    const formatDate = (date) => {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    };

    // Function to check if a date has analysis data
    const hasAnalysisData = (dateString) => {
        return availableDates.includes(dateString);
    };

    // Function to check if a year has analysis data
    const hasYearData = (year) => {
        return availableYears.includes(year);
    };

    // Function to check if a year-month has analysis data
    const hasMonthData = (year, month) => {
        const yearMonth = `${year}-${String(month).padStart(2, '0')}`;
        return availableYearMonths.some(ym => ym.startsWith(yearMonth));
    };

    // Function to navigate to previous month
    const prevMonth = () => {
        setCurrentDate(prev => {
            const newDate = new Date(prev);
            newDate.setMonth(prev.getMonth() - 1);
            return newDate;
        });
    };

    // Function to navigate to next month
    const nextMonth = () => {
        setCurrentDate(prev => {
            const newDate = new Date(prev);
            newDate.setMonth(prev.getMonth() + 1);
            return newDate;
        });
    };

    // Function to navigate to a specific year
    const goToYear = (year) => {
        setCurrentDate(prev => {
            const newDate = new Date(prev);
            newDate.setFullYear(parseInt(year));
            return newDate;
        });
    };

    // Function to navigate to a specific month
    const goToMonth = (month) => {
        setCurrentDate(prev => {
            const newDate = new Date(prev);
            newDate.setMonth(parseInt(month) - 1);
            return newDate;
        });
    };

    // Function to render calendar days
    const renderCalendarDays = () => {
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth();
        const daysInMonth = getDaysInMonth(year, month);
        const firstDayOfMonth = getFirstDayOfMonth(year, month);

        const days = [];

        // Add empty cells for days before the first day of the month
        for (let i = 0; i < firstDayOfMonth; i++) {
            days.push(<div key={`empty-${i}`} className="calendar-day empty"></div>);
        }

        // Add cells for each day of the month
        for (let day = 1; day <= daysInMonth; day++) {
            const date = new Date(year, month, day);
            const dateString = formatDate(date);
            const hasData = hasAnalysisData(dateString);

            days.push(
                <div
                    key={`day-${day}`}
                    className={`calendar-day ${hasData ? 'has-data' : ''}`}
                >
                    {hasData ? (
                        <Link to={`/se/${dateString}`} className="day-link">
                            {day}
                        </Link>
                    ) : (
                        <span className="day-number">{day}</span>
                    )}
                </div>
            );
        }

        return days;
    };

    // Function to get month name
    const getMonthName = (month) => {
        const months = [
            'January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December'
        ];
        return months[month];
    };

    return (
        <div className="pt-4 cyberpunk-theme">
            <h4 className="fw-bold cyber-text text-center mb-4">Stock Analysis Calendar</h4>

            {/* Year and Month Selectors */}
            <div className="selectors-container mb-4">
                <div className="year-selector">
                    <h5 className="cyber-text mb-2">Years:</h5>
                    <div className="year-list">
                        {availableYears.map(year => (
                            <button
                                key={year}
                                onClick={() => goToYear(year)}
                                className={`selector-btn year-btn ${hasYearData(year) ? 'has-data' : ''} ${currentDate.getFullYear() == year ? 'active' : ''}`}
                            >
                                {year}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="month-selector mt-3">
                    <h5 className="cyber-text mb-2">Months:</h5>
                    <div className="month-list">
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(month => {
                            const monthName = getMonthName(month - 1).substring(0, 3);
                            return (
                                <button
                                    key={month}
                                    onClick={() => goToMonth(month)}
                                    className={`selector-btn month-btn ${hasMonthData(currentDate.getFullYear(), month) ? 'has-data' : ''} ${currentDate.getMonth() + 1 == month ? 'active' : ''}`}
                                >
                                    {monthName}
                                </button>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Calendar */}
            <div className="calendar-container">
                <div className="calendar-header">
                    <button onClick={prevMonth} className="calendar-nav-btn cyber-text">&lt;</button>
                    <h5 className="calendar-title cyber-text">
                        {getMonthName(currentDate.getMonth())} {currentDate.getFullYear()}
                    </h5>
                    <button onClick={nextMonth} className="calendar-nav-btn cyber-text">&gt;</button>
                </div>

                <div className="calendar-grid">
                    <div className="calendar-day-name">Sun</div>
                    <div className="calendar-day-name">Mon</div>
                    <div className="calendar-day-name">Tue</div>
                    <div className="calendar-day-name">Wed</div>
                    <div className="calendar-day-name">Thu</div>
                    <div className="calendar-day-name">Fri</div>
                    <div className="calendar-day-name">Sat</div>
                    {renderCalendarDays()}
                </div>

                <div className="calendar-legend mt-4">
                    <div className="legend-item">
                        <div className="legend-color has-data"></div>
                        <span className="cyber-text">Available Analysis</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CalendarView;
