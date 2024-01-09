import { calculateInvestmentResults, formatter } from '../../util/investment';

export default function Results({ state }) {
  const results = calculateInvestmentResults(state);
  const initialInvestment =
    results[0].valueEndOfYear - results[0].interest - results[0].annualInvestment;
  return (
    <>
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {results.map(item => {
          const totalInterest = item.valueEndOfYear - item.year - initialInvestment;
          const totalAmountInvested = item.valueEndOfYear - initialInvestment;
          return (
            <tr key={item.year}>
              <td>{item.year}</td>
              <td>{formatter.format(item.valueEndOfYear)}</td>
              <td>{formatter.format(item.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(totalAmountInvested)}</td>
            </tr>
          );
        })}
      </tbody>
    </>
  );
}
