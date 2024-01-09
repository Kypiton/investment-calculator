export default function UserInput({ state, handleInput }) {
  return (
    <>
      <div className='input-group'>
        <p>
          <label>INITIAL INVESTMENT</label>
          <input
            type='number'
            value={state.initialInvestment}
            onChange={e => handleInput('initialInvestment', e.target.value)}
            required
          />
        </p>
        <p>
          <label>ANNUAL INVESTMENT</label>
          <input
            type='number'
            value={state.annualInvestment}
            onChange={e => handleInput('annualInvestment', e.target.value)}
            required
          />
        </p>
      </div>
      <div className='input-group'>
        <p>
          <label>EXPECTED RETURN</label>
          <input
            type='number'
            value={state.expectedReturn}
            onChange={e => handleInput('expectedReturn', e.target.value)}
            required
          />
        </p>
        <p>
          <label>DURATION</label>
          <input
            type='number'
            value={state.duration}
            onChange={e => handleInput('duration', e.target.value)}
            required
          />
        </p>
      </div>
    </>
  );
}
