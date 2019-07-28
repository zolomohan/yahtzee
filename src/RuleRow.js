import React, { Component } from 'react';
import './RuleRow.css'

class RuleRow extends Component {
  render() {
    const {score, name, doScore} = this.props,
          disabled = score !== undefined;
    return (
      <tr 
        className={`RuleRow RuleRow-${(score === undefined) ? 'active' : 'disabled'}`} 
        onClick={disabled ? null : doScore}
      >
        <td className="RuleRow-name">{name}</td>
        <td className="RuleRow-score">{score}</td>
      </tr>
    )
  }
}

export default RuleRow;