import React, { useState, useEffect, useRef, useCallback } from 'react';
import styles from '../style/emi.module.css';
import Chart from 'chart.js/auto';
import { BiCalculator } from 'react-icons/bi';

const EMICalculator = () => {
  const [loanAmount, setLoanAmount] = useState(2500000);
  const [interestRate, setInterestRate] = useState(8.5);
  const [loanTenure, setLoanTenure] = useState(20);

  const [emi, setEmi] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);
  const [totalPayable, setTotalPayable] = useState(0);

  const donutChartRef = useRef(null);
  const donutChartInstance = useRef(null);

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      maximumFractionDigits: 0
    }).format(amount);
  };

  // ✅ updateDonutChart moved above calculateEMI
  const updateDonutChart = useCallback((principal, interest) => {
    if (donutChartInstance.current) {
      donutChartInstance.current.destroy();
    }

    if (donutChartRef.current) {
      donutChartInstance.current = new Chart(donutChartRef.current, {
        type: 'doughnut',
        data: {
          labels: ['Principal', 'Interest'],
          datasets: [{
            data: [principal, interest],
            backgroundColor: ['rgb(205, 205, 255)', 'blue'],
            borderColor: ['#ffffff', '#ffffff'],
            borderWidth: 2
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { display: false },
            tooltip: {
              callbacks: {
                label: (context) => {
                  return `${context.label}: ₹${formatCurrency(context.raw)}`;
                }
              }
            }
          },
          cutout: '65%',
          animation: {
            animateRotate: true,
            animateScale: true
          }
        }
      });
    }
  }, []);

  const calculateEMI = useCallback(() => {
    const monthlyRate = interestRate / 12 / 100;
    const months = loanTenure * 12;

    const emiValue = loanAmount * monthlyRate * Math.pow(1 + monthlyRate, months) /
      (Math.pow(1 + monthlyRate, months) - 1);

    const totalPayableValue = emiValue * months;
    const totalInterestValue = totalPayableValue - loanAmount;

    setEmi(emiValue);
    setTotalInterest(totalInterestValue);
    setTotalPayable(totalPayableValue);

    updateDonutChart(loanAmount, totalInterestValue);
  }, [loanAmount, interestRate, loanTenure, updateDonutChart]);

  // ✅ useEffect with correct dependency
  useEffect(() => {
    calculateEMI();
  }, [calculateEMI]);

  return (
    <div className={styles.container}>
      <div className={styles.calculatorContainer}>
        <div className={styles.calculatorBody}>
          <div className={styles.gridContainer}>
            <div className={styles.leftColumn}>
              <div className={styles.inputCard}>
                <div className={styles.inputCardHeader}>
                  <div className={styles.inputCardIcon}>
                    <BiCalculator />
                  </div>
                  <h4 className={styles.inputCardTitle}>Loan Details</h4>
                </div>

                <div className={styles.inputGroup}>
                  <label htmlFor="loanAmount">Loan Amount (₹)</label>
                  <input
                    type="text"
                    className={styles.inputField}
                    value={formatCurrency(loanAmount)}
                    onChange={(e) => {
                      const value = Number(e.target.value.replace(/,/g, ''));
                      if (!isNaN(value)) setLoanAmount(value);
                    }}
                  />
                  <div className={styles.inputRow}>
                    <input
                      type="range"
                      className={styles.rangeSlider}
                      min="100000"
                      max="100000000"
                      step="50000"
                      value={loanAmount}
                      onChange={(e) => setLoanAmount(Number(e.target.value))}
                    />
                    <div className={styles.rangeValue}>
                      ₹{formatCurrency(loanAmount)}
                    </div>
                  </div>
                </div>

                <div className={styles.inputGroup}>
                  <label htmlFor="interestRate">
                    Interest Rate (% per annum)
                    <i
                      className={`fas fa-info-circle ${styles.infoIcon}`}
                      title="Current market rate for home loans"
                    ></i>
                  </label>
                  <div className={styles.inputRow}>
                    <input
                      type="range"
                      className={styles.rangeSlider}
                      min="0.5"
                      max="15"
                      step="0.1"
                      value={interestRate}
                      onChange={(e) => setInterestRate(Number(e.target.value))}
                    />
                    <div className={styles.rangeValue}>
                      {interestRate}%
                    </div>
                  </div>
                </div>

                <div className={styles.inputGroup}>
                  <label htmlFor="loanTenure">Loan Tenure (years)</label>
                  <div className={styles.inputRow}>
                    <input
                      type="range"
                      className={styles.rangeSlider}
                      min="1"
                      max="30"
                      step="1"
                      value={loanTenure}
                      onChange={(e) => setLoanTenure(Number(e.target.value))}
                    />
                    <div className={styles.rangeValue}>
                      {loanTenure} years
                    </div>
                  </div>
                </div>
              </div>

              <button
                className={styles.btnCalculate}
                onClick={calculateEMI}
              >
                <i className="fas fa-calculator me-2"></i> Calculate EMI
              </button>
            </div>

            <div className={styles.rightColumn}>
              <div className={styles.resultContainer}>
                <h3 className={styles.resultHeader}>Payment Summary</h3>

                <div className={styles.resultGrid}>
                  <div className={styles.resultBox}>
                    <div className={styles.resultTitle}>Monthly EMI</div>
                    <div className={styles.resultValue}>
                      ₹{formatCurrency(Math.round(emi))}
                    </div>
                  </div>
                  <div className={styles.resultBox}>
                    <div className={styles.resultTitle}>Total Interest</div>
                    <div className={styles.resultValue}>
                      ₹{formatCurrency(Math.round(totalInterest))}
                    </div>
                  </div>
                </div>

                <div className={styles.summarySection}>
                  <div className={styles.summaryBox}>
                    <div className={styles.summaryItem}>
                      <span>Loan Amount</span>
                      <span>₹{formatCurrency(loanAmount)}</span>
                    </div>
                    <div className={styles.summaryItem}>
                      <span>Interest Rate</span>
                      <span>{interestRate}%</span>
                    </div>
                    <div className={styles.summaryItem}>
                      <span>Loan Tenure</span>
                      <span>{loanTenure} years</span>
                    </div>
                    <div className={styles.summaryItem}>
                      <span>Total Payment</span>
                      <span>₹{formatCurrency(Math.round(totalPayable))}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.chartContainer}>
                <h5 className={styles.chartTitle}>Payment Breakdown</h5>
                <canvas ref={donutChartRef} className={styles.chartCanvas}></canvas>
                <div className={styles.chartLegend}>
                  <div className={styles.legendItem}>
                    <div
                      className={styles.legendColor}
                      style={{ backgroundColor: 'rgb(205, 205, 255)' }}
                    ></div>
                    <span>Principal</span>
                  </div>
                  <div className={styles.legendItem}>
                    <div
                      className={styles.legendColor}
                      style={{ backgroundColor: 'blue' }}
                    ></div>
                    <span>Interest</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.footerEMI}>
        <p>© 2023 Heartcity Properties. All rights reserved.</p>
        <p>
          This calculator provides estimates only. Actual payments may vary based on additional factors.
        </p>
      </div>
    </div>
  );
};

export default EMICalculator;
